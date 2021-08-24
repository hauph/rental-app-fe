import React, { useState } from 'react';
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import BaseForm from '../../BaseForm/BaseForm';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './Login.scss';

type Props = {};

export const Login = (props: Props) => {
  const [showPass, handleShowPass] = useState<boolean>(false);

  const formSettings = {
    email: {
      initialValues: '',
      schema: yup =>
        yup.string().required('Vui lòng nhập tên người dùng hoặc email.'),
    },
    password: {
      initialValues: '',
      schema: yup => yup.string().required('Vui lòng nhập mật khẩu.'),
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
          <Form.Label>
            Tên người dùng hoặc E-mail<span className="required">*</span>
          </Form.Label>
          <Form.Control
            name="email"
            onChange={_props.handleChange}
            value={_props.values.email}
            isInvalid={_props.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {_props.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form--password">
          <Form.Label>
            Mật khẩu<span className="required">*</span>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="" className="custom-tooltip">
                  {showPass ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                </Tooltip>
              }
            >
              <span
                className="password__toggler"
                onClick={() => handleShowPass(!showPass)}
              >
                <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
              </span>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control
            type={showPass ? 'text' : 'password'}
            name="password"
            onChange={_props.handleChange}
            value={_props.values.password}
            isInvalid={_props.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {_props.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form--remember custom-check">
          <Form.Check
            type="checkbox"
            label="Lưu đăng nhập cho lần sau"
            name="remember"
            onChange={_props.handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="success" onClick={_props.handleSubmit}>
          Đăng nhập
        </Button>
      </Form>
    );
  };

  const handleSubmit = (values, formikBag) => {
    console.log('values', values);
    console.log('formikBag', formikBag);
  };

  return (
    <BaseForm
      formSettings={formSettings}
      renderChildren={renderChildren}
      handleSubmit={handleSubmit}
      validateOnChange={false}
    />
  );
};
