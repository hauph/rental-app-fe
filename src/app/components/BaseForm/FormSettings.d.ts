import { ObjectShape } from 'yup/lib/object';

type FormSetting = {
  initialValues: any;
  schema: ObjectShape;
};

export interface FormSettings {
  [key]: FormSetting;
}
