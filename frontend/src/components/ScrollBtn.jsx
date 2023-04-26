import { useEffect, useState } from "react";

export default function ScrollBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    // Smooth scrolling is not working as attended with Chrome browser
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 inline-block rounded-full bg-dark p-3 shadow-[0_1px_12px_-4px_#fff4e2] transition duration-100 ease-in-out hover:shadow-[0_1px_10px_1px_#FFD075] focus:bg-secondary focus:shadow-[0_1px_10px_1px_#282E32] focus:outline-none focus:ring-0 ${
        isVisible ? "" : "hidden"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        strokeWidth="2.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
