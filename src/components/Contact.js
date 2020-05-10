import React from "react";

function Contact() {
    return (
        <div className="container-sm content">
            <div className="row">
                <h2>About Me</h2>
            </div>
            <div className="d-inline-flex conBorder row col">
                <form style={{ minWidth: '100%' }}>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name:</label>
                        <input
                            type="name"
                            className="form-control col"
                            placeholder="First Last"
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message:</label><br />
                        <textarea
                            className="form-control"
                            id="Textarea"
                            rows="7"
                            style={{ minWidth: '100%' }}
                        ></textarea>
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="button" className="btn btn-outline-secondary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default Contact;