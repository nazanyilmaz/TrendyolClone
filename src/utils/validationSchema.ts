import * as Yup from 'yup';

const loginSchema: any = () => {
  return Yup.object().shape({
    username: Yup.string().required('username required'),
    password: Yup.string().required('password invalid'),
  });
};

export {loginSchema};
