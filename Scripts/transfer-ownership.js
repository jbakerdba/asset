// ═══════════════════════════════════════════════════════════════
// Transfer QTNS Contract Ownership to New Wallet
// Run: npx hardhat run Scripts/transfer-ownership.js --network base
// ═══════════════════════════════════════════════════════════════
require('dotenv').config();
const { ethers } = require('hardhat');

const QTNS_CONTRACT = '0xCe67876c62Cf1ED829CE177c9463033e297540aC';
const NEW_OWNER     = '0xB5babeD27B57Ab3032ad558efc4E24fa0527B6f0';

async function main() {
    const [signer] = await ethers.getSigners();
    console.log('Current owner (signer):', signer.address);

    const qtns = await ethers.getContractAt('QTNS', QTNS_CONTRACT);

    const currentOwner = await qtns.owner();
    console.log('Contract owner on-chain:', currentOwner);

    if (currentOwner.toLowerCase() !== signer.address.toLowerCase()) {
        throw new Error('Signer is not the contract owner — cannot transfer');
    }

    console.log(`\nTransferring ownership to: ${NEW_OWNER}`);
    const tx = await qtns.transferOwnership(NEW_OWNER);
    console.log('TX sent:', tx.hash);

    await tx.wait();
    console.log('✅ Ownership transferred successfully!');
    console.log('New owner:', await qtns.owner());
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
