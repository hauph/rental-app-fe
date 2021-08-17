/** This is an example of how to use BaseForm Component in this source code */
import * as React from 'react';
import BaseForm from '../BaseForm/BaseForm';

export const Example = props => {
  /* First we need to declare formSettings (Refer to FormSettings.d.ts) */
  const formSettings = {
    name: {
      initialValues: '',
      schema: yup => yup.string().required(), // scheme is a function which receives yup as param and returns yup schema
    },
  };

  /* Seconde, create children. The _props here are returned by Formik */
  const renderChildren = _props => {
    return (
      <form id="test-form">
        <input
          type="text"
          onChange={_props.handleChange}
          value={_props.values.name}
          name="name"
        />
        {_props.errors.name && <div id="feedback">{_props.errors.name}</div>}
        <button type="submit" onClick={_props.handleSubmit}>
          Submit
        </button>
      </form>
    );
  };

  /* Third, neen a method to handle submit event */
  const handleSubmit = (values, formikBag) => {
    console.log('submit', values);
    console.log('submit', formikBag);
  };

  return (
    <BaseForm
      formSettings={formSettings}
      renderChildren={renderChildren}
      handleSubmit={handleSubmit}
    />
  );
};
