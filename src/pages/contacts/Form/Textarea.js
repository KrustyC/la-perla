import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  padding: 0 5px;
  background: white;
  border-bottom: 1px solid #ddd;
  font-size: inherit;
`;

const Label = styled.label`
  position: absolute;
  padding: 0;
  margin: 0;
  border: 0;
  top: 15px;
  color: #000;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  cursor: text;
  transform-origin: left top;
  pointer-events: none;
  transform: ${({ active }) =>
    active ? 'translate3d(0, -50%, 0) scale(0.70)' : 'none'};
`;

const Input = styled.textarea`
  padding: 0;
  margin: 0;
  padding-top: 18px;
  border: none;
  outline: none;
  height: auto;
  font-size: 16px;
  resize: none;
  &::placeholder {
    color: #9b9b9b;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
`;

const Textarea = ({ id, label, value, type, ...otherProps }) => {
  const [active, setActive] = useState(value && value.length > 0);

  const onFocus = () => setActive(true);

  const onBlur = event => setActive(event.target.value.length !== 0);

  return (
    <>
      <FormGroup>
        <Label htmlFor={id} active={active}>
          {label}
        </Label>
        <Input
          id={id}
          type={type}
          active={active}
          onBlur={onBlur}
          onFocus={onFocus}
          {...otherProps}
        />
      </FormGroup>
    </>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Textarea;
