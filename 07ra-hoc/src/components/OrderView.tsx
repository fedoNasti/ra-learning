export interface OrderViewProps {
  info: Order;
}

export interface Order {
  id: string;
  customerName: string;
  pickupLocation: string;
  dropoffLocation: string;
  driverName: string;
  status: string;
  price: string;
}

const OrderView = ({ info }: OrderViewProps) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginBottom: 8, borderRadius: 4 }}>
      <h3>Order #{info.id}</h3>
      <p>Client: {info.customerName}</p>
      <p>Pickup: {info.pickupLocation}</p>
      <p>Dropoff: {info.dropoffLocation}</p>
      <p>Driver: {info.driverName}</p>
      <p>Status: {info.status}</p>
      <p>Price: {info.price}</p>
    </div>
  );
}

export default OrderView;