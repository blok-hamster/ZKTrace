const hre = require("hardhat");

const hubAdmin = "0x23142e15b262d787344671c4b079a0510c682527";
//const hubAdmin = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

async function main() {
  // import Contracts
  const TraceAgreement = await hre.ethers.getContractFactory("TraceAgreement");
  const TraceHub = await hre.ethers.getContractFactory("TraceHub");
  const TraceFactroy = await hre.ethers.getContractFactory(
    "TraceAgreementFactory"
  );

  // deploy contracts
  const traceAgreementImplimentation = await TraceAgreement.deploy();

  const traceHub = await TraceHub.deploy(hubAdmin);

  const traceFactory = await TraceFactroy.deploy(
    traceHub.address,
    traceAgreementImplimentation.address
  );

  const tx = await traceHub.addFactory(traceFactory.address);
  await tx.wait();

  const addresses = {
    traceFactoryAddress: {
      eipAddress: traceFactory.address,
    },
    traceHubAddress: {
      eipAddress: traceHub.address,
    },
    traceImplimentationAddress: {
      eipAddress: traceAgreementImplimentation.address,
    },
  };

  console.log(addresses);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const newDeployment = {
  traceFactoryAddress: {
    eipAddress: "0xf8dd0335000281e31d7586472802F73E0ba2aC30",
  },
  traceHubAddress: { eipAddress: "0x35DB2D1D541eE75cBACe4aC906368cd8E949a41F" },
  traceImplimentationAddress: {
    eipAddress: "0x98AC2912B3da522d81135a6Facb04319341B01d5",
  },
};
