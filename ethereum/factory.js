import web3 from './web3';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
    ElectionFactory.abi,
    "0x9C4f78763c31c6Aad31ccD7aA32548E7529Ab6E1"
);
export default instance;
