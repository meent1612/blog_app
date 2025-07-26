import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import Post from './Post';
import CommentForm from './CommentForm';

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div className="post-not-found">Post not found</div>;
  }

  return (
    <div className="post-detail">
      <Post post={post} isDetailed={true} />
      <CommentForm postId={post.id} />
    </div>
  );
};

export default PostDetail;