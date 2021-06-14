import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import { faBorderNone, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import './HomePageBody.scss';

type Props = {};

export default function HomePageBody(props: Props) {
  const [viewStyle, setViewStyle] = useState<string>('grid');

  return (
    <div className="body-wrapper">
      <SearchBar />
      <div className="item-list container">
        <div
          className={`toggle__btns d-flex flex-row-reverse style--${viewStyle}`}
        >
          <button
            type="button"
            data-tip="Dạng lưới"
            className="btn--grid"
            onClick={() => {
              setViewStyle(viewStyle === 'grid' ? 'list' : 'grid');
            }}
          >
            <FontAwesomeIcon icon={faBorderNone} />
          </button>
          <button
            type="button"
            data-tip="Dạng danh sách"
            className="btn--list"
            onClick={() => {
              setViewStyle(viewStyle === 'grid' ? 'list' : 'grid');
            }}
          >
            <FontAwesomeIcon icon={faList} />
          </button>
          <ReactTooltip />
        </div>
      </div>
    </div>
  );
}
