import * as React from 'react';
import './CompareFunction.scss';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

type State = {};

export default class CompareFunction extends React.Component<Props, State> {
  render() {
    return (
      <div className="compare compare-wrapper">
        <div className="compare__icon" title="Danh sách so sánh">
          <FontAwesomeIcon icon={faPlusSquare} />
        </div>
      </div>
    );
  }
}
