export function createTicket(obj) {
  document.querySelector('.content').insertAdjacentHTML('beforeend', 
  `
  <div class="ticket">
    <div class="ticket__price">
      <h3>${obj.firstHalf.price}</h3>
      <img src="http://pics.avs.io/99/36/${obj.firstHalf.carrier}.png" alt="carrier">  
    </div>
    <div class="ticket__info">
      <h3 class="info">
        ${obj.firstHalf.origin} - ${obj.firstHalf.destination}<br>
        <span>
          ${new Date(obj.firstHalf.startDate).getHours().toString().length == 1 ? 
              '0' + new Date(obj.firstHalf.startDate).getHours() :
              new Date(obj.firstHalf.startDate).getHours()}:${new Date(obj.firstHalf.startDate).getMinutes().toString().length == 1 ? 
              '0' + new Date(obj.firstHalf.startDate).getMinutes() :
              new Date(obj.firstHalf.startDate).getMinutes()} -
          ${new Date(obj.firstHalf.endDate()).getHours().toString().length == 1 ?
              '0' + new Date(obj.firstHalf.endDate()).getHours() :
              new Date(obj.firstHalf.endDate()).getHours()}:${new Date(obj.firstHalf.endDate()).getMinutes().toString().length == 1 ?
              '0' + new Date(obj.firstHalf.endDate()).getMinutes() :
              new Date(obj.firstHalf.endDate()).getMinutes()}
        </span>
      </h3>
      <h3 class="info">
        В ПУТИ<br>
        <span>${obj.firstHalf.timeWay()[0]}ч ${obj.firstHalf.timeWay()[1].slice(0, 2)}м</span>
      </h3>
      <h3 class="info">
        ${obj.firstHalf.conutStops ? obj.firstHalf.conutStops : 'БЕЗ'} 
        ${obj.firstHalf.conutStops == 1 ? 'ПЕРЕСАДКА' : obj.firstHalf.conutStops == 2 || obj.firstHalf.conutStops == 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}
        <br>
        <span>${obj.firstHalf.conutStops ? obj.firstHalf.stopPoints : ''}</span>
      </h3>
    </div>
    <div class="ticket__info">
      <h3 class="info">
        ${obj.secondHalf.origin} - ${obj.secondHalf.destination}<br>
        <span>
        ${new Date(obj.secondHalf.startDate).getHours().toString().length == 1 ? 
          '0' + new Date(obj.secondHalf.startDate).getHours() :
          new Date(obj.secondHalf.startDate).getHours()}:${new Date(obj.secondHalf.startDate).getMinutes().toString().length == 1 ? 
          '0' + new Date(obj.secondHalf.startDate).getMinutes() :
          new Date(obj.secondHalf.startDate).getMinutes()} -
      ${new Date(obj.secondHalf.endDate()).getHours().toString().length == 1 ?
          '0' + new Date(obj.secondHalf.endDate()).getHours() :
          new Date(obj.secondHalf.endDate()).getHours()}:${new Date(obj.secondHalf.endDate()).getMinutes().toString().length == 1 ?
          '0' + new Date(obj.secondHalf.endDate()).getMinutes() :
          new Date(obj.secondHalf.endDate()).getMinutes()}
        </span>
      </h3>
      <h3 class="info">
        В ПУТИ<br>
        <span>${obj.secondHalf.timeWay()[0]}ч ${obj.secondHalf.timeWay()[1].slice(0, 2)}м</span>
      </h3>
      <h3 class="info">
        ${obj.secondHalf.conutStops ? obj.secondHalf.conutStops : 'БЕЗ'} 
        ${obj.secondHalf.conutStops == 1 ? 'ПЕРЕСАДКА' : obj.secondHalf.conutStops == 2 || obj.secondHalf.conutStops == 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}
        <br>
        <span>${obj.secondHalf.conutStops ? obj.secondHalf.stopPoints : ''}</span>
     </h3>
    </div>
  </div>
  `)  
}
