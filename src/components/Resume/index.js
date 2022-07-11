import React from "react";

export default function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Nitish Doss</h2>
          <p class="mt-5">
            <a href="https://www.linkedin.com/in/nitishdoss/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>
          <a
            href="src/images/Nitish_Doss_Resume.pdf"
            class="link"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
}