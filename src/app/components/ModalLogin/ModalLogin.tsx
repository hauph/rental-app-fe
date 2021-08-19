import React from 'react';
import BaseModal from '../BaseModal/BaseModal';
import { Login } from './includes/Login';
import './ModalLogin.scss';

type Props = {
  refModalLogin: any;
};

// type State = {};

export const ModalLogin = (props: Props): JSX.Element => {
  const { refModalLogin } = props;

  return (
    <BaseModal ref={refModalLogin} className="modal-login">
      <div className="modal-login__header">
        <ul className="header__switcher d-flex">
          <li className="active">Đăng nhập</li>
          <li className="">Tạo tài khoản mới</li>
        </ul>
      </div>
      <div className="modal-login__body">
        <div className="log-in">
          <Login />
          <div className="btn--outside text-center">
            <span>Quên mật khẩu?</span>
          </div>
        </div>
        <div className="new-account"></div>
        <div className="forgot-pw"></div>
      </div>
    </BaseModal>
  );
};
