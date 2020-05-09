import React from "react";

function Contact() {
    return (
        <div class="container-sm content">
            <div class="row">
                <h2>About Me</h2>
            </div>
            <div class="d-inline-flex conBorder row col">
                <form style="min-width:100%">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name:</label>
                        <input
                            type="name"
                            class="form-control col"
                            placeholder="First Last"
                        />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email:</label>
                        <input
                            type="email"
                            class="form-control"
                            placeholder="name@example.com"
                        />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message:</label><br />
                        <textarea
                            class="form-control"
                            id="Textarea"
                            rows="7"
                            style="min-width: 100%"
                        ></textarea>
                    </div>
                    <br />
                    <div class="form-group">
                        <button type="button" class="btn btn-outline-secondary">
                            Submit
            </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;