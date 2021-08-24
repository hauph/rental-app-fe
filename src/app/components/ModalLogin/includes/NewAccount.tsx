import React, { useState } from 'react';
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import BaseForm from '../../BaseForm/BaseForm';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

export const NewAccount = (props: Props) => {
  const [showPass1, handleShowPass1] = useState<boolean>(false);
  const [showPass2, handleShowPass2] = useState<boolean>(false);

  const formSettings = {
    user_name: {
      initialValues: '',
      schema: yup => yup.string().required('Vui lòng nhập tên người dùng.'),
    },
    first_name: {
      initialValues: '',
      schema: yup => yup.string().required('Vui lòng nhập tên (first name).'),
    },
    last_name: {
      initialValues: '',
      schema: yup => yup.string().required('Vui lòng nhập họ (last name).'),
    },
    phone: {
      initialValues: '',
      schema: yup =>
        yup
          .string()
          .matches(
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            'Số điện thoại không hợp lệ.',
          ),
    },
    email: {
      initialValues: '',
      schema: yup =>
        yup
          .string()
          .required('Vui lòng nhập email.')
          .matches(
            // eslint-disable-next-line
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi,
            'Email không hợp lệ.',
          ),
    },
    password: {
      initialValues: '',
      schema: yup => yup.string().required('Vui lòng nhập mật khẩu.'),
    },
    re_password: {
      initialValues: '',
      schema: yup => yup.string().required('Vui lòng nhập lại mật khẩu.'),
    },
  };

  const renderChildren = _props => {
    return (
      <Form id="new-account-form" className="form">
        <Form.Group className="form--user-name">
          <Form.Label>
            Tên người dùng<span className="required">*</span>
          </Form.Label>
          <Form.Control
            name="user_name"
            onChange={_props.handleChange}
            value={_props.values.user_name}
            isInvalid={_props.errors.user_name}
          />
          <Form.Control.Feedback type="invalid">
            {_props.errors.user_name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form--first-name">
          <Form.Label>
            Tên (First name)<span className="required">*</span>
          </Form.Label>
          <Form.Control
            name="first_name"
            onChange={_props.handleChange}
            value={_props.values.first_name}
            isInvalid={_props.errors.first_name}
          />
          <Form.Control.Feedback type="invalid">
            {_props.errors.first_name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form--last-name">
          <Form.Label>
            Họ (Last name)<span className="required">*</span>
          </Form.Label>
          <Form.Control
            name="last_name"
            onChange={_props.handleChange}
            value={_props.values.last_name}
            isInvalid={_props.errors.last_name}
          />
          <Form.Control.Feedback type="invalid">
            {_props.errors.last_name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form--phone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            name="phone"
            onChange={_props.handleChange}
            value={_props.values.phone}
            isInvalid={_props.errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {_props.errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form--email">
          <Form.Label>
            Email<span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="email"
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
                  {showPass1 ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                </Tooltip>
              }
            >
              <span
                className="password__toggler"
                onClick={() => handleShowPass1(!showPass1)}
              >
                <FontAwesomeIcon icon={showPass1 ? faEyeSlash : faEye} />
              </span>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control
            type={showPass1 ? 'text' : 'password'}
            name="password"
            onChange={_props.handleChange}
            value={_props.values.password}
            isInvalid={_props.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {_props.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form--re-password">
          <Form.Label>
            Nhập lại mật khẩu<span className="required">*</span>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="" className="custom-tooltip">
                  {showPass2 ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                </Tooltip>
              }
            >
              <span
                className="password__toggler"
                onClick={() => handleShowPass2(!showPass2)}
              >
                <FontAwesomeIcon icon={showPass2 ? faEyeSlash : faEye} />
              </span>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control
            type={showPass2 ? 'text' : 'password'}
            name="re_password"
            onChange={_props.handleChange}
            value={_props.values.re_password}
            isInvalid={
              _props.errors.re_password ||
              (_props.values.re_password.length &&
                _props.values.re_password !== _props.values.password)
            }
          />
          <Form.Control.Feedback type="invalid">
            {_props.values.re_password.length &&
            _props.values.re_password !== _props.values.password
              ? 'Mật khẩu không trùng khớp.'
              : _props.errors.re_password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="success" onClick={_props.handleSubmit}>
          Tạo tài khoản
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
