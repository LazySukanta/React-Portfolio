import React from "react";
import { Card, CardColumns, Button } from "react-bootstrap";

import Fade from "react-reveal/Fade";

import data from "../mydata";

const Work = () => {
  return (
    <section id="projects" className="">
      <div className="container text-center">
        <hr class="ribbon" />
        <h2 className="mt-5" style={{ textAlign: "center", color: "orange" }}>
          Projects
        </h2>

        <Fade bottom>
          <CardColumns>
            {data.projects.map((project) => {
              return (
                <Card key={project.id} className="text-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card.Img variant="top" src={project.imageSrc} />
                  </a>
                  <Card.Body>
                    <Card.Title className="d-inline-block">
                      {project.title}
                    </Card.Title>
                    <Card.Text>{project.para}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Fade>
        <a href="https://github.com/LazySukanta" target="blank">
          {" "}
          <Button
            variant="primary"
            className="resume-button"
            style={{ background: "greay" }}
          >
            SEE MORE
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Work;
