import * as React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormSettings } from './FormSettings';

type Props = {
  formSettings: FormSettings;
  enableReinitialize?: boolean;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnMount?: boolean;
  handleReset?: (values: any, formikBag: any) => void;
  handleSubmit: (values: any, formikBag: any) => void;
  renderChildren: (props: object) => JSX.Element;
};

type State = {};

export default class BaseForm extends React.Component<Props, State> {
  renderElements(formikProps) {
    const { validateOnChange, renderChildren } = this.props;

    // Customize Formik's 'handleChange' function when 'validateOnChange' = false
    if (validateOnChange === false) {
      const cloneHandleChange = formikProps.handleChange;
      formikProps = {
        ...formikProps,
        handleChange(e) {
          const name = e.target.name;
          cloneHandleChange(e);
          formikProps.setErrors({
            ...formikProps.errors,
            [name]: '',
          });
        },
      };
    }

    return renderChildren(formikProps);
  }

  render() {
    const {
      formSettings,
      enableReinitialize,
      handleReset,
      handleSubmit,
      validateOnBlur,
      validateOnChange,
      validateOnMount,
    } = this.props;
    let initialValues = {},
      formSchema = {};
    for (let key in formSettings) {
      initialValues[key] = formSettings[key].initialValues;
      formSchema[key] = formSettings[key].schema(yup);
    }
    const Schema = yup.object().shape(formSchema);

    // console.log('formSchema', Schema);
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        enableReinitialize={
          enableReinitialize !== undefined ? enableReinitialize : false
        }
        validateOnBlur={validateOnBlur !== undefined ? validateOnBlur : true}
        validateOnChange={
          validateOnChange !== undefined ? validateOnChange : true
        }
        validateOnMount={
          validateOnMount !== undefined ? validateOnMount : false
        }
        onSubmit={(values, formikBag) => {
          handleSubmit(values, formikBag);
        }}
        onReset={(values, formikBag) =>
          handleReset ? handleReset(values, formikBag) : {}
        }
      >
        {formikProps => this.renderElements(formikProps)}
      </Formik>
    );
  }
}
