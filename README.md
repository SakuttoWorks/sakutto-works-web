# Project GHOST SHIP | Agent-Commerce-OS
**Official landing page and AI-discovery layer for the Sakutto Works ecosystem.**

## 🌐 Overview
Project GHOST SHIP is the flagship implementation of **Agent-Commerce-OS**—a high-performance MCP (Model Context Protocol) gateway designed for the 2026 autonomous agent economy. This portal serves as the central hub for documentation, discovery assets, and protocol specifications.

## 🤖 AI & Agent Discovery (AEO Optimized)
This repository is architected for **AI Engine Optimization (AEO)**. Agents can autonomously ingest our technical specifications through the following machine-readable endpoints:

* [**llms.txt**](llms.txt) : High-level semantic overview for LLM context windowing.
* [**llms-full.txt**](llms-full.txt) : Comprehensive technical specifications and integration deep-dives.
* [**mcp.json**](mcp.json) : Standardized Model Context Protocol server definitions and tool schemas.

## 🛠 Strategic Tech Stack
* **Infrastructure**: Hybrid Edge-Core Architecture (Cloudflare Workers + Google Cloud Run).
* **Hosting**: GitHub Pages (Portal) / Cloudflare (API Gateway).
* **Protocol**: MCP over SSE (Server-Sent Events).
* **Monetization**: Metered Billing via **Polar.sh** & **Lemon Squeezy** (Store ID: 282368).

## 🔗 System Components
To maintain a modular "Zero Trust" architecture, the system is divided into the following specialized repositories:

* [**agent-commerce-gateway**](https://github.com/SakuttoWorks/agent-commerce-gateway) : The "Intelligent Edge" handling authentication, rate-limiting, and MCP-SSE aggregation.
* [**agent-commerce-core**](https://github.com/SakuttoWorks/agent-commerce-core) : The "Agentic Factory" performing heavy compute, deep research, and structured RAG output.
* [**agent-commerce-examples**](https://github.com/SakuttoWorks/agent-commerce-examples) : Reference implementations and SDKs for A2A (Agent-to-Agent) integration.

---
© 2026 Sakutto Works - *Enabling the Autonomy of Tomorrow.*
