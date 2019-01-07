import React, { Component } from 'react';
import GameInfo from '../Games/GameInfo';
import * as menuItems from './consts/menuItems';

class Content extends Component {
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
            <div>
                <GameInfo />
            </div>
        );
    }

    
};

export default Content;