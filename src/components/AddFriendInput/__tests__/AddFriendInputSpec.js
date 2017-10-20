import React from 'react';
import {shallow} from 'enzyme';

import AddFriendInput from '../AddFriendInput'

describe('<AddFriendInput />', () => {
    const callback = jest.fn()
    const Component = shallow(<AddFriendInput addFriend={callback}/>)

    it('Should set name on onChange event', () => {
        Component.simulate('change', {target: {value: 'Kiran'}})
        expect(Component.props().value).toBe('Kiran')
    })

    it('Should not trigger callback when keyDown is not enter key and if value is empty', () => {
        Component.simulate('keyDown', {target: {value: ''}, which: 13})
        expect(callback).not.toBeCalled()
    })

    it('Should trigger callback when keyDown is enter key', () => {
        Component.simulate('keyDown', {target: {value: 'Kumar'}, which: 13})
        expect(callback).toBeCalledWith('Kumar')
    })
})