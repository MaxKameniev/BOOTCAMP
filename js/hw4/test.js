const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
    };
  
  
const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
    };


    let keys = Object.keys(order).map(el => order[el] * products[el]).reduce((acc, el) => el+acc);

    console.log(keys);