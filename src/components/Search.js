import React, { useState, useEffect } from "react";

const Search = () => {
    const [term, setTerm] = useState('')
    console.log("I will be every rerender")
    useEffect(() => {
      console.log('I only run once')
    }, [])
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter searched term</label>
          <input value={term} onChange={e => setTerm(e.target.value)} className="input"></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
