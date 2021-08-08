import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export function sidebarBuilder(obj, type) {
  const arr = obj[type];
  const listLI = arr.map(obj => {
    return (
      <li key={`${obj.from}-${obj.to}`}>
        <Link to={`/?${type}=${obj.from}-${obj.to === null ? 0 : obj.to}`}>
          <span dangerouslySetInnerHTML={{ __html: obj.label }}></span>
        </Link>
      </li>
    );
  });

  return (
    <Card className="card--custom">
      <Card.Body>
        <Card.Title>
          {type === 'price' ? 'Xem theo giá' : 'Xem theo diện tích'}
        </Card.Title>
        <ul>{listLI}</ul>
      </Card.Body>
    </Card>
  );
}
