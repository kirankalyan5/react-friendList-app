import reducer from '../friendlist'
import * as types from '../../constants/ActionTypes'

describe('Friends list reducer', () => {
    const initialState = {
        friendsById: [
            {
                name: 'Theodore Roosevelt',
                starred: true
            },
            {
                name: 'Abraham Lincoln',
                starred: false
            }
        ]
    };
    it('Should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual(
            {
                "friendsById": [
                    {
                        "name": "Theodore Roosevelt",
                        "starred": true
                    },
                    {
                        "name": "Abraham Lincoln",
                        "starred": false
                    }
                ]
            }
        )
    })

    it('Should handle ADD_FRIEND', () => {

        expect(
            reducer(initialState, {
                type: types.ADD_FRIEND,
                name: 'kumar'
            })
        ).toEqual(
            {
                "friendsById": [{ "name": "Theodore Roosevelt", "starred": true }, { "name": "Abraham Lincoln", "starred": false }, { "name": "kumar", "starred": false }]
            }
            )
    })

    it('Should handle DELETE_FRIEND', () => {

        expect(
            reducer(initialState, {
                type: types.DELETE_FRIEND,
                id: 0
            })
        ).toEqual(
            {
                "friendsById": [{ "name": "Abraham Lincoln", "starred": false }]
            }
            )
    })
    it('Should handle STAR_FRIEND', () => {

        expect(
            reducer(initialState, {
                type: types.STAR_FRIEND,
                id: 1
            })
        ).toEqual(
            {
                "friendsById": [{ "name": "Theodore Roosevelt", "starred": true }, { "name": "Abraham Lincoln", "starred": true }]
            }
            )
    })
})