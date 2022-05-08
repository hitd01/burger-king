import React, { useEffect } from 'react';
import { BlogComponent } from '../../components';

const BlogSingle = () => {
  useEffect(() => {
    document.title = 'Chi tiết bài viết';
  }, []);

  return <BlogComponent />;
};

export default BlogSingle;
