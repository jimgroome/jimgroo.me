import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const SiteContent = ({ colour }) => {
  const [workModalOpen, setWorkModalOpen] = useState(false);

  const toggleWorkModal = (e) => {
    e.preventDefault();
    setWorkModalOpen(!workModalOpen);
  };

  return (
    <div className="site-content">
      <h1 className="mb-4">Jim Groome</h1>
      <p>Full-stack web developer in Kent.</p>
      <p>Loves HTML, CSS, JS, Python, AWS, JAMstack, and hot drinks.</p>
      <p className="mb-0">
        <a href="#!" onClick={(e) => toggleWorkModal(e)}>
          Work
        </a>{" "}
        ::{" "}
        <a href="https://github.com/jimgroome" rel="noopener noreferrer" target="_blank">
          Github
        </a>{" "}
        ::{" "}
        <a href="mailto:hello@jimgroo.me" rel="noopener noreferrer" target="_blank">
          Email
        </a>
      </p>
      <Modal isOpen={workModalOpen} toggle={toggleWorkModal}>
        <ModalHeader toggle={toggleWorkModal}>Selected recent work</ModalHeader>
        <ModalBody>
          <p>
            Most of my work is for my employer, who do not make their products public. However, here are some freelance
            projects I've worked on recently.
          </p>
          <ul>
            <li>
              <a href="https://nowplaying.jimgroo.me" target="_blank" rel="noopener noreferrer">
                Now playing on BBC 6 Music
              </a>
            </li>
            <li>
              <a href="https://www.wesanitizeservices.com/" target="_blank" rel="noopener noreferrer">
                We Sanitize Services
              </a>
            </li>
            <li>
              <a href="https://fierce-content.com/" target="_blank" rel="noopener noreferrer">
                Fierce Content
              </a>
            </li>
            <li>
              <a href="https://weddingphotos.jimgroo.me/" target="_blank" rel="noopener noreferrer">
                Wedding photos
              </a>
            </li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggleWorkModal} color="secondary">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SiteContent;
