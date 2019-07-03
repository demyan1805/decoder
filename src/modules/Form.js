import React, {Component} from 'react';
import Decoder from './Decoder';
import copy from '../copy.svg';

export default class Form extends React.Component{

    copyToClipboard() {
        const res = document.getElementById('result');
        res.select();
        document.execCommand('copy');
    }


    render() {
        return (
            <div className="main">
                <form className="decoder-form">
                    <input type="text" id="key" placeholder="Enter key here:"/>
                    <textarea id="message" placeholder="Enter your message here:"></textarea>
                </form>
                <div className="result-block">
                    <textarea className="result" id="result" readOnly></textarea>
                    <button className="copy" onClick={this.copyToClipboard}>
                        <img alt="copy" src={copy} width="27px" height="30px"></img>
                    </button>
                </div>
            </div>
        );
    }
}