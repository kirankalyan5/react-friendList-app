import React from 'react'
import { shallow } from 'enzyme'

import Paginator from '../Paginator'

describe('<Paginator />', () => {
    const callBack = jest.fn()
    const Component = shallow(<Paginator totalContent={4}
        contentPerPage={2}
        onPageNumberChange={callBack}
        currentPage={1} />)

    it('should trigger callback onPageNumberChange', () => {
        Component.find('.pageNumber').first().simulate('click')
        expect(callBack).toBeCalled()
    })

    it('should have on pageNumber--active class on current page number', () => {
        Component.find('.pageNumber').first()
        expect(Component.find('.pageNumber').first().hasClass('pageNumber--active')).toBeTruthy()
    })

    it('should calculate math and render the page numbers based on the totalContent and contentPerPage prop', () => {
        expect(Component.find('.pageNumber').length).toBe(2)
    })
})