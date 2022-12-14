export function propertiesTicket(ticket) {
  return {
    firstHalf: {
      timeWay: () => {
        const time = (ticket.segments[0].duration / 60).toString().split('.')
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
      price: ticket.price.toString().slice(0, 2) +' '+ ticket.price.toString().slice(2) + ' P',
      carrier: ticket.carrier,
      origin: ticket.segments[0].origin,
      destination: ticket.segments[0].destination,
      conutStops: ticket.segments[0].stops.length,
      stopPoints: ticket.segments[0].stops.join(','),
      startDate: ticket.segments[0].date,
      endDate: function() {
        const hourPerMil = 3600000;
        const minPerMil = 60000;
        const way = this.timeWay()[0] * hourPerMil + this.timeWay()[1].slice(0, 2) * minPerMil;
        return +Date.parse(this.startDate) + way;
      }
    },
    secondHalf: {
      timeWay: () => {
        const time = (ticket.segments[1].duration / 60).toString().split('.')
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
      origin: ticket.segments[1].origin,
      destination: ticket.segments[1].destination,
      conutStops: ticket.segments[1].stops.length,
      stopPoints: ticket.segments[1].stops.join(','),
      startDate: ticket.segments[1].date,
      endDate: function() {
          const hourPerMil = 3600000;
          const minPerMil = 60000;
          const way = this.timeWay()[0] * hourPerMil + this.timeWay()[1].slice(0, 2) * minPerMil;
          return +Date.parse(this.startDate) + way;
      }
    }
  }    
}

// const ticket1 = {
//     timeWay: () => {
//       const time = (tickets[key].segments[0].duration / 60).toString().split('.')
//       let hours = time[0];
//       let minutes = time[1].slice(0, 2)
//       if (minutes > 59) {
//         let newHours = (minutes / 60).toString().split('.');
//         hours = +hours + +newHours[0];
//         minutes = newHours[1].slice(0, 2)
//         time.splice(0, 2, hours, minutes);
//       }
//       return time;
//     },
//     price: tickets[key].price.toString().slice(0, 2) +' '+ tickets[key].price.toString().slice(2) + ' P',
//     carrier: tickets[key].carrier,
//     origin: tickets[key].segments[0].origin,
//     destination: tickets[key].segments[0].destination,
//     conutStops: tickets[key].segments[0].stops.length,
//     stopPoints: tickets[key].segments[0].stops.join(','),
//     startDate: tickets[key].segments[0].date,
//     endDate: function() {
//       const hourPerMil = 3600000;
//       const minPerMil = 60000;
//       const way = this.timeWay()[0] * hourPerMil + this.timeWay()[1].slice(0, 2) * minPerMil;
//       return +Date.parse(this.startDate) + way;
//     }
//   }

// const ticket2 = {
//     timeWay: () => {
//       const time = (tickets[key].segments[1].duration / 60).toString().split('.')
//       let hours = time[0];
//       let minutes = time[1].slice(0, 2)
//       if (minutes > 59) {
//         let newHours = (minutes / 60).toString().split('.');
//         hours = +hours + +newHours[0];
//         minutes = newHours[1].slice(0, 2)
//         time.splice(0, 2, hours, minutes);
//       }
//       return time;
//     },
//     origin: tickets[key].segments[1].origin,
//     destination: tickets[key].segments[1].destination,
//     conutStops: tickets[key].segments[1].stops.length,
//     stopPoints: tickets[key].segments[1].stops.join(',')
//   }