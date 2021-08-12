import * as React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormSettings } from './FormSettings';

type Props = {
  formSettings: FormSettings;
  enableReinitialize?: boolean;
  handleReset?: (values: any, formikBag: any) => void;
  handleSubmit: (values: any, formikBag: any) => void;
  renderChildren: (props: object) => JSX.Element;
};

type State = {};

/* Sample formSettings */
// {
//   "name": {
//       "initialValues": "abc",
//       "schema": yup.string(),
//   }
// }

export default class BaseForm extends React.Component<Props, State> {
  render() {
    const {
      formSettings,
      enableReinitialize,
      handleReset,
      handleSubmit,
      renderChildren,
    } = this.props;
    let initialValues = {},
      formSchema = {};
    for (let key in formSettings) {
      initialValues[key] = formSettings[key].initialValues;
      formSchema[key] = formSettings[key].schema(yup);
    }

    console.log('formSettings', formSettings);
    console.log('initialValues', initialValues);
    console.log('formSchema', formSchema);
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={() => {
          yup.object().shape(formSchema);
        }}
        enableReinitialize={enableReinitialize ? enableReinitialize : false}
        onSubmit={(values, formikBag) => {
          console.log('hau here');
          handleSubmit(values, formikBag);
        }}
        onReset={(values, formikBag) =>
          handleReset ? handleReset(values, formikBag) : {}
        }
      >
        {props => renderChildren(props)}
      </Formik>
    );
  }
}
