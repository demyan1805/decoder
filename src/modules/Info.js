import React, {Component} from 'react';

export default class Info extends React.Component {

    render() {
        return (
            <div className="info-window" id="info-window">
                <h1>Instructions</h1>
                <p>
                    To encode / decode a message, enter the key in the appropriate field and click the button at the top of the page.
                </p>
                <p>
                    The key can be any sequence of characters of any length.
                </p>
            </div>
        );
    }

}