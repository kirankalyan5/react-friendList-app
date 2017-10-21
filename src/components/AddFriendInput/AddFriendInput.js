import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import RadioButton from '../RadioButton/RadioButton'
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      sex: 'male'
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value.trim() });
  }

  handleSubmit(e) {
    const {name, sex} = this.state;
    if (name && e.which === 13) {
      this.props.addFriend({name, sex})
      this.setState({
         name: '',
         sex: 'male'
        });
    }
  }
  render() {
    return (
      <div>
        <div className={styles.radioGroup}>
          <RadioButton id='male'
            value="male"
            label="Male"
            isChecked={this.state.sex === 'male'}
            onCheck={(value) => {this.setState({sex: value}) }} />
          <RadioButton id='female'
            value="female"
            label="Female"
            isChecked={this.state.sex === 'female'}
            onCheck={(value) => {this.setState({sex: value}) }} />
        </div>
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)} />
      </div>

    )
  }
}



AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
