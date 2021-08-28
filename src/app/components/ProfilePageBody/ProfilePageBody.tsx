import React, { useState } from 'react';
import BaseForm from '../BaseForm/BaseForm';
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfilePageBody.scss';

type Props = {};

export default function ProfilePageBody(props: Props) {
  const [showPass1, handleShowPass1] = useState<boolean>(false);
  const [showPass2, handleShowPass2] = useState<boolean>(false);

  const formSettings = {
    user_name: {
      initialValues: '',
      schema: yup => yup.string(),
    },
    first_name: {
      initialValues: '',
      schema: yup => yup.string(),
    },
    last_name: {
      initialValues: '',
      schema: yup => yup.string(),
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
      schema: yup => yup.string(),
    },
    password: {
      initialValues: '',
      schema: yup => yup.string(),
    },
    password_confirm: {
      initialValues: '',
      schema: yup =>
        yup
          .string()
          .test('passwords-match', 'Mật khẩu không trùng khớp.', function (
            value,
          ) {
            // @ts-ignore
            return this.parent.password === value;
          }),
    },
  };

  const renderChildren = _props => {
    return (
      <Form id="form--profile" className="form form--custom">
        <Form.Group className="form--user-name">
          <Form.Label>Tên người dùng</Form.Label>
          <Form.Control
            name="user_name"
            value={_props.values.user_name}
            readOnly={true}
          />
        </Form.Group>

        <Form.Group className="form--first-name">
          <Form.Label>Tên (First name)</Form.Label>
          <Form.Control
            name="first_name"
            onChange={_props.handleChange}
            value={_props.values.first_name}
          />
        </Form.Group>

        <Form.Group className="form--last-name">
          <Form.Label>Họ (Last name)</Form.Label>
          <Form.Control
            name="last_name"
            onChange={_props.handleChange}
            value={_props.values.last_name}
          />
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
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={_props.values.email}
            readOnly={true}
          />
        </Form.Group>

        <Form.Group className="form--password">
          <Form.Label>
            Mật khẩu
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
                <FontAwesomeIcon icon={showPass1 ? faEye : faEyeSlash} />
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
            Nhập lại mật khẩu
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
                <FontAwesomeIcon icon={showPass2 ? faEye : faEyeSlash} />
              </span>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control
            type={showPass2 ? 'text' : 'password'}
            name="password_confirm"
            onChange={_props.handleChange}
            value={_props.values.password_confirm}
            isInvalid={_props.errors.password_confirm}
          />
          <Form.Control.Feedback type="invalid">
            {_props.errors.password_confirm}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="success" onClick={_props.handleSubmit}>
          Cập nhật tài khoản
        </Button>
      </Form>
    );
  };

  const handleSubmit = (values, formikBag) => {
    console.log('values', values);
    console.log('formikBag', formikBag);
  };

  return (
    <div className="body">
      <div className="container">
        <h1 className="font-2">Cập nhật tài khoản</h1>
        <BaseForm
          formSettings={formSettings}
          renderChildren={renderChildren}
          handleSubmit={handleSubmit}
          validateOnChange={false}
        />
      </div>
    </div>
  );
}
