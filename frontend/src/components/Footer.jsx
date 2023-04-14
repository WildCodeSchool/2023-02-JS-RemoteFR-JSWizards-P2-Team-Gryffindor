export default function Footer() {
  return (
    <>
    <div className="flex gap-16 justify-center items-center px-8 bg-dark py-6">
      <div>
        <ul className="flex flex-col space-y-4 justify-between">
          <li className="github">
            <a href="https://www.github.com">
              <img src="./src/assets/icons/github.svg" alt="github logo icon"/>
            </a>
          </li>
          <li className="twitter">
            <a
              href="https://www.twitter.com"
            >
              <img
                src="./src/assets/icons/twitter.svg"
                alt="twitter logo icon"
              />
            </a>
          </li>
          <li className="instagram">
            <a
              href="https://www.instagram.com"
            >
              <img
                src="./src/assets/icons/instagram.svg"
                alt="instagram logo icon"
              />
            </a>
          </li>
          <li className="youtube">
            <a
              href="https://www.youtube.com"
            >
              <img
                src="./src/assets/icons/youtube.svg"
                alt="youtube logo icon"
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <form className="flex flex-col space-y-6 items-end">
          <div className="items-start bg-darkmode rounded outline-none w-[500px]">
            <input className="items-start px-5 py-1.5 bg-darkmode rounded outline-none w-full"
              type="text"
              placeholder="username"
              id="text"
            />
          </div>
          <div className="items-start bg-darkmode rounded outline-none w-[500px]">
            <input className="items-start px-5 py-1.5 bg-darkmode rounded outline-none w-full"
              type="email"
              placeholder="email@example.com"
              id="email"
            />
          </div>
          <div className="w-[500px]">
            <textarea className="items-start px-5 py-1.5 bg-darkmode rounded outline-none w-full"
              placeholder="Type your text here"
            >
            </textarea>
          </div>
          <button className="bg-darkmode rounded px-5 py-1.5 text-primary" type="submit">Send</button>
        </form>
      </div>
    </div>
    <div className="flex justify-center bg-darkmode py-1.5 text-xs">
      <p>© Gryffindor P2 | WCS 02-23</p>
    </div>
    </>
  );
}