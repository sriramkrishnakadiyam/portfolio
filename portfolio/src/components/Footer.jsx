import {GITHUB,LINKEDIN} from '../data/links.js'
export default function Footer(){return(<footer className="foot"><div className="wrap">
<h3>Srirama Krishna Kadiyam</h3><p>AI Developer | Python Developer | Full Stack Developer</p>
<p><a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a> · <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
<p className="muted">Thanks for visiting. Let's build something great together.</p>
<p className="muted">© {new Date().getFullYear()} Srirama Krishna Kadiyam</p>
<a className="btn" href="#home">↑ Back to top</a></div></footer>)}
