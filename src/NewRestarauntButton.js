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


class RestaurantCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: ''
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
        this.setState({ name: event.value });
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
                            <TextField
                                id="name"
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleNameInput}
                                margin="normal"
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



export default RestaurantCard;
