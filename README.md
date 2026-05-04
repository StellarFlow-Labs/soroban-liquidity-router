# Soroban Liquidity Router

> A smart routing engine for decentralized exchanges (DEXs) on the Stellar network.

[![CI/CD Pipeline](https://github.com/StellarFlow-Labs/soroban-liquidity-router/actions/workflows/ci.yml/badge.svg)](https://github.com/StellarFlow-Labs/soroban-liquidity-router/actions)
[![Built with Soroban](https://img.shields.io/badge/Built_with-Soroban-blue.svg)](https://soroban.stellar.org/)

## The Vision
As the Stellar ecosystem grows and more Automated Market Makers (AMMs) like Soroswap and Phoenix launch on Soroban, liquidity becomes fragmented. The **Soroban Liquidity Router** acts as a unified entry point, aiming to find the most efficient routing paths across multiple pools to minimize user slippage.

This project is currently in its "V1 Minimum Viable Scaffold" stage, designed specifically for open-source community contributions via the Drips funding program.

## Architecture (Monorepo)
This repository is managed using [Turborepo](https://turbo.build/repo/docs) for lightning-fast, cached builds across the stack.

*   `packages/contracts` (Rust): The on-chain routing interface. Currently mocks single-hop swaps.
*   `packages/sdk` (TypeScript): A developer-friendly wrapper for interacting with the smart contracts.
*   `packages/frontend` (Next.js): A minimal swap interface demonstrating the SDK.

## Quick Start

### Prerequisites
*   Node.js (v20+)
*   Rust (v1.85+)
*   Soroban CLI

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/StellarFlow-Labs/soroban-liquidity-router.git](https://github.com/StellarFlow-Labs/soroban-liquidity-router.git)
   cd soroban-liquidity-router
   ```
2. Install dependencies (this will link the workspaces):
    ```bash
    npm install
    ```
3. Run the development server (Frontend + SDK watch):
    ```bash
    npm run dev
    ```
4. Build the entire monorepo (including Rust contracts):
    ```bash
    npm run build
    ```
## Contributing
We welcome contributions from the community! This project is deliberately scaffolded to provide meaningful "Good First Issues" for developers looking to get involved in the Stellar ecosystem. Please see our CONTRIBUTING.md for guidelines.

## License
MIT