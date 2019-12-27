import React from 'react';
import { Icon as AntIcon } from 'antd';
import PropTypes from 'prop-types';
import '../../stylesheets/applications.less';

/**
 * Semantic vector graphics.
*/

const Icon = ({
  type,
  style,
  theme,
  spin,
  rotate,
  component,
  twoToneColor,
  width,
  height
}) => (
  <AntIcon
    type={type}
    style={style}
    theme={theme}
    spin={spin}
    rotate={rotate}
    component={component}
    twoToneColor={twoToneColor}
    width={width}
    height={height}
  />
);

AntIcon.propTypes = {
  type: PropTypes.tring,
  style: PropTypes.object,
  theme: PropTypes.oneOf(['filled', 'outlined', 'twoTone']),
  spin: PropTypes.bool,
  rotate: PropTypes.number,
  component: PropTypes.node,
  twoToneColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

AntIcon.defaultProps = {
  type: null,
  style: null,
  theme: 'outlined',
  spin: false,
  rotate: null,
  component: null,
  twoToneColor: null,
  width: null,
  height: null
};

export default Icon;
