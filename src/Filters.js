import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            office: "Vancouver",
            sortBy: "Price",
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <Paper elevation={1}>
                <div
                    style={{
                        width: 192,
                        margin: 16,
                        display: "inline-block"
                    }}
                >
                    <FormControl>
                        <InputLabel>Office</InputLabel>
                        <Select
                            value={this.state.office}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'office',
                            }}
                        >
                            <MenuItem value="Vancouver">Vancouver</MenuItem>
                            <MenuItem value="Kelowna">Kelowna</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div
                    style={{
                        width: 192,
                        margin: 16,
                        display: "inline-block"
                    }}
                >
                    <FormControl>
                        <InputLabel>Sort By</InputLabel>
                        <Select
                            value={this.state.sortBy}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'sortBy',
                            }}
                        >
                            <MenuItem value="Price">Price</MenuItem>
                            <MenuItem value="Distance">Distance</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Paper>
        );
    }
}



export default Filters;
