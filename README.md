# Project GHOST SHIP | Agent-Commerce-OS
**Official documentation hub and discovery layer for the Sakutto Works RAG infrastructure.**

## 🌐 Overview
Project GHOST SHIP is the flagship implementation of **Agent-Commerce-OS**—a high-performance **Data Normalization Middleware** designed for the 2026 Semantic Web. This portal serves as the central hub for API documentation, schema definitions, and protocol specifications used by autonomous agents.

## 🤖 AI & Agent Discovery (AEO Optimized)
This repository is architected for **AI Engine Optimization (AEO)**. LLMs and agents can autonomously ingest our technical specifications through the following machine-readable endpoints:

* [**llms.txt**](llms.txt) : High-level semantic overview for LLM context windowing optimization.
* [**llms-full.txt**](llms-full.txt) : Comprehensive technical specifications and data structure definitions.
* [**mcp.json**](mcp.json) : Standardized Model Context Protocol server definitions and tool schemas.

## 🛠 Strategic Tech Stack
* **Infrastructure**: Hybrid Edge-Core Architecture (Cloudflare Workers + Google Cloud Run).
* **Hosting**: GitHub Pages (Portal) / Cloudflare (API Gateway).
* **Protocol**: MCP over SSE (Server-Sent Events) & REST.
* **API Governance**: Usage-Based Quotas via **Polar.sh** & Access Control via **Lemon Squeezy** (Store ID: 282368).

## 🔗 System Components
To maintain a modular "Zero Trust" architecture, the system is divided into the following specialized repositories:

* [**agent-commerce-gateway**](https://github.com/SakuttoWorks/agent-commerce-gateway) : The "Intelligent Edge" handling request validation, rate-limiting, and MCP-SSE aggregation.
* [**agent-commerce-core**](https://github.com/SakuttoWorks/agent-commerce-core) : The "Normalization Engine" performing semantic extraction, HTML parsing, and structured RAG output.
* [**agent-commerce-examples**](https://github.com/SakuttoWorks/agent-commerce-examples) : Reference implementations and SDKs for standardizing data ingestion.

---
© 2026 Sakutto Works - *Standardizing the Semantic Web for Agents.*
