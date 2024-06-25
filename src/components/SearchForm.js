export default function SearchForm() {
  let searchTerm = "";

  function handleSubmit(event) {
    event.preventDefault();

    console.log("submit");
  }

  return (
    <div style={{ border: "1px solid green" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input name="searchTerm" id="searchTerm" />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </div>
  );
}