import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import RadioButton from '../RadioButton/RadioButton'
import styles from './AddFriendInput.css'

class AddFriendInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      name: '',
      sex: '',
      hasError: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyPressSubmit = this.handleKeyPressSubmit.bind(this)
    this.handleRadioCheck = this.handleRadioCheck.bind(this)
  }

  handleRadioCheck(value) {
    this.setState({sex: value})
    if(this.state.name) {
      this.setState({hasError: false})
    }
  }

  handleChange(e) {
    this.setState({
      name: e.target.value.trim()
    })
    if(this.state.sex) {
      this.setState({hasError: false})
    }
  }

  handleKeyPressSubmit(e) {
    const { name, sex } = this.state
    if (name && sex && e.which === 13) {
      this.props.addFriend({ name, sex })
      this.setState({
        name: '',
        sex: '',
        hasError: false
      })
    }
  }

  handleSubmit() {
    const { name, sex } = this.state
    if (name && sex) {
      this.props.addFriend({ name, sex })
      this.setState({
        name: '',
        sex: '',
        hasError: false
      })
    } else {
      this.setState({ hasError: true })
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.radioGroup}>
          <RadioButton id='male'
            value="male"
            label="Male"
            isChecked={this.state.sex === 'male'}
            onCheck={this.handleRadioCheck} />
          <RadioButton id='female'
            value="female"
            label="Female"
            isChecked={this.state.sex === 'female'}
            onCheck={this.handleRadioCheck} />
        </div>
        <div className={styles.fieldWrapper}>
          <input
            type="text"
            autoFocus="true"
            className={classnames('form-control', styles.addFriendInput)}
            placeholder="Type the name of a friend"
            value={this.state.name}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyPressSubmit} />
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={this.handleSubmit}>
            <i className="fa fa-arrow-right" />
          </button>
        </div>
        {this.state.hasError &&
          <span className={styles.error}>Please enter the missing details</span>
        }
      </div>
    )
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
}

export default AddFriendInput
