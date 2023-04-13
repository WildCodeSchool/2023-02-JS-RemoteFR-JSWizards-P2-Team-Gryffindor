function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <div className="footer">
            <div className="socials">
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="./assets/facebook-secondary.svg"
                      alt="facebook logo icon"
                      width="32"
                      height="32"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="./assets/twitter-secondary.svg"
                      alt="twitter logo icon"
                      width="32"
                      height="32"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="./assets/instagram-secondary.svg"
                      alt="instagram logo icon"
                      width="32"
                      height="32"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="./assets/youtube-secondary.svg"
                      alt="youtube logo icon"
                      width="32"
                      height="32"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <form
                id="contact_form"
                action="#"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="row">
                  <input
                    id="username"
                    className="input"
                    name="name"
                    type="text"
                    placeholder="Username"
                    size="30"
                  />
                  <span id="name_validation" className="error_message" />
                </div>
                <div className="row">
                  <br />
                  <input
                    id="email"
                    className="input"
                    name="email"
                    type="text"
                    placeholder="courriel@exemple.com"
                    size="30"
                  />
                  <br />
                  <span id="email_validation" className="error_message" />
                </div>
                <div className="row">
                  <br />
                  <textarea
                    id="message"
                    className="input"
                    name="message"
                    placeholder="Type your text here"
                    rows="7"
                    cols="30"
                  />
                  <br />
                  <span id="message_validation" className="error_message" />
                </div>

                <input id="submit_button" type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright 2023 © - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
