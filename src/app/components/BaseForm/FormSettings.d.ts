import { ObjectShape } from 'yup/lib/object';

type FormSetting = {
  initialValues: any;
  schema: (yup: any) => ObjectShape;
};

export interface FormSettings {
  [key]: FormSetting;
}
