import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import BaseForm from '../../BaseForm/BaseForm';

type Props = {};

export const Login = (props: Props) => {
  const [showPass, handleShowPass] = useState<boolean>(false);

  const formSettings = {
    email: {
      initialValues: '',
      schema: yup =>
        yup
          .string()
          .required('Vui lòng nhập email.')
          .matches(
            // eslint-disable-next-line
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Email không hợp lệ.',
          ),
    },
    password: {
      initialValues: '',
      schema: yup =>
        yup
          .string()
          .required('Vui lòng nhập mật khẩu.')
          .min(8, 'Yêu cần mật khẩu tối thiểu 8 ký tự.')
          .matches(
            // eslint-disable-next-line
                  /((?=.*\d)(?=.*\W+))(?![.\n\s])(?=.*[A-Z])(?=.*[a-z]).*$/,
            'Mật khẩu cần có ít nhất 1 ký tự in hoa, 1 ký tự in thường, 1 ký tự đặc biệt, 1 ký tự số và dài tối thiểu 8 ký tự.\n' +
              'Vd: !@#Hello2021.',
          ),
    },
    remember: {
      initialValues: false,
      schema: yup => yup.boolean(),
    },
  };

  const renderChildren = _props => {
    return (
      <Form id="signin-form" className="form">
        <Form.Group className="form--email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={_props.handleChange}
            value={_props.values.email}
            isValid={_props.errors.email}
          />
          {_props.errors.email && (
            <Form.Control.Feedback type="invalid">
              {_props.errors.email}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="form--password">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type={showPass ? 'text' : 'password'}
            name="password"
            onChange={_props.handleChange}
            value={_props.values.password}
            isValid={_props.errors.password}
          />
          <Form.Check
            className="password--visible"
            type="checkbox"
            label="Hiện mật khẩu"
            value={`${showPass}`}
            onChange={() => handleShowPass(!showPass)}
          />
          {_props.errors.password && (
            <Form.Control.Feedback type="invalid">
              {_props.errors.password}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="form--remember">
          <Form.Check
            type="checkbox"
            label="Lưu đăng nhập cho lần sau"
            name="remember"
          />
        </Form.Group>

        <Button type="submit" onClick={_props.handleSubmit}>
          Đăng nhập
        </Button>
      </Form>
    );
  };

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
