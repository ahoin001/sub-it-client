import React from 'react';

import {
    AlertContainer,
    AlertText,
    CustomAlertContainer,
    CustomAlertText
} from './Alert-Styles'

import Warning  from './Icons/Warning.svg';
import Info from './Icons/Info.svg';
import Danger from './Icons/Danger.svg';
import Success from './Icons/Success.svg';

const Alert = (props) => {

    let icon;

    switch (props.type) {

        case 'isWarning':
            icon = Warning
            break;

        case 'isInfo':
            icon = Info
            break;

        case 'isDanger':
            icon = Danger
            break;

        case 'isSuccess':
            icon = Success
            break;

        default:
            break;
    }

    return (
        <CustomAlertContainer type={props.type} center={props.centered}>

            <img src={icon} alt="Caution Logo" width='30px' />

            <CustomAlertText type={props.type} >
                {props.children}
            </CustomAlertText>

        </CustomAlertContainer>
    );
};

export default Alert;