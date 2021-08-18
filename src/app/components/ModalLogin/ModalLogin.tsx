import React from 'react';
import BaseModal from '../BaseModal/BaseModal';
import { Login } from './includes/Login';

type Props = {
  refModalLogin: any;
};

// type State = {};

export const ModalLogin = (props: Props): JSX.Element => {
  const { refModalLogin } = props;

  return (
    <BaseModal ref={refModalLogin}>
      <div className="modal-login modal-login__header">
        <ul className="header__switcher">
          <li>Đăng nhập</li>
          <li>Tạo tài khoản mới</li>
        </ul>
        <div className="sign-in">
          <Login />
        </div>
        <div className="new-account"></div>
        <div className="forgot-pw"></div>
      </div>
    </BaseModal>
  );
};
