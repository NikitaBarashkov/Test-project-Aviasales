import '../styles/style.scss';
import { createTicket } from './createTicket';
import { getOptions, filterTickets } from './countTransfers';
import { sortByPrice, sortByTime } from './sortTickets';
import { propertiesTicket } from './propertiesTicket';

const btnCheapTikets = document.querySelector('.btn_cheap-tickets');
const btnFastTikets = document.querySelector('.btn_fast-tickets'); 
const optionsBlock = document.querySelector('.options');
const btnOptions = document.querySelector('.options__btn');

window.addEventListener('load', () => {
  getTickets();
})

document.querySelector('.btn-block')
  .addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn_active')) {
      btnCheapTikets.classList.toggle('btn_active');
      btnFastTikets.classList.toggle('btn_active');
      getTickets();
    }
})

document.querySelectorAll('.checkbox_hid')
  .forEach(option => {
    option.addEventListener('change', getTickets);
})

btnOptions.addEventListener('click', () => {
  btnOptions.classList.toggle('options__btn_active');
  optionsBlock.classList.toggle('options_active');
})

async function getTickets() {
  const outputTikects = document.querySelectorAll('.ticket');
  if (outputTikects) {
    outputTikects.forEach(ticket => ticket.remove())
  } 

  const response = await fetch('http://localhost:3000/tickets');
  const data = await response.json();

  if (data) { 
    const optionsTransfer = getOptions();
    const response = filterTickets(data, optionsTransfer);
    
    if (document.querySelector('.btn_cheap-tickets').classList.contains('btn_active')) {
      response.sort(sortByPrice);
    } else {
      response.sort(sortByTime);
    }
    const tickets = response.slice(0, 5);
    
    for (let key in tickets) {
      const ticket = propertiesTicket(tickets[key]); 
      createTicket(ticket);
    }
  }
}







