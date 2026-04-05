# Trust Wallet Assets Submission
## Submit via GitHub PR at: https://github.com/trustwallet/assets

---

## What Trust Wallet Requires

The Trust Wallet assets repo expects this exact folder structure:

```
blockchains/
  base/
    assets/
      0x57260B877149CD12405d05fc94d2cFf6cfCAA575/
        logo.png     ← must be named exactly "logo.png", 256x256 PNG
        info.json    ← token metadata
```

---

## info.json Content (copy exactly)

```json
{
  "name": "QNTMENS Stablecoin",
  "symbol": "QTNS",
  "type": "ERC20",
  "decimals": 18,
  "description": "QNTMENS (QTNS) is a USD-pegged stablecoin on Base Mainnet powering AI trading, mining payouts, and benevolence fund distributions.",
  "website": "https://jbakerdba.github.io/asset/",
  "explorer": "https://basescan.org/token/0x57260B877149CD12405d05fc94d2cFf6cfCAA575",
  "status": "active",
  "id": "0x57260B877149CD12405d05fc94d2cFf6cfCAA575",
  "links": [
    { "name": "github",   "url": "https://github.com/jbakerdba/asset" },
    { "name": "explorer", "url": "https://basescan.org/token/0x57260B877149CD12405d05fc94d2cFf6cfCAA575" },
    { "name": "uniswap",  "url": "https://app.uniswap.org/swap?outputCurrency=0x57260B877149CD12405d05fc94d2cFf6cfCAA575&chain=base" },
    { "name": "email",    "url": "mailto:jbaker@dvn40.com" }
  ],
  "tags": ["stablecoin"]
}
```

---

## Step-by-Step PR Instructions

1. Go to https://github.com/trustwallet/assets
2. Click **Fork** (top right) — creates your own copy
3. In your fork, navigate to:
   `blockchains/base/assets/`
4. Create folder named exactly:
   `0x57260B877149CD12405d05fc94d2cFf6cfCAA575`
5. Upload two files into that folder:
   - `logo.png` → file is ready at: `trustwallet-assets/blockchains/base/assets/0x57260B877149CD12405d05fc94d2cFf6cfCAA575/logo.png`
   - `info.json` → file is ready at: `trustwallet-assets/blockchains/base/assets/0x57260B877149CD12405d05fc94d2cFf6cfCAA575/info.json`
6. Commit to your fork
7. Click **"Contribute" → "Open Pull Request"**
8. Title the PR:
   `Add QTNS token (Base) - 0x57260B877149CD12405d05fc94d2cFf6cfCAA575`

---

## Checklist Before Submitting PR
- [x] Folder name matches contract address exactly (checksum format)
- [ ] logo.png is exactly 256x256 pixels ← verify with image editor
- [x] logo.png is under 100KB
- [x] info.json is valid JSON
- [x] Contract is verified on BaseScan: https://basescan.org/address/0x57260B877149CD12405d05fc94d2cFf6cfCAA575#code
- [x] Uniswap V3 pool live: 0x47e3249Da67a54D5Aed709B390E8CEFc39928fCA

---

## Notes
- Trust Wallet PR review takes 1–3 weeks
- Once merged, logo shows in Trust Wallet app for ALL users holding QTNS on Base
- Also propagates to: Binance Web3 Wallet, various DeFi aggregators
