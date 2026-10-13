const hre = require("hardhat");

async function main() {
  const DominionDAO = await hre.ethers.getContractFactory("DominionDAO");
  const dominionDao = await DominionDAO.deploy();

  await dominionDao.deployed();

  console.log("DominionDAO deployed to:", dominionDao.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
