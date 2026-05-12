import { useEffect, useState } from "react";
import OrderView from "./OrderView";
import withData from './WithData';
import useData from './useData'


const HOST = 'http://localhost:3000';

function transformOrder(rawOrder) {
  return {
    id: rawOrder.id,
    customerName: rawOrder.customerName,
    pickupLocation: rawOrder.pickup,
    dropoffLocation: rawOrder.dropoff,
    driverName: rawOrder.driver,
    status: rawOrder.status,
    price: rawOrder.price
  };
}

// endpoint – функция, которая по id возвращает URL
// const getOrderUrl = (id) => `${HOST}/orders/${id}`;

// // Создаём компонент, который сам загружает данные и передаёт их в OrderView как проп "info"
// const Order = withData(OrderView, getOrderUrl, 'info');

function Order({ id }) {

  const orderData = useData(`/orders/${id}`, transformOrder);

  if (!orderData) return <div>Загрузка...</div>;

  return <OrderView info={orderData} />;
}

export default Order;