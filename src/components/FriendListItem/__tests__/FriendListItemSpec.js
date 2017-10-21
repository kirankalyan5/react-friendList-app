import React from 'react'
import {shallow} from 'enzyme'

import FriendListItem from '../FriendListItem'

describe('<FriendListItem />', () => {
    const starFriendCallback = jest.fn()
    const deleteFriendCallback = jest.fn()
    let props = {
        name: 'Kiran',
        sex: 'male',
        deleteFriend: jest.fn(),
        starFriend: jest.fn(),
        starred: false,
        id: 4
    }
    const Component = shallow(<FriendListItem {...props} />)

    it('Should render the given name', () => {
        expect(Component.find('#friendName').text()).toBe('Kiran')
    })

    it('Should trigger deleteFriend callBack ', () => {
        Component.find('#deleteButton').simulate('click')
        expect(props.deleteFriend).toBeCalledWith(4)
    })

    it('Should trigger starFriend callBack when starred', () => {
        Component.find('#starButton').simulate('click')
        expect(props.starFriend).toBeCalledWith(4)
    })

    it('Should have fa-star-o clas when starred is false', () => {
        expect(Component.find('.fa-star-o').length).toBe(1)
        expect(Component.find('.fa-star').length).toBe(0)
    })

    it('Should have fa-star clas when starred is true', () => {
        const updatedProps = {...props, starred: true}

        const Component = shallow(<FriendListItem {...updatedProps} />)

        expect(Component.find('.fa-star-o').length).toBe(0)
        expect(Component.find('.fa-star').length).toBe(1)
    })
})

