import React from "react";
import wp from "../images/w.png";

const Contact = () => {
  return (
    <footer>
      <div className="container center-text">
        <ul className="social-icons">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100006294102342"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon icon-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="tel:+84 36 8841501"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="WP" src={wp} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
