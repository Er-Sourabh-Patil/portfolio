const { useEffect, useState } = React;

const projects = [
  { title: 'Sentiment Analysis', type: 'Deep Learning', description: 'An LSTM model for 100,000+ social media posts, paired with a Flask dashboard and real-time visualization.', tags: ['TensorFlow', 'LSTM', 'Flask'], href: 'projects/sentiment-analysis.html', github: 'https://github.com/Er-Sourabh-Patil/Sentiment-analysis-of-social-media-reviews', icon: 'fa-chart-line' },
  { title: 'Entry Exit Count AI', type: 'Computer Vision', description: 'A YOLOv8 and DeepSORT crowd counting system with live streaming, analytics, and safety alerts.', tags: ['YOLOv8', 'OpenCV', 'Flask'], href: 'projects/entryexitcount-ai.html', github: 'https://github.com/Er-Sourabh-Patil/EntryExit-Count.AI', icon: 'fa-eye' },
  { title: 'E-Voting Platform', type: 'Full Stack', description: 'A secure electronic voting system with Java, authentication, vote management, and administrator controls.', tags: ['Java', 'MySQL', 'JSP'], href: 'projects/e-voting-platform.html', github: 'https://github.com/Er-Sourabh-Patil/OnlineVotingSystem', icon: 'fa-shield-halved' },
  { title: 'Customer Ledger System', type: 'WordPress', description: 'A custom retail credit management solution that turns manual tracking into a clear digital workflow.', tags: ['WordPress', 'PHP', 'MySQL'], href: 'projects/customer-ledger-management.html', icon: 'fa-receipt' },
  { title: 'WorkHub AI', type: 'AI Platform', description: 'An enterprise management platform with attendance, payroll, projects, communication, and AI chatbot support.', tags: ['Python', 'Flask', 'NLP'], href: 'projects/workhubAI.html', github: 'https://github.com/Er-Sourabh-Patil/WorkHub-AI', icon: 'fa-users-gear' }
];

const skills = [
  ['fa-code', 'Programming', 'Python, Java, C, R, JavaScript, HTML, CSS'],
  ['fa-layer-group', 'Frameworks', 'Flask, Streamlit, TensorFlow, PyTorch, Pandas'],
  ['fa-brain', 'Machine Learning', 'Deep learning, NLP, computer vision, model training'],
  ['fa-database', 'Data Systems', 'MySQL, SQLite, SQL, MongoDB, data visualization'],
  ['fa-screwdriver-wrench', 'Developer Tools', 'Git, GitHub, VS Code, Docker, Linux, Jupyter']
];

const experience = [
  ['Software Developer Intern', 'LuciferVinus Private Limited', 'March 2026 - August 2026', 'Real-world software development, backend and AI modules, performance, and Agile collaboration.'],
  ['AI & Data Science Intern', 'DataPointer Technologies', 'July - August 2025', 'Machine learning implementation, preprocessing, model training, visualization, and NLP.'],
  ['Full Stack Development Intern', 'Lcube Creation', 'July - August 2024', 'Java, JSP, JDBC, MySQL, e-voting, backend integration, and secure authentication.'],
  ['Web Development Intern', 'Codsoft Technologies', 'October - November 2023', 'Responsive web design, UI improvement, and interactive HTML, CSS, and JavaScript components.']
];

function Icon({ name }) { return <i className={`fas ${name}`} aria-hidden="true" />; }

