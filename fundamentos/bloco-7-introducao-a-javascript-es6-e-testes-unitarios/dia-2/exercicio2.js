const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const costumerName = order.name;
    const costumerPhoneNumber = order.phoneNumber;
    const address = 'address';
    const street = order[address].street;
    const number = order[address].number;
    const apto = order[address].apartment;
    const deliveryPerson = order.order.delivery.deliveryPerson;
    
    console.log(`Olá ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${costumerPhoneNumber}, ${street}, ${number}, apto ${apto}`);
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const costumerName = order.name;
    const pizzas = Object.keys(order.order.pizza);
    const valor = order.payment.total;
    const refri = order.order.drinks.coke.type;

    console.log(`Olá, ${costumerName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${refri} é de R$ ${valor}.`)
  };
  
  orderModifier(order);