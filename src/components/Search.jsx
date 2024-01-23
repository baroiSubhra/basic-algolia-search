import { useState } from "react";

function Search({ search }) {
  let [querry, setQuerry] = useState("");
  const submitQuerry = (e) => {
    e.preventDefault();
    search(querry);
  };
  return (
    <>
      <form onSubmit={submitQuerry}>
        <input
          type="text"
          id="searchQuerry"
          placeholder="Enter Search Querry"
          autoComplete="off"
          value={querry}
          onChange={(e) => {
            setQuerry(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default Search;
