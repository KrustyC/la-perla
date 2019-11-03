import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import Input from './Input';
import Textarea from './Textarea';

const Row = styled.div`
  display: flex;
  align-items: center;
  > div {
    flex: 1;
    &:not(:last-of-type) {
      margin-right: 30px;
    }
  }
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  color: #000;
  font-weight: bold;
  height: 50px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const initialValues = {
  arrivalTime: '',
  departureTime: '',
  email: '',
  subject: '',
  message: '',
};

const Form = () => (
  <Formik
    initialValues={initialValues}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      isValid,
      setFieldTouched,
      setFieldValue,
      handleSubmit,
      isSubmitting,
    }) => (
      <form onSubmit={handleSubmit}>
        <Row>
          <Input
            id="arrivalTime"
            name="arrivalTime"
            placeholder="DD/MM/YYYY"
            label="Arrival"
            type="text"
            value={values.arrivalTime}
            onChange={e => setFieldValue('arrivalTime', e.target.value)}
            onBlur={() => setFieldTouched('arrivalTime')}
          />

          <Input
            id="departureTime"
            name="departureTime"
            placeholder="DD/MM/YYYY"
            label="Departure"
            type="text"
            value={values.departureTime}
            onChange={e => setFieldValue('departureTime', e.target.value)}
            onBlur={() => setFieldTouched('departureTime')}
          />
        </Row>

        <br />

        <Input
          id="email"
          name="email"
          placeholder="john.doe@gmail.com"
          label="Email"
          type="email"
          value={values.email}
          onChange={e => setFieldValue('email', e.target.value)}
          onBlur={() => setFieldTouched('email')}
        />

        <br />

        <Input
          id="subject"
          name="subject"
          placeholder="Type a subject"
          label="Subject"
          type="text"
          value={values.subject}
          onChange={e => setFieldValue('subject', e.target.value)}
          onBlur={() => setFieldTouched('subject')}
        />

        <br />

        <Textarea
          id="message"
          name="message"
          rows="8"
          placeholder="Type a message"
          label="Message"
          type="textarea"
          value={values.message}
          onChange={e => setFieldValue('message', e.target.value)}
          onBlur={() => setFieldTouched('message')}
        />

        <br />

        <Button type="submit" disabled={isSubmitting || isValid}>
          Send
        </Button>
      </form>
    )}
  </Formik>
);

export default Form;
