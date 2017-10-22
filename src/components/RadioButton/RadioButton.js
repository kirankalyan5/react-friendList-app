import React from 'react'
import PropTypes from 'prop-types'
import styles from './RadioButton.css'

const RadioButton = (props) => {

    const handleOnCheck = () => {
        if (!props.isChecked) {
            props.onCheck(props.value)
        }
    }

    return (
        <div>
            <input type="radio"
                id={props.id}
                value={props.value}
                onChange={handleOnCheck}
                checked={props.isChecked}
                disabled={props.disabled} />
            <label htmlFor={props.id}>
                <span className={styles.radioFieldTitle}>{props.label}</span>
            </label>
        </div>
    )
}



RadioButton.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    isChecked: PropTypes.bool.isRequired,
    onCheck: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}

RadioButton.defaultProps = {
    disabled: false
}

export default RadioButton