const cards=[['🤖','AI and Machine Learning'],['🐍','Python Development'],['🌐','Full Stack Web Development'],['🧩','Problem Solving'],['📚','Continuous Learning']]
export default function About(){return(<section id="about"><div className="wrap">
<h2 className="title">About Me</h2>
<div className="glass prose">
<p>I am a B.Tech Computer Engineering student specializing in Artificial Intelligence, passionate about building intelligent applications, machine learning solutions, and full-stack web projects.</p>
<p>I develop practical software applications using Python, Flask, JavaScript, React, and modern web technologies. My interests include Machine Learning, Generative AI, intelligent automation, API integration, and AI-powered SaaS applications.</p>
<p>I enjoy solving real-world problems through technology, continuously learning new tools, and building projects that demonstrate practical software development skills.</p>
<p>Education: B.Tech in Computer Engineering at Ganpat University (2023 to 2027).</p>
<p>I am actively looking for internships, entry-level opportunities, and collaborations in AI, Python development, Machine Learning, and Full Stack Development.</p></div>
<div className="grid cards5">{cards.map(([e,t])=><div className="glass hl" key={t}><span>{e}</span><h3>{t}</h3></div>)}</div>
</div></section>)}
