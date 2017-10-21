import React, { Component, PropTypes } from 'react';
import './FriendList.css';
import FriendListItem from '../FriendListItem/FriendListItem';
import classnames from 'classnames'

class FriendList extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      friendsPerPage: 2
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  render() {
    const { currentPage, friendsPerPage } = this.state
    const { friends } = this.props
    // Logic for displaying friends per page
    const indexOfLastFriend = currentPage * friendsPerPage
    const indexOfFirstFriend = indexOfLastFriend - friendsPerPage
    const currentFriends = friends.slice(indexOfFirstFriend, indexOfLastFriend)

    const renderFriends = currentFriends.map((friend, index) => {
      return (
        <FriendListItem
          key={index}
          id={index}
          name={friend.name}
          starred={friend.starred}
          {...this.props.actions} />
      );
    })

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(friends.length / friendsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      let pageNumberStyle = classnames('pageNumber', {
        'pageNumber--active': currentPage === number
      })
      return (
        <li
          className={pageNumberStyle}
          key={number}
          id={number}
          onClick={this.handleClick}>
          {number}
        </li>
      )
    })

    return (
      <div>
        <ul className={'friendList'}>
          {renderFriends}
        </ul>
        <ul className={'pageNumbers'}>
          {renderPageNumbers}
        </ul>
      </div>
    )
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
