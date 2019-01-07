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
        <TabMenu />
        <Footer />
      </div>
    );
  };
}

export default App;
