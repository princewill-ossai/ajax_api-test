// // import 'regenerator-runtime/runtime';
// // import axios from 'axios';

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// const getTodoItems = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/todos?_limit=5`);

//     const todoItems = response.data;

//     console.log(`GET: Here's the list of todos`, todoItems);

//     return todoItems;
//   } catch (errors) {
//     console.error(errors);
//   }
// };

// const createTodoElement = (item) => {
//   const todoElement = document.createElement("li");

//   todoElement.appendChild(document.createTextNode(item.title));

//   return todoElement;
// };

// const updateTodoList = todoItems => {
//   const todoList = document.querySelector('ul');

//   if (Array.isArray(todoItems) && todoItems.length > 0) {
//     todoItems.map((todoItem) => {
//       todoList.appendChild(createTodoElement(todoItem));
//     });
//   } else if (todoItems) {
//     todoList.appendChild(createTodoElement(todoItems));
//   }
// };

// const main = async () => {
//   updateTodoList(await getTodoItems());
// };

// main();

// async function fetchCatBreed() {
//   const apiUrl = "https://catfact.ninja/breeds?limit=8";

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const data = await response.json();
//     const main_div = document.getElementById('main_div');

//     const dataInfo = `
//       <p>Cat breed: ${data.breed}</p>
//       <p>Cat country: ${data.country}</p>
//       <p>Cat origin: ${data.origin}</p>
//       <p>Cat coat: ${data.coat}</p>
//       <p>Cat pattern: ${data.pattern}</p>
//     `;

//     main_div.innerHTML = dataInfo;
    
//   } catch (error) {
//     alert("Request failed");
//   }
// }

// fetchCatBreed();



async function fetchCatBreed() {
  const apiUrl = "https://catfact.ninja/breeds?limit=8";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    const main_div = document.getElementById('main_div');

    main_div.innerHTML = '';

    data.data.forEach(breedInfo => {
      const dataInfo = `
        <div>
          <p>Cat breed: ${data.breedInfo.breed}</p>
          <p>Cat country: ${data.breedInfo.country}</p>
          <p>Cat origin: ${data.breedInfo.origin}</p>
          <p>Cat coat: ${data.breedInfo.coat}</p>
          <p>Cat pattern: ${data.breedInfo.pattern}</p>
        </div>
        <hr>
      `;
      main_div.innerHTML += dataInfo;
    });

  } catch (error) {
    alert("Request failed: " + error.message);
  }
}

fetchCatBreed();

