export enum EVENT_TYPE {
  VIEW_PRODUCT = "view_product",
  ADD_TO_CART = "add_to_cart",
  CHECKOUT_COMPLETED = "checkout_completed",
}

export type Event = {
  type: EVENT_TYPE;
  shopId: string;
  payload: any;
};

export enum ApiSearchParams {
  SHOP_ID = "shopId",
}
export enum ApiHeaders {
  SHOP_ID = "x-shop-id",
}
