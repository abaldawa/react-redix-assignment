/**
 * User: abhijit.baldawa
 */

import React, {Component} from "react";
import { Route, Link, Switch} from 'react-router-dom';
import Home from "./home/Home";
import Post from "./post/Post";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
    root: {
        flexGrow: 1
    },
};
class App extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({ value });
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Home" href="/"/>
                    <Tab label="Post" href="/post" />
                </Tabs>
                 <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/post" component={Post}/>
                 </Switch>
            </Paper>
        );
    }
}


export default withStyles(styles)(App);