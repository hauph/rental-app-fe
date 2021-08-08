import React from 'react';
import { items } from '../HomePageBody/mock-data/mock-data.d';
import { gridListBuilder } from './helper';
import './GridListView.scss';

type Props = {
  listItem: items;
  viewStyle: string;
};

export default function ListGridListViewView(props: Props) {
  const { listItem, viewStyle } = props;
  return (
    <div className={`style--${viewStyle}${viewStyle === 'grid' ? ' row' : ''}`}>
      {gridListBuilder(listItem, {}, viewStyle)}
    </div>
  );
}
