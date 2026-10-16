import projects from '../data/projects.js'
export default function Projects(){return(<section id="projects"><div className="wrap"><h2 className="title">Projects</h2>
<div className="grid cards2">{projects.map(p=><article className="glass project" key={p.name}>
<div className="thumb" aria-hidden="true">{p.emoji}</div>
<h3>{p.name}</h3><p>{p.desc}</p>
{p.features.length>0&&<ul className="feat">{p.features.map(f=><li key={f}>{f}</li>)}</ul>}
<ul className="badges">{p.tech.map(t=><li key={t}>{t}</li>)}</ul>
<div className="btns">{p.repo?<a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">GitHub Repository</a>:<span className="btn disabled" aria-disabled="true">Repository link coming soon</span>}
{p.live?<a className="btn primary" href={p.live} target="_blank" rel="noopener noreferrer">Live Website</a>
:<span className="btn disabled" aria-disabled="true">Live demo not available</span>}</div>
</article>)}</div></div></section>)}
