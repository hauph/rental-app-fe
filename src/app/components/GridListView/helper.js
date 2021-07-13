import React from 'react';
import LazyLoad from 'react-lazyload';
import {
  faEye,
  faHeart,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { numberWithCommas } from '../../../utils/helper';

export function gridListCreator(list, callbacks = {}, type = 'grid') {
  let content = list.map(item => (
    <div
      className="item-wrapper col-xl-4 col-md-6 col-sm-12"
      key={item.property_id}
    >
      <div className="card">
        <div className="item__head">
          <div className="item__image">
            <div className="featured-img">
              <a href={`/product?id=${item.property_id}`}>
                <LazyLoad height={325}>
                  <img src={item.images[0]} alt="" />
                </LazyLoad>
              </a>
            </div>
            <div className="item__btns">
              <button className="btn-quick-view">
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button className="btn-wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="btn-compare">
                <FontAwesomeIcon icon={faPlusSquare} />
              </button>
            </div>
          </div>
        </div>
        <div className="item__content text-left">
          <div className="content">
            <div className="item__name">
              <h5>
                <a href={`/product?id=${item.property_id}`}>{item.name}</a>
              </h5>
            </div>
            <div className="item__price">
              ${numberWithCommas(item.prices[0])}
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  if (type === 'list') {
    content = list.map(item => (
      <div className="item-wrapper" key={item.property_id}>
        <div className="d-flex">
          <div className="item__image">
            <div className="featured-img">
              <a href={`/product?id=${item.property_id}`}>
                <LazyLoad height={325}>
                  <img src={item.images[0]} alt="" />
                </LazyLoad>
              </a>
            </div>
          </div>
          <div className="item__content">
            <div className="content d-flex">
              <div className="content__left">
                <div className="item__name">
                  <h5>
                    <a href={`/product?id=${item.property_id}`}>{item.name}</a>
                  </h5>
                </div>
                <div className="item__price">
                  ${numberWithCommas(item.prices[0])}
                </div>
              </div>
              <div className="content__right">
                <div className="item__btns">
                  <button className="btn-quick-view">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button className="btn-wishlist">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button className="btn-compare">
                    <FontAwesomeIcon icon={faPlusSquare} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return content;
}
