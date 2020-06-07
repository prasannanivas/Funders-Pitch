const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/campaignFactory.json");

const provider = new HDWalletProvider(
  "fatigue object already task craft alert bird gate slam control region kit",
  "https://rinkeby.infura.io/v3/02ef2f0f23be446193c58ebb0870e5db"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("attempting", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("contract ", result.options.address);
};
deploy();
