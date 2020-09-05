import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const Posts = (props) => {
    const { title, body, id } = props.post;

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: "powderblue"
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }));
    const classes = useStyles();
    const img = `https://randomuser.me/api/portraits/men/${id}.jpg`

    return (
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {id}
                        </Avatar>
                    }
                    title={title}
                />
                <CardContent>
                    <img style={{ width: "100%", borderRadius: "50%" }} src={img} alt="" />
                    <Typography variant="body" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary"><Link style={{ textDecoration: "none", color: "white" }} to={`/post/${id}`}>see more</Link></Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Posts;