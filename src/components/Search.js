import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  console.log(result);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };
    if (term) {
      search();
    }
  }, [term]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter searched term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
