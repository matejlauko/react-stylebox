import React from 'react';
import Box from './Box';

type ListProps = {
  style?: Object,
};

const List = ({ style, ...restProps }: ListProps) => {
  const listStyle = {
    listStyle: 'none',
    ...style,
  };

  return <Box paddingLeft={0} margin={0} as={'ul'} style={listStyle} {...restProps} />;
};

export default List;
