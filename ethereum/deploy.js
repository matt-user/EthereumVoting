// Deploy our smart contracts to an ethereum network
// Currently deploying to ropsten
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/ElectionFactory.json');

const provider = new HDWalletProvider(
    process.env.SECRET,
    process.env.INFURA_API
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(`Attempting to deploy from account ${account[0]}`);
    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ gas: '3000000', from: accounts[0], gasPrice: '5000000000' });
    console.log(`Contract deployed to ${result.options.address}`);
};
deploy();