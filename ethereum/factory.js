import web3 from './web3';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
    ElectionFactory.abi,
    "0xc05C8C9D0b88D403482DfDCE2e845e77F2ab059b"
);
export default instance;
