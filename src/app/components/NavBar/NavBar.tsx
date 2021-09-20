import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss';

type Props = {};

type State = {};

export default class NavBar extends React.Component<Props, State> {
  render() {
    let activeKey: string = '/';

    return (
      <div className="header__navbar translate3d--000">
        <Nav
          activeKey={activeKey}
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Link className="nav-link" to="/">
              Trang chủ
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Phòng cho thuê</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Nhà cho thuê</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Share phòng</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Share nhà</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
