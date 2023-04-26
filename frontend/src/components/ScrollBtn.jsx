export default function ScrollBtn() {
  return (
    <button
      type="button"
      className="fixed bottom-5 right-5 inline-block rounded-full bg-danger p-2 uppercase leading-normal shadow-[0_1px_12px_-4px_#fff4e2] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_1px_10px_1px_#FFD075] focus:bg-secondary focus:shadow-[0_1px_10px_1px_#282E32] focus:outline-none focus:ring-0 active:bg-primary"
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
