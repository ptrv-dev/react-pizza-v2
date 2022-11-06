import React from 'react';
import CartItem from '../components/CartItem';

const CartPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-6 lg:mb-8">
        Корзина
      </h1>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col gap-4 md:gap-8 w-full md:basis-1/2">
          <CartItem />
          <CartItem />
        </div>
        <div className="flex flex-col bg-amber-100 p-5 w-full max-w-md mx-auto md:mx-0 md:basis-1/2">
          <div className="inline-flex items-center uppercase text-lg mb-3">
            <span className="flex-1 h-px bg-stone-900"></span>
            <h4 className="mx-3">Ваш чек</h4>
            <span className="flex-1 h-px bg-stone-900"></span>
          </div>
          <div className="flex flex-col text-sm lg:text-base gap-3">
            <div className="flex">
              <p className="basis-1/2">Наименование</p>
              <p className="flex-1">Кол-во</p>
              <p className="flex-1">Стоимость</p>
            </div>
            <div className="flex flex-col gap-1 text-stone-700">
              <div className="flex">
                <p className="basis-1/2">Пицца</p>
                <p className="flex-1">1.00</p>
                <p className="flex-1">290.00</p>
              </div>
              <div className="flex">
                <p className="basis-1/2">Пицца</p>
                <p className="flex-1">1.00</p>
                <p className="flex-1">290.00</p>
              </div>
              <div className="flex">
                <p className="basis-1/2">Услуги доставки</p>
                <p className="flex-1"></p>
                <p className="flex-1">70.00</p>
              </div>
            </div>
            <div className="flex font-bold">
              <p className="basis-1/2">Всего</p>
              <p className="flex-1">2.00</p>
              <p className="flex-1">560.00</p>
            </div>
          </div>
          <hr className="my-3 border-dashed border-stone-900" />
          <button className="bg-amber-500 text-stone-50 uppercase text-lg px-10 py-2 self-center rounded-xl">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
