import React from 'react';
import {expect} from 'chai';
import Example from '../../components/Example';
import { shallow } from 'enzyme';
import { example }  from '../../initialState';

describe("components", () => {

    let state, functions, props;

    beforeEach(() => {
        state = example();
        functions = {
            requestExampleInstances: () => {}
        };
        props = {
            ...state,
            ...functions
        };
    });

    describe("<Example />", () => {

        it("should render a div", () => {
            const wrapper = shallow(<Example {...props} />);
            expect(wrapper.find("div")).to.have.lengthOf(1);
        });

    });

});
