import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('testing App component', () => {
    it('should return a single-node wrapper.', () => {
        expect(shallow(<App />).length).toEqual(1);
    });
});
