import React from 'react';

const Quote = (props) => {
    return(
        <div>
            <button className="btn btn-success mb-3" onClick={props.onClick}>New Quote</button>
            <h5>{props.quote}</h5>
            <p>{props.author}</p>
        </div>
    );
};

export default Quote;