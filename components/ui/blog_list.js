import React from 'react';
import _ from 'lodash';
import BlogItem from '../ui/blog_item';

const BlogList = ({ posts }) => (
  <div>
  {
    _.map(posts, (post, key) => (
      <BlogItem key={key} image={post.image} text={post.text}/>
    ))
  }
  </div>
);

export default BlogList;
