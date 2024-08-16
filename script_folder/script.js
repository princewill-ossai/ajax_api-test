// const amazonProject = {
//     name: 'basketBall',
//     price: 2095
// };

// amazonProject.price = 2595

// amazonProject.deleveryDate = '3-days'

// function comparePrice(product1, product2) {
//     if (product1.price < product2.price) {
//       return product1;
//     } else {
//       return product2;
//     }
//   }

//   const product1 = {
//     name: 'basketball',
//     price: 2095
//   };

//   const product2 = {
//     name: 'socks',
//     price: 1090
//   };

//   console.log(comparePrice(product1, product2));

function isSameProduct(product1, product2) {
  if (product1.name === product2.name && product1.price === product2.price) {
    return true;
  } else {
    return false;
  }
}

const product1 = {
  name: "basketball",
  price: 2095,
};

const product2 = {
  name: "socks",
  price: 1090,
};

console.log(isSameProduct(product1, product2));

console.log("Good Morning!".toLowerCase());
console.log('Test'.repeat(2))