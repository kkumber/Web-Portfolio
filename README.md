# Software Engineering Portfolio

A professional showcase of production-grade systems, focusing on workflow engines, AI-integrated pipelines, and distributed microservices. This portfolio highlights technical architecture, state-driven logic, and full-stack implementation details.

## Core Competencies

*   **Architecture**: Distributed systems, microservices, and state-machine workflow engines.
*   **Frontend**: React, TypeScript, SvelteKit, and modern state management.
*   **Backend**: Laravel, Django REST Framework, FastAPI, and Node.js.
*   **Infrastructure**: Docker containerization, PostgreSQL, and cloud deployments.
*   **Specializations**: AI/LLM integration, PDF processing, and role-based access control (RBAC).

## Key Projects

### DocuSphere — Document Tracking System
A state-driven workflow engine designed to automate non-linear document routing.
*   **Core Challenge**: Ensuring approval integrity across complex departmental paths.
*   **Solution**: Implemented a state-machine in Laravel to validate transitions and maintain an immutable audit trail.
*   **Stack**: React, TypeScript, Laravel, PostgreSQL, Docker.

### Aralith — AI Learning Platform
An automated pipeline for converting raw documents into structured learning modules.
*   **Core Challenge**: Processing heavy text extraction tasks without blocking the main application thread.
*   **Solution**: Engineered a standalone FastAPI microservice to handle OCR and text cleaning as sidecar processes.
*   **Stack**: Laravel, React, FastAPI, Groq API, Tesseract OCR.

### VerifAI — On-Device AI Browser Extension
A privacy-focused Chrome extension for real-time text analysis.
*   **Core Challenge**: Performing high-performance AI inference without a backend server.
*   **Solution**: Leveraged the Window AI API and Google's Gemma model for entirely local execution.
*   **Stack**: JavaScript, Chrome Extension API (Manifest V3), Gemma AI.

## Technical Environment

The portfolio is built as a high-performance single-page application (SPA) focused on clean design and architectural clarity.

### Prerequisites
*   Node.js (v18.0 or higher)
*   npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kkumber/Web-Portfolio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Build and Deployment
To generate a production build:
```bash
npm run build
```
The project is configured for deployment via Vercel, utilizing Vite's optimized build pipeline.

## License
Distributed under the MIT License.
