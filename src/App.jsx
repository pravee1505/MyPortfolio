import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  GraduationCap,
  Lightbulb,
  Link,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Education', '#education'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

const skills = [
  'Communication', 'Teamwork', 'Leadership', 'Problem-solving',
  'Time management', 'Critical thinking', 'Business fundamentals', 'Presentation skills',
]

const interests = [
  'Business Management', 'Marketing', 'Entrepreneurship',
  'Human Resource Management', 'Finance', 'Business Strategy',
]

const placeholders = [
  ['01', 'Academic project', 'A space to introduce a future academic project, its goal, and the learning you gained.'],
  ['02', 'Student activity', 'Use this card to highlight a college club, event, volunteering experience, or activity.'],
  ['03', 'Project to be added', 'Share a future case study, business idea, presentation, or other meaningful work here.'],
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Praveena SN home" onClick={closeMenu}>PS<span>.</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navLinks.map(([label, href]) => <a href={href} key={label} onClick={closeMenu}>{label}</a>)}
        </nav>
        <a className="header-contact" href="#contact">Let&apos;s connect <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow"><Sparkles size={14} /> BBA UNDERGRADUATE STUDENT</p>
            <h1>PRAVEENA <em>SN</em></h1>
            <p className="hero-intro">A curious business student shaping ideas into thoughtful, people-first possibilities.</p>
            <p className="hero-text">Driven by business, leadership, creativity, and a commitment to continuous learning.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my portfolio <ArrowDownRight size={18} /></a>
              <a className="text-link" href="#contact">Contact me <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="arch arch-back"></div>
            <div className="profile-placeholder" role="img" aria-label="Profile image placeholder">
              <div className="profile-label"><span>YOUR</span><strong>PHOTO</strong><span>HERE</span></div>
            </div>
            <div className="hero-note"><span>BASED IN</span><strong>Tiruchirappalli,<br />Tamil Nadu</strong></div>
          </div>
          <p className="hero-scroll">SCROLL TO DISCOVER <span></span></p>
        </section>

        <section id="about" className="about section-shell section-padding">
          <SectionHeading eyebrow="01 / ABOUT ME" title={<>Rooted in curiosity.<br /><em>Focused on growth.</em></>} />
          <div className="about-content reveal">
            <p className="large-copy">I am a Bachelor of Business Administration undergraduate at SRM Institute of Science and Technology, Tiruchirappalli.</p>
            <div>
              <p>I am interested in understanding how people, ideas, and organizations come together to create meaningful outcomes. My academic journey is helping me build a strong foundation in business and management.</p>
              <p>I enjoy exploring entrepreneurship, organizational development, and the everyday decisions that help businesses grow with purpose.</p>
              <a className="text-link" href="#education">My education <ArrowDownRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="education" className="education section-padding">
          <div className="section-shell">
            <SectionHeading eyebrow="02 / EDUCATION" title={<>Learning the language<br />of <em>business.</em></>} />
            <article className="education-card reveal">
              <div className="education-icon"><GraduationCap size={30} /></div>
              <div className="education-main">
                <p className="card-label">CURRENTLY PURSUING</p>
                <h3>Bachelor of Business Administration <span>(BBA)</span></h3>
                <p>SRM Institute of Science and Technology, Tiruchirappalli</p>
              </div>
              <div className="education-status"><span></span> Undergraduate student</div>
            </article>
          </div>
        </section>

        <section id="skills" className="skills section-shell section-padding">
          <SectionHeading eyebrow="03 / SKILLS" title={<>Building a versatile<br /><em>foundation.</em></>} description="These are areas I am actively developing through my studies, collaboration, and experiences." />
          <div className="skills-grid reveal">
            {skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span><h3>{skill}</h3><Check size={18} /></div>)}
          </div>
        </section>

        <section className="interests section-padding">
          <div className="section-shell interests-layout">
            <div className="reveal"><p className="eyebrow">04 / AREAS OF INTEREST</p><h2>What I&apos;m<br /><em>exploring.</em></h2></div>
            <div className="interest-list reveal">
              {interests.map((interest, index) => <div key={interest}><span>0{index + 1}</span><p>{interest}</p><ArrowUpRight size={18} /></div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="projects section-shell section-padding">
          <SectionHeading eyebrow="05 / PROJECTS & ACTIVITIES" title={<>The work is<br /><em>just beginning.</em></>} description="A growing collection of academic work, activities, and ideas. These cards are ready for your future updates." />
          <div className="projects-grid reveal">
            {placeholders.map(([number, title, text]) => <article className="project-card" key={number}>
              <div className="project-top"><span>{number}</span><BriefcaseBusiness size={21} /></div>
              <div><p className="card-label">SAMPLE PLACEHOLDER</p><h3>{title}</h3><p>{text}</p></div>
              <span className="card-arrow"><ArrowUpRight size={21} /></span>
            </article>)}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-shell contact-inner reveal">
            <p className="eyebrow">06 / CONTACT</p>
            <h2>Let&apos;s start a<br /><em>conversation.</em></h2>
            <p>Have an opportunity, idea, or question? I would be happy to connect.</p>
            <a className="email-link" href="itspraveenaofficial@gmail.com">itspraveenaofficial@gmail <ArrowUpRight /></a>
            <div className="contact-bottom"><span>AVAILABLE FOR CONNECTIONS</span><a href="https://www.linkedin.com/in/praveena-s-n-20080515ppp/" target="_blank" rel="noreferrer"><Link size={18} /> LinkedIn profile <ArrowUpRight size={15} /></a></div>
          </div>
        </section>
      </main>

      <footer className="footer section-shell"><a className="brand" href="#home">PS<span>.</span></a><p>© {new Date().getFullYear()} PRAVEENA SN. ALL RIGHTS RESERVED.</p><a href="#home">Back to top <ArrowUpRight size={15} /></a></footer>
    </>
  )
}

export default App
