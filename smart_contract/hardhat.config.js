require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Gt7-ptTlC3eiVUoZV_AgDU0eT_SY6TNv',
      accounts: ['d8b559c3d649d66e5df816819eaeac8876a35cd1d841a80e6376559e2a24aa69'],
    },
  },
};