function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  return <button className="theme-toggle" onClick={onToggle} aria-label={`Switch to ${nextTheme} theme`} title={`Switch to ${nextTheme} theme`}><Icon name={theme === 'dark' ? 'fa-sun' : 'fa-moon'} /><span>{nextTheme}</span></button>;
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const roles = ['AI & Data Science Engineer', 'Machine Learning Enthusiast', 'Full Stack Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');

  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('portfolio-theme', theme); }, [theme]);

  useEffect(() => {
    let position = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const role = roles[roleIndex];
      position += deleting ? -1 : 1;
      setRoleText(role.slice(0, position));
      if (!deleting && position === role.length) deleting = true;
      if (deleting && position === 0) { deleting = false; setRoleIndex((current) => (current + 1) % roles.length); }
      timer = setTimeout(tick, !deleting && position === role.length ? 2000 : deleting ? 45 : position === 0 ? 400 : 85);
    };
    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, [roleIndex]);

  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="navbar"><div className="nav-container"><a className="logo" href="#home" onClick={closeMenu}><span className="logo-mark">SP</span><span>Sourabh Patil</span></a><button className={`menu-button ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu"><span></span><span></span><span></span></button><nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>{['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}<ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /></nav></div></header>
    <main>
      <section id="home" className="hero section-shell"><div className="hero-copy reveal"><p className="eyebrow"><span className="status-dot"></span> Available for opportunities</p><h1>Building useful <span>intelligence</span> for the real world.</h1><p className="hero-lead">I’m Sourabh Patil, an AI & Data Science Engineer who turns complex problems into thoughtful, dependable software.</p><div className="hero-actions"><a className="btn btn-primary" href="Resume- Sourabh Patil .pdf" download><Icon name="fa-download" /> Download Resume</a><a className="btn btn-ghost" href="#projects">Explore my work <Icon name="fa-arrow-right" /></a></div><div className="hero-social"><span>Find me on</span><a href="https://github.com/Er-Sourabh-Patil" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="fa-github" /></a><a href="https://www.linkedin.com/in/sourabh-patil-5b64b5234/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="fa-linkedin" /></a><a href="mailto:sourabhpatil9597@gmail.com" aria-label="Email"><Icon name="fa-envelope" /></a></div></div><div className="hero-visual reveal"><div className="portrait-frame"><img src="static/images/sourabh photo.png" alt="Sourabh Patil" /><span className="portrait-label">01 / profile</span></div><div className="hero-note"><strong>{roleText}</strong><span>Curious by nature. Precise by craft.</span></div></div></section>
      <section id="about" className="section-shell section-block"><div className="section-heading"><p className="eyebrow">01 / About</p><h2>A developer with a bias for <em>clarity.</em></h2></div><div className="about-grid"><p className="large-copy">I’m pursuing a Post Graduate Certificate Program in Big Data Analytics at CDAC Mumbai.</p><div className="about-details"><p>My work sits at the intersection of AI, data, and modern web engineering. I enjoy designing robust backend systems, responsive interfaces, and maintainable software that solves a real need.</p><div className="fact-row"><div><span>Now</span><strong>Post Graduate Certificate Program in Big Data Analytics<br />CDAC Mumbai</strong></div><div><span>Education</span><strong>B.Tech AI & Data Science<br />GCOE, Ratnagiri</strong></div></div></div></div></section>
      <section id="skills" className="section-shell section-block tinted"><div className="section-heading split-heading"><div><p className="eyebrow">02 / Toolkit</p><h2>Tools I use to make<br /><em>ideas tangible.</em></h2></div><p>From model training to polished interfaces, I bring the right layer of technology to each problem.</p></div><div className="skills-grid">{skills.map(([icon, title, text]) => <article className="skill-card" key={title}><Icon name={icon} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section id="projects" className="section-shell section-block"><div className="section-heading split-heading"><div><p className="eyebrow">03 / Selected work</p><h2>Projects with a point<br /><em>of view.</em></h2></div><p>A few experiments and products where engineering meets practical impact.</p></div><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-top"><span className="project-number">0{index + 1}</span><Icon name={project.icon} /></div><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tech-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.href}>View case study <Icon name="fa-arrow-up-right-from-square" /></a>{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Icon name="fa-github" /></a>}</div></article>)}</div></section>
      <section id="experience" className="section-shell section-block tinted"><div className="section-heading"><p className="eyebrow">04 / Experience</p><h2>Where I’ve been<br /><em>learning by doing.</em></h2></div><div className="experience-list">{experience.map(([role, company, date, description]) => <article className="experience-item" key={role}><span className="experience-date">{date}</span><div><h3>{role}</h3><p className="company">{company}</p><p>{description}</p></div></article>)}</div></section>
      <section id="contact" className="contact section-shell"><div className="contact-inner"><p className="eyebrow">05 / Contact</p><h2>Let’s build something<br /><em>meaningful.</em></h2><p>Have a project, an opportunity, or an interesting problem? I’d love to hear about it.</p><a className="btn btn-primary" href="mailto:sourabhpatil9597@gmail.com">Start a conversation <Icon name="fa-arrow-right" /></a><div className="contact-meta"><a href="mailto:sourabhpatil9597@gmail.com">sourabhpatil9597@gmail.com</a><span>India</span></div></div></section>
    </main><footer className="footer"><span>© 2026 Sourabh Patil</span><span>Designed & built with intention.</span><a href="#home">Back to top <Icon name="fa-arrow-up" /></a></footer>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);