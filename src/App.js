import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import TabMenu from './Components/Layouts/TabMenu';
import { Grid, Hidden } from '@material-ui/core';
import * as menuItems from './consts/menuItems';

class App extends Component {
  state = {
    menu: {
      allItems: menuItems.allItems,
      gamesItems: menuItems.gamesItems,
      rightItems: menuItems.rightItems,
      newsItems: menuItems.newsItems,
      championshipItems: menuItems.championshipItems
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Grid container>
          <Hidden smUp>
            <Grid 
              item
              xs={12}
            >
              <TabMenu tabs={this.state.menu.allItems} />
            </Grid>
          </Hidden>
         
          <Hidden xsDown lgUp>
            <Grid 
              item
              sm={6}
            >
              <TabMenu tabs={this.state.menu.gamesItems} />
            </Grid>
            <Grid 
              item
              sm={6}
            >
              <TabMenu tabs={this.state.menu.rightItems} />
            </Grid>
          </Hidden>

          <Hidden mdDown>
            <Grid 
              item
              lg={4}
            >
              <TabMenu tabs={this.state.menu.gamesItems} />
            </Grid>
            <Grid 
              item
              lg={4}
            >
              <TabMenu tabs={this.state.menu.newsItems} />
            </Grid>
            <Grid 
              item
              lg={4}
            >
              <TabMenu tabs={this.state.menu.championshipItems} />
            </Grid>
          </Hidden>
        </Grid>
        
        <Footer />
      </div>
    );
  };
}

export default App;
