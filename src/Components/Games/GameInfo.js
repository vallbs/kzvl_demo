import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import './GameInfo.css';

const styles = {
    infoWrapper: {
        display: 'flex',
        margin: '4px 8px 8px 8px',
    },
    infoItem: {
        flexGrow: 1,
        fontSize: '10px',
        // border: '1px solid red'
    },
    infoItemRight: {
        flexGrow: 1,
        fontSize: '10px',
        // paddingRight: '4px',
        textAlign: 'right',
        // border: '1px solid red'
    },
    infoItemLeft: {
        flexGrow: 1,
        fontSize: '10px',
        // paddingLeft: '4px',
        textAlign: 'left',
        // border: '1px solid red'
    }
};

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