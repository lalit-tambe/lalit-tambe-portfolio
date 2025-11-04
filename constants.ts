import { FileNode } from './types';

export const FILE_TREE: FileNode[] = [
  {
    id: 'src',
    name: 'src',
    type: 'folder',
    children: [
      {
        id: 'src/1_experience',
        name: '1_experience',
        type: 'folder',
        children: [
          { id: 'src/1_experience/experience.py', name: 'experience.py', type: 'file', language: 'python' },
        ],
      },
      {
        id: 'src/2_projects',
        name: '2_projects',
        type: 'folder',
        children: [
          { id: 'src/2_projects/mongo-aggregate.ts', name: 'mongo-aggregate.ts', type: 'file', language: 'typescript' },
        ],
      },
      {
        id: 'src/3_skills',
        name: '3_skills',
        type: 'folder',
        children: [
          { id: 'src/3_skills/backend.json', name: 'backend.json', type: 'file', language: 'json' },
          { id: 'src/3_skills/frontend.json', name: 'frontend.json', type: 'file', language: 'json' },
          { id: 'src/3_skills/tools.json', name: 'tools.json', type: 'file', language: 'json' },
        ],
      },
    ],
  },
  { id: 'README.md', name: 'README.md', type: 'file', language: 'markdown' },
  { id: 'contact.html', name: 'contact.html', type: 'file', language: 'html' },
  { id: 'package.json', name: 'package.json', type: 'file', language: 'json' },
];

