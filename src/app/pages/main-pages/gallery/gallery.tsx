import React, { FC } from 'react';
import { useGetProductsQuery } from 'app/store/products';
import { GalleryItem } from './gallery-item';

export const Gallery: FC = () => {
  const { data, error, isLoading } = useGetProductsQuery('products');

  type ProductsType = ReturnType<typeof data>;
  const messageError = error ? 'error' : 'isLoading';

  return (
    <div className="gallery">
      {error || isLoading
        ? messageError
        : data.map((item: ProductsType) => {
            return (
              <GalleryItem
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                currencyFormat={item.currencyFormat}
                availableSizes={item.availableSizes}
                sku={item.sku}
              />
            );
          })}
    </div>
  );
};
