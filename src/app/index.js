import '../styles/style.scss';
import { createTicket } from './createTicket';

const btnCheapTikets = document.querySelector('.btn_cheap-tickets');
const btnFastTikets = document.querySelector('.btn_fast-tickets'); 

btnCheapTikets.addEventListener('click', () => {
  changeActiveBtn(btnCheapTikets, btnFastTikets)
})

btnFastTikets.addEventListener('click', () => {
    changeActiveBtn(btnFastTikets, btnCheapTikets)
  })

function changeActiveBtn(btn1, btn2) {
  btn1.classList.add('btn_active');
  if (btn2.classList.contains('btn_active')) {
    btn2.classList.remove('btn_active');
  }
}

// const options = {
//   all: false,
//   with1: false,
//   with2: false,
//   with3: false,
//   forFast: false,
// }


// function getOptions() {
//   const param = document.querySelectorAll('.checkbox_hid')
//     if (param[0].checked) options[all] = true;
//     if (param[1].checked) options[with1] = true;
//     if (param[2].checked) options[with2] = true;
//     if (param[3].checked) options[with3] = true;
// }


async function getTickets(url) {
  const response = await fetch(url);
  const data = await response.json();
  // return data;
  console.log(data)

  if (data) { 
    const tickets = data.sort((a, b) => a.price - b.price).slice(0, 5);
    console.log(tickets)

    for (let key in tickets) {
      const ticket1 = {
        timeWay: () => {
          const time = (tickets[key].segments[0].duration / 60).toString().split('.')
          let hours = time[0];
          let minutes = time[1].slice(0, 2)
          if (minutes > 59) {
            let newHours = (minutes / 60).toString().split('.');
            hours = +hours + +newHours[0];
            minutes = newHours[1].slice(0, 2)
            time.splice(0, 2, hours, minutes);
          }
          return time;
        },
        price: tickets[key].price.toString().slice(0, 2) +' '+ tickets[key].price.toString().slice(2) + ' P',
        carrier: tickets[key].carrier,
        origin: tickets[key].segments[0].origin,
        destination: tickets[key].segments[0].destination,
        conutStops: tickets[key].segments[0].stops.length,
        stopPoints: tickets[key].segments[0].stops.join(','),
        startDate: tickets[key].segments[0].date,
        endDate: function() {
          const hourPerMil = 3600000;
          const minPerMil = 60000;
          const way = this.timeWay()[0] * hourPerMil + this.timeWay()[1].slice(0, 2) * minPerMil;
          return +Date.parse(this.startDate) + way;
        }
      }
      const ticket2 = {
        timeWay: () => {
          const time = (tickets[key].segments[1].duration / 60).toString().split('.')
          let hours = time[0];
          let minutes = time[1].slice(0, 2)
          if (minutes > 59) {
            let newHours = (minutes / 60).toString().split('.');
            hours = +hours + +newHours[0];
            minutes = newHours[1].slice(0, 2)
            time.splice(0, 2, hours, minutes);
          }
          return time;
        },
        origin: tickets[key].segments[1].origin,
        destination: tickets[key].segments[1].destination,
        conutStops: tickets[key].segments[1].stops.length,
        stopPoints: tickets[key].segments[1].stops.join(',')
      }
      createTicket(ticket1, ticket2);
    }
  }
}

getTickets('http://localhost:3000/tickets')


