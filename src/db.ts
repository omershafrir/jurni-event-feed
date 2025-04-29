import { EVENT_TYPE, Event } from "./types";

export var events: Event[] = [
  {
    shopId: "1",
    payload: {},
    type: EVENT_TYPE.ADD_TO_CART,
  },
  {
    shopId: "2",
    payload: {},
    type: EVENT_TYPE.CHECKOUT_COMPLETED,
  },
];
