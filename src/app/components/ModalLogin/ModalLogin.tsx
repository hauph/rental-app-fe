import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseModal from '../BaseModal/BaseModal';
import { Login } from './includes/Login';
import { NewAccount } from './includes/NewAccount';
import './ModalLogin.scss';

type Props = {
  refModalLogin: any;
};

export const ModalLogin = (props: Props): JSX.Element => {
  const [isLoginView, setIsLoginView] = useState<boolean>(true);

  const { refModalLogin } = props;

  const closeModal = () => {
    setIsLoginView(true);
  };

  return (
    <BaseModal ref={refModalLogin} className="modal-login" onClose={closeModal}>
      <div className="modal-login__header">
        <ul className="header__switcher d-flex">
          <li
            className={isLoginView ? 'active' : ''}
            onClick={() => setIsLoginView(true)}
          >
            Đăng nhập
          </li>
          <li
            className={!isLoginView ? 'active' : ''}
            onClick={() => setIsLoginView(false)}
          >
            Tạo tài khoản mới
          </li>
        </ul>
      </div>
      <div className="modal-login__body">
        {isLoginView ? (
          <div className="log-in">
            <Login onClose={() => refModalLogin.current.closeModal()} />
            <div className="btn--outside text-center">
              <span>
                <Link to="/forget-password">Quên mật khẩu?</Link>
              </span>
            </div>
          </div>
        ) : (
          <div className="new-account">
            <NewAccount onClose={() => refModalLogin.current.closeModal()} />
          </div>
        )}
      </div>
    </BaseModal>
  );
};
