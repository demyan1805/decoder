import React, {Component} from 'react';
import Decoder from './Decoder';

export default class Form extends React.Component{

    encode() {
        let key = document.getElementById('key').value;
        let source = document.getElementById('message').value;
        const res = document.getElementById('result');
        const decoder = new Decoder(key, source);
        res.innerText = decoder.encodeWord(key, source);


    }

    decode() {
        let key = document.getElementById('key').value;
        let source = document.getElementById('message').value;
        const res = document.getElementById('result');
        const decoder = new Decoder(key, source);
        res.innerText = decoder.decodeWord(key, source);
    }


    render() {
        return (
            <div className="main">
                <form className="decoder-form">
                    <input type="text" id="key" placeholder="Enter key here:"/>
                    <textarea id="message" placeholder="Enter your message here:"></textarea>
                </form>
                <div className="result" id="result"></div>
            </div>
        );
    }
}