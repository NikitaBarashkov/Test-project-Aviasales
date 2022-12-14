export function createTicket(obj1, obj2) {
  document.querySelector('.content').insertAdjacentHTML('beforeend', 
  `
  <div class="ticket">
    <div class="ticket__price">
      <h3>${obj1.price}</h3>
      <img src="http://pics.avs.io/99/36/${obj1.carrier}.png" alt="carrier">  
    </div>
    <div class="ticket__info">
      <h3 class="info">
        ${obj1.origin} - ${obj1.destination}<br>
        <span>
        ${new Date(obj1.startDate).getHours().toString().length == 1 ? 
            '0' + new Date(obj1.startDate).getHours() :
            new Date(obj1.startDate).getHours()}:${new Date(obj1.startDate).getMinutes().toString().length == 1 ? 
            '0' + new Date(obj1.startDate).getMinutes() :
            new Date(obj1.startDate).getMinutes()} -
        ${new Date(obj1.endDate()).getHours().toString().length == 1 ?
            '0' + new Date(obj1.endDate()).getHours() :
            new Date(obj1.endDate()).getHours()}:${new Date(obj1.endDate()).getMinutes().toString().length == 1 ?
            '0' + new Date(obj1.endDate()).getMinutes() :
            new Date(obj1.endDate()).getMinutes()}
        </span>
      </h3>
      <h3 class="info">
        В ПУТИ<br>
        <span>${obj1.timeWay()[0]}ч ${obj1.timeWay()[1].slice(0, 2)}м</span>
      </h3>
      <h3 class="info">
        ${obj1.conutStops ? obj1.conutStops : 'БЕЗ'} 
        ${obj1.conutStops == 1 ? 'ПЕРЕСАДКА' : obj1.conutStops == 2 || obj1.conutStops == 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}
        <br>
        <span>${obj1.conutStops ? obj1.stopPoints : ''}</span>
      </h3>
    </div>
    <div class="ticket__info">
      <h3 class="info">
        ${obj2.origin} - ${obj2.destination}<br>
        <span></span>
      </h3>
      <h3 class="info">
        В ПУТИ<br>
        <span>${obj2.timeWay()[0]}ч ${obj2.timeWay()[1].slice(0, 2)}м</span>
      </h3>
      <h3 class="info">
        ${obj2.conutStops ? obj2.conutStops : 'БЕЗ'} 
        ${obj2.conutStops == 1 ? 'ПЕРЕСАДКА' : obj2.conutStops == 2 || obj2.conutStops == 3 ? 'ПЕРЕСАДКИ' : 'ПЕРЕСАДОК'}
        <br>
        <span>${obj2.conutStops ? obj2.stopPoints : ''}</span>
     </h3>
    </div>
  </div>
  `)  
}
