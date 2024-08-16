// const inp = document.getElementById('input');

// document.getElementById('addBtn').addEventListener('click', addToList);

// function addToList() {
//     const todoList = document.getElementById('todo');
//     const newItem = document.createElement('li');
//     newItem.textContent = inp.value;
//     todoList.appendChild(newItem);
// }

// document.getElementById('delete').addEventListener('click', deleteItem);

// function deleteItem() {
//    const todoList = document.getElementById('todo');
//    todoList
// }

// const myPromise = new Promise((resolve, reject) => {
//    let success = true;

//    if (success) {
//       resolve('promise Successfull')
//    } else {
//       reject('Promise Failed')
//    }
// })

// myPromise
//      .then(result => {
//       console.log('result')
//      })
//      .catch(error => {
//       console.error('error')
//      })
//      .finally(() => {
//       console.log('operation has been carried out')
//      })

//      function ascynchronious() {
//       return new Promise()
//      }

   function ascynchronious() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let success = Math.random() > 0.5;

         if (success) {
         resolve("Operation successfull");
         } else {
         reject("Operation failed");
         }
      }, 3000);
   });
   }

   ascynchronious()
   .then(data => 
      console.log(data)
   )
   .catch(error => 
      console.error(error)
   )
   .finally(() => 
      console.log("Operation has been carried out")
   );


   function fetchData() {
      return new Promise((resolve) => {
         setTimeout(() => { resolve('data') }, 1000)
      })
   }

   function proccessData(data) {
      return new Promise((resolve) => {
         setTimeout(() => { resolve(`${data} and proccessed`) }, 1000)
      })
   }

   function saveData(data) {
      return new Promise((resolve) => {
         setTimeout(() => { resolve(`${data} saved`) }, 1000)
      })
   }

   fetchData()
       .then(data => proccessData(data))
       .then(proccessedData => saveData(proccessData))
       .then(finalResult => console.log(finalResult))
       .catch(error => console.error('Error:', error))


const newPromise = new Promise((resolve, reject) => {
   let success = true;

   if (success) {
      resolve('Operation successfull')
   } else {
      reject('Operation failed')
   }
})

newPromise()
     .then(result => console.log(result))
     .catch(error => console.error(error))
     .finally(FinalResult => console.log('Operation has been carried out'))


const fetchData = new Promise((resolve) => {
   setTimeout(() => {
      resolve('data')
   })
})

const proccessData = new Promise((data) => {
   setTimeout(() => {
      resolve(`${data} and processed`)
   })
})

const saveData = new Promise((data) => {
   setTimeout(() => {
      resolve(`${data} saved`)
   })
})

ascynchronious()
    .then(fetchData => console.log(proccessData))
    .then(proccessData => console.log(saveData))