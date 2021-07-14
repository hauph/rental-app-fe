import React from 'react';
import LazyLoad from 'react-lazyload';
import {
  faEye,
  faHeart,
  faPlusSquare,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { numberWithCommas } from '../../../utils/helper';

export function gridListCreator(list, callbacks = {}, type = 'grid') {
  const renderImage = item => {
    return (
      <div className="item__image">
        <div className="featured-img">
          <a href={`/product?id=${item.property_id}`}>
            <LazyLoad height={325}>
              <img src={item.images[0]} alt="" />
            </LazyLoad>
          </a>
        </div>
      </div>
    );
  };

  const renderBtns = () => {
    return (
      <div className="item__btns">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="custom-tooltip">Xem nhanh</Tooltip>}
        >
          <button className="btn-quick-view">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="custom-tooltip">Wishlist</Tooltip>}
        >
          <button className="btn-wishlist" title="Wishlist">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="custom-tooltip">So sánh</Tooltip>}
        >
          <button className="btn-compare" title="So sánh">
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </OverlayTrigger>
      </div>
    );
  };

  const renderName = item => {
    return (
      <div className="item__name">
        <h5>
          <a title={item.name} href={`/product?id=${item.property_id}`}>
            {item.name}
          </a>
        </h5>
      </div>
    );
  };

  const renderLocaltion = item => {
    return (
      <div className="item__location">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span className="city">
          <a href="true">{item.city},</a>
        </span>
        <span className="state">
          <a href="true">{item.state}</a>
        </span>
      </div>
    );
  };

  const renderPrice = item => {
    return (
      <div className="item__price">${numberWithCommas(item.prices[0])}</div>
    );
  };

  let content = list.map(item => (
    <div
      className="item-wrapper col-xl-4 col-md-6 col-sm-12"
      key={item.property_id}
    >
      <div className="card">
        <div className="item__head">
          {renderImage(item)}
          {renderBtns(item)}
        </div>
        <div className="item__content text-left">
          <div className="content">
            {renderName(item)}
            {renderLocaltion(item)}
            {renderPrice(item)}
          </div>
        </div>
      </div>
    </div>
  ));
  if (type === 'list') {
    content = list.map(item => (
      <div className="item-wrapper" key={item.property_id}>
        <div className="d-flex">
          {renderImage(item)}
          <div className="item__content">
            <div className="content d-flex">
              <div className="content__left">
                {renderName(item)}
                {renderLocaltion(item)}
                <div className="item__type">
                  <a href="true">{item.property_type}</a>
                </div>
              </div>
              <div className="content__right">
                {renderPrice(item)}
                {renderBtns(item)}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return content;
}
