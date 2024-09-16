---
sidebar_position: 5
---

# Fetching Transaction Details After a Swap

Once a swap is completed, you can fetch the transaction details using the `getTxDetails` function. This will check the transaction status on-chain and return the details if the transaction has been successfully mined.

```typescript
import { getTxDetails } from '@orbs-network/liquidity-hub-sdk'

// Example usage
const txHash = '0xYourTransactionHash' // Replace with your actual transaction hash
const chainId = 1

try {
  const txDetails = await getTxDetails(txHash, chainId, quote)

  // Destructure the response to extract the fields
  const { status, exactOutAmount, gasCharges } = txDetails

  if (status.toLowerCase() === 'mined') {
    console.log('Transaction mined successfully!')
    console.log('Exact Output Amount:', exactOutAmount)
    console.log('Gas Charges:', gasCharges)
  } else {
    console.log('Transaction status:', status)
  }
} catch (error) {
  console.error('Error fetching transaction details:', error.message)
}
```
