export interface Warehouse {
  id: number;
  check: boolean;
  categoriesName: string;
  createdBy: string;
  date: Date;
  updatedBy: string;
  updateDate: Date;
  status: string;
}

export interface NewWarehouse {
  categoriesName: string;
  warehouseName: string;
  warehouseCode: string;
}


