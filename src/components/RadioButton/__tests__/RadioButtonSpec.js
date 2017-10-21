import React from 'react'
import { shallow } from 'enzyme'

import RadioButton from '../RadioButton'

describe('<RadioButton />', () => {
    const callback = jest.fn()
    const Component = shallow(<RadioButton label="Test"
        value="test"
        isChecked={false}
        onCheck={callback} />)

    it('Should trigger callBack onCheck and when isChecked is false', () => {
        Component.find('input').simulate('change')
        expect(callback).toBeCalled()
    })

    it('Should display label passes as props', () => {
        expect(Component.find('label').text()).toBe('Test')
    })

    it('Should not trigger callback if the idChecked is true', () => {
        const callback = jest.fn()
        const Component = shallow(<RadioButton label="Test"
            value="test"
            isChecked={true}
            onCheck={callback} />)
        Component.find('input').simulate('change')
        expect(callback).not.toBeCalled()
    })
})
