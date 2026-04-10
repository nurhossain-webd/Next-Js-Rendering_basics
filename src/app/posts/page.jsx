import Post from '@/components/Post';
import React, { Suspense } from 'react';

const PostPage = () => {
    const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());
    console.log("Posts Promise:", postsPromise);
    return (
        <div>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Post postsPromise={postsPromise}></Post>
            </Suspense>
        </div>
    );
};

export default PostPage;