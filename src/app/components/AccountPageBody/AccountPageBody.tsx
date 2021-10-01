import React, { useState } from 'react';
import BaseForm from '../BaseForm/BaseForm';
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AccountPageBody.scss';
import { FormSettings } from '../BaseForm/FormSettings';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import userData from '../../interface/userData';

type Props = {
  userData?: userData;
};

export default function AccountPageBody(props: Props) {
  const { userData } = props;

  const [showPass, handleShowPass] = useState<boolean>(false);
  const [showPass1, handleShowPass1] = useState<boolean>(false);
  const [showPass2, handleShowPass2] = useState<boolean>(false);
  const [updatePass, handleUpdatePass] = useState<boolean>(false);

  const changeView = e => {
    e.preventDefault();
    handleUpdatePass(!updatePass);
    handleShowPass(false);
    handleShowPass1(false);
    handleShowPass2(false);
  };

  let formSettings: FormSettings = {
    user_name: {
      initialValues: userData?.user_name,
      schema: yup => yup.string(),
    },
    first_name: {
      initialValues: userData?.first_name,
      schema: yup => yup.string(),
    },
    last_name: {
      initialValues: userData?.last_name,
      schema: yup => yup.string(),
    },
    phone: {
      initialValues: userData?.phone,
      schema: yup =>
        yup
          .string()
          .matches(
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            'Số điện thoại không hợp lệ.',
          ),
    },
    email: {
      initialValues: userData?.email,
      schema: yup => yup.string(),
    },
  };
  if (updatePass) {
    formSettings = {
      current_password: {
        initialValues: '',
        schema: yup => yup.string(),
      },
      new_password: {
        initialValues: '',
        schema: yup =>
          yup
            .string()
            .test(
              'passwords-match-old-new',
              'Mật khẩu mới phải khác mật khẩu hiện tại.',
              function (value) {
                // @ts-ignore
                return this.parent.current_password !== value;
              },
            ),
      },
      new_password_confirm: {
        initialValues: '',
        schema: yup =>
          yup
            .string()
            .test(
              'passwords-match',
              'Phải trùng khớp với mật khẩu mới.',
              function (value) {
                // @ts-ignore
                return this.parent.new_password === value;
              },
            ),
      },
    };
  }

  const renderChildren = _props => {
    return (
      <Form id="form--profile" className="form form--custom">
        <div
          className={`form__profile${updatePass ? ' slide-up' : ' slide-down'}`}
        >
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
        </div>

        <div
          className="form__btn-password btn--outside"
          onClick={e => {
            changeView(e);
          }}
        >
          <span>
            <a href="null">{updatePass ? 'Quay lại' : 'Thay đổi mật khẩu'}</a>
          </span>
        </div>

        <div
          className={`form__password${
            updatePass ? ' slide-down' : ' slide-up'
          }`}
        >
          <Form.Group className="form--current-password">
            <Form.Label>
              Mật khẩu hiện tại
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
                  <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                </span>
              </OverlayTrigger>
            </Form.Label>
            <Form.Control
              type={showPass ? 'text' : 'password'}
              name="current_password"
              onChange={_props.handleChange}
              value={_props.values.current_password}
            />
          </Form.Group>

          <Form.Group className="form--new-password">
            <Form.Label>
              Mật khẩu mới
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
              name="new_password"
              onChange={_props.handleChange}
              value={_props.values.new_password}
              isInvalid={_props.errors.new_password}
            />
            <Form.Control.Feedback type="invalid">
              {_props.errors.new_password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="form--password-confirm">
            <Form.Label>
              Nhập lại mật khẩu mới
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
              name="new_password_confirm"
              onChange={_props.handleChange}
              value={_props.values.new_password_confirm}
              isInvalid={_props.errors.new_password_confirm}
            />
            <Form.Control.Feedback type="invalid">
              {_props.errors.new_password_confirm}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <Button type="submit" variant="success" onClick={_props.handleSubmit}>
          Cập nhật {updatePass ? 'mật khẩu' : 'tài khoản'}
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
        <Breadcrumb />
        <h1 className="font-2">Cập nhật tài khoản</h1>
        <BaseForm
          formSettings={formSettings}
          renderChildren={renderChildren}
          handleSubmit={handleSubmit}
          validateOnChange={false}
          enableReinitialize={true}
        />
      </div>
    </div>
  );
}
