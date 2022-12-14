function sortByPrice(currentTicket, nextTicket) {
   return currentTicket.price < nextTicket.price ? -1 : currentTicket.price > nextTicket.price ? 1 : 0;
}

function sortByTime(currentTicket, nextTicket) {
  if ((currentTicket.segments[0].duration + currentTicket.segments[1].duration) / 2 < 
      (nextTicket.segments[0].duration +  nextTicket.segments[1].duration) / 2) {
    return -1;
  }
  if ((currentTicket.segments[0].duration + currentTicket.segments[1].duration) / 2 > 
      (nextTicket.segments[0].duration +  nextTicket.segments[1].duration) / 2) {
    return 1;
  }
  return 0;
}

export { sortByPrice, sortByTime };