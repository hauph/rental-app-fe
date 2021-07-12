import React from 'react';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import GridView from '../GridView/GridView';
import ListView from '../ListView/ListView';
import { faBorderNone, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import { Button } from 'react-bootstrap';
import './HomePageBody.scss';
import { items } from './mock-data/mock-data';

type Props = {};

export default function HomePageBody(props: Props) {
  const [viewStyle, setViewStyle] = useState<string>('grid');

  return (
    <div className="container">
      <div className="body-wrapper">
        <SearchBar />
        <div className="items-wrapper">
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
          <div className="items-inner">
            {viewStyle === 'grid' ? (
              <GridView listItem={items} />
            ) : (
              <ListView />
            )}
          </div>

          <div className="text-center btn--load-more">
            <Button variant="outline-primary">Load More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
