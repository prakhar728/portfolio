---
id: proj_smol_bet
type: project
title: Smol Bet – Agentic Cross-Chain Betting Protocol
stack: NEAR, Shade Agents, Chain Signatures, Solidity, TypeScript, Next.js
award: Winner – Proximity Hackathon (1st Track); NEAR Protocol Rewards ($20K, 2-month program)
year: 2025
github: https://github.com/prakhar728/Smol_bet
---
Built an agentic betting protocol converting social posts (X/Twitter) into verifiable onchain wagers without custodians.

Leveraged NEAR Shade Agents (TEE-backed execution + key management) to detect bets, parse terms via NLP, and orchestrate escrow flows.

Implemented non-custodial multichain escrow using NEAR Chain Signatures, enabling deposits from Base and Aurora with unified settlement on NEAR.

Designed AI-driven resolution pipeline for automated outcome verification and payout execution.

EVM escrow contract (Solidity/Foundry, Base Sepolia) features reentrancy protection, 7-day timeout cancellation, and EIP-712 mutual-agreement resolution. NEAR storage contract (Rust) manages bet lifecycle state. Next.js frontend with Framer Motion and shadcn/ui.
