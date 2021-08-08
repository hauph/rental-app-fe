import React from 'react';
import { useState } from 'react';
import GridListView from '../GridListView/GridListView';
import SearchBar from '../SearchBar/SearchBar';
import { Sidebar } from '../Sidebar/Sidebar';
import { faBorderNone, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col } from 'react-bootstrap';
import './HomePageBody.scss';
import { items } from './mock-data/mock-data';

type Props = {};

export default function HomePageBody(props: Props) {
  const [viewStyle, setViewStyle] = useState<string>('grid');
  const changeViewStyle = e => {
    if (e.currentTarget.className.indexOf('active') === -1) {
      setViewStyle(viewStyle === 'grid' ? 'list' : 'grid');
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="body-wrapper row">
          <Col lg={9} md={12}>
            <SearchBar />
            <div className={`items-wrapper style--${viewStyle}`}>
              <div className={`toggle__btns d-flex flex-row-reverse`}>
                <button
                  type="button"
                  data-tip="Dạng lưới"
                  className={`btn-grid-list btn--grid${
                    viewStyle === 'grid' ? ' active' : ''
                  }`}
                  onClick={e => {
                    changeViewStyle(e);
                  }}
                >
                  <FontAwesomeIcon icon={faBorderNone} />
                </button>
                <button
                  type="button"
                  data-tip="Dạng danh sách"
                  className={`btn-grid-list btn--list${
                    viewStyle === 'list' ? ' active' : ''
                  }`}
                  onClick={e => {
                    changeViewStyle(e);
                  }}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              </div>
              <div className="items-inner">
                {viewStyle === 'grid' ? (
                  <GridListView listItem={items} viewStyle={viewStyle} />
                ) : (
                  <GridListView listItem={items} viewStyle={viewStyle} />
                )}
              </div>

              <div className="text-center btn--load-more">
                <Button variant="outline-primary" className="custom-btn">
                  Load More
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={3} className="d-none d-lg-block">
            <Sidebar items={items} />
          </Col>
        </div>
      </div>
    </div>
  );
}
