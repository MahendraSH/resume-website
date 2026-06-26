#set page(
  paper: "us-letter",
  margin: (x: 1.25cm, y: 1cm),
)
#set text(
  font: "Helvetica",
  size: 8.5pt,
  fill: rgb("#18181b"),
)
#set par(
  leading: 0.5em,
  justify: true,
)
#set list(
  marker: ([•],),
  spacing: 3.5pt,
)

#show heading: set block(above: 1.1em, below: 0.5em)

#align(center)[
  #text(size: 16pt, weight: "bold")[Mahendra S H] \
  #v(0.5mm)
  #text(size: 10pt, weight: "medium", fill: rgb("#2563eb"))[Full-Stack Engineer (Remote-Ready)] \
  #v(0.5mm)
  #text(size: 8pt)[
    Karnataka, India (Open to Global Remote / Timezone Flexible) | +91-7892041114 | mahendrashongunti\@gmail.com \
    mahendrash.vercel.app | linkedin.com/in/mahendra-s-h-14a74721a | github.com/MahendraSH
  ]
]

#v(0.5mm)
#line(length: 100%, stroke: 0.5pt + rgb("#d4d4d8"))
#v(0.5mm)

== Professional Summary
- *Remote-Ready Full-Stack Engineer* with nearly 2 years of professional experience designing, developing, and maintaining scalable web applications and backend systems.
- *Autonomy & Collaboration*: Strong track record in remote-first and hybrid teams; highly self-motivated with excellent written communication, asynchronous coordination (Git, Jira, Slack), and comprehensive technical documentation.
- *Backend & Systems*: Proficient in Java/Spring Boot, Node.js/Express, database design (PostgreSQL, MySQL), event-driven microservices (AWS SQS, Camunda), and automated high-throughput pipelines (Spring Batch).
- *Frontend & UI/UX*: Experienced in building highly interactive, responsive user interfaces with React.js, Next.js, and Astro, utilizing Tailwind CSS, TypeScript, and modern state-management libraries.

== Technical Skills
- *Languages*: Java, JavaScript, TypeScript, SQL, HTML/CSS
- *Frameworks & Libs*: React.js, Next.js, Spring Boot, Spring Batch, Astro, Express.js, Recharts, TanStack Table
- *Enterprise Platforms*: ServiceNow (SDK, GlideRecord, Business Rules, Client Scripts, Script Includes, Workflows)
- *Databases & ORM*: PostgreSQL, MySQL, MongoDB, Prisma
- *Tools & DevOps*: AWS SQS, Camunda BPM, Git, GitHub, RESTful APIs, JWT, Cloudinary, Tailwind CSS, Shadcn UI

== Work Experience

#grid(
  columns: (1fr, auto),
  [*Infosys* --- Software Engineer (Specialist Programmer)], [Jul 2024 -- Jun 2026]
)
#v(0.2mm)
_Specialist Programmer (Hybrid / Remote-Flexible) --- Hyderabad, India_
#v(0.2mm)
- *Cargo Readiness (CMA-CGM Project)*: Architected and engineered an event-driven container readiness assessment microservices backend using Java 21, Spring Boot, and PostgreSQL.
- Integrated AWS SQS queues and Camunda BPM for reliable workflow orchestration, reducing manual verification overhead by 35% for global operations.
- Automated daily end-date validations by writing Spring Batch jobs, handling 50k+ active booking checks concurrently with optimized transactional boundaries.
- Designed a real-time React dashboard with TanStack Query and TanStack Table, boosting administrative decision-making speeds.
- Optimized PostgreSQL database indexing and query layouts, reducing API response latency by 20%.
- Championed *asynchronous collaboration* and remote handoffs; maintained detailed technical documentation, API specifications, and led PR code reviews on GitHub.

#v(1mm)
#grid(
  columns: (1fr, auto),
  [*Merav Infotech* --- Software Engineering Intern], [Feb 2024 -- May 2024]
)
#v(0.2mm)
_Software Engineering Intern (Remote-First) --- Karnataka, India_
#v(0.2mm)
- Engineered reusable React.js UI modules and streamlined state management for a remote-first development team.
- Collaborated asynchronously to integrate RESTful endpoints, cutting initial page load times by 15% via route-level code splitting and image optimizations.
- Utilized Git, Slack, and Jira to participate in async daily standups and sprint planning, demonstrating high autonomy and reliable task estimation.

== Key Projects

*Access Management System (ServiceNow)* --- _ServiceNow SDK, TypeScript, GlideRecord, Workflows_ \
- Engineered a secure Access Management application in ServiceNow using a pro-code approach with the ServiceNow SDK and TypeScript. Configured custom tables and GlideRecord-based scripts, reducing access grant overhead by 40%.

#v(0.5mm)
*SpendOptima* --- _Next.js, React, Tailwind CSS, Recharts, TypeScript_ \
- Built a premium personal finance tracking and expense optimization dashboard. Designed responsive client dashboards with interactive statistics using Recharts, allowing users to analyze spending habits.

#v(0.5mm)
*SaaS Form Builder Platform* --- _Next.js, React, Node.js, Express, PostgreSQL_ \
- Built a full-stack, no-code SaaS form builder allowing users to create and customize dynamic forms. Created a lightweight embeddable script integration package enabling external websites to render forms dynamically.

#v(0.5mm)
*Shadcn UI Table Generator* --- _Astro, React, TypeScript, TanStack Table v8, Shadcn UI_ \
- Published an open-source developer tool that scaffolds fully-typed TanStack Table v8 columns and Shadcn UI components from JSON or OpenAPI/Swagger specs, reducing boilerplate table setup time by 80%.

== Education
#grid(
  columns: (1fr, auto),
  [*National Institute of Engineering (NIE)* --- B.Tech in CSE], [Graduated: May 2024]
)
#v(0.2mm)
_Grade: 7.3 / 10 CGPA | Coursework: Data Structures, Database Systems, Software Engineering --- Mysore, India_
