import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class RestaurantCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
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

    render() {
        return (
            <div
                style={{
                    width: 480,
                    margin: 16,
                    display: "inline-block"
                }}
            >
                <Card>
                    <br />
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            Name Of The Restaurant
                        </Typography>
                        <Typography color="textSecondary">
                            Price $$$ / Distance 5 min
                        </Typography>
                        <Typography component="p">
                            Type of food
                        </Typography>
                    </CardContent>
                    <CardActions
                        style={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <Button
                            onClick={this.handleOpen}
                        >
                            More
                        </Button>
                    </CardActions>
                </Card>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle>Name Of The Restaurant</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <b>Price $$$ / Distance 5 min</b>
                        </DialogContentText>
                        <DialogContentText>
                            Type of food
                        </DialogContentText>
                        <br />
                        <DialogContentText>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                        </DialogContentText>
                        {/* Needs to be a component */}
                        {/* <div>
                            <h3>Reviewer: Cody</h3>
                            <h5>rating</h5>
                            <p>Review: It sucks</p>
                        </div> */}
                    </DialogContent>
                    <DialogActions>
                        {/* <Button
                            // onClick={this.handleClose}
                            color="primary"
                        >
                            Delete This Forever
                        </Button> */}
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}



export default RestaurantCard;
