export interface Vendor {
  id: number;
  check: boolean;
  name: string;
  email: string;
  phone: string;
  orders: number;
  ordersTotal: number;
  createdDate: Date;
  status: boolean;
  action: boolean;
}
