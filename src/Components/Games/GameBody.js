import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TeamWithLogo from './TeamWithLogo';
import TeamScore from './TeamScore';
import styles from './GameBody.styles';

class GameBody extends Component {
    render() {
        const homeTeamWithLogo = {
            teamLogo: this.props.homeLogo,
            teamName: this.props.homeName
        };

        const awayTeamWithLogo = {
            teamLogo: this.props.awayLogo,
            teamName: this.props.awayName
        };

        const homeScore = this.props.score.home;
        const awayScore = this.props.score.away;

        return (
            <div>
                <div className={this.props.classes.wrapper}> 
                    <TeamWithLogo {...homeTeamWithLogo} />
                    <TeamScore {...homeScore} />
                </div>
                <div className={this.props.classes.wrapper}>
                    <TeamWithLogo {...awayTeamWithLogo} />
                    <TeamScore {...awayScore} />
                </div>
            </div>
        );
    };
    
};

export default withStyles(styles)(GameBody);