---
id: proj_cryotoxi
type: project
title: CryotoXI – Decentralized Fantasy Cricket on Flare
stack: Solidity, Foundry, Flare FDC, TypeScript
year: 2024
github: https://github.com/prakhar728/CryotoXI
---
Built a decentralized fantasy cricket platform on Flare Network using Flare's Data Connector (FDC) to bring real-world cricket scores on-chain in a tamper-proof, verifiable manner.

Users create contests, submit fantasy teams (captain/vice-captain), and receive prize distributions based on verified player performance via on-chain Merkle proof attestation from Flare's enshrined data protocols.

Smart contract architecture: ContestFactory (contest management + prize distribution), ScoringEngine (fantasy point calculations), FDCDataConsumer (Flare Data Connector integration). Deployed on Flare Coston2 testnet.
