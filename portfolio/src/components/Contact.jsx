import {useState} from 'react'
import {GITHUB,LINKEDIN,EMAIL} from '../data/links.js'
export default function Contact(){
const[f,setF]=useState({name:'',email:'',subject:'',message:''})
const[err,setErr]=useState({}),[msg,setMsg]=useState('')
const on=e=>setF({...f,[e.target.name]:e.target.value})
const submit=e=>{e.preventDefault();const x={}
if(f.name.trim().length<2)x.name='Please enter your full name.'
if(!/^\S+@\S+\.\S+$/.test(f.email))x.email='Please enter a valid email address.'
if(f.subject.trim().length<3)x.subject='Please enter a subject.'
if(f.message.trim().length<10)x.message='Message should be at least 10 characters.'
setErr(x);if(Object.keys(x).length){setMsg('');return}
const body=`${f.message}\n\nFrom: ${f.name} (${f.email})`
window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
setMsg('Your email app should open with the message ready. Press send there to deliver it.')}
const field=(n,l,t='text')=><label>{l}<input name={n} type={t} value={f[n]} onChange={on} aria-invalid={!!err[n]}/>{err[n]&&<small className="err">{err[n]}</small>}</label>
return(<section id="contact"><div className="wrap"><h2 className="title">Contact</h2>
<div className="grid cards2"><form className="glass form" onSubmit={submit} noValidate>
{field('name','Full name')}{field('email','Email address','email')}{field('subject','Subject')}
<label>Message<textarea name="message" rows="5" value={f.message} onChange={on} aria-invalid={!!err.message}/>{err.message&&<small className="err">{err.message}</small>}</label>
<button className="btn primary" type="submit">Submit</button>{msg&&<p role="status" className="ok">{msg}</p>}</form>
<div className="glass"><h3>Let's connect</h3><ul className="clinks">
<li><a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a></li>
<li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
<li><a href={'mailto:'+EMAIL}>{EMAIL}</a></li></ul></div></div></div></section>)}
