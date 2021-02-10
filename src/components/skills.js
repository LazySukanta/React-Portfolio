import  skillData  from "../mydata";
import React  from 'react';
import Fade from 'react-reveal/Fade';

const Skills = () => {
  
  return (
    <Fade bottom>
      <section id="skills" className='mt-5'>
      <div className="container text-center">
        <h2>Skills</h2>
        <hr class="ribbon"/>
        <hr class="ribbon-little"/>
        <div className="row row-cols-3">
          {skillData.skills.map((skill) => {
            return (
              <figure className="col" key={skill.id}>
                {skill.skill}
                <figcaption>{skill.name}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
    </Fade>
  );
};

export default Skills;
