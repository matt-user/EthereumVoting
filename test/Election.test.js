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
});