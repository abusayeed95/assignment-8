import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

const Comments = (props) => {
    const postStyle = {
        backgroundColor: 'powderblue',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px'
    };
    const { name, body, email, id } = props.comment;
    const picture = `https://randomuser.me/api/portraits/men/${id}.jpg`;
    return (
        <Grid container spacing={3} alignItems="center" justify="center" style={postStyle}>
            <Grid item xs={1} />
            <Grid item xs={3}>
                <img src={picture} alt="usrImg" style={{ borderRadius: "50%" }} /> <br />
            </Grid>
            <Grid item xs={7}>
                <p><strong>Name: </strong> {name}</p>
                <p><small> <strong>Email: </strong> {email} </small></p>
                <h3 style={{ textDecoration: "underline" }}>Comment:  <ArrowDownwardIcon /></h3>
                <p>{body}</p>
            </Grid>
            <Grid item xs={1} />
        </Grid>

    );
};

export default Comments;