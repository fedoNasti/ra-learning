import { useEffect, useState } from "react";
import OrderListView from './OrderListView';
import useData from './useData';

let HOST = 'http://localhost:3000';
const url = `${HOST}/orders`;
const transformData = (data) => data;

//const OrderList = withData(OrderListView, url, 'orders');

const OrderList = () => {
  
  const orders = useData(url, transformData);

  if (!orders) return <div>Загрузка...</div>;

  return (
    <OrderListView orders={orders}></OrderListView>
  )
}

export default OrderList;