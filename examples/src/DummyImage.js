import React from 'react';
import PT from 'prop-types';
import { Image } from 'react-stylebox';

const DUMMY_URL = 'https://dummyimage.com/';
const generateDummy = ({ h: height, w: width }) => {
  width = typeof width === 'number' ? width : 600;
  height = height || width / (4 / 3);
  return `${DUMMY_URL}${width}x${height}/ebebeb/000000`;
};

const DummyImage = ({ size, ...props }) => {
  const src = generateDummy(size);

  return <Image src={src} size={size} {...props} />;
};

DummyImage.propTypes = {
  size: PT.shape({
    w: PT.oneOf([PT.number, PT.string]).isRequired,
    h: PT.oneOf([PT.number, PT.string]),
  }).isRequired,
};

export default Image;
