import React from 'react';
import Text from './Text';
import PropTypes from 'prop-types';
import withStyle from '../withStyle';

type IconProps = {
  name?: string,
  style?: Object,
  width?: number | string,
  height?: number | string,
  svgProps?: Object,
};

/**
 * SVG or CSS icon
 */
// const cssIconProps = ({ icon, style, iconHeight }, theme) => {
//   const { content, style: iconStyle, ...iconProps } = icon;

//   const styleDef = typeof style === 'function' ? style(theme) : style;

//   if (iconStyle) {
//     style = {
//       lineHeight: iconHeight,
//       ...iconStyle,
//       ...styleDef,
//     };
//   }
//   return { dangerouslySetInnerHTML: { __html: content }, style, ...iconProps };
// };

const svgIconProps = (icon, width, height, style, restProps) => {
  const SvgElem = props => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width !== undefined ? width : icon.info.width}
      height={height !== undefined ? height : icon.info.height}
      {...props}
    />
  );

  return {
    as: SvgElem,
    dangerouslySetInnerHTML: { __html: icon.svg },
    viewBox: icon.info.viewBox,
    style,
  };
};

const Icon = ({ name, style, width, height, icons, ...restProps }: IconProps) => {
  const icon = icons[name];

  let iconProps = {};

  if (icon && icon.svg) {
    iconProps = svgIconProps(icon, width, height, style);
  } else if (false) {
    // TODO: css icon
    // iconProps = cssIconProps({ icon, style, iconWidth, iconHeight }, theme);
  }

  return <Text className="Icon" {...iconProps} {...restProps} />;
};

Icon.displayName = 'Icon';

export default withStyle(['theme', 'icons'])(Icon);
