
import { ADD_ITEM, DELETE_ITEM, GET_ITEM, GET_ITEM_ID, UPDATE_ITEM } from "./ReType";

export const addItem = (item) => ({
  type:ADD_ITEM,
  payload: item, 
} );

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  payload: item,
});

export const getItem = (item) => ({
    type: GET_ITEM,
    payload: item,
})

export const getitembyid = (id) => ({
    type: GET_ITEM_ID,
    payload: id,
})

