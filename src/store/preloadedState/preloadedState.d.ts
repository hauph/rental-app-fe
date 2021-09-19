type userData = {
  user_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
};

export type PreloadedState = {
  auth: {
    userData: userData | Object;
  };
};
