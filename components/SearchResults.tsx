import { List, ListRowRenderer } from 'react-virtualized';

import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  totalPrice: number;
  onAddTiWishList: (id: number) => void;
}

export function SearchResults( { results, totalPrice, onAddTiWishList }: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (          
      <div key={key} style={style}>
        <ProductItem 
          product={results[index]} 
          onAddTiWishList={onAddTiWishList}
        />
      </div>
    );
  }
 

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List 
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}

/**
 *  1. Criar uma nova versão do componente
 *  2. Comparar com a versão anterior
 *  3. Se houverem alterações, vai atualizar o que alterou
 */

/**
 *  1. Pure Function Components
 *  2. Renders too often
 *  3. Re-renders with same props
 *  4. Medium to big size
 */

/**
 *  useMemo
 *  1. Cálculos pesados
 *  2. Igualdade referencial (quando a gente passa aquela informação a um componente filho)
 * 
 *  useCallback
 *  1. Igualdade referencial
 */