import React from 'react';
import { useState } from 'react';
import { faBorderNone, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col } from 'react-bootstrap';

import GridListView from '../GridListView/GridListView';
import SearchBar from '../SearchBar/SearchBar';
import { Sidebar } from '../Sidebar/Sidebar';
import BaseForm from '../BaseForm/BaseForm';

import './HomePageBody.scss';
import { items } from './mock-data/mock-data';
// import * as yup from 'yup';

type Props = {};

export default function HomePageBody(props: Props) {
  const [viewStyle, setViewStyle] = useState<string>('grid');
  const changeViewStyle = e => {
    if (e.currentTarget.className.indexOf('active') === -1) {
      setViewStyle(viewStyle === 'grid' ? 'list' : 'grid');
    }
  };

  const formSettings = {
    name: {
      initialValues: '',
      schema: yup => yup.string(),
    },
  };

  const renderChildren = _props => {
    return (
      <form id="test-form">
        <input
          type="text"
          onChange={_props.handleChange}
          value={_props.values.name}
          name="name"
        />
        {_props.errors.name && <div id="feedback">{_props.errors.name}</div>}
        <button type="submit" onClick={e => handleSubmit(e, _props)}>
          Submit
        </button>
      </form>
    );
  };

  const handleSubmit = (e, _props) => {
    e.preventDefault();
    console.log('submit', _props);
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

        {/* <BaseForm
          formSettings={formSettings}
          renderChildren={renderChildren}
          handleSubmit={handleSubmit}
        /> */}
      </div>
    </div>
  );
}
