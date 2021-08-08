import React, { FunctionComponent } from 'react';
// import { useState } from 'react';
import { items } from '../HomePageBody/mock-data/mock-data.d';
import './Sidebar.scss';
import { priceSize } from './data/lists';
import { sidebarBuilder } from './helper';

type Props = {
  items: items;
};

export const Sidebar: FunctionComponent<Props> = props => {
  return (
    <div className="sidebar">
      {sidebarBuilder(priceSize, 'price')}
      {sidebarBuilder(priceSize, 'size')}
    </div>
  );
};
