import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase button was clicked!' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearAll = () => {
        setText('');
    }
    const handleEmailExtractor = () => {
        let regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
        if (text.match(regex) == null) {
            setText("No emails found!");
        } else {
            setText("Extracted Emails : " + text.match(regex) + " ");
        }

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text";    *Wrong way to change the state
    // setText("Updated Text");  //Correct way to change the state
    return (
        <>
            <div className='container my-2'>
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert To LowerCase</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleEmailExtractor}>Extract all e-mails</button>

                <button className="btn btn-primary mx-2 my-2" onClick={handleClearAll}>Clear All Text</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Total Minutes required to read the text: {text.split(" ").length * 0.008}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
