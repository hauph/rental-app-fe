import * as React from 'react';
// import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import './Header.scss';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import header_bg4 from './header_bg4.jpg';

type Props = {};

type State = {};

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <div className="header">
        <div className="header__bg">
          <img className="img-fluid" src={header_bg4} alt="" />
        </div>
        <div className="header__top-wrapper">
          <div className="header__top">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                {/* <div className="top__contact">
                  <span className="contact--phone white-text">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <span>(408) 753 7979</span>
                  </span>
                  <span className="contact--mail white-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>hello@thuenha.us</span>
                  </span>
                </div> */}
                <div className="top__buttons">
                  <Button variant="outline-primary">Đăng tin mới</Button>
                </div>
                <NavBar />
              </div>
            </div>
          </div>
        </div>

        <div className="header__text">
          <p className="font-2">Website đăng tin hiệu quả cao</p>
          <p className="font-2">
            Cho thuê phòng trọ, nhà trọ, share phòng nhanh chóng
          </p>
        </div>

        <div className="container header__search">
          <SearchBar />
        </div>
      </div>
    );
  }
}
