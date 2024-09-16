---
sidebar_position: 3
---

# Fetch a Quote

Use the `fetchQuote` function to retrieve a real-time token swap quote.
If the input token is native, use the address `0x0000000000000000000000000000000000000000` for the `fromToken` field.

```typescript
import { fetchQuote } from '@orbs-network/liquidity-hub-sdk'

const quoteArgs = {
  fromToken: '0xTokenA', // Address of the input token
  toToken: '0xTokenB', // Address of the output token
  inAmount: '1000000000000000000', // Amount of input token in wei (e.g., 1 token)
  account: '0xYourWalletAddress', // Address of the user
  slippage: '0.5', // Slippage tolerance percentage
  chainId: 1, // network ID (mainnet in this case)
  partner: 'partnerName', // Partner name for analytics and tracking
  dexMinAmountOut: '1000000000000000000', // The minimum amount of output token that the dex router can guarantee
}

const quote = await fetchQuote(quoteArgs)
console.log('Fetched Quote:', quote)
```
