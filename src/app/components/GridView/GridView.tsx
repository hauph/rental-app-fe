import React from 'react';
import LazyLoad from 'react-lazyload';
import {
  faEye,
  faHeart,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { items } from '../HomePageBody/mock-data/mock-data.d';
import { numberWithCommas } from '../../../utils/helper';
import './GridView.scss';

type Props = {
  listItem: items;
};

export default function GridView(props: Props) {
  const renderItems = () => {
    return props.listItem.map(item => (
      <div className="item-wrapper" key={item.property_id}>
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
            <div className="row">
              <div className="item__name">{item.name}</div>
            </div>
            <div className="row">
              <div className="item__price">
                ${numberWithCommas(item.prices[0])}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return <div className="style--grid d-flex">{renderItems()}</div>;
}
