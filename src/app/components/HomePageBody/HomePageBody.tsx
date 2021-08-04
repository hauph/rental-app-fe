import React from 'react';
import { useState } from 'react';
import GridListView from '../GridListView/GridListView';
import SearchBar from '../SearchBar/SearchBar';
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
            {/* <h1 className="body__title font-2 text-center">
            Danh Sách Phòng Trọ, Nhà Cho Thuê
          </h1> */}
            <SearchBar />
            <div className="items-wrapper">
              <div
                className={`toggle__btns d-flex flex-row-reverse style--${viewStyle}`}
              >
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
            Column Here
          </Col>
        </div>
      </div>
    </div>
  );
}
