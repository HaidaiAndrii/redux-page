// import { AccordionActions } from '@material-ui/core';
import {  SORT_BY, SUCCESS } from '../../constants/aviasales';

const initialState = [];

export const aviasalesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SUCCESS: {
            return [...action.tickets.tickets];
        }

         case SORT_BY: {
             
            switch (action.sortType) {
                case "chipper":
                  return [...action.payload].sort(
                    (ticketA, ticketB) => ticketA.price - ticketB.price
                  );
                case "fastest":
                    return [...action.payload].sort(
                    (ticketA, ticketB) =>
                      ticketA.segments[0].duration - ticketB.segments[0].duration
                  );
            }
         }
        default: {
            return state;
        }
    }
};