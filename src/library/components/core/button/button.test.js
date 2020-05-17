import React from 'react';
import { shallow } from '../../../../../enzyme';

import { Button } from './index';

describe('<Button />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Button />);
    });

    it('should have button with icon as children', () => {
        wrapper.setProps({ icon: 'fa fa-home' });
        expect(wrapper.contains(<i className='fa fa-home'></i>)).toEqual(true);
    });
});