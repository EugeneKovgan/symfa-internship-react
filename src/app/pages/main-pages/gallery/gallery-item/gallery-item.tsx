import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { config } from 'app/core/config/config';

type PropsType = {
  id: number;
  title: string;
  price: number;
  currencyFormat: string;
  availableSizes: Array<string>;
  sku: number;
};

export const GalleryItem: FC<PropsType> = ({
  id,
  title,
  price,
  currencyFormat,
  sku,
}) => {
  const addItemToCard = (currentId: number) => {
    console.log(currentId);
  };

  return (
    <div className="gallery-item">
      <Card>
        <Card.Img
          variant="top"
          src={`${config.API_URL}/images/products/${sku}-1-cart.webp`}
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {currencyFormat}
            {price}
          </Card.Text>
          <div className="d-grid gap-2">
            <Button onClick={() => addItemToCard(id)} variant="dark">
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
