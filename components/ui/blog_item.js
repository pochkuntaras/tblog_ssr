import React, { DOM } from 'react';
import Image from '../ui/image';
import TextBox from '../ui/text_box';

const BlogItem = ({ image, text }) => (
  <div>
    <Image {...image}/>
    <TextBox text={text}/>
  </div>
);

export default BlogItem;
