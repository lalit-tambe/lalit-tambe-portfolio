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
  <span class="token property">"name"</span>: <span class="token string">"lalit-tambe-portfolio"</span>,
  <span class="token property">"version"</span>: <span class="token string">"1.0.0"</span>,
  <span class="token property">"description"</span>: <span class="token string">"The professional portfolio of Lalit Tambe."</span>,
  <span class="token property">"author"</span>: {
    <span class="token property">"name"</span>: <span class="token string">"Lalit Tambe"</span>,
    <span class="token property">"email"</span>: <span class="token string">"lalittambe963@gmail.com"</span>
  },
  <span class="token property">"dependencies"</span>: {
    <span class="token property">"laravel"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"reactjs"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"nodejs"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"django"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"livewire"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"python"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"php"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"javascript"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"typescript"</span>: <span class="token string">"latest"</span>
  },
  <span class="token property">"devDependencies"</span>: {
    <span class="token property">"git"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"github-actions"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"postman"</span>: <span class="token string">"latest"</span>,
    <span class="token property">"junit"</span>: <span class="token string">"latest"</span>
  }
}`,
  'src/experience/experience.py': `<span class="token comment"># Full Stack Engineer @ Insnapsys</span>
<span class="token comment"># May 2021 - Present | Nashik, MH, India</span>
<span class="token variable">insnapsys_role</span> <span class="token operator">=</span> {
  <span class="token string">"title"</span>: <span class="token string">"Full Stack Engineer"</span>,
  <span class="token string">"company"</span>: <span class="token string">"Insnapsys"</span>,
  <span class="token string">"achievements"</span>: [
    <span class="token string">"Architected a multi-tenant data sync engine for a Laravel SaaS platform, using a schema-per-tenant model to achieve 100% data isolation and reduce cross-tenant data errors by 95%."</span>,
    <span class="token string">"Engineered a multi-layered security framework with 2FA, token auth, and a granular RBAC system, resulting in a 40% reduction in identified vulnerabilities."</span>,
    <span class="token string">"Implemented a versatile ETL pipeline for network data ingestion from REST APIs, DBs, and files, which automated data workflows and decreased data processing time by 60%."</span>,
    <span class="token string">"Developed a dynamic custom fields module allowing users to extend data models and automatically render UI form elements."</span>,
    <span class="token string">"Engineered a full-stack, real-time alarm monitoring dashboard with a dynamic, state-aware UI, which decreased the Mean Time to Acknowledgment (MTTA) for critical alerts by 50%."</span>,
    <span class="token string">"Owned end-to-end development of a bulk data import/export feature using Laravel queues for async processing and WebSockets for real-time progress tracking."</span>,
  ]
}

<span class="token comment"># Frontend Intern @ AxelBuzz</span>
<span class="token comment"># Dec 2020 - May 2021 | Nashik, MH, India</span>
<span class="token variable">axelbuzz_role</span> <span class="token operator">=</span> {
  <span class="token string">"title"</span>: <span class="token string">"Frontend Intern"</span>,
  <span class="token string">"company"</span>: <span class="token string">"AxelBuzz"</span>,
  <span class="token string">"achievements"</span>: [
    <span class="token string">"Spearheaded the design & implementation of a Survey & Quizz web app as a single page application in ReactJs."</span>,
    <span class="token string">"Implemented Single Sign On & Social authentications including Google Auth, Facebook & LinkedIn."</span>,
    <span class="token string">"Developed heatmaps for user data, activities, and responses for statistical purposes & improvising survey recommendations."</span>,
  ]
}`,
  'src/projects/mongo-aggregate.ts': `<span class="token comment">/*
 * NPM Package: mongo-aggregate
 * A fluent, chainable MongoDB aggregation builder.
 * <a href="https://www.npmjs.com/package/mongo-aggregate" target="_blank" style="color: #3794ff; text-decoration: underline;">View on NPM</a>
 */</span>
<span class="token keyword">import</span> { <span class="token class-name">Aggregator</span> } <span class="token keyword">from</span> <span class="token string">'mongo-aggregate'</span>;

<span class="token comment">// DESCRIPTION:</span>
<span class="token comment">// Designed and developed a chainable API in Javascript/TypeScript to abstract </span>
<span class="token comment">// the complexity of MongoDB aggregation stages ($match, $lookup, $project, etc.) </span>
<span class="token comment">// into intuitive methods like .where(), .with(), and .select().</span>

<span class="token comment">// KEY FEATURES:</span>
<span class="token comment">// - Fluent, chainable interface</span>
<span class="token comment">// - Full TypeScript support</span>
<span class="token comment">// - Simplifies complex aggregation pipelines</span>
<span class="token comment">// - Comprehensive testing suite using Jest and Supertest</span>

<span class="token keyword">const</span> <span class="token variable">pipeline</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Aggregator</span>()
  .<span class="token function">where</span>({ <span class="token property">status</span>: <span class="token string">'active'</span> })
  .<span class="token function">with</span>({ <span class="token property">from</span>: <span class="token string">'users'</span>, <span class="token property">localField</span>: <span class="token string">'userId'</span>, <span class="token property">foreignField</span>: <span class="token string">'_id'</span>, <span class="token property">as</span>: <span class="token string">'user'</span> })
  .<span class="token function">select</span>({ <span class="token property">name</span>: <span class="token number">1</span>, <span class="token property">email</span>: <span class="token string">'$user.email'</span> });`,
  'src/skills/backend.json': `{
  <span class="token property">"languages"</span>: [<span class="token string">"PHP"</span>, <span class="token string">"Python"</span>, <span class="token string">"JavaScript"</span>, <span class="token string">"TypeScript"</span>],
  <span class="token property">"frameworks"</span>: [<span class="token string">"Laravel"</span>, <span class="token string">"Django"</span>, <span class="token string">"NodeJS"</span>, <span class="token string">"Express.js"</span>, <span class="token string">"CodeIgniter"</span>, <span class="token string">"JUnit"</span>], 
  <span class="token property">"databases"</span>: [<span class="token string">"SQL"</span>, <span class="token string">"SQL Server"</span>, <span class="token string">"MySQL"</span>, <span class="token string">"MongoDB"</span>, <span class="token string">"PostgreSQL"</span>] 
}`,
  'src/skills/frontend.json': `{
  <span class="token property">"languages"</span>: [<span class="token string">"HTML5"</span>, <span class="token string">"CSS"</span>, <span class="token string">"JavaScript"</span>, <span class="token string">"TypeScript"</span>],
  <span class="token property">"frameworks"</span>: [<span class="token string">"ReactJs"</span>, <span class="token string">"Redux"</span>, <span class="token string">"Livewire"</span>, <span class="token string">"AlpineJS"</span>] 
}`,
  'src/skills/tools.json': `{
  <span class="token property">"version_control"</span>: [<span class="token string">"Git"</span>, <span class="token string">"Bitbucket"</span>, <span class="token string">"GitHub"</span>],
  <span class="token property">"cicd"</span>: [<span class="token string">"Github Actions"</span>],
  <span class="token property">"api"</span>: [<span class="token string">"Postman"</span>],
  <span class="token property">"scripting"</span>: [<span class="token string">"Bash"</span>]
}`,
};