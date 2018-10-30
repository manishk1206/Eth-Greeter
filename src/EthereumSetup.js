import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("https://localhost:8545"));
let greeterABI = [{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];
let greeterAddress = '0xf9bb60c5d67696aeb839dca4e05bd123415e4c1f';
const greeterContract = web3.eth.contract(greeterABI).at(greeterAddress);
export{greeterContract};
