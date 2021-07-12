import * as React from 'react';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import './Header.scss';
import Menu from '../NavBar/NavBar';

type Props = {};

type State = {};

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header__top">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="top__contact">
                <span className="contact--phone">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  <span>(408) 753 7979</span>
                </span>
                <span className="contact--mail">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>hello@thuenha.us</span>
                </span>
              </div>
              <div className="top__buttons">
                <Button variant="link">Đăng nhập</Button>
                <Button variant="link">Đăng ký</Button>
                <Button variant="danger">Đăng tin mới</Button>
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}
