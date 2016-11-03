import React from 'react';
import ExampleContainer from '../../example/containers/ExampleContainer';

export default class ExamplePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ExampleContainer {...this.props.example}/>
        );
    }
}