import web3 from './web3';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
    ElectionFactory.abi,
    "0xebEB03Dd3B0fcDf369d56f093E9f44dcf2cE8090"
);
export default instance;
