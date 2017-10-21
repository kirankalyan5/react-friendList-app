import React from 'react'
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
    id: React.PropTypes.string,
    value: React.PropTypes.string,
    label: React.PropTypes.string,
    isChecked: React.PropTypes.bool.isRequired,
    onCheck: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
}

RadioButton.defaultProps = {
    disabled: false
}

export default RadioButton