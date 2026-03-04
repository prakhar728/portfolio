---
id: proj_nest
type: project
title: Nest – Optimistic Oracle on NEAR
stack: Rust, NEAR Protocol, TypeScript, Indexer
award: Winner – NEAR Innovation Main Track (Open Society)
year: 2026
github: https://github.com/prakhar728/nest
---
Designed and implemented a modular Optimistic Oracle on NEAR enabling bonded assertions, liveness windows, dispute escalation, and token-weighted resolution.

Built the full lifecycle flow: propose → challenge → dispute → DVM-style voting → economic settlement with slashing and reward redistribution.

Implemented NEST-token staking mechanics for economically secured voting, including voter rewards and penalties for incorrect participation.

Architected end-to-end system across smart contracts, an indexer (event ingestion + APIs), and UI for fast state visibility with onchain finality.

Built a prediction-market integration (Nest Markets) to demonstrate objective settlement using the oracle layer.
