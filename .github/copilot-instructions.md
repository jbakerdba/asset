# Copilot Instructions for QNTMENS Codebase

## Overview
QNTMENS is a multi-service platform for mining, trading, payout management, and benevolence operations. The system is composed of several Node.js backend services, static dashboards, and admin UIs, with deployment targeting Linux servers using systemd and nginx for reverse proxying and TLS.

## Architecture & Key Components
- **Dashboards**: Main UIs are in `qntmens-main-dashboard.html`, `admin-dashboard.html`, `budget-management-dashboard.html`, and `benevolence-payout-dashboard.html`. Each dashboard serves a distinct business area (admin, budget, benevolence, etc.).
- **Backend Services**: Node.js scripts like `dashboard-server.js`, `benevolence-payout-service.js`, `business-payout-service.js`, and others provide API endpoints and business logic. Each service typically runs on its own port and is managed by systemd in production.
- **Data Flow**: Dashboards interact with backend services via REST APIs (see `admin-dashboard.js` for API_BASE logic). Benevolence payouts are orchestrated by `benevolence-payout-service.js` and logged in JSON files (see `benevolence-data.json`).
- **Deployment**: Use the scripts and configs in `deploy/` for production. Static files are served by nginx; Node.js services are managed by systemd. See `deploy/README.md` and `deploy/nginx/README.md` for details.

## Developer Workflows
- **Start Local Dashboard**: Run `dashboard-server.js` (Node.js, default port 5000) to serve the admin dashboard locally.
- **Service Management**: Each backend service can be started independently (e.g., `node benevolence-payout-service.js`).
- **Production Deploy**: Use `deploy/bootstrap/linux-bootstrap.sh` for automated setup on Linux, or follow manual steps in `deploy/README.md`.
- **Static UI**: Dashboards are static HTML/CSS/JS; no build step is required unless you add a bundler.

## Project Conventions & Patterns
- **API Base**: Dashboards auto-detect API base using `window.location.origin` or a global override (`window.__API_BASE`).
- **Session Management**: Admin dashboard uses localStorage for session tokens (see `admin-dashboard.js`).
- **Payout Flows**: Benevolence payouts support multiple methods (crypto, Stripe debit, ACH, wire). See `BENEVOLENCE-ARCHITECTURE.md` for diagrams and data flows.
- **Audit Logging**: All payout actions are logged in JSON files for traceability.
- **No CSS Preprocessors**: All styles are inline in HTML files; no SASS/LESS.

## Integration Points
- **Stripe**: Used for debit card and ACH payouts (see `benevolence-payout-service.js`).
- **Web3.js**: Used for crypto payouts.
- **nginx**: Proxies API and AI service endpoints; serves static dashboards.
- **Systemd**: Manages Node.js services in production.

## Examples
- To add a new payout method, extend `benevolence-payout-service.js` and update the dashboard UI.
- To change API endpoints, update the relevant dashboard JS and backend service.
- For new deployments, see `deploy/README.md` and `deploy/nginx/README.md`.

## References
- `BENEVOLENCE-ARCHITECTURE.md`: Full payout flow diagrams and schema.
- `deploy/README.md`, `deploy/nginx/README.md`: Deployment and server setup.
- `admin-dashboard.js`, `dashboard-server.js`: Main admin UI and server logic.
- `benevolence-payout-service.js`: Payout orchestration and audit logging.

---
For questions or unclear areas, check the referenced files or ask for clarification to keep this guide up to date.