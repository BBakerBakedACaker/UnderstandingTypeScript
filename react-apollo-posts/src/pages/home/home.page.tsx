import React from "react";
import { Post } from "../../common/styles/interfaces/post.interface";
import PostsGrid from "../../components/posts-grid/posts-grid.component";

const Home: React.FC = () => {

    // Dummy data for posts
    const posts: Post[] = [
        {
            id: '1',
            title: 'Post One',
            body: 'This is the body of post one.'
        },
        {
            id: '2',
            title: 'Post Two',
            body: 'This is the body of post two.'
        },
        {
            id: '3',
            title: 'Post Three',
            body: 'This is the body of post three.'
        }
    ]

    return (
        <div className="home">
            <PostsGrid posts={posts} />
        </div>
    );
}

export default Home;