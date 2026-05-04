# Contributing to StellarFlow Labs

Welcome! We are thrilled you want to contribute to the Soroban Liquidity Router.

This project was built with the explicit goal of fostering open-source development within the Stellar ecosystem. We have intentionally left several core features unimplemented so that developers like you can tackle them as "Good First Issues."

## How to Contribute

1.  **Find an Issue:** Browse our GitHub Issues. Look for tags like `good first issue`, `rust`, `frontend`, or `sdk`.
2.  **Fork and Branch:** Fork the repository and create a feature branch (`git checkout -b feat/your-feature`).
3.  **Code:** Implement your solution. Please try to adhere to existing code styles.
4.  **Test:** Ensure your changes build successfully using `npm run build` from the root.
5.  **Submit a PR:** Open a Pull Request! A maintainer will review your code.

## Key Areas Needing Contribution
*   **Smart Contracts (`packages/contracts`):** The current `swap` function is a mock. We need implementations for multi-hop pathfinding and cross-contract calls to actual AMMs (like Soroswap).
*   **SDK (`packages/sdk`):** The `findBestRoute` method currently returns hardcoded data. We need a robust algorithm to query on-chain data and calculate the optimal path.
*   **Frontend (`packages/frontend`):** The UI needs to be wired up to Freighter wallet and accurately reflect the data returned by the SDK.

Thank you for helping build the future of DeFi on Stellar!