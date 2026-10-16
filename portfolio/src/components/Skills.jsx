import skills from '../data/skills.js'
export default function Skills(){return(<section id="skills"><div className="wrap"><h2 className="title">Skills</h2>
<div className="grid cards2">{skills.map(g=><div className="glass" key={g.title}><h3>{g.title}</h3>
<ul className="badges">{g.items.map(i=><li key={i}>{i}</li>)}</ul></div>)}</div>
<div className="glass" style={{marginTop:20}}><h3>Certifications</h3><ul className="feat"><li>Deep Neural Networks (DNN), Cognitive Class</li><li>Natural Language Processing (NLP), Infosys Springboard</li></ul></div></div></section>)}
