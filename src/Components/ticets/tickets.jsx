import React, { useState, useEffect } from "react";
import { getId } from "../../API/API";
import { getTickets } from "../../API/API";
// import { aviasalesReducer } from '../../store/reducers/aviasalesReducer';
import { aviasalesReducerAC, aviasalesAllReducerAC } from '../../store/actions/aviasalesAction'
import {useDispatch, useSelector} from 'react-redux'
// import {styles } from './styles.module.css'
import { SortTickets } from './components/sortTickets/SortTickets';
import { Card } from './components/card/Card'
import  styles from './styles.module.css'
import { STOPSFILTER } from './../../constants/aviasales'
import { FilterByStops } from './components/fillter/FilterByStops'


export const  Tickets = () => {
    let [ticketsCount, setTicketsCount] = useState(5);
    let [searchId, setSearchId] = useState("");
    let [ecrinizedTickets, setEcrinizedTickets] = useState([]);
    let [selectedFillters, setFillter] = useState([]);
    const tickets = useSelector(state => state.allAviaTickets)
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    
    console.log(store, 'store');
    
    useEffect(() => {
        if (!searchId) {
          getId().then((data) => setSearchId(data.searchId));
        }
      
        if (searchId && tickets.length === 0) {
          getTickets(searchId)
            .then(data => {
              setEcrinizedTickets(data.tickets)
              dispatch(aviasalesReducerAC(data.tickets));
            
          })
        }
        
        console.log(tickets);
        ecrinizeTickets(tickets);
      }, [searchId, tickets, selectedFillters]);
    
      function sortBy(value) {
        let sordetarr = [];
        switch (value) {
          case "chipper":
            sordetarr = ecrinizedTickets.sort(
              (ticketA, ticketB) => ticketA.price - ticketB.price
            );
            break;
          case "fastest":
            sordetarr = ecrinizedTickets.sort(
              (ticketA, ticketB) =>
                ticketA.segments[0].duration - ticketB.segments[0].duration
            );
            break;
          case "optimal":
            sordetarr = findOptimalTicket();
            break;
          default:
            return value;
        }
        setEcrinizedTickets([...sordetarr]);
      }

      function ecrinizeTickets(tickets) {
        if (tickets && ecrinizedTickets.length === 0) {
          return setEcrinizedTickets([...tickets]);
        }
    
        if (selectedFillters.length) {
          return setEcrinizedTickets(
            tickets.filter((ticket) =>
              selectedFillters.includes(ticket.segments[1].stops.length)
            )
          );
        }
    
        return setEcrinizedTickets([...tickets]);
      }
    
      function findOptimalTicket() {
        let sorted = ecrinizedTickets.sort(
          (ticketA, ticketB) => ticketA.price - ticketB.price
        );
        sorted.forEach((el, i) => (el.priceIndex = i));
        sorted = sorted.sort(
          (ticketA, ticketB) =>
            ticketA.segments[0].duration - ticketB.segments[0].duration
        );
        sorted.forEach((el, i) => (el.ticketIndex = i + el.priceIndex));
        sorted = sorted.sort(
          (ticketA, ticketB) => ticketA.ticketIndex - ticketB.ticketIndex
        );
    
        return sorted;
      }
    
      function addTickets() {
        setTicketsCount((ticketsCount += 5));
      }
    
      return (
      <div className={styles.main}>
        {ecrinizedTickets.length !== 0 ? <>
          <FilterByStops
          values={STOPSFILTER}
          selectedFillters={selectedFillters}
          setFillter={setFillter}
          />
        <div>
          <SortTickets sortBy={sortBy} findOptimalTicket={findOptimalTicket} />
          {ecrinizedTickets.slice(0, ticketsCount).map((ticket, index) => (
            <div className={styles.cards} key={index}>
              <Card ticket={ticket} />
            </div>
          ))}
          {ecrinizedTickets.length - ticketsCount > 5 &&
          <button className={styles.addButton} type="button" onClick={addTickets}>
            Добавить ещё 5 билетов
          </button>
          }
        </div>
        </>
        :  <>
          <div>
            Trying to load tickets, if it takes more then minute - please, reload this page.
          </div>
        </>}
      </div>
      )
}