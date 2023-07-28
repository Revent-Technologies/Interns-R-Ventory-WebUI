import { createAction, props } from '@ngrx/store';
import { Warehouse } from '../../interfaces/warehouse.interface';
import { NewWarehouse} from '../../interfaces/new-warehouse.interface';

export const LoadWarehouse = createAction('[Warehouse] Load Warehouse');

export const LoadWarehouseSuccess = createAction(
  '[Warehouse] Load Warehouse Success',
  props<{ payload: Warehouse[] }>()
);

export const AddWarehouse = createAction(
  '[Warehouse] Add warehouse',
  props<{newWarehouse: NewWarehouse}>()
);

export const AddWarehouseSuccess = createAction(
  '[Warehouse] Add warehouse success',
  props<{warehouse:Warehouse}>()
);

// export const updateWarehouse = createAction(
//   '[Warehouse] Update Warehouse',
//   props<{ updatedWarehouse: Warehouse}>(),
// );

// export const updateWarehousesSuccess = createAction(
//   '[Warehouse] Update Warehouse Success',
//   props<{ updatedWarehouse: Warehouse }>()
// );
