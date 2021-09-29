const Dai = artifacts.require('Dai');
const DefiZoo = artifacts.require('DefiZoo');

module.exports = async function (deployer, _networks, accounts) {
  await deployer.deploy(Dai);
  const dai = await Dai.deployed();
  await deployer.deploy(DefiZoo, dai.address);
  const defiZoo = await DefiZoo.deployed();
  await dai.faucet(defiZoo.address, 100);
  await defiZoo.test(accounts[1], 100);

  const balance0 = await dai.balanceOf(defiZoo.address);
  const balance1 = await dai.balanceOf(accounts[1]);
  console.log(balance0.toString());
  console.log(balance1.toString());
};
