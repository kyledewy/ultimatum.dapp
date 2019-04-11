const path = require("path");

const HDWalletProvider = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
let infuraKey, mnemonic;
if (fs.existsSync('.key') && fs.existsSync('.secret')) {
    infuraKey = fs.readFileSync(".key").toString().trim();
    mnemonic = fs.readFileSync(".secret").toString().trim();
}


module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    contracts_build_directory: path.join(__dirname, "client/src/contracts"),

    networks: {
        // Useful for testing. The `development` name is special - truffle uses it by default
        // if it's defined here and no other network is specified at the command line.
        // You should run a client (like ganache-cli, geth or parity) in a separate terminal
        // tab if you use this network and you must also set the `host`, `port` and `network_id`
        // options below to some value.
        //
        development: {
            host: "127.0.0.1",     // Localhost (default: none)
            port: 8545,            // Standard Ethereum port (default: none)
            network_id: "*",       // Any network (default: none)
        },
        // Useful for deploying to a public network.
        // NB: It's important to wrap the provider as a function.
        // ropsten: {
        //     provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
        //     from: "0x501F53470E9C8AEa0DC06549EF0e4bA7103aa707",
        //     network_id: 3,       // Ropsten's id
        //     gas: 5500000,        // Ropsten has a lower block limit than mainnet
        //     confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        //     timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        //     skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
        // },
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/${infuraKey}`, 0),
            network_id: 4,       // Ropsten's id
            // gas: 5500000,        // Ropsten has a lower block limit than mainnet
            // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
            // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
            // skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
          }
    },
      // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.2",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
