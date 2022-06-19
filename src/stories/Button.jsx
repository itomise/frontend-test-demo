import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const [array, setArray] = useState([])
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
   <>
      <div style={{ display: 'flex', gap: '15px 15px', flexWrap: 'wrap' }}>
        {Array.from({ length: 30 }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ 
              backgroundColor: backgroundColor || undefined,
              outline: array.includes(index) ? '2px solid #f00' : undefined
            }}
            data-testid={`button-${index}`}
            {...props}
            onClick={() => setArray((cur) => {
              if (cur.includes(index)) {
                return cur.filter((value) => value !== index)
              } else {
                return [...cur, index]
              }
            })}
          >
            {label}
          </button>
        ))}
      </div>
      <ul>
        {array.map((value, index) => (
          <li key={`${value}-${index}`}>array-number-{value}</li>
        ))}
      </ul>
   </>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
