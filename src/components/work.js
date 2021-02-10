import React from 'react';
import {Card,CardColumns, Button} from 'react-bootstrap';


import Fade from "react-reveal/Fade"

import data from "../mydata"

const Work = () => {
  return (
    <section id="projects" className=''>
    <div className="container text-center">
      <h2  className='mt-5' style={{textAlign:'center'}}>Projects</h2>
      <hr class="ribbon"/>
      <hr class="ribbon-little"/>

      <Fade bottom>
      <CardColumns>
        {data.projects.map((project) => {
          return (
            <Card key={project.id} className='text-center'>
              <Card.Img variant="top" src={project.imageSrc} />
              <Card.Body>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <Card.Title className="d-inline-block">
                      {project.title}
                    </Card.Title>
                    <Card.Text>
                      {project.para}
                    </Card.Text>
                    
                  </a>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
      </Fade>
      <a href='https://github.com/Bhaskar-maity' target='blank'> <Button variant="primary" className='resume-button' style={{background:'#692ba8'}}>SEE MORE</Button></a>
    </div>
  </section>
  )
}
 
export default Work;