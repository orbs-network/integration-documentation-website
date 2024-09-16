---
sidebar_position: 4
---

# Performing a Swap

Once you’ve obtained a quote, you can execute the swap using the `swap` function.
Make sure to provide a valid EconsIP712 signature of the quote.permitData as the second argument.
Make sure to approve allowance for the input token before calling the `swap` function, spender contract is
`0x000000000022D473030F116dDEE9F6B43aC78BA3`

```typescript
import { swap } from '@orbs-network/liquidity-hub-sdk'

const txHash = await swap(
  quote, // The quote obtained from `fetchQuote`
  'signature', // A valid EIP712 signature of the quote.permitData
  1 // Chain ID (Ethereum mainnet)
)

console.log('Transaction successful:', tx)
```
