function Results({ results }) {
  const resultsArea = results.map((el) => (
    <div key={el.objectID}>
      <div>
        <h4>{el.title ? el.title : "NA"}</h4>
        <a target="_blank" href={el.url}>
          {el.url ? el.url : "NA"}
        </a>
      </div>
      <div>
        {el.points ? String(el.points) + "points" : "NA"} |{" "}
        {el.author ? "by " + String(el.author) : "NA"} |
        {el.created_at
          ? String(
              new Date().getFullYear() - new Date(el.created_at).getFullYear()
            ) + "years ago"
          : "NA"}
        |{el.num_comments ? String(el.num_comments) + "comments" : "NA"} |
      </div>
    </div>
  ));
  return <>{resultsArea}</>;
}

export default Results;
