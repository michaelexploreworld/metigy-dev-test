import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const TYPES = {
    DEFAULT: 'default',
    DEFAULT_DISABLE: 'defaultDisable',
    PRIMARY: 'primary',
    PRIMARY_DISABLE: 'primaryDisable',
    SECONDARY: 'secondary',
    SECONDARY_DISABLE: 'secondaryDisable',
    FLAT: 'flat',
    FLAT_DISABLE: 'flatDisable',
};

const generateType = (primary, secondary, flat, disabled) => {
    if(primary === true) {
        if(disabled === true) {
            return TYPES.PRIMARY_DISABLE;
        } else {
            return TYPES.PRIMARY;
        }
    } else if(secondary === true) {
        if(disabled === true) {
            return TYPES.SECONDARY_DISABLE;
        } else {
            return TYPES.SECONDARY;
        }
    } else if(flat === true) {
        if(disabled === true) {
            return TYPES.FLAT_DISABLE;
        } else {
            return TYPES.FLAT;
        }
    } else {
        if(disabled === true) {
            return TYPES.DEFAULT_DISABLE;
        } else {
            return TYPES.DEFAULT;
        }
    }
}

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            type: TYPES.DEFAULT,
            disabled: false,
            label: ""
        };
    }

    updateState = (primary, secondary, flat, label, disabled)  => {
        const newType = generateType(primary, secondary, flat, disabled);
        const newDisableVal = (disabled === true) ? disabled: false;
        const newLabel = label || ""; 

        this.setState({
            type: newType,
            disabled: newDisableVal,
            label: newLabel
        });
    }

    componentWillMount = () => {
        const { 
            primary, 
            secondary,
            flat,
            label,
            disabled
        } = this.props;
        this.updateState(primary, secondary, flat, label, disabled);
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props) !== JSON.stringify(prevProps)) {
            const { 
                primary, 
                secondary,
                flat,
                label,
                disabled
            } = this.props;
            this.updateState(primary, secondary, flat, label, disabled);
        }
    }

    render = () => {
        const { type, disabled, label } = this.state;
        return (
            <div className={type} disabled={disabled} >
                {label}
            </div>
        )
    }
}

Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    flat: PropTypes.bool,
    label: PropTypes.string,
    disabled: PropTypes.bool
};

export {
    TYPES,
    generateType,
    Button
};


