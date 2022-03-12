import React, { useState } from "react";
import "./FindComponent.css";
import KeywordCard from "./KeywordCard";

export default function FindComponent() {
  const [includeKeyword, setIncludeKeyword] = useState([]);
  const [excludeKeyword, setExcludeKeyword] = useState([]);
  const [newIncKeyword, setNewIncKeyword] = useState();
  const [newExcKeyword, setNewExcKeyword] = useState();

  const includeChangeHandler = (e) => {
    setNewIncKeyword(e.target.value);
  };

  const includeBtnHandler = () => {
    setIncludeKeyword((oldvalue) => [...oldvalue, newIncKeyword]);
    setNewIncKeyword("");
  };

  const delInckeyword = (id) => {
    const updatedIncKeywords = includeKeyword.filter((keyword, index) =>
      id !== index ? keyword : ""
    );
    setIncludeKeyword(updatedIncKeywords);
  };

  // Exclude buttons code

  const excludeChangeHandler = (e) => {
    setNewExcKeyword(e.target.value);
  };

  const excludeBtnHandler = () => {
    setExcludeKeyword((oldvalue) => [...oldvalue, newExcKeyword]);
    setNewExcKeyword("");
  };

  const delExckeyword = (id) => {
    const updatedExcKeywords = excludeKeyword.filter((keyword, index) =>
      id !== index ? keyword : ""
    );
    setExcludeKeyword(updatedExcKeywords);
  };

  return (
    <div>
      <div className="header2">
        <h1>Find a Recipe</h1>
      </div>

      <div className="findcomponent-container">
        <hr />
        <div>
          <label htmlFor="">Recipe or Keyword</label>
          <div className="inputBox">
            <input type="text" name="keyword" id="" />
          </div>
        </div>
        <div>
          <label>Include these ingredients</label>
          <div className="inputBox">
            <input
              type="text"
              onChange={includeChangeHandler}
              value={newIncKeyword}
            />
            <label onClick={includeBtnHandler}>+</label>
          </div>
        </div>

        <div className="included-keywords">
          {includeKeyword.map((keywordData, key) => {
            return (
              <KeywordCard 
                key={key}
                data={keywordData}
                id={key}
                delFn={delInckeyword}
              />
            );
          })}
        </div>

        <div>
          <label htmlFor="">Exclude these ingredients</label>
          <div className="inputBox">
            <input
              type="text"
              onChange={excludeChangeHandler}
              value={newExcKeyword}
            />
            <label onClick={excludeBtnHandler}>-</label>
          </div>
        </div>

        <div className="excluded-keywords">
          {excludeKeyword.map((keywordData, key) => {
            return (
              <KeywordCard style={{"backgroundColor":"red"}}
                key={key}
                data={keywordData}
                id={key}
                delFn={delExckeyword}
              />
            );
          })}
        </div>

        <button type="submit">SEARCH</button>
      </div>
    </div>
  );
}
