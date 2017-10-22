import React from 'react'
import {shallow} from 'enzyme'

import FriendList from '../FriendList'

describe('<FriendList />', () => {
    const friends = [
        {
            name: 'Theodore Roosevelt',
            sex: 'male',
            starred: true
          },
          {
            name: 'Sara george',
            sex: 'female',
            starred: false
          },
          {
            name: 'Sara george',
            sex: 'female',
            starred: false
          }
    ]
    const actions={
        addFriend: jest.fn(),
        deleteFriend: jest.fn(),
        starFriend: jest.fn()
    }
    const Component = shallow(<FriendList friends={friends}
        actions={actions}/>)
    it('Should display 2 FriendListItem per page', () => {
        expect(Component.find('FriendListItem').length).toBe(2)
    })

    it('Should set page number click to current index', () => {
        const eventMock = {
            target: {
                id: 2
            }
        }
        Component.find('Paginator').props().onPageNumberChange(eventMock)
        expect(Component.state().currentPage).toBe(2)
    })
})