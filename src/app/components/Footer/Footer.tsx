import * as React from 'react';
import './Footer.scss';

type Props = {};

type State = {};

export default class Footer extends React.Component<Props, State> {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="container">
          <p>tentrangweb.com Copyright @ 2021</p>
          <p>
            Chúng tôi có trách nhiệm truyền tải thông tin nhưng không chịu bất
            kỳ trách nhiệm nào từ các tin đăng này.
          </p>
        </div>
      </div>
    );
  }
}
