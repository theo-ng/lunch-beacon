import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function getInitialState() {
    return {
        open: false,
        restaurantName: '',
        office: "Vancouver",
        price: "$",
        distance: 0,
        foodType: '',
        other: ''
    }
}

class NewRestaraunt extends Component {
    state = getInitialState();

    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    handleNameInput = (event) => {
        this.setState({ restaurantName: event.target.value });
    }
    handleDistanceInput = (event) => {
        this.setState({ distance: event.target.value });
    }
    handlePriceChange = (event) => {
        this.setState({ price: event.target.value });
    };
    handleOfficeChange = (event) => {
        this.setState({ office: event.target.value });
    };
    handleFTI = (event) => {
        this.setState({ foodType: event.target.value });
    }
    handleOtherInput = (event) => {
        this.setState({ other: event.target.value });
    }

    addRestaurant = async () => {
        const response = await fetch('http://localhost:5000/restaurant', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                name: this.state.restaurantName,
                distance: this.state.distance,
                foodType: this.state.foodType,
                avgPrice: this.state.price,
                office: this.state.office,
                other: this.state.other
            })
        });
        this.handleClose();
        this.setState({ ...getInitialState() });
    }

    render() {
        return (
            <div
                style={{
                    position: "fixed",
                    bottom: 32,
                    right: 32
                }}
            >
                <Button
                    variant="fab"
                    color="primary"
                    aria-label="Add"
                    onClick={this.handleOpen}
                >
                    <AddIcon />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle>Add New Restaurant</DialogTitle>
                    <DialogContent>
                        <form autoComplete="off">
                            <InputLabel
                                style={{ display: "block" }}
                            >
                                Name of the Restaurant
                            </InputLabel>
                            <TextField
                                id="restaurantName"
                                value={this.state.restaurantName}
                                onChange={this.handleNameInput}
                                margin="normal"
                                style={{ width: 400, marginTop: 0 }}
                            />
                        </form>
                        <br />
                        <div>
                            <FormControl style={{ width: 200 }}>
                                <InputLabel>Office</InputLabel>
                                <Select
                                    value={this.state.office}
                                    onChange={this.handleOfficeChange}
                                    inputProps={{
                                        name: 'office',
                                    }}
                                >
                                    <MenuItem value="Vancouver">Vancouver</MenuItem>
                                    <MenuItem value="Kelowna">Kelowna</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <br />
                        <div>
                            <FormControl style={{ width: 200 }}>
                                <InputLabel>Price</InputLabel>
                                <Select
                                    value={this.state.price}
                                    onChange={this.handlePriceChange}
                                    inputProps={{
                                        name: 'price',
                                    }}
                                >
                                    <MenuItem value="$">$</MenuItem>
                                    <MenuItem value="$$">$$</MenuItem>
                                    <MenuItem value="$$$">$$$</MenuItem>
                                    <MenuItem value="$$$$">$$$$</MenuItem>
                                    <MenuItem value="$$$$$">$$$$$</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <br />
                        <form autoComplete="off">
                            <InputLabel
                                style={{ display: "block" }}
                            >
                                Distance (in minutes)
                            </InputLabel>
                            <TextField
                                id="distance"
                                value={this.state.distance}
                                onChange={this.handleDistanceInput}
                                margin="normal"
                                style={{ width: 200, marginTop: 0 }}
                            />
                        </form>
                        <br />
                        <form autoComplete="off">
                            <InputLabel
                                style={{ display: "block" }}
                            >
                                Food Type
                            </InputLabel>
                            <TextField
                                id="foodType"
                                value={this.state.foodType}
                                onChange={this.handleFTI}
                                margin="normal"
                                style={{ width: 200, marginTop: 0 }}
                            />
                        </form>
                        <form autoComplete="off">
                            <InputLabel
                                style={{ display: "block" }}
                            >
                                Other Info
                            </InputLabel>
                            <TextField
                                id="other"
                                value={this.state.other}
                                onChange={this.handleOtherInput}
                                margin="normal"
                                multiline
                                rowsMax="6"
                                style={{ width: 400, marginTop: 0 }}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.addRestaurant}
                            color="primary"
                            variant="raised"
                        >
                            Create New
                        </Button>
                        <Button
                            onClick={this.handleClose}
                        >
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}



export default NewRestaraunt;
