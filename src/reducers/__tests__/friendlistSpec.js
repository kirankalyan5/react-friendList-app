import reducer from '../friendlist'
import * as types from '../../constants/ActionTypes'

describe('Friends list reducer', () => {
    const initialState = {
        friendsById: [
            {
                name: 'Theodore Roosevelt',
                sex: 'male',
                starred: true
            },
            {
                name: 'Abraham Lincoln',
                sex: 'female',
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
                        sex: 'male',
                        "starred": true
                    },
                    {
                        "name": "Abraham Lincoln",
                        sex: 'female',
                        "starred": false
                    }
                ]
            }
        )
    })

    it('Should handle ADD_FRIEND', () => {
        const details = {
            name: 'kumar',
            sex: 'male'
        }
        expect(
            reducer(initialState, {
                type: types.ADD_FRIEND,
                details
            })
        ).toEqual(
            {
                "friendsById": [{ "name": "Theodore Roosevelt", "sex": "male", "starred": true }, { "name": "Abraham Lincoln", "sex": "female", "starred": false }, { "name": "kumar", "sex": "male", "starred": false }]
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
                "friendsById": [{ "name": "Abraham Lincoln", "sex": "female", "starred": false }]
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
                "friendsById": [{ "name": "Theodore Roosevelt", "sex": "male", "starred": true }, { "name": "Abraham Lincoln", "sex": "female", "starred": true }]
            }
            )
    })
})