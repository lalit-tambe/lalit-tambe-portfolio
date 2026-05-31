import { FileNode } from './types';
import { PROFILE_PICTURE_B64 } from './assets';

export const FILE_TREE: FileNode[] = [
  {
    id: 'src',
    name: 'src',
    type: 'folder',
    children: [
      {
        id: 'src/experience',
        name: 'experience',
        type: 'folder',
        children: [
          { id: 'src/experience/experience.py', name: 'experience.py', type: 'file', language: 'python' },
        ],
      },
      {
        id: 'src/projects',
        name: 'projects',
        type: 'folder',
        children: [
          { id: 'src/projects/mongo-aggregate.ts', name: 'mongo-aggregate.ts', type: 'file', language: 'typescript' },
        ],
      },
      {
        id: 'src/skills',
        name: 'skills',
        type: 'folder',
        children: [
          { id: 'src/skills/backend.json', name: 'backend.json', type: 'file', language: 'json' },
          { id: 'src/skills/frontend.json', name: 'frontend.json', type: 'file', language: 'json' },
          { id: 'src/skills/tools.json', name: 'tools.json', type: 'file', language: 'json' },
        ],
      },
    ],
  },
  { id: 'README.md', name: 'README.md', type: 'file', language: 'markdown' },
  { id: 'contact.html', name: 'contact.html', type: 'file', language: 'html' },
  { id: 'package.json', name: 'package.json', type: 'file', language: 'json' },
];

export const FILE_CONTENT: Record<string, string> = {
  'README.md': `<div class="readme-content-wrapper">
   <h2>Lalit Tambe</h2>
<span class="subtitle">Full Stack Engineer Architecting Scalable SaaS & Data-Intensive Applications</span>

<div class="readme-main-content">
  <div class="welcome-banner-wrapper">
    <div class="welcome-banner">
        <p>Hi, I'm a results-driven Full Stack Engineer with 5+ years of experience specializing in architecting high-impact, scalable solutions. My passion lies in translating complex business requirements into clean, efficient, and secure code.</p>

        <p>I'm fluent across the stack, building robust backends with <span class="tech-badge">Laravel</span>, <span class="tech-badge">Django</span>, and <span class="tech-badge">NodeJS</span>, and crafting dynamic frontends with <span class="tech-badge">React.js</span> and <span class="tech-badge">TypeScript</span>. My core expertise is in tackling data-intensive challenges.</p>

        <p>My key achievements include architecting a multi-tenant <span class="tech-badge">SaaS</span> data-sync engine (achieving <span class="tech-badge">100% data isolation</span>) and engineering a complex <span class="tech-badge">ETL pipeline</span> that cut data processing time by <span class="tech-badge">60%</span>. I also developed a real-time monitoring dashboard that reduced the Mean Time to Acknowledgment (MTTA) for critical alerts by <span class="tech-badge">50%</span>.</p>
    </div>
  </div>
  <div class="profile-picture-wrapper">
    <img src="${PROFILE_PICTURE_B64}" alt="Lalit Tambe" class="profile-picture">
  </div>
</div>
</div>

<p class="call-to-action">This portfolio is an interactive simulation of the VS Code editor. Feel free to explore the files in the side panel to see my work, skills, and experience in more detail. When you're ready to connect, just open the <strong>contact.html</strong> file.</p>`,
  'package.json': `{
  "name": "lalit-tambe-portfolio",
  "version": "1.0.0",
  "description": "The professional portfolio of Lalit Tambe.",
  "author": {
    "name": "Lalit Tambe",
    "email": "lalittambe963@gmail.com"
  },
  "dependencies": {
    "laravel": "latest",
    "reactjs": "latest",
    "nodejs": "latest",
    "django": "latest",
    "livewire": "latest",
    "python": "latest",
    "php": "latest",
    "javascript": "latest",
    "typescript": "latest"
  },
  "devDependencies": {
    "git": "latest",
    "github-actions": "latest",
    "postman": "latest",
    "junit": "latest"
  }
}`,
  'src/experience/experience.py': `# Full Stack Engineer @ Insnapsys
# May 2021 - Present | Nashik, MH, India
insnapsys_role = {
  "title": "Full Stack Engineer",
  "company": "Insnapsys",
  "achievements": [
    "Architected a multi-tenant data sync engine for a Laravel SaaS platform, using a schema-per-tenant model to achieve 100% data isolation and reduce cross-tenant data errors by 95%.",
    "Engineered a multi-layered security framework with 2FA, token auth, and a granular RBAC system, resulting in a 40% reduction in identified vulnerabilities.",
    "Implemented a versatile ETL pipeline for network data ingestion from REST APIs, DBs, and files, which automated data workflows and decreased data processing time by 60%.",
    "Developed a dynamic custom fields module allowing users to extend data models and automatically render UI form elements.",
    "Engineered a full-stack, real-time alarm monitoring dashboard with a dynamic, state-aware UI, which decreased the Mean Time to Acknowledgment (MTTA) for critical alerts by 50%.",
    "Owned end-to-end development of a bulk data import/export feature using Laravel queues for async processing and WebSockets for real-time progress tracking.",
  ]
}

# Frontend Intern @ AxelBuzz
# Dec 2020 - May 2021 | Nashik, MH, India
axelbuzz_role = {
  "title": "Frontend Intern",
  "company": "AxelBuzz",
  "achievements": [
    "Spearheaded the design & implementation of a Survey & Quizz web app as a single page application in ReactJs.",
    "Implemented Single Sign On & Social authentications including Google Auth, Facebook & LinkedIn.",
    "Developed heatmaps for user data, activities, and responses for statistical purposes & improvising survey recommendations.",
  ]
}`,
  'src/projects/mongo-aggregate.ts': `/*
 * NPM Package: mongo-aggregate
 * A fluent, chainable MongoDB aggregation builder.
 * View on NPM: https://www.npmjs.com/package/mongo-aggregate
 */
import { Aggregator } from 'mongo-aggregate';

// DESCRIPTION:
// Designed and developed a chainable API in Javascript/TypeScript to abstract 
// the complexity of MongoDB aggregation stages ($match, $lookup, $project, etc.) 
// into intuitive methods like .where(), .with(), and .select().

// KEY FEATURES:
// - Fluent, chainable interface
// - Full TypeScript support
// - Simplifies complex aggregation pipelines
// - Comprehensive testing suite using Jest and Supertest

const pipeline = new Aggregator()
  .where({ status: 'active' })
  .with({ from: 'users', localField: 'userId', foreignField: '_id', as: 'user' })
  .select({ name: 1, email: '$user.email' });`,
  'src/skills/backend.json': `{
  "languages": ["PHP", "Python", "JavaScript", "TypeScript"],
  "frameworks": ["Laravel", "Django", "NodeJS", "Express.js", "CodeIgniter", "JUnit"], 
  "databases": ["SQL", "SQL Server", "MySQL", "MongoDB", "PostgreSQL"] 
}`,
  'src/skills/frontend.json': `{
  "languages": ["HTML5", "CSS", "JavaScript", "TypeScript"],
  "frameworks": ["ReactJs", "Redux", "Livewire", "AlpineJS"] 
}`,
  'src/skills/tools.json': `{
  "version_control": ["Git", "Bitbucket", "GitHub"],
  "cicd": ["Github Actions"],
  "api": ["Postman"],
  "scripting": ["Bash"]
}`
};