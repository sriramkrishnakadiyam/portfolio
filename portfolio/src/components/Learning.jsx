const items=['Machine Learning','Generative AI','AI-powered application development','Python development','Full Stack Development','API integration','Intelligent automation']
export default function Learning(){return(<section id="learning"><div className="wrap"><h2 className="title">Currently Learning</h2>
<div className="glass"><p className="muted">Areas I am actively exploring and studying:</p><ul className="badges">{items.map(i=><li key={i}>{i}</li>)}</ul></div></div></section>)}
