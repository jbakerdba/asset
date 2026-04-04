# Trust Wallet Assets Submission
## Submit via GitHub PR at: https://github.com/trustwallet/assets

---

## What Trust Wallet Requires

The Trust Wallet assets repo expects this exact folder structure:

```
blockchains/
  base/
    assets/
      0xCe67876c62Cf1ED829CE177c9463033e297540aC/
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
  "explorer": "https://basescan.org/token/0xCe67876c62Cf1ED829CE177c9463033e297540aC",
  "status": "active",
  "id": "0xCe67876c62Cf1ED829CE177c9463033e297540aC",
  "links": [
    { "name": "github", "url": "https://github.com/jbakerdba/asset" },
    { "name": "email", "url": "mailto:jbaker@dvn40.com" }
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
   `0xCe67876c62Cf1ED829CE177c9463033e297540aC`
5. Upload two files into that folder:
   - `logo.png` → use qtns-logo.png (rename it to logo.png)
   - `info.json` → paste the JSON above
6. Commit to your fork
7. Click **"Contribute" → "Open Pull Request"**
8. Title the PR:
   `Add QTNS token (Base) - 0xCe67876c62Cf1ED829CE177c9463033e297540aC`

---

## Checklist Before Submitting PR
- [ ] Folder name matches contract address exactly (checksum format)
- [ ] logo.png is exactly 256x256 pixels
- [ ] logo.png is under 100KB ✅ (77KB)
- [ ] info.json is valid JSON (no trailing commas)
- [ ] Contract address is checksummed (starts with 0x5E1DAa...)
- [ ] Token is verified on BaseScan

---

## Notes
- Trust Wallet PR review takes 1–3 weeks
- Once merged, logo shows in Trust Wallet app for ALL users holding QTNS on Base
- Also propagates to: Binance Web3 Wallet, various DeFi aggregators
