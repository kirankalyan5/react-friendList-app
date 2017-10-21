import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './FriendList.css';
import FriendListItem from '../FriendListItem/FriendListItem'
import Paginator from '../Paginator/Paginator'

class FriendList extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      friendsPerPage: 2
    }
    this.handlePageNumberClick = this.handlePageNumberClick.bind(this)
  }

  handlePageNumberClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    const { currentPage, friendsPerPage } = this.state
    const { friends } = this.props
    const reverserdArray = friends.slice().reverse()

    // Logic for displaying friends per page
    const indexOfLastFriend = currentPage * friendsPerPage
    const indexOfFirstFriend = indexOfLastFriend - friendsPerPage
    const currentFriends = reverserdArray.slice(indexOfFirstFriend, indexOfLastFriend)

    const renderFriends = currentFriends.map((friend, index) => {
      return (
        <FriendListItem
          key={index}
          id={index}
          name={friend.name}
          sex={friend.sex}
          starred={friend.starred}
          {...this.props.actions} />
      );
    })

    return (
      <div>
        <ul className={styles.friendList}>
          {renderFriends}
        </ul>
        <Paginator totalContent={friends.length}
          onPageNumberChange={this.handlePageNumberClick}
          contentPerPage={friendsPerPage}
          currentPage={currentPage} />
      </div>
    )
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
