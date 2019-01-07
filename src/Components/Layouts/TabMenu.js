import React, { Component } from 'react';
import { Grid, Hidden, Paper, withStyles } from '@material-ui/core';
import TabMenuItem from './TabMenuItem';
import GameInfo from '../Games/GameInfo';
import GameBody from '../Games/GameBody';
import * as menuItems from '../../consts/menuItems';
import { games } from '../Games/games';

const styles = {
    game: {
        marginBottom: '12px',
        paddingTop: '4px',
        paddingBottom: '4px'
    }
}

class TabMenu extends Component {
    state = {
        menu: {
          allItems: menuItems.allItems,
          gamesItems: menuItems.gamesItems,
          rightItems: menuItems.rightItems,
          newsItems: menuItems.newsItems,
          championshipItems: menuItems.championshipItems
        },
    };

    render() {
        const gamesElement = games.map(item => {
            return(
                <Paper className={this.props.classes.game}>
                    <GameInfo {...item} />
                    <GameBody {...item} />
                </Paper>
                
            );
        });

        return (
            <Grid container>
                {/* extra-small-600 */}
                <Hidden smUp>
                <Grid item xs={12}>
                    <TabMenuItem tabs={this.state.menu.allItems} />
                    { gamesElement }
                </Grid>
                </Hidden>
    
                {/* small-960 */}
                <Hidden xsDown mdUp>
                <Grid item sm={12}>
                    <TabMenuItem tabs={this.state.menu.allItems} />
                </Grid>
                </Hidden>
    
                {/* medium-1280 */}
                <Hidden smDown lgUp>
                <Grid item md={6}>
                    <TabMenuItem tabs={this.state.menu.gamesItems} />
                </Grid>
                <Grid item md={6}>
                    <TabMenuItem tabs={this.state.menu.rightItems} />
                </Grid>
                </Hidden>
    
                {/* large-1920 */}
                <Hidden mdDown xlUp>
                <Grid item lg={4}>
                    <TabMenuItem tabs={this.state.menu.gamesItems} />
                </Grid>
                <Grid item lg={4}>
                    <TabMenuItem tabs={this.state.menu.newsItems} />
                </Grid>
                <Grid item lg={4}>
                    <TabMenuItem tabs={this.state.menu.championshipItems} />
                </Grid>
                </Hidden>
            </Grid>
        );
    }

    
};

export default withStyles(styles)(TabMenu);