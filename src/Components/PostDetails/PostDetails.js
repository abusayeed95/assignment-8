import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const { postId } = useParams();
    const [showComments, setShowComments] = useState(false);
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


    const toggleCommentShow = () => {
        setShowComments(true)
    };
    const toggleCommentHide = () => {
        setShowComments(false)
    }
    let commentsArea;
    if (showComments) {
        commentsArea = <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10} style={postStyle}>
                {
                    comment.map(cmt => <Comments comment={cmt} key={cmt.id}></Comments>)
                }
                <Button onClick={toggleCommentHide} color="primary" variant="contained" >Hide comments</Button>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    };

    return (
        <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10} style={postStyle}>
                <h3>{title}</h3>
                <p><small>Post No: {id}</small></p>
                <p><small>User ID: {userId}</small></p>
                <p>{body}</p>
                <Button color="primary" variant="contained" onClick={toggleCommentShow}>Show Comments</Button>
            </Grid>
            <Grid item xs={1} />
            {
                commentsArea
            }
        </Grid>
    );
};

export default PostDetails;