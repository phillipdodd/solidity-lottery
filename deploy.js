require('dotenv').load();
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    process.env.PNEUMONIC,
    process.env.RINKEBY_URL
);

const web3 = new Web3(provider);
const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
    } catch (e) {
        console.log(e);
    }
    console.log('Attempting to deploy from account ' + accounts[0]);

    try {
        const result = await new web4.eth.Contract(JSON.parse(interface))
            .deploy({ data: bytecode })
            .send({ gas: '1000000', from: accounts[0] });
    } catch (e) {
        console.log(e)
    }
    

    console.log(interface);
    console.log('Contract deployed to ', result.options.address);
}
deploy();