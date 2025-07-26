import React from 'react';
import Comment from './Comment';
import { comments } from '../data/comments';

const CommentList = ({ postId }) => {
  const postComments = comments.filter(c => c.postId === postId);

  return (
    <div className="comment-list">
      <h3>Comments ({postComments.length})</h3>
      {postComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;