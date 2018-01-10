import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('should render Hello World text', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.text()).toBe('Hello World');
});