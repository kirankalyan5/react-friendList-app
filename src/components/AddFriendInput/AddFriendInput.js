import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    if (name && e.which === 13) {
      this.props.addFriend(name);
      this.setState({ name: '' });
    }
  }
  render() {
    return (
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}



AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
