import OrderView from './OrderView';
import type { Order } from './OrderView';

interface OrderListViewProps {
  orders: Order[];
}

const OrderListView = ({ orders = [] }: OrderListViewProps ) => {
  return (
    orders.map(order => ( <OrderView key={order.id} info={order} /> ))
  );
}

export default OrderListView;