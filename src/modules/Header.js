import React, {Component} from 'react';
import drawing from '../drawing.svg';
import Decoder from './Decoder';
import info from '../info.svg'

export default class Header extends React.Component{

    encode() {
        const key = document.getElementById('key').value;
        const source = document.getElementById('message').value;
        const res = document.getElementById('result');
        const decoder = new Decoder(key, source);
        res.value = decoder.encodeWord(key, source);


    }

    decode() {
        const key = document.getElementById('key').value;
        const source = document.getElementById('message').value;
        const res = document.getElementById('result');
        const decoder = new Decoder(key, source);
        res.value = decoder.decodeWord(key, source);
    }

    showInfo() {
        const infoWindow = document.getElementById('info-window');
        infoWindow.classList.toggle('active');
    }


    render() {
        return (
            <div className="header">
                <img className="logo" alt="logo" src={drawing} width="50px" height="50px"></img>
                <div className="buttons-wrap">
                    <button id="encode" value="encode" onClick={this.encode}>encode</button>
                    <button id="decode" value="decode" onClick={this.decode}>decode</button>
                </div>
                <button id="info" onClick={this.showInfo}><img alt="info" src={info} width="50px" height="50px"></img></button>

            </div>
        );
    }
}