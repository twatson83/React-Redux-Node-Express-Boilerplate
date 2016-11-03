import React from "react";
import {connect} from "react-redux";

import ExamplePage from "../components/ExamplePage";

const mapStateToProps = (state) => {
    return {
        example: state.example
    };
};

const ExampleContainer = connect(mapStateToProps)(ExamplePage);
export default ExampleContainer;
