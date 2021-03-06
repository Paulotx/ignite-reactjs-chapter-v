import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import lodash from 'lodash';

import { AddProductToWishListProps } from './AddProductToWishList';

// import { AddProductToWishList } from './AddProductToWishList';

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('./AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
  loading: () => <div>Loading...</div>,
});

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddTiWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddTiWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return(
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>

      {isAddingToWishList && (
        <AddProductToWishList 
          onAddToWishList={() => onAddTiWishList(product.id)} 
          onRequestClose={() => setIsAddingToWishList(false)} 
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product);
});