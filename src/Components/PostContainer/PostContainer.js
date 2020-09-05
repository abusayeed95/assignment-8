import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import Grid from '@material-ui/core/Grid';

const PostContainer = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, []);

    const handleSeeMore = () => {

    }

    return (
        <Grid container spacing={3}>
            {
                posts.map(post => <Posts handleSeeMore={handleSeeMore} post={post} key={post.id}></Posts>)
            }
        </Grid>
    );
};

export default PostContainer;