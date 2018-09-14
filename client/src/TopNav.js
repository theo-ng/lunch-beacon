import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

class TopNav extends Component {
    render() {
        return (
            <AppBar position="static">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        height: 56
                    }}
                >
                    <Typography
                        variant="title"
                        color="inherit"
                        style={{
                            lineHeight: "56px"
                        }}
                    >
                        Lunch Beacon
                    </Typography>
                </div>
            </AppBar>
        );
    }
}



export default TopNav;
