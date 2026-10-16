import {useState} from 'react'
import {GITHUB,GITHUB_USER} from '../data/links.js'
function Img({src,alt}){const[bad,setBad]=useState(false)
return bad?<p className="muted">{alt} is unavailable right now. See the live data on GitHub.</p>
:<img src={src} alt={alt} loading="lazy" onError={()=>setBad(true)}/>}
export default function GitHubStats(){const u=GITHUB_USER
return(<section id="github"><div className="wrap"><h2 className="title">GitHub Activity</h2>
<div className="glass stats">
<Img alt="GitHub statistics card" src={`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight&hide_border=true`}/>
<Img alt="Top languages card" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=tokyonight&hide_border=true`}/>
<Img alt="Contribution graph" src={`https://ghchart.rshah.org/6d5dfc/${u}`}/>
<div className="btns"><a className="btn primary" href={GITHUB} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
<a className="btn" href={GITHUB+'?tab=repositories'} target="_blank" rel="noopener noreferrer">Explore All Repositories</a></div>
</div></div></section>)}
