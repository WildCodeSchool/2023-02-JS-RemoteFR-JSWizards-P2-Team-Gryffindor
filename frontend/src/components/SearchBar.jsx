function SearchBar() {
  return (
    <div className="flex items-center relative">
      <input
        type="search"
        placeholder="Search.."
        className="outline-none py-2 pl-9 pr-4 rounded-md w-80 bg-dark"
      />
      <img src="./public/icon/Glass.svg" className="pl-2 absolute" alt="Loupe" />
    </div>
  );
}

export default SearchBar;
