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

/**
 * A factory function for rendering grid list items
 *
 * @export
 * @param {array} list
 * @param {object} [callbacks={}]
 * @param {string} [type='grid']
 * @return {} JSXElement
 */
export function gridListBuilder(list, callbacks = {}, type = 'grid') {
  const renderImage = item => {
    return (
      <div className="item__image">
        <div className="featured-img">
          <a href={`/product?id=${item.id}`}>
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
        {['quick-view', 'wishlist', 'compare'].map(item => {
          let label, classIcon;
          switch (item) {
            case 'quick-view':
              label = 'Xem nhanh';
              classIcon = faEye;
              break;
            case 'wishlist':
              label = 'Wishlist';
              classIcon = faHeart;
              break;
            default:
              label = 'So sánh';
              classIcon = faPlusSquare;
          }
          return (
            <OverlayTrigger
              key={item}
              placement={`${type === 'grid' ? 'right' : 'top'}`}
              overlay={<Tooltip className="custom-tooltip">{label}</Tooltip>}
            >
              <button className={`btn--${item}`}>
                <FontAwesomeIcon icon={classIcon} />
              </button>
            </OverlayTrigger>
          );
        })}
      </div>
    );
  };

  const renderName = item => {
    return (
      <div className="item__name">
        <h5>
          <a
            title={item.title}
            href={`/product?id=${item.id}`}
            className="font-2"
          >
            {item.title}
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
    return <div className="item__price">${numberWithCommas(item.price)}</div>;
  };

  let content = list.map(item => (
    <div className="item-wrapper col-xl-4 col-md-6 col-sm-12" key={item.id}>
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
  ));
  if (type === 'list') {
    content = list.map(item => (
      <div className="item-wrapper" key={item.id}>
        <div className="d-flex">
          {renderImage(item)}
          <div className="item__content">
            <div className="content d-flex">
              <div className="content__left">
                {renderName(item)}
                {renderLocaltion(item)}
                <div className="item__type">
                  <a href="true">{item.type}</a>
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
