import ProjectCard from './Projectcard.jsx';

function Section(){
    return(
        <>
        <main>
    <section id='about' className='card-section'>
        <h2>About Me</h2>
        <p>I am a beginer web developer learning HTML, CSS and Java Script</p>
    </section>

    <section id='project' className='card-section'>
        <h2>My Projects</h2>

    <div className='project-grid'>
        {/* calling the project card we imported above */}
        <ProjectCard 
        title="Shop Calculator"
        description="A simple calculator for product cost, selling price and profit."/>

        <ProjectCard
        title="Student List"
        description="A website that dispaly stundent list in JavaScript array."/>
    </div>

    </section>

    <section id='contact' className='card-section'>
        <h2>Contact Me</h2>
        <p>Email: yusrahyusufsabo@gmail.com</p>
    </section>
        </main>
        </>
    )
}

export default Section;