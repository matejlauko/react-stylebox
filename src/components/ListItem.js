import React from 'react';
import Box from './Box';

const ListItem = props => {
  return <Box as={'li'} {...props} />;
};

export default ListItem;
