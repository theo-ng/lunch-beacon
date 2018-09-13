import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class RestaurantCard extends Component {
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
                    <br /><br />
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
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}



export default RestaurantCard;
