import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BlogComponent } from '../../components';

const BlogSingle = () => {
  let { id } = useParams();
  useEffect(() => {
    document.title = 'Chi tiết bài viết';
    window.scrollTo(0, 0);
  }, [id]);

  return <BlogComponent />;
};

export default BlogSingle;
