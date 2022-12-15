function getOptions() {
  const options = document.querySelectorAll('.checkbox_hid');

  return {
    allTickets: options[0].checked,
    0: options[1].checked,
    1: options[2].checked,
    2: options[3].checked,
    3: options[4].checked
  }
}

function filterTickets(array, object) {
  if (object.allTickets) return array;
  
  const transfers = Object.entries(object)
    .filter(elem => elem[1] === true)
    .flat()
    .filter(arr => typeof arr == 'string')
    .map(elem => +elem);
  
  return array.filter(ticket => transfers.includes(ticket.segments[0].stops.length) && transfers.includes(ticket.segments[1].stops.length));
}

export {getOptions, filterTickets};