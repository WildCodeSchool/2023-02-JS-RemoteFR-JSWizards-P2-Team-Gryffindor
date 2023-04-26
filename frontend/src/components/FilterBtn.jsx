export default function FilterBtn() {
  return (
    <div className="align-center flex">
      <button
        type="button"
        className="btn btn-light shadow-sm"
        data-toggle="collapse"
        data-target="#filters"
      >
        <img src="./icon/filter.svg" alt="filter button" />
      </button>
    </div>
  );
}
