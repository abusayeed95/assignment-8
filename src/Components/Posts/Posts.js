import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const Posts = (props) => {

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            backgroundColor: 'powderBlue',
            minHeight: 220
        },
        title: {
            fontSize: 20,
        },
        pos: {
            marginBottom: 12,
        },
    });
    const buttonStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    const classes = useStyles();

    const { title, body, id } = props.post;
    const handleSeeMore = props.handleSeeMore;
    return (
        <Grid item xs={6}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {body}
                    </Typography>
                    <br />
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={handleSeeMore}>
                        <Link style={buttonStyle} to={`/post/${id}`}>See More</Link>
                    </Button>
                </CardActions>

            </Card>
        </Grid>

    );
};

export default Posts;