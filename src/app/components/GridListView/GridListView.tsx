import React from 'react';
import { items } from '../HomePageBody/mock-data/mock-data.d';
import { gridListCreator } from './helper';
import './GridListView.scss';

type Props = {
  listItem: items;
  viewStyle: string;
};

export default function ListGridListViewView(props: Props) {
  const { listItem, viewStyle } = props;
  return (
    <div className={`style--${viewStyle}${viewStyle === 'grid' ? ' row' : ''}`}>
      {gridListCreator(listItem, {}, viewStyle)}
    </div>
  );
}
