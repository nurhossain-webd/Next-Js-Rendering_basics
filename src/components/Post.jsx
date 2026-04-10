import React, { use } from 'react';

const Post = ({ postsPromise }) => {
    const posts = use(postsPromise);
    console.log(posts);
    return (
        <div>
            <h2>posts:{posts.length}</h2>
            {posts.map(post => <p key={post.id}>{post.title}</p>)}

        </div>
    );
};

export default Post;