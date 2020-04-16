import React from "react";

function Quote(props) {
  const displayQuote = props.displayQuote ? "block" : "none";
  return (
    <div className="randomQuote-panel" style={{ display: displayQuote }}>
      <div className="randomQuote">
        <p>{props.quote[0]}</p>
        <p>{props.quote[1]}</p>
      </div>
      <button className="randomImage-closeBtn" onClick={props.closeQuote}>
        X
      </button>
    </div>
  );
}

export default Quote;
