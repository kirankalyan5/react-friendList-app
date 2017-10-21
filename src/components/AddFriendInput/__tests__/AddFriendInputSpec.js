import React from 'react'
import {shallow} from 'enzyme'

import AddFriendInput from '../AddFriendInput'

describe('<AddFriendInput />', () => {
    const callback = jest.fn()
    const Component = shallow(<AddFriendInput addFriend={callback}/>)

    it('Should set name on onChange event', () => {
        Component.find('.form-control').simulate('change', {target: {value: 'Kiran'}})
        expect(Component.find('.form-control').props().value).toBe('Kiran')
    })

    it('Should not trigger callback when keyDown is not enter key and if value is empty', () => {
        Component.setState({name: '', sex: ''})
        Component.find('.form-control').simulate('keyDown', { which: 13})
        expect(callback).not.toBeCalled()
    })

    it('Should trigger callback when keyDown is enter key', () => {
        Component.setState({name: 'Kiran', sex: 'male'})
        Component.find('.form-control').simulate('keyDown', { which: 13})
        expect(callback).toBeCalledWith({"name": "Kiran", "sex": "male"})
    })
})