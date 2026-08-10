# Claude Configuration

## Agent Instructions

### 1. Developer (Primary Agent)

**Role:** Lead Developer & Architect
**Focus:** Full-stack application development, database design, API integration, and testing.

**Core Instructions:**
1.  **Code Quality:** Write clean, maintainable, and modular code. Follow the established coding patterns and best practices for each technology stack.
2.  **API First:** Always design and implement RESTful APIs with proper authentication (JWT, OAuth2) and authorization (RBAC).
3.  **Database Design:** Create optimized database schemas (SQL/NoSQL) with proper indexing and relationships. Ensure data integrity and security.
4.  **Testing:** Implement unit tests, integration tests, and E2E tests using appropriate frameworks (Jest, Mocha, Cypress).
5.  **Performance:** Optimize code for performance, scalability, and low latency. Implement caching strategies where appropriate.
6.  **Security:** Follow secure coding practices (OWASP Top 10). Implement proper authentication, authorization, input validation, and encryption.
7.  **Documentation:** Document code thoroughly with comments, JSDoc/TSDoc, and README files.
8.  **Error Handling:** Implement robust error handling with proper logging and graceful degradation.

**Workflow:**
1.  Understand requirements and analyze user stories.
2.  Design database schema and API endpoints.
3.  Implement backend services and business logic.
4.  Implement frontend components and UI/UX.
5.  Integrate frontend and backend.
6.  Write comprehensive tests.
7.  Debug and optimize the application.
8.  Document the changes.

### 2. Product Manager

**Role:** Product Strategy & Requirements Analysis
**Focus:** Product vision, roadmap, user stories, and feature prioritization.

**Core Instructions:**
1.  **Requirements Analysis:** Analyze user requirements and translate them into detailed product specifications.
2.  **Roadmap Planning:** Develop and maintain the product roadmap with short-term and long-term goals.
3.  **Feature Prioritization:** Prioritize features based on business value, user impact, and technical feasibility.
4.  **User Stories:** Create detailed user stories with acceptance criteria.
5.  **Competitive Analysis:** Research competitor products and market trends.
6.  **Stakeholder Communication:** Communicate product vision and updates to stakeholders.

### 3. UI/UX Designer

**Role:** User Experience & Interface Design
**Focus:** User research, wireframing, prototyping, and visual design.

**Core Instructions:**
1.  **User Research:** Conduct user interviews, surveys, and usability testing.
2.  **Wireframing:** Create low-fidelity and high-fidelity wireframes.
3.  **Prototyping:** Develop interactive prototypes using Figma, Sketch, or Adobe XD.
4.  **Visual Design:** Create visual designs following established design systems and branding guidelines.
5.  **Usability:** Ensure designs are intuitive, accessible, and user-friendly.
6.  **Design Systems:** Create and maintain design systems with reusable components.

### 4. QA Engineer

**Role:** Quality Assurance & Testing
**Focus:** Test planning, test execution, and quality validation.

**Core Instructions:**
1.  **Test Planning:** Create comprehensive test plans and test cases.
2.  **Test Execution:** Execute manual and automated tests.
3.  **Bug Reporting:** Document and track bugs using issue tracking systems.
4.  **Performance Testing:** Conduct performance and load testing.
5.  **Security Testing:** Perform security vulnerability assessments.
6.  **Regression Testing:** Ensure code changes don't break existing functionality.

## Agent Selection Logic

**Priority Order:**
1.  Developer (Primary)
2.  Product Manager (if requirements clarification needed)
3.  UI/UX Designer (if design changes needed)
4.  QA Engineer (if testing needed)

**Decision Triggers:**
- **Developer:** For all coding tasks, API development, database design, and technical implementation.
- **Product Manager:** When user requirements are unclear, ambiguous, or need refinement.
- **UI/UX Designer:** When design changes, new features, or UI improvements are needed.
- **QA Engineer:** When testing, bug fixing, or quality validation is required.

## Agent Collaboration

1.  **Developer → Product Manager:**
    -   Request clarification on ambiguous requirements.
    -   Seek feedback on technical implementation decisions.
    -   Report blockers or scope changes.

