import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Paginator.css'

const Paginator = ({totalContent, contentPerPage, onPageNumberChange, currentPage}) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalContent / contentPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className={'pageNumbers'}>
            {pageNumbers.map(number => {
                let pageNumberStyle = classnames('pageNumber', {
                    'pageNumber--active': currentPage === number
                })
                return (
                    <li
                        className={pageNumberStyle}
                        key={number}
                        id={number}
                        onClick={onPageNumberChange}>
                        {number}
                    </li>
                )
            })}
        </ul>
    )

}

Paginator.propTypes = {
    totalContent: PropTypes.number.isRequired,
    contentPerPage: PropTypes.number.isRequired,
    onPageNumberChange: PropTypes.func,
    currentPage: PropTypes.number.isRequired
}

export default Paginator