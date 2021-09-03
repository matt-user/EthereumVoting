import web3 from './web3';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
    ElectionFactory.abi,
    "0x1Ef9df9D262Eb8c5D77EE7068772c7210596834B"
);
export default instance;
