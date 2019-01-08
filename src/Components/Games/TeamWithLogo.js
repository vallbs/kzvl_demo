import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './TeamWithLogo.styles';

const teamWithLogo = props => {
    return (
        <div className={props.classes.wrapper}>
            <img className={props.classes.teamLogo} src={props.teamLogo}/>
            <div className={props.classes.teamName}>{props.teamName}</div>
        </div>
    );
};

export default withStyles(styles)(teamWithLogo);