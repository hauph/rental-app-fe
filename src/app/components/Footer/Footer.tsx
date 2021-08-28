import * as React from 'react';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

type Props = {};

type State = {};

export default class Footer extends React.Component<Props, State> {
  render() {
    return (
      <div className="footer">
        <div className="container text-center">
          <div className="contact d-flex justify-content-center">
            <p className="contact--phone white-text">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>(408) 753 7979</span>
            </p>
            <p className="contact--mail white-text">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>hello@thuenha.us</span>
            </p>
          </div>
          <p>
            Đây là trang web chia sẻ thông tin miễn phí, do đó chúng tôi xin
            phép không chịu bất kỳ trách nhiệm nào từ các tin đăng này
          </p>
          <p>tentrangweb.com Copyright @ 2021</p>
        </div>
      </div>
    );
  }
}
