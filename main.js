const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('b566f42ebf3160c9d470f2b6805d2133b1b3e967673e278f32bd1c455334085f')
const myWallet = myKey.getPublic('hex');

let vnarCoin = new Blockchain();

const tx1 = new Transaction(myWallet, 'AnotherPubicKey', 10)
tx1.signTransaction(myKey);
vnarCoin.addTransaction(tx1);

// console.log('Starting the miner...');
// vnarCoin.minePendingTransactions(myWallet)
// console.log(vnarCoin.getBalanceOfAdress(myWallet)) 

// vnarCoin.createTransaction(new Transaction('valer', 'ashot',420));
// vnarCoin.createTransaction(new Transaction('ashot', 'valer',100));
console.log('Starting the miner again...');
vnarCoin.minePendingTransactions(myWallet)
console.log(vnarCoin.getBalanceOfAdress(myWallet))


// console.log("Block 1 mining...");
// vnarCoin.addBlock(new Block(1, "19/06/2022", "Test1", {amount: 4}));
// console.log("Block 2 mining...");
// vnarCoin.addBlock(new Block(2, "19/06/2022", "Test2", {amount: 3}));
// console.log("Block 3 mining...");
// vnarCoin.addBlock(new Block(3, "19/06/2022", "Test3", {amount: 5}));
//console.log(`Is valid?:  ${vnarCoin.isChainValid()}`)
//console.log(JSON.stringify(vnarCoin, null, 4));