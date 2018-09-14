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


class NewRestaraunt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            restaurantName: '',
            office: "Vancouver",
            price: "$",
            distance: 0
        };
    }

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
        this.setState({ restaurantName: event.value });
    }
    handleDistanceInput = (event) => {
        this.setState({ distance: event.value });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

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
                        <br />
                        <div>
                            <FormControl style={{ width: 200 }}>
                                <InputLabel>Price</InputLabel>
                                <Select
                                    value={this.state.price}
                                    onChange={this.handleChange}
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
                            // onClick={this.handleClose}
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
