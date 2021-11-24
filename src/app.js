document.getElementById('formOrder').addEventListener('submit' , saveOrder);////escucha el evento submit
///cada ves que escuche el submit, llama a la funcion saveOrder

function saveOrder(e){
   let title = document.getElementById('title').value
   let description = document.getElementById('description').value
   let idCard = document.getElementById('idCard').value
   console.log(description)
 
   const order = {
       title, ///title: title
        description, // description: description
        idCard

   };
    
  if(localStorage.getItem('orderMem') === null){
      let orders = [];  ///el arreglo se crea en el if
      orders.push(order);
      localStorage.setItem('orderMem', JSON.stringify(orders) );
  }
  else{
    let orders = JSON.parse(localStorage.getItem('orderMem')) ;
    orders.push(order);
    localStorage.setItem('orderMem',JSON.stringify(orders));


  }
    
  getOrders();
  document.getElementById('formOrder').reset();
   e.preventDefault();
    
}



function deleteOrder(title){

   let orders = JSON.parse(localStorage.getItem('orderMem'));
   for (let i = 0; i < orders.length; i++) {
      if(orders[i].title == title) {
          orders.splice(i, 1);

      }
       
   }

   localStorage.setItem('orderMem', JSON.stringify(orders));
   getOrders();

}


///BUSCAR CLIENTE CON EL ID
function callUser(idCard){
   
    let callView = document.getElementById('call');

    callView.innerHTML = '';

    callView.innerHTML = `
    <p> Llamando a cliente con la identificación :  ${idCard} ... 
     <a href="#" class="btn btn-danger m1-5" onclick="call.innerHTML = '' ">
        Cancelar
     </a>
     </p>
    
    `

    getOrders();
 }



 function getOrders(){

    let orders = JSON.parse(localStorage.getItem('orderMem'));
    let orderView = document.getElementById('order');

    orderView.innerHTML = '';

    for(let i = 0; i < orders.length; i++) {
    let title = orders[i].title;
    let description = orders[i].description;
    let idCard = orders[i].idCard;

        orderView.innerHTML += `<div class="card mb-3">
        <div class = "card-body" >
        <p> ${title} -  </p>
        <p> detalle de Pedido: ${description} </p>
        <p> Identificación: ${idCard} </p>
        <a href="#" class="btn btn-danger m1-5" onclick="deleteOrder('${title}')">
        Anular pedido
        </a>
        <a href="#" class="btn btn-success color=green m1-5" onclick="callUser('${idCard}')">
        WhatsApp
        </a>
       
        </div>`;
        
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    }
