type Field = {
  label?: string | JSX.Element;
  type: string;
  controlProps?: {
    [key]: any;
  };
  columms: {
    colLablel: number;
    colControl: number;
  };
  rule: (yup: object) => object;
};

type Fields = {
  [key]: Field;
};

type Actions = {
  [key]: {
    label: string;
    type: string;
    color: string;
    fullSize: boolean;
  };
};

export interface FormSettings {
  fields: Fields;
  actions: Actions;
}
