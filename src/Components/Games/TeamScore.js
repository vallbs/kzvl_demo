import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './TeamScore.styles';

class TeamScore extends Component {
    render() {
        const scoreElement = this.props.sets.map(item => {
            return (
                <span 
                    className={item.win === 3 
                        ? this.props.classes.setPointWin 
                        : this.props.classes.setPointLoose}
                >{item.points}
                </span>
            );
        });

        return (
            <div className={this.props.classes.teamScoreWrapper}>
                { scoreElement }
                <span 
                    className={this.props.setsWin === 3 
                        ? this.props.classes.setsTotalWin 
                        : this.props.classes.setsTotalLoose}
                >{this.props.setsWin}</span>
            </div>
        );
    };
    
};

export default withStyles(styles)(TeamScore);