import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const { postId } = useParams();
    const [toggleComments, setToggleComments] = useState(false);
    const [post, setPost] = useState([]);
    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(URL)
            .then(response => response.json())
            .then(data => setPost(data))
    });
    const { title, body, id, userId } = post;
    let [comments, setComments] = useState([]);
    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/comments`;
        fetch(URL)
            .then(response => response.json())
            .then(data => setComments(data))
    }, []);
    const comment = comments.filter(comment => comment.postId === userId);

    const postStyle = {
        backgroundColor: 'powderblue',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px'
    };


    const toggleComment = () => {
        setToggleComments(!toggleComments)
    };

    let commentsArea;
    if (toggleComments) {
        commentsArea = <>
            {
                comment.map(cmt => <Comments comment={cmt} key={cmt.id}></Comments>)
            }
        </>
    };
    const img = `https://randomuser.me/api/portraits/men/${id}.jpg`

    return (
        <Grid container spacing={3}>
            <Grid item container xs={12} style={postStyle}>
                <Grid item xs={3}>
                    <img style={{ width: "100%", borderRadius: "50%" }} src={img} alt="" />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={8}>
                    <h3>{title}</h3>
                    <p><small>Post No: {id}</small></p>
                    <p><small>User ID: {userId}</small></p>
                    <p>{body}</p>
                    <Button color="primary" variant="contained" onClick={toggleComment}>Toggle Comments</Button>
                </Grid>
            </Grid>
            {commentsArea}
        </Grid >
    );
};

export default PostDetails;