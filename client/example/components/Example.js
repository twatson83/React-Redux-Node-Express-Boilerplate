import React, { PropTypes } from 'react';

export default class Example extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.requestExampleInstances(this.props.cid);
    }

    render() {
        return (
            <div>
                {this.props.instances.map(i => <div key={i.id}>{i.value}</div>)}
            </div>
        )
    }
}

Example.propTypes = {
    cid: PropTypes.number.isRequired,
    instances: PropTypes.array.isRequired,
    requesting: PropTypes.bool.isRequired,
    error: PropTypes.object
};
