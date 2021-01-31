import React, { useState } from 'react';

import '/Users/camilapv/Desktop/ACADEMLO/REACT/firstdue/qg-two/node_modules/bootstrap/dist/css/bootstrap.css';

import QuoteList from '../quotes.json';
import Quote from './Quote.js';

const QuoteBox = (props) => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [currentColor, setColor] = useState('bg-dark');

    const handleClick = () => {
        let randomQuotes = QuoteList.quotes.sort(() => Math.random() - 0.5);
        randomQuotes.forEach((element) => {
            setAuthor(element.author);
            setQuote(element.quote);
        });
        let bgColors = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark', 'bg-white'];
        let randomColors = bgColors.sort(() => Math.random() - 0.5);
        let item = document.getElementById('app');

        let changedColor = randomColors.find((item) => item !== {currentColor});
        item.classList.remove(currentColor);
        item.classList.add(changedColor);
        setColor(changedColor);
    };
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5">
                    <div className="bg-secondary text-light p-4 text-center rounded">
                        <h1 className="mb-4">QUOTE GENERATOR</h1>
                        <Quote onClick={handleClick} quote={quote} author={author}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;