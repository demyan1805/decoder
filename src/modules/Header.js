import React, {Component} from 'react';
import drawing from '../drawing.svg';
import Decoder from './Decoder';

export default class Header extends React.Component{

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
            <div className="header">
                <img alt="logo" src={drawing} width="50px" height="50px"></img>
                <div className="buttons-wrap">
                    <button id="encode" value="encode" onClick={this.encode}>encode</button>
                    <button id="decode" value="decode" onClick={this.decode}>decode</button>
                </div>

            </div>
        );
    }
}