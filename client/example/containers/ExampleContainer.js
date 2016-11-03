import React from "react";
import {connect} from "react-redux";

import { requestExampleInstances } from "../actions/exampleActions";

import Example from "../components/Example";

const mapStateToProps = (state, ownProps) => {
    return ownProps;
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestExampleInstances: cid => dispatch(requestExampleInstances(cid))
    }
};

const ExampleContainer = connect(mapStateToProps, mapDispatchToProps)(Example);
export default ExampleContainer;
