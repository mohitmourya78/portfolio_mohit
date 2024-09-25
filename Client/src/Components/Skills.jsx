import React from 'react'
import './Skills.css'



const Skills = () => {
    return (
        <section id='skills' className="allHeadingAdjust">
            <div className='skill'>
                My Skills in
            </div>
            <div className='skill-adjust'>
                <div className='skills-grid'>

                    <div className='skill-item transt'>
                        <div className='skills-type-heading'>
                            Frontend
                        </div>
                        <div className='skill-lang'>
                            <div className='language yellow-border ' > HTML </div>
                            <div className='language'> CSS </div>
                            <div className='language blue-border'> Tailwaind </div>
                            <div className='language'> JavaScript </div>
                            <div className='language red-border'> React js </div>
                            <div className='language '> Bootstrap </div>
                        </div>
                    </div>
                    <div className='skill-item transt'>
                        <div className='skills-type-heading'>
                            Backend
                        </div>
                        <div className='skill-lang'>
                            <div className='language yellow-border'> Node js </div>
                            <div className='language blue-border '> Express js </div>
                        </div>
                    </div>
                    <div className='skill-item transt'>
                        <div className='skills-type-heading'>
                            Database
                        </div>
                        <div className='skill-lang'>
                            <div className='language red-border '> Mongo DB </div>
                            <div className='language '> MySQL </div>
                        </div>
                    </div>
                    <div className='skill-item transt'>
                        <div className='skills-type-heading'>
                            Technology's
                        </div>
                        <div className='skill-lang'>
                            <div className='language '> VS Code </div>
                            <div className='language yellow-border '> IntelliJ IDEA </div>
                            <div className='language  '> GitHub</div>
                            <div className='language blue-border '> Replit</div>
                            <div className='language red-border'> Wordpress </div>
                        </div>
                    </div>
                    <div className='skill-item transt'>
                        <div className='skills-type-heading'>
                            Soft Skills
                        </div>
                        <div className='skill-lang'>
                            <div className='language red-border'> Problem solving </div>
                            <div className='language '> Interpersonal skills </div>
                            <div className='language yellow-border '> Accuracy</div>
                            <div className='language  '> Team Management</div>
                            <div className='language blue-border '> Multitasking</div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Skills;