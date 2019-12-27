import React from 'react';
import { Input as AntInput } from 'antd';
import PropTypes from 'prop-types';
import '../../stylesheets/applications.less';

/**
 * A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
*/

const Input = ({
  addonAfter,
  addonBefore,
  defaultValue,
  disabled,
  id,
  maxLength,
  prefix,
  size,
  placeholder,
}) => (
  <AntInput
    addonAfter={addonAfter}
    addonBefore={addonBefore}
    defaultValue={defaultValue}
    disabled={disabled}
    id={id}
    maxLength={maxLength}
    prefix={prefix}
    size={size}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  /* The label text displayed after (on the right side of) the input field. */
  addonAfter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /* The label text displayed before (on the left side of) the input field. */
  addonBefore: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /* The initial input content */
  defaultValue: PropTypes.string,
  /* Whether the input is disabled. */
  disabled: PropTypes.bool,
  /* The ID for input */
  id: PropTypes.string,
  /* max length */
  maxLength: PropTypes.number,
  /* The prefix icon for the Input. */
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /* The size of the input box. Note: in the context of a form, the large size is used. Available: large default small */
  size: PropTypes.oneOf(['large', 'default', 'small']),
  /**
  * A prop that should not be visible in the documentation.
  *
  * @ignore
  */
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  addonAfter: null,
  addonBefore: null,
  defaultValue: null,
  disabled: false,
  id: null,
  maxLength: null,
  prefix: null,
  size: 'large',
  placeholder: null,
};

export default Input;
