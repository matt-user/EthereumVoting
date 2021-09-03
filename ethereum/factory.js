import web3 from './web3';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
    ElectionFactory.abi,
    "0x2505abF02FD3e1CeA36930cbc6846cdB7cb74E82"
);
export default instance;
