import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
    wrapper: {
        display: 'flex',
        marginBottom: '4px',
        alignItems: 'center'
    },
    teamLogo: {
        paddingLeft: '8px',
        width: '25px',
        length: '25px'
    },
    teamName: {
        paddingLeft: '8px'
    },
    setPointWin: {
        // border: '1px solid red',
        paddingLeft: '8px',
        fontSize: '11px',
        color: '#000000'
    },
    setPointLoose: {
        // border: '1px solid red',
        paddingLeft: '8px',
        fontSize: '11px',
        color: '#999999'
    },
    setsTotalWin: {
        // border: '1px solid red',
        paddingLeft: '8px',
        paddingRight: '8px',
        fontSize: '18px',
        fontWeight: 900,
        color: '#000000'

    },
    setsTotalLoose: {
        // border: '1px solid red',
        paddingLeft: '8px',
        paddingRight: '8px',
        fontSize: '18px',
        fontWeight: 900,
        color: '#999999'

    },
    teamScore: {
        display: 'flex',
        marginLeft: 'auto',
        alignItems: 'center'
    }
};

class GameBody extends Component {
    render() {
        const homeSetsInfoElement = this.props.score.home.sets.map(item => {
            return <span className={item.win ? this.props.classes.setPointWin : this.props.classes.setPointLoose}>{item.points}</span>
        });

        const awaySetsInfoElement = this.props.score.away.sets.map(item => {
            return <span className={item.win ? this.props.classes.setPointWin : this.props.classes.setPointLoose}>{item.points}</span>
        });

        return (
            <div>
                <div className={this.props.classes.wrapper}> 
                    <img className={this.props.classes.teamLogo} src="https://ukv.org.ua/images/stories/2010-2011/man/1divizion/Kerlam/artlogoS.png"/>
                    <div className={this.props.classes.teamName}>{this.props.homeName}</div>
                    <div className={this.props.classes.teamScore}>
                        { homeSetsInfoElement }
                        <span 
                            className={this.props.score.home.setsWin === 3 
                                ? this.props.classes.setsTotalWin 
                                : this.props.classes.setsTotalLoose}
                        >{this.props.score.home.setsWin}</span>
                    </div>
                </div>
                <div className={this.props.classes.wrapper}>
                    <img className={this.props.classes.teamLogo} src="https://ukv.org.ua/images/stories/Classic/2013-2014/Teams/RICH/RICHS.png"/> 
                    <div className={this.props.classes.teamName}>{this.props.awayName}</div>
                    <div className={this.props.classes.teamScore}>
                        { awaySetsInfoElement }
                        <span 
                            className={this.props.score.away.setsWin === 3 
                                ? this.props.classes.setsTotalWin 
                                : this.props.classes.setsTotalLoose}
                        >{this.props.score.away.setsWin}</span>
                    </div>
                </div>
            </div>
        );
    };
    
};

export default withStyles(styles)(GameBody);