/*  const productos =[
        {
            id:1,
            combo : 'chesseburger',
            precio: 500,
        },
        {
            id:2,
            combo:'chessebacon',
            precio: 600,

        },
        {   
            id:3,
            combo: 'Texana',
            precio: 700,
        },
        {   
            id:4,
            combo:'Americana',
            precio: 650,
        },
];

let opcion = '';
opcion+='Bienvenido a Bajon Burger\n';
opcion+='1 - Menu\n';
opcion+='2 - Mostrar carrito\n';
opcion+='3 - Eliminar producto\n';
opcion+='4 - Finalizar compra\n';
opcion+='0 - Salir\n';

const carrito = [];




const system = () =>
{
    while(true)
    {
        let value = parseInt(prompt(opcion));
        switch (value)
        {   
            case 0:
           break; 
           
           case 1:
               menu();
            break;

            case 2:
               mostrarProducto(); 
            break;
            case 3:
                eliminarProducto();
            break;

            case 4:
                compratotal();
            break;

            default:
            alert('Ingresa una opcion valida por favor')
            break;

        }
         if(value == 0 )
        {
            alert('Compra Finalizada')
            break;
        } 

    }
}

const menu = () =>
{
 let list = 'Elegi los siguentes combos:\n';
 for (const producto of productos)
 {  
     list+= producto.id + '- ' + producto.combo + '\n';
 }

 let seleccion = parseInt(prompt(list));
 let found = false;
 for (const element of productos)
 {
     if((element.id == seleccion) && (found=true))
    {
       
        carrito.push(element);
        alert('Su bajon se agrego con exito');
        break;
          
    }else if (found = false) 
    {
        alert('Producto no encontrado');
    }
 }
 
} 


const mostrarProducto = () =>
{   
    let list = 'Tu carrito tiene lo siguiente: \n';
    let index = 1;
    for (const item of carrito)
    {   
        list += index++ + '- ' + item.combo + '\n';
    }
    alert(list);
}

const eliminarProducto = () =>
{
  let list = 'Tu carrito tiene los siguientes Bajones: \n';
  let index = 1;
  for (const item of carrito)
  { 
      list += index++ + '- ' + item.combo + '\n';

  }
  let seleccion = parseInt(prompt(list));
  carrito.splice(seleccion - 1 , 1);
  alert('Bajon eliminado con exito')
}

const compratotal = () =>
{   
   let total = 0;
    for (const item of carrito)
    {   
        total += item.precio;
    }
    alert('tu total es: $' + total);
   
}

system();

 
 */