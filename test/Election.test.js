const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/ElectionFactory.json');
const compiledElection = require('../ethereum/build/Election.json');

let accounts;
let factory;
let electionAddress;
let election;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    // Deploy factory
    factory = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ from: accounts[0], gas: '3000000' });
    
    // Create election
    await factory.methods.createElection('Election 1').send({
        from: accounts[0],
        gas: '3000000'
    });

    // Get address of deployed election
    [electionAddress] = await factory.methods.getDeployedElections().call();
    election = await new web3.eth.Contract(
        compiledElection.abi,
        electionAddress
    );
});

describe('Elections', () => {
    it('deploys a factory and an election', () => {
        assert.ok(factory.options.address);
        assert.ok(election.options.address);
    });

    it('marks caller as the election manager', async () => {
        const manager = await election.methods.manager().call();
        assert.strictEqual(accounts[0], manager);
    });

    it('allows manager to add proposals to the election', async () => {
        await election.methods.addProposal('biden', 'democratic candidate')
            .send({ from: accounts[0], gas: '3000000' });
        const proposal = await election.methods.proposals(0).call();
        assert.strictEqual("biden", proposal.name);
    });

    it('requires that only the manager can add proposals', async () => {
        try {
            await election.methods.addProposal('invalid', 'should fail')
                .send({ from: accounts[1], gas: '3000000' });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('allows accounts to vote on an election', async () => {
        await election.methods.addProposal('biden', 'democratic candidate')
            .send({ from: accounts[0], gas: '3000000'});
        await election.methods.addProposal('trump', 'republican candidate')
            .send({ from: accounts[0], gas: '3000000'});

        await election.methods.vote(0)
            .send({ from: accounts[0], gas: '3000000'});
        await election.methods.vote(1)
            .send({ from: accounts[1], gas: '3000000'});
        await election.methods.vote(0)
            .send({ from: accounts[2], gas: '3000000'});

        const bidenProposal = await election.methods.proposals(0).call();
        assert.strictEqual('2', bidenProposal.voteCount);

        const trumpProposal = await election.methods.proposals(1).call();
        assert.strictEqual('1', trumpProposal.voteCount);
    });

    it('requires to vote that a user has not already voted', async () => {
        await election.methods.addProposal('biden', 'democratic candidate')
            .send({ from: accounts[0], gas: '3000000' });
        
        await election.methods.vote(0)
            .send({ from: accounts[0], gas: '3000000'});
        try {
            await election.methods.vote(0)
                .send({ from: accounts[0], gas: '3000000'});
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('processes the winner of the election', async () => {
        await election.methods.addProposal('biden', 'democratic candidate')
            .send({ from: accounts[0], gas: '3000000'});
        await election.methods.addProposal('trump', 'republican candidate')
            .send({ from: accounts[0], gas: '3000000'});

        await election.methods.vote(0)
            .send({ from: accounts[0], gas: '3000000'});
        await election.methods.vote(1)
            .send({ from: accounts[1], gas: '3000000'});
        await election.methods.vote(0)
            .send({ from: accounts[2], gas: '3000000'});

        const winner = await election.methods.pickWinner().call();
        assert.strictEqual('biden', winner);
    });

    it('requires at least one proposal received a vote', async () => {
        await election.methods.addProposal('biden', 'democratic candidate')
            .send({ from: accounts[0], gas: '3000000'});
        
        try {
            const winner = await election.methods.pickWinner().call();
            assert(false);
        } catch (err) {
            assert(err);
        }
    });
});