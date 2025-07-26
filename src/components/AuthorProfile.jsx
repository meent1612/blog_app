import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { authors } from '../data/authors';
import { posts } from '../data/posts';

const AuthorProfile = () => {
  const { id } = useParams();
  const author = authors.find((a) => a.id === parseInt(id));
  const authorPosts = posts.filter((p) => p.authorId === parseInt(id));

  if (!author) {
    return (
      <div className="author-not-found">
        <h2>Author not found</h2>
        <Link to="/" className="back-link">
          ← Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <div className="author-profile">
      <div className="author-header">
        <img 
          src={author.avatar} 
          alt={author.name} 
          className="author-avatar"
        />
        <h1>{author.name}</h1>
        <p className="author-bio">{author.bio}</p>
        
        <div className="author-meta">
          <span>Joined: {author.joinedDate}</span>
          <span>Posts: {authorPosts.length}</span>
        </div>
      </div>

      <div className="author-posts">
        <h2>Recent Posts</h2>
        <ul className="author-posts-list">
          {authorPosts.slice(0, 5).map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/" className="back-link">
        ← Back to all posts
      </Link>
    </div>
  );
};

export default AuthorProfile;