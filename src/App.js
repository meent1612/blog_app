import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostList from './components/PostList';
import AuthorProfile from './components/AuthorProfile';
import Pagination from './components/Pagination';
import PostDetail from './components/PostDetail';
import { posts } from './data/posts';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [currentPosts, setCurrentPosts] = useState([]);
  const safePosts = posts || [];

  useEffect(() => {
    if (safePosts.length > 0) {
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      setCurrentPosts(safePosts.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [currentPage, postsPerPage, safePosts]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          {/* Wrap the title with Link */}
          <Link to="/" className="app-title-link">
            <h1>React Blog App</h1>
          </Link>
        </header>

        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {currentPosts.length > 0 ? (
                    <>
                      <PostList currentPosts={currentPosts} />
                      <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={safePosts.length}
                        paginate={paginate}
                        currentPage={currentPage}
                      />
                    </>
                  ) : (
                    <p className="no-posts">No posts available</p>
                  )}
                </>
              }
            />

            <Route path="/author/:id" element={<AuthorProfile />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>© {new Date().getFullYear()} React Blog App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
