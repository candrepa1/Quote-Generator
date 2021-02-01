import React from 'react';

// a centered div container with two child elements: one for the quote, another for the author. quote and author are passed as props on the QuoteBox component.
const Quote = (props) => {
    return(
        <div className="d-flex flex-column align-items-center">
            <h5 className="card-text mt-2">{props.quote}</h5>
            <p className="card-text mt-2 mb-3">- {props.author}</p>
        </div>
    );
};

export default Quote;