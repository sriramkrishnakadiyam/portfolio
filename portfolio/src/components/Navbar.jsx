import {useState,useEffect} from 'react'
const links=['about','skills','projects','github','learning','resume','contact']
export default function Navbar(){
const [open,setOpen]=useState(false)
const [theme,setTheme]=useState(()=>localStorage.getItem('theme')||'dark')
useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('theme',theme)},[theme])
return(<header className="nav"><div className="wrap nav-in">
<a href="#home" className="logo">SK<span>.</span></a>
<button className="icon menu" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button>
<nav className={open?'links open':'links'} aria-label="Main">
{links.map(l=><a key={l} href={'#'+l} onClick={()=>setOpen(false)}>{l[0].toUpperCase()+l.slice(1)}</a>)}
<button className="icon" aria-label="Toggle light or dark theme" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?'☀️':'🌙'}</button>
</nav></div></header>)}
