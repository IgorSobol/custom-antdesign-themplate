import React from 'react';
import { Button as AntButton } from 'antd';
import PropTypes from 'prop-types';
import '../../stylesheets/applications.less';

/**
 * A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
*/

const Button = ({
  type,
  disabled,
  ghost,
  href,
  htmlType,
  icon,
  loading,
  shape,
  size,
  target,
  onClick,
  block,
  children,
}) => (
  <AntButton
    type={type}
    disabled={disabled}
    ghost={ghost}
    href={href}
    htmlType={htmlType}
    icon={icon}
    loading={loading}
    shape={shape}
    size={size}
    target={target}
    type={type}
    onClick={onClick}
    block={block}
  >
    {children}
  </AntButton>
);

Button.propTypes = {
  /* Disabled state of button */
  disabled: PropTypes.bool,
  /* Make background transparent and invert text and border colors */
  ghost: PropTypes.bool,
  /* Redirect url of link button */
  href: PropTypes.string,
  /* Set the original html type of button, see: MDN */
  htmlType: PropTypes.string,
  /* Set the icon of button, see: Icon component */
  icon: PropTypes.string,
  /* Set the loading status of button "boolean | { delay: number }" */
  loading: PropTypes.bool,
  /* Can be set to circle, "round" or "omitted" */
  shape: PropTypes.string,
  /* Can be set to small large or omitted */
  size: PropTypes.string,
  /* Same as target attribute of a, works when href is specified */
  target: PropTypes.string,
  /*  Can be set to "primary", "dashed", "danger" and "link". */
  type: PropTypes.string,
  /* Set the handler to handle click event (event) => void */
  onClick: PropTypes.func,
  /* Option to fit button width to its parent width */
  block: PropTypes.bool,
  /**
  * A prop that should not be visible in the documentation.
  *
  * @ignore
  */
  children: PropTypes.ReactDom,
};

Button.defaultProps = {
  disabled: false,
  ghost: false,
  href: null,
  htmlType: 'button',
  icon: null,
  loading: false,
  shape: null,
  size: 'default',
  target: null,
  type: 'default',
  onClick: null,
  block: false,
  children: null,
};

export default Button;
