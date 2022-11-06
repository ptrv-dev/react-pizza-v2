import React from 'react';

import { useAppSelector } from '../redux/store';

import Sort from '../components/Sort';
import Grid from '../components/Grid';
import ProductItem from '../components/ProductItem';

const IndexPage: React.FC = () => {
  const { products, status } = useAppSelector((state) => state.products);

  return (
    <div className="container">
      <Sort />
      <h1 className="my-4 font-bold text-2xl md:text-3xl lg:text-4xl lg:my-8">
        {status === 'loading'
          ? 'Загрузка...'
          : !(products.length < 1)
          ? 'Все пиццы'
          : 'По вашим критериям ничего не найдено 😔'}
      </h1>
      {products && (
        <Grid>
          {products.map((product) => (
            <ProductItem key={product._id} {...product} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default IndexPage;
