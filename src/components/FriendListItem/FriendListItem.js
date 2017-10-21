import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import styles from './FriendListItem.css';

const FriendListItem = (props) => {
  return (
    <li className={styles.friendListItem}>
      <div className={styles.friendInfos}>
        <div>
          <i className={classnames('fa', {
            'fa-male': props.sex === 'male',
            'fa-female': props.sex === 'female'
          })} />
          <span id='friendName'>{props.name}</span></div>
        <div>
          <small>xx friends in common</small>
        </div>
      </div>
      <div className={styles.friendActions}>
        <button className={`btn btn-default ${styles.btnAction}`}
          id="starButton"
          onClick={() => props.starFriend(props.id)}>
          <i className={classnames('fa', {
            'fa-star': props.starred,
            'fa-star-o': !props.starred
          })} />
        </button>
        <button className={`btn btn-default ${styles.btnAction}`}
          id="deleteButton"
          onClick={() => props.deleteFriend(props.id)}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </li>
  )
}


FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired
};

export default FriendListItem
