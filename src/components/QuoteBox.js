import React, { useState } from 'react';
// importing react-share so users have the option to share the quote on twitter.
import { TwitterShareButton, TwitterIcon } from "react-share";

import '/Users/camilapv/Desktop/ACADEMLO/REACT/firstdue/qg-two/node_modules/bootstrap/dist/css/bootstrap.css';

import QuoteList from '../quotes.json';
import Quote from './Quote.js';

const QuoteBox = () => {
    // making the array from quotes.json random. 
    let randomQuotes = QuoteList.quotes.sort(() => Math.random() - 0.5);
    // setting states with the useState hook for quote, author, and background color. 
    const [quote, setQuote] = useState(randomQuotes[0].quote);
    const [author, setAuthor] = useState(randomQuotes[0].author);
    const [currentColor, setColor] = useState('bg-dark');

    const handleClick = () => {
        // changing the state of quote and author, making sure that the quote does not repeat itself. 
        let newQuote = randomQuotes.find((element) => element.quote !== quote);
        setAuthor(newQuote.author);
        setQuote(newQuote.quote);

        // created an array 'bgColors' with the background colors options that bootstrap offers, randomized that array, located app through its id, and added as a class the new color from the randomized array, making sure the color its not the same as the previous one, also deleting the class for the old background color and changing the state to the new color. 
        let bgColors = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark', 'bg-white'];
        let randomColors = bgColors.sort(() => Math.random() - 0.5);
        let app = document.getElementById('app');
        let newColor = randomColors.find((item) => item !== currentColor);
        app.classList.remove(currentColor);
        app.classList.add(newColor);
        setColor(newColor);
    };
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card h-100 bg-secondary text-light p-4 text-center rounded">
                        <div className="card-body">
                            <h1 className="card-title mb-4">QUOTE GENERATOR</h1>
                            <button className="btn btn-success mb-3" onClick={handleClick}>New Quote</button>
                            <Quote quote={quote} author={author}/>
                            <div className="d-flex justify-content-center">
                                <TwitterShareButton title={quote} url={author} id="twitter">
                                    <TwitterIcon size={50} round={true} />
                                </TwitterShareButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;