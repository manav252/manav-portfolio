import { useEffect, useState } from 'react'
import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMoon, FiSun } from 'react-icons/fi'
import { education, experience, leadership, profile, projects, research, skills, stats } from './data.js'

const sections = [
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      /* storage unavailable */
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

function Reveal({ children, delay = 0, className, as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <Reveal className="section-head">
        <span className="section-index">{index}</span>
        <h2>{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Metrics({ items }) {
  return (
    <dl className="metrics">
      {items.map((m) => (
        <div key={m.label}>
          <dd>{m.value}</dd>
          <dt>{m.label}</dt>
        </div>
      ))}
    </dl>
  )
}

// Title that makes the whole card open the GitHub repo when one exists.
function CardTitle({ title, github }) {
  if (!github) return <h3>{title}</h3>
  return (
    <h3>
      <a className="card-link" href={github} target="_blank" rel="noreferrer" aria-label={`${title} on GitHub`}>
        {title}
      </a>
      <FiGithub className="card-gh" aria-hidden="true" />
    </h3>
  )
}

function Links({ items }) {
  if (!items) return null
  return (
    <p className="links">
      {items.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" download={link.download}>
          {link.label} <FiArrowUpRight />
        </a>
      ))}
    </p>
  )
}

function ResearchCard({ paper, delay }) {
  return (
    <Reveal as="article" delay={delay} className={`card paper${paper.featured ? ' featured' : ''}`}>
      <header className="paper-head">
        <p className="meta">
          {paper.status ? <span className="badge">{paper.status}</span> : <span>Earlier work</span>}
          {paper.venue && <span>{paper.venue}</span>}
          {paper.year && <span>{paper.year}</span>}
        </p>
        <CardTitle title={paper.title} github={paper.github} />
        <p className="subtitle">{paper.subtitle}</p>
        {paper.role && <p className="role">{paper.role}</p>}
      </header>

      {paper.metrics && <Metrics items={paper.metrics} />}

      {paper.pipeline && (
        <ol className="pipeline" aria-label="Method pipeline">
          {paper.pipeline.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      )}

      <ul className="points">
        {paper.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <Links items={paper.links} />
      <Tags items={paper.tech} />
    </Reveal>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const active = useActiveSection()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28 })

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="progress" style={{ scaleX: progress }} />

      <header className="nav">
        <a href="#top" className="brand" aria-label="Back to top">
          MD<span>.</span>
        </a>
        <nav aria-label="Sections">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="icon-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <Reveal>
            <p className="status">
              <span className="dot" />
              {profile.status}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1>
              {profile.name}
              <em>teaches machines to read images and sequences.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">{profile.summary[0]}</p>
          </Reveal>
          <Reveal delay={0.15} className="actions">
            <a className="btn primary" href="#research">
              Read the research
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              <FiMail /> Get in touch
            </a>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd>{s.value}</dd>
                  <dt>{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <Section id="research" index="01" title="Research & publications">
          <div className="paper-grid">
            {research.map((paper, i) => (
              <ResearchCard key={paper.id} paper={paper} delay={i * 0.05} />
            ))}
          </div>
        </Section>

        <Section id="projects" index="02" title="Projects">
          <div className="project-grid">
            {projects.map((project, i) => (
              <Reveal as="article" key={project.title} delay={i * 0.05} className="card">
                {project.date && (
                  <p className="meta">
                    {project.status && <span className="badge">{project.status}</span>}
                    <span>{project.date}</span>
                  </p>
                )}
                <CardTitle title={project.title} github={project.github} />
                <p className="subtitle">{project.blurb}</p>
                <ul className="points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {project.demo && (
                  <p className="links">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live demo <FiArrowUpRight />
                    </a>
                  </p>
                )}
                <Tags items={project.tech} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="experience" index="03" title="Experience & education">
          <div className="timeline">
            {experience.map((job) => (
              <Reveal as="article" key={job.org} className="entry">
                <p className="entry-date">{job.date}</p>
                <div>
                  <h3>{job.title}</h3>
                  <p className="subtitle">
                    {job.org} · {job.place}
                  </p>
                  <ul className="points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Links items={job.links} />
                </div>
              </Reveal>
            ))}

            <Reveal as="article" className="entry">
              <p className="entry-date">{education.date}</p>
              <div>
                <h3>{education.degree}</h3>
                <p className="subtitle">
                  {education.school} · {education.place} · {education.detail}
                </p>
                <Tags items={education.courses} />
              </div>
            </Reveal>

            {leadership.map((item) => (
              <Reveal as="article" key={item.title} className="entry">
                <p className="entry-date">{item.date}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p className="subtitle">{item.org}</p>
                  <p className="entry-text">{item.text}</p>
                  <Links items={item.links} />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="skills" index="04" title="Skills">
          <div className="skill-grid">
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.05} className="skill-group">
                <h3>{group.group}</h3>
                <Tags items={group.items} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contact" index="05" title="Contact">
          <Reveal className="contact">
            <p className="contact-lede">
              I am looking for a research internship in vision-based human motion analysis and medical AI. If my work
              is relevant to yours, I would like to hear from you.
            </p>
            <a className="contact-mail" href={`mailto:${profile.email}`}>
              {profile.email} <FiArrowUpRight />
            </a>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FiGithub /> github.com/manav252
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin /> linkedin.com/in/manav-doshi-252md
              </a>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
      </footer>
    </MotionConfig>
  )
}
