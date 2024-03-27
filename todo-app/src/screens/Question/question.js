import React, { useEffect, useState } from "react";
import "../Question/question.css";
function Question() {
    const [item, setItem] = useState([
        { id: 1, question: "Which animal is known as the Ship of the Desert?", answer: "", specification: "" },
        { id: 2, question: "Which colour symbolises peace?", answer: "", specification: "" },
        { id: 3, question: "Name the largest planet of our Solar System?", answer: "", specification: "" },
        { id: 4, question: "Name the National Reptile of India?", answer: "", specification: "" },
        { id: 5, question: "Which country is home to the famous ancient monument Stonehenge?", answer: "", specification: "" },
        { id: 6, question: "Which country is known as the Land of the Rising Sun?", answer: "", specification: "" },
        { id: 7, question: "What is the official language of Brazil?", answer: "", specification: "" },
        { id: 8, question: "Which bank is called bankers Bank of India?", answer: "", specification: "" },
        { id: 9, question: "On which river the Uri dam is constructed?", answer: "", specification: "" },
        { id: 10, question: "Which Indian state has a separate constitution?", answer: "", specification: "" },
    ]);
    const handleInput = (id) => {
        if (id === 1 || id === 2 || id === 3 || id === 7 || id === 8) {
            return "checkbox";
        }
        else {
            return "text"
        }
    }
    const handleShow = (text, id) => {
        setItem(item.map((item) => item.id === id ? { ...item, answer: text } : item))
    };
    const handleSpecification = (other, id) => {
        setItem(item.map((item) => item.id === id ? { ...item, specification: other } : item));
    };
    const handleSubmit = () => {
        console.log(item);
    };
    const handleAnswer = (other, id) => {
        setItem(item.map((item) => item.id === id ? { ...item, answer: other } : item));
    };
    useEffect(() => {
        setItem(item.map((item) => ({ ...item, inputType: handleInput(item.id) })));
    }, []);
    return (
        <div className="mainContainer">
            <h1>Answer the questions</h1>
            <div className="questionContainer">
                {item.map((item) => (
                    <div key={item.id} className="questionBox">
                        <h4>#{item.id} {item.question}</h4>
                        {item.inputType === "checkbox" || item.inputType === "text" ? (
                            <div className="radio">
                                {item.inputType === "checkbox" ? (
                                    <div>
                                        <input type="radio" name={`ans_${item.id}`} value="yes" onClick={() => { handleShow("yes", item.id); }} /><label>Yes</label>
                                        <input type="radio" name={`ans_${item.id}`} value="no" onClick={() => { handleShow("no", item.id); }} /><label>No</label>
                                    </div>
                                ) : (
                                    <div className="input">
                                        <input type="text" value={item.answer} placeholder="Mention the answer......" onChange={(e) => handleAnswer(e.target.value, item.id)} />
                                    </div>
                                )}
                            </div>
                        ) : null}
                        <div className="textArea">
                            {item.answer === "yes" &&
                                <textarea rows="4" cols="50" value={item.specification} onChange={(e) => handleSpecification(e.target.value, item.id)} placeholder="Mention Specifications in 25 words......"></textarea>
                            }
                        </div>
                    </div>
                ))
                }
            </div>
            <div className="submit" onClick={handleSubmit}>Submit</div>
        </div>
    )
}
export default Question;