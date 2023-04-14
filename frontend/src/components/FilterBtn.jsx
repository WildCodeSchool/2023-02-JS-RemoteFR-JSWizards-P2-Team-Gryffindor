export default function Filterbtn() {
  return (
    <div className="bg-grey col-12 mt-3 align-middle justify-content-center flex">
      <button
        type="button"
        className="btn btn-light mr-10 shadow-sm"
        data-toggle="collapse"
        data-target="#filters"
      >
        Filters <i className="fa fa-filter" />
      </button>
    </div>
  );
}
