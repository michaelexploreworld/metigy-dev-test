import React from 'react';
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

const Button = ({ 
        primary,
        secondary,
        flat,
        label,
        disabled
    }) => {
        const type = generateType(primary, secondary, flat, disabled);
        const disabledVal = (disabled === true) ? disabled : false;
        return (
            <div className={type} disabled={disabledVal}>
                {label}
            </div>
        )
    };

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


