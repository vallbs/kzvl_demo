import React, { Component } from 'react';
import { Paper, Tab, Tabs, Typography } from '@material-ui/core';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
}

function LinkTab(props) {
    return (
        <Tab 
            component="a" 
            onClick={event => event.preventDefault()} 
            {...props} 
        />
    );
}

class TabMenu extends Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const tabs = this.props.tabs;
        const tabsArray = Object.keys(tabs);
        const tabsElement = tabsArray.map(item => {
            return (
                <LinkTab 
                    key={tabs[item].name} 
                    label={tabs[item].title} 
                />
            );
        });

        return (
            <div>
                <Paper>
                    <Tabs 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        variant="fullWidth"
                        >
                        { tabsElement }
                    </Tabs>
                </Paper>
                {this.state.value === 0 && <TabContainer>Item One</TabContainer>}
                {this.state.value === 1 && <TabContainer>Item Two</TabContainer>}
                {this.state.value === 2 && <TabContainer>Item Three</TabContainer>}
                {this.state.value === 3 && <TabContainer>Item Four</TabContainer>}
            </div>
        );
    }
};

export default TabMenu;