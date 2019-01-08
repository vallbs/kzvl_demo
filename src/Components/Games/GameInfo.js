import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import styles from './GameInfo.styles';

const gameInfo = props => {
    return (
        <div className={props.classes.infoWrapper}>
            <span className={props.classes.infoItemLeft}>{props.division}</span>
            <span className={props.classes.infoItem}>{props.date}-{props.time}</span>
            <a className={props.classes.infoItemRight}>{props.location}</a>
        </div>
    );
};

export default withStyles(styles)(gameInfo);