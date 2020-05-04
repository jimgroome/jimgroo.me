import React from "react";

const SiteContent = () => {
  return (
    <div className="site-content">
      <h1 className="mb-4">Jim Groome</h1>
      <p>Full-stack web developer in Kent.</p>
      <p>Loves HTML, CSS, JS, Python, AWS, JAMstack, and hot drinks.</p>
      <p className="mb-0">
        <a href="https://github.com/jimgroome" rel="noopener noreferrer" target="_blank">
          Github
        </a>{" "}
        ::{" "}
        <a href="mailto:hello@jimgroo.me" rel="noopener noreferrer" target="_blank">
          Email
        </a>
      </p>
    </div>
  );
};

export default SiteContent;
