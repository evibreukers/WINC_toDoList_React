import React from "react";

function Quote(props) {
  const displayQuote = props.displayQuote ? "block" : "none";
  return (
    <div className="random-quote-panel" style={{ display: displayQuote }}>
      <div className="random-quote">
        <p>{props.quote[0]}</p>
        <p>{props.quote[1]}</p>
      </div>
      <button className="quote-closeBtn" onClick={props.closeQuote}>
        X
      </button>
    </div>
  );
}

export default Quote;
