import React from 'react';
import ReactDOMServer from 'react-dom/server';
import BlogPage from './components/containers/blog_page';

const result = ReactDOMServer.renderToStaticMarkup(
	React.createElement(BlogPage)
);

export default result;
