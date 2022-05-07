import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    document.title = 'Bài viết';
  }, []);

  return <div>Blog</div>;
};

export default Blog;
