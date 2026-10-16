import {useState,useEffect} from 'react'
import {GITHUB} from '../data/links.js'
const words=['AI Developer','Python Developer','Machine Learning Enthusiast','Full Stack Developer']
function useTyping(){const[t,setT]=useState('')
useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches){setT(words[0]);return}
let w=0,i=0,del=false,id
const tick=()=>{const word=words[w];i+=del?-1:1;setT(word.slice(0,i));let d=del?40:80
if(!del&&i===word.length){del=true;d=1200}else if(del&&i===0){del=false;w=(w+1)%words.length;d=300}
id=setTimeout(tick,d)}
id=setTimeout(tick,300);return()=>clearTimeout(id)},[]);return t}
export default function Hero(){const t=useTyping()
return(<section id="home" className="hero"><div className="orb o1"/><div className="orb o2"/>
<div className="wrap hero-in"><div>
<p className="eyebrow">Hello, I'm</p><h1>Srirama Krishna Kadiyam</h1>
<h2 className="typing" aria-label="AI Developer, Python Developer, Machine Learning Enthusiast, Full Stack Developer">{t}<i>|</i></h2>
<p className="lead">B.Tech Computer Engineering student specializing in Artificial Intelligence, building intelligent applications, machine learning solutions and full-stack web projects.</p>
<div className="btns"><a className="btn primary" href="#projects">View Projects</a>
<a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
<a className="btn" href="/resume.pdf" download>Download Resume</a>
<a className="btn" href="#contact">Contact Me</a></div></div>
<div className="avatar" role="img" aria-label="Profile image placeholder">SK<small>Replace with your photo in public/images</small></div>
</div></section>)}
