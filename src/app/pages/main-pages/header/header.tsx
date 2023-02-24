import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
/* eslint-disable no-restricted-imports */
import basketiIcon from '../../../../assets/images/shopping-basket.svg';
import { ShoppingBasket } from '../shopping-basket';

export const Header: FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [goodsIntoBasket, setGoodsIntoBasket] = useState<any[]>([]);

  return (
    <header className="header wrapper">
      <Button variant="light" onClick={handleShow}>
        <img src={basketiIcon} alt="basketiIcon" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ShoppingBasket
          // goodsIntoBasket={goodsIntoBasket}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};
