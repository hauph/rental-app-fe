import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';
import NavBar from '../NavBar/NavBar';
import { ModalLogin } from '../ModalLogin/ModalLogin';
import {
  faEdit,
  faListAlt,
  faUser,
  faHeart,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import SearchBar from '../SearchBar/SearchBar';
// import header_bg4 from './header_bg4.jpg';

type Props = {};

type State = {
  userDropdown: boolean;
};

const userMockData = {
  id: 'user_1',
  user_name: 'haupham',
  first_name: ' Hau',
  last_name: 'Pham',
  phone: '',
  email: 'hauph@hotmail.com',
};
export default class Header extends React.Component<Props, State> {
  refModalLogin;

  constructor(props) {
    super(props);

    this.state = {
      userDropdown: false,
    };

    this.refModalLogin = React.createRef();
  }

  componentDidMount() {
    const _this = this;
    document.addEventListener('click', function (e) {
      const target = e.target as HTMLTextAreaElement;
      if (target && !target.classList.contains('btn--user')) {
        _this.setState({ userDropdown: false });
      }
    });
  }

  postNewFeed() {
    this.refModalLogin.current.openModal();
  }

  showUserDropdown() {
    this.setState({ userDropdown: !this.state.userDropdown });
  }

  render() {
    const { userDropdown } = this.state;

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
                  {/* {Object.keys(userMockData).length ? (
                    <div className="user--logged-in">
                      <Button
                        className="btn--user"
                        variant="outline-primary"
                        onClick={() => this.showUserDropdown()}
                      >
                        Quản lý tài khoản
                      </Button>
                      <div
                        className={`user__dropdown${
                          userDropdown ? ' fadeInUp' : ''
                        }`}
                      >
                        <ul>
                          <li>
                            <Link to="/post">
                              <FontAwesomeIcon icon={faEdit} /> Đăng tin
                            </Link>
                          </li>
                          <li>
                            <Link to="/manage-post">
                              <FontAwesomeIcon icon={faListAlt} /> Quản lý tin
                              đăng
                            </Link>
                          </li>
                          <li>
                            <Link to="/profile">
                              <FontAwesomeIcon icon={faUser} /> Thông tin tài
                              khoản
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/wishlist"
                              onClick={e => {
                                e.preventDefault();
                                console.log('click');
                              }}
                            >
                              <FontAwesomeIcon icon={faHeart} /> Wishlist
                            </Link>
                          </li>
                          <li>
                            <Link to="/logout">
                              <FontAwesomeIcon icon={faSignOutAlt} /> Thoát
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Button
                      className="btn--login"
                      variant="outline-primary"
                      onClick={() => this.postNewFeed()}
                    >
                      Đăng tin mới
                    </Button>
                  )} */}
                  <Button
                    className="btn--login"
                    variant="outline-primary"
                    onClick={() => this.postNewFeed()}
                  >
                    Đăng tin mới
                  </Button>
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

        <ModalLogin refModalLogin={this.refModalLogin} />
      </div>
    );
  }
}
