import * as React from 'react';
import { Button } from 'react-bootstrap';
import './Header.scss';
import NavBar from '../NavBar/NavBar';
// import SearchBar from '../SearchBar/SearchBar';
// import header_bg4 from './header_bg4.jpg';

type Props = {};

type State = {};

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <div className="header">
        {/* <div className="header__bg">
          <img className="img-fluid" src={header_bg4} alt="" />
        </div> */}
        <div className="header__top-wrapper">
          <div className="header__top">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <div className="top__buttons">
                  <Button variant="outline-primary">Đăng tin mới</Button>
                </div>
                <NavBar />
              </div>
            </div>
          </div>
        </div>

        <div className="header__text-search">
          <p className="font-2">Tìm nhà không khó</p>
          <div className="header__search">
            <form>
              <input type="text" placeholder="Nhập nơi bạn muốn tìm kiếm" />
              <button type="submit">
                <span className="svg-icon-search"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