export const FILE_CONTENT: Record<string, string> = {
  'README.md': `## Lalit Tambe - Full Stack Engineer

Hi, I'm Lalit. [cite_start]I'm a Full Stack Engineer based in Nashik, India[cite: 2], with a passion for architecting robust, scalable, and secure web applications.

[cite_start]With 5+ years of experience in the full software lifecycle, I specialize in backend development with Laravel [cite: 14] [cite_start]and building dynamic, data-driven frontends with ReactJs and Livewire[cite: 14].

[cite_start]My professional work focuses on building multi-tenant SaaS platforms [cite: 20][cite_start], complex ETL pipelines [cite: 21][cite_start], and real-time monitoring dashboards[cite: 23].

This portfolio is a simulation of the VS Code editor. Click the files on the left to learn more about me.`,
  'package.json': `{
  <span class="token property">"name"</span>: <span class="token string">"lalit-tambe-portfolio"</span>,
  <span class="token property">"version"</span>: <span class="token string">"1.0.0"</span>,
  <span class="token property">"description"</span>: <span class="token string">"The professional portfolio of Lalit Tambe."</span>,
  <span class="token property">"author"</span>: {
    <span class="token property">"name"</span>: <span class="token string">"Lalit Tambe"</span>,
    <span class="token property">[cite_start]"email"</span>: <span class="token string">"lalittambe963@gmail.com" [cite: 2]</span>
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
  'contact.html': `<div class="p-4 text-gray-300">
  <style>
    .contact-card h2 { font-size: 1.5rem; font-weight: bold; color: #007acc; margin-bottom: 1rem; }
    .contact-card p { margin-bottom: 1.5rem; }
    .contact-card ul { list-style: none; padding: 0; margin-bottom: 2rem; }
    .contact-card li { margin-bottom: 0.75rem; }
    .contact-card a { color: #3794ff; text-decoration: none; }
    .contact-card a:hover { text-decoration: underline; }
    .resume-button { background-color: #007acc; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; transition: background-color 0.2s; }
    .resume-button:hover { background-color: #005a9e; }
  </style>
  <div class="contact-card">
    <h2>Get in Touch</h2>
    <p>I'm always open to discussing new projects or opportunities.</p>
    <ul>
      [cite_start]<li><strong>Email:</strong> <a href="mailto:lalittambe963@gmail.com">lalittambe963@gmail.com</a> [cite: 2]</li>
      [cite_start]<li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/" target="_blank">LinkedIn Profile</a> [cite: 2]</li>
      [cite_start]<li><strong>GitHub:</strong> <a href="https://github.com/" target="_blank">GitHub Profile</a> [cite: 2]</li>
    </ul>
    <button class="resume-button">Download Resume</button>
  </div>
</div>`,
  'src/1_experience/experience.py': `<span class="token comment"># [cite_start]Full Stack Engineer @ Insnapsys [cite: 17]</span>
<span class="token comment"># May 2021 - Present | [cite_start]Nashik, MH, India [cite: 18, 19]</span>
<span class="token variable">insnapsys_role</span> <span class="token operator">=</span> {
  <span class="token string">"title"</span>: <span class="token string">"Full Stack Engineer"</span>,
  <span class="token string">"company"</span>: <span class="token string">"Insnapsys"</span>,
  <span class="token string">"achievements"</span>: [
    <span class="token string">"[cite_start]Architected a multi-tenant data sync engine for a Laravel SaaS platform, using a schema-per-tenant model to achieve 100% data isolation and reduce cross-tenant data errors by 95%.[cite: 20]"</span>,
    <span class="token string">"[cite_start]Engineered a multi-layered security framework with 2FA, token auth, and a granular RBAC system, resulting in a 40% reduction in identified vulnerabilities.[cite: 20]"</span>,
    <span class="token string">"[cite_start]Implemented a versatile ETL pipeline for network data ingestion from REST APIs, DBs, and files, which automated data workflows and decreased data processing time by 60%.[cite: 21]"</span>,
    <span class="token string">"[cite_start]Developed a dynamic custom fields module allowing users to extend data models and automatically render UI form elements.[cite: 22]"</span>,
    <span class="token string">"[cite_start]Engineered a full-stack, real-time alarm monitoring dashboard with a dynamic, state-aware UI, which decreased the Mean Time to Acknowledgment (MTTA) for critical alerts by 50%.[cite: 23]"</span>,
    <span class="token string">"[cite_start]Owned end-to-end development of a bulk data import/export feature using Laravel queues for async processing and WebSockets for real-time progress tracking.[cite: 24]"</span>,
  ]
}

<span class="token comment"># [cite_start]Frontend Intern @ AxelBuzz [cite: 25]</span>
<span class="token comment"># Dec 2020 - May 2021 | [cite_start]Nashik, MH, India [cite: 26]</span>
<span class="token variable">axelbuzz_role</span> <span class="token operator">=</span> {
  <span class="token string">"title"</span>: <span class="token string">"Frontend Intern"</span>,
  <span class="token string">"company"</span>: <span class="token string">"AxelBuzz"</span>,
  <span class="token string">"achievements"</span>: [
    <span class="token string">"[cite_start]Spearheaded the design & implementation of a Survey & Quizz web app as a single page application in ReactJs.[cite: 27]"</span>,
    <span class="token string">"[cite_start]Implemented Single Sign On & Social authentications including Google Auth, Facebook & LinkedIn.[cite: 27]"</span>,
    <span class="token string">"[cite_start]Developed heatmaps for user data, activities, and responses for statistical purposes & improvising survey recommendations.[cite: 28]"</span>,
  ]
}`,
  'src/2_projects/mongo-aggregate.ts': `<span class="token comment">/*
 * [cite_start]NPM Package: mongo-aggregate [cite: 30]
 * A fluent, chainable MongoDB aggregation builder.
 */</span>
<span class="token keyword">import</span> { <span class="token class-name">Aggregator</span> } <span class="token keyword">from</span> <span class="token string">'mongo-aggregate'</span>;

<span class="token comment">// DESCRIPTION:</span>
<span class="token comment">// Designed and developed a chainable API in Javascript/TypeScript to abstract </span>
<span class="token comment">// the complexity of MongoDB aggregation stages ($match, $lookup, $project, etc.) </span>
<span class="token comment">[cite_start]// into intuitive methods like .where(), .with(), and .select(). [cite: 32, 33]</span>

<span class="token comment">// KEY FEATURES:</span>
<span class="token comment">// - Fluent, chainable interface</span>
<span class="token comment">// - Full TypeScript support</span>
<span class="token comment">// - Simplifies complex aggregation pipelines</span>
<span class="token comment">[cite_start]// - Comprehensive testing suite using Jest and Supertest [cite: 32, 34]</span>

<span class="token keyword">const</span> <span class="token variable">pipeline</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Aggregator</span>()
  .<span class="token function">where</span>({ <span class="token property">status</span>: <span class="token string">'active'</span> })
  .<span class="token function">with</span>({ <span class="token property">from</span>: <span class="token string">'users'</span>, <span class="token property">localField</span>: <span class="token string">'userId'</span>, <span class="token property">foreignField</span>: <span class="token string">'_id'</span>, <span class="token property">as</span>: <span class="token string">'user'</span> })
  .<span class="token function">select</span>({ <span class="token property">name</span>: <span class="token number">1</span>, <span class="token property">email</span>: <span class="token string">'$user.email'</span> });`,
  'src/3_skills/backend.json': `{
  <span class="token property">[cite_start]"languages"</span>: [<span class="token string">"PHP"</span>, <span class="token string">"Python"</span>, <span class="token string">"JavaScript"</span>, <span class="token string">"TypeScript"</span>], [cite: 13]
  <span class="token property">[cite_start]"frameworks"</span>: [<span class="token string">"Laravel"</span>, <span class="token string">"Django"</span>, <span class="token string">"NodeJS"</span>, <span class="token string">"Express.js"</span>, <span class="token string">"CodeIgniter"</span>, <span class="token string">"JUnit"</span>], [cite: 14]
  <span class="token property">[cite_start]"databases"</span>: [<span class="token string">"SQL"</span>, <span class="token string">"SQL Server"</span>, <span class="token string">"MySQL"</span>, <span class="token string">"MongoDB"</span>, <span class="token string">"PostgreSQL"</span>] [cite: 14]
}`,
  'src/3_skills/frontend.json': `{
  <span class="token property">[cite_start]"languages"</span>: [<span class="token string">"HTML5"</span>, <span class="token string">"CSS"</span>, <span class="token string">"JavaScript"</span>, <span class="token string">"TypeScript"</span>], [cite: 13]
  <span class="token property">[cite_start]"frameworks"</span>: [<span class="token string">"ReactJs"</span>, <span class="token string">"Redux"</span>, <span class="token string">"Livewire"</span>, <span class="token string">"AlpineJS"</span>] [cite: 14]
}`,
  'src/3_skills/tools.json': `{
  <span class="token property">[cite_start]"version_control"</span>: [<span class="token string">"Git"</span>, <span class="token string">"Bitbucket"</span>, <span class="token string">"GitHub"</span>], [cite: 15]
  <span class="token property">[cite_start]"cicd"</span>: [<span class="token string">"Github Actions"</span>], [cite: 15]
  <span class="token property">[cite_start]"api"</span>: [<span class="token string">"Postman"</span>], [cite: 15]
  <span class="token property">[cite_start]"scripting"</span>: [<span class="token string">"Bash"</span>] [cite: 13]
}`,
};