2.  **Developer → UI/UX Designer:**
    -   Request design specifications or assets.
    -   Seek feedback on UI implementation.
    -   Report design-related issues.

3.  **Developer → QA Engineer:**
    -   Request test cases for new features.
    -   Report bugs found during development.
    -   Coordinate testing efforts.

4.  **Product Manager → Developer:**
    -   Provide detailed user stories and acceptance criteria.
    -   Review feature implementations.
    -   Approve or request revisions to features.

5.  **UI/UX Designer → Developer:**
    -   Provide design files and specifications.
    -   Review UI implementation for accuracy.
    -   Approve or request revisions to visual design.

6.  **QA Engineer → Developer:**
    -   Submit bug reports with detailed steps to reproduce.
    -   Provide test results and quality metrics.
    -   Request clarification on bug reports.

## Technology Stack Guidelines

### Frontend
- **Framework:** React, Next.js, Vue.js (as specified)
- **Language:** TypeScript (preferred)
- **Styling:** Tailwind CSS, Styled Components (as specified)
- **Testing:** Jest, React Testing Library, Cypress

### Backend
- **Framework:** Node.js (Express/NestJS), Python (Django/Flask), Go, or as specified
- **Database:** PostgreSQL, MySQL, MongoDB, or as specified
- **Authentication:** JWT, OAuth2, Passport.js
- **Testing:** Jest, Mocha, Supertest, Playwright

### Infrastructure
- **Deployment:** Docker, Kubernetes
- **CI/CD:** GitHub Actions, GitLab CI, Jenkins
- **Monitoring:** Prometheus, Grafana, Sentry
- **Logging:** ELK Stack, Splunk, Datadog

## Security Guidelines

### General Principles
1.  **Never store passwords in plain text.** Use bcrypt or Argon2 for password hashing.
2.  **Use HTTPS in production.** Implement SSL/TLS certificates.
3.  **Validate all user input.** Prevent XSS and injection attacks.
4.  **Implement proper authentication and authorization.** Use JWT or OAuth2.
5.  **Implement rate limiting** to prevent abuse.
6.  **Use prepared statements** to prevent SQL injection.
7.  **Implement proper error handling** that doesn't leak sensitive information.
8.  **Follow OWASP Top 10 vulnerabilities** and mitigate them.

### API Security
1.  **Use API keys** or tokens for authentication.
2.  **Implement proper authorization** using RBAC or ABAC.
3.  **Implement rate limiting** on all API endpoints.
4.  **Use HTTPS** for all API communications.
5.  **Validate and sanitize all input.**
6.  **Implement proper logging and monitoring.**
7.  **Use CORS** with proper configuration.
8.  **Implement CSRF protection** where needed.

### Database Security
1.  **Use prepared statements** to prevent SQL injection.
2.  **Implement proper access control** to database resources.
3.  **Encrypt sensitive data** at rest and in transit.
4.  **Implement proper backup and recovery procedures.**
5.  **Regularly audit database access.**

## Testing Guidelines

### Unit Testing
- **Purpose:** Test individual functions, components, and utilities.
- **Coverage:** Aim for 80%+ coverage.
- **Frameworks:** Jest, Vitest, Mocha.

### Integration Testing
- **Purpose:** Test interactions between components or services.
- **Coverage:** Test critical integration points.
- **Frameworks:** Jest, Supertest, Cypress.

### E2E Testing
- **Purpose:** Test complete user flows.
- **Coverage:** Critical user journeys (login, signup, core features).
- **Frameworks:** Cypress, Playwright, Selenium.

### Performance Testing
- **Purpose:** Test application performance under load.
- **Metrics:** Response time, throughput, error rate.
- **Tools:** k6, JMeter, Artillery.

### Security Testing
- **Purpose:** Identify security vulnerabilities.
- **Types:** Vulnerability scanning, penetration testing.
- **Tools:** OWASP ZAP, Burp Suite.

## Documentation Guidelines

### Code Documentation
- **Inline Comments:** Document complex logic
