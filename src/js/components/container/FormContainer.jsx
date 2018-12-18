import React, { Component } from "react";
import ReactDOM from "reactdom";

class FormContainer extends Component {
    constructor() {
        super();

        this.state = {
            title: ""
        };
    }

    render() {
        return(
            <form id="article-form">
            </form>
        );
    }
}

export default FormContainer;