import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";

import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const form = useRef(null);

  const notify = (message) => {
    toast[message]("Success, your message was sent!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.user_email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_lwojhle",
        "template_1kgkty5",
        e.target,
        "AsJ3rbV5H9oTVu7ox"
      )
      .then(
        (result) => {
          console.info(result.text);
          notify("success");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          notify("error", "Oops, something went wrong!");
        }
      );
  };

  return (
    <>
      <footer className="flex gap-16 justify-center items-start px-8 bg-dark py-6">
        <div>
          <ul className="flex flex-col space-y-4 justify-between">
            <li className="github">
              <a href="https://github.com/WildCodeSchool/2023-02-JS-RemoteFR-JSWizards-P2-Team-Gryffindor">
                <img src="./icon/github.svg" alt="github logo icon" />
              </a>
            </li>
            <li className="twitter">
              <a href="https://www.twitter.com">
                <img src="./icon/twitter.svg" alt="twitter logo icon" />
              </a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com">
                <img src="./icon/instagram.svg" alt="instagram logo icon" />
              </a>
            </li>
            <li className="youtube">
              <a href="https://www.youtube.com">
                <img src="./icon/youtube.svg" alt="youtube logo icon" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <form
            className="flex flex-col space-y-6 items-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="items-start bg-darkmode rounded outline-none w-[500px]">
              <input
                className="items-start px-5 py-1.5 bg-darkmode rounded outline-none w-full"
                type="text"
                placeholder="username"
                id="text"
                name="name"
              />
            </div>
            <div className="items-start bg-darkmode rounded outline-none w-[500px]">
              <input
                className="items-start px-5 py-1.5 bg-darkmode rounded outline-none w-full"
                type="email"
                placeholder="email@example.com"
                id="email"
                name="user_email"
              />
            </div>
            <div className="w-[500px]">
              <textarea
                className="items-start px-5 py-1.5 bg-darkmode rounded outline-none w-full"
                placeholder="Type your text here"
                name="message"
              />
            </div>
            <input
              className="bg-darkmode rounded px-5 py-1.5 text-primary hover:bg-secondary hover:text-dark"
              type="submit"
              value="Send"
              onClick={notify}
            />
          </form>
          <ToastContainer />
        </div>
      </footer>
      <div className="flex justify-center bg-darkmode py-1.5 text-xs">
        <p>© Gryffindor P2 | WCS 02-23</p>
      </div>
    </>
  );
}
