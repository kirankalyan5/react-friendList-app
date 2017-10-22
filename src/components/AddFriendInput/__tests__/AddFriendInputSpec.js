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

    it('Should display error messgae when name is missing on submit', () => {
        Component.setState({name: 'Kiran', sex: ''})
        Component.find('.btn').simulate('click')
        expect(Component.find('#error')).toBeDefined()
        expect(Component.find('#error').text()).toBe('Please enter the missing details')
    })

    it('Should display error messgae when sex is missing on submit', () => {
        Component.setState({name: '', sex: 'male'})
        Component.find('.btn').simulate('click')
        expect(Component.find('#error')).toBeDefined()
        expect(Component.find('#error').text()).toBe('Please enter the missing details')
    })

    it('Should not display error messgae submit when name & sex are filled', () => {
        Component.setState({name: 'Kiran', sex: 'male'})
        Component.find('.btn').simulate('click')
        expect(Component.find('#error').length).toBe(0)
    })

    it('Should set name and hasError to false if sex is not empty', () => {
        Component.setState({name: '', sex: 'male'})
        Component.find('.form-control').simulate('change', {target: {value: 'Kiran'}})
        expect(Component.find('.form-control').props().value).toBe('Kiran')
        expect(Component.find('#error').length).toBe(0)
    })

    it('Should trigger radio button callBack and set haserror to false if name is not empty ', () => {
        Component.setState({name: 'Kiran', sex: ''})
        Component.find('RadioButton').first().props().onCheck()
        expect(Component.find('#error').length).toBe(0)
    })
})