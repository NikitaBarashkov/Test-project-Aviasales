function getOptions() {
  const options = document.querySelectorAll('.checkbox_hid');
  
  return {
    allTickets: options[0].checked,
    withoutTransfers: options[1].checked,
    oneTransfer: options[2].checked,
    twoTransfres: options[3].checked,
    treeTransfers: options[4].checked
  }
}

function filterTickets(array, object) {
  if (object.allTickets) return array;
  const arr = [];
  if (object.withoutTransfers) {
    let selectedTicets = array.filter(elem => elem.segments[0].stops.length == 0 && elem.segments[1].stops.length == 0);
    arr.push(selectedTicets);
  }
  if (object.oneTransfer) {
    let selectedTicets = array.filter(elem => elem.segments[0].stops.length == 1 && elem.segments[1].stops.length == 1);
    arr.push(selectedTicets);
  }
  if (object.twoTransfres) {
    let selectedTicets = array.filter(elem => elem.segments[0].stops.length == 2 && elem.segments[1].stops.length == 2);
    arr.push(selectedTicets);
  }
  if (object.treeTransfers) {
    let selectedTicets = array.filter(elem => elem.segments[0].stops.length == 3 && elem.segments[1].stops.length == 3);
    arr.push(selectedTicets);
  }
  return arr.flat();
}

export {getOptions, filterTickets};