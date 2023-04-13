import React from "react";
import { Post } from "../../../common/styles/interfaces/post.interface";

interface PostsGridItemProps {
    post: Post;
}

const PostsGridItem: React.FC<PostsGridItemProps> = ({ post }: PostsGridItemProps) => {
    return (
        <div>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}

export default PostsGridItem;