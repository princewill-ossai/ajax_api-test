document.getElementById("button1").addEventListener("click", getUser);
document.getElementById('button2').addEventListener('click', getUsers)

function getUser() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api.openweathermap.org/geo/1.0/direct?q=Nigeria&limit=5&appid={13145baaf7726f3f2c3674419bd33977}", true);

  xhr.onload = function () {
    if (this.status === 200) {
        console.log(this.responseText)
    }
  };
  xhr.send();
}


// function getUsers() {
//     var xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

//     xhr.onload = function() {
//         if (this.status === 200) {
//             var post = JSON.parse(this.responseText)

//             let output ='';

//             for (var i in post) {
//                 output += `
//                 <ul>
//                  <li>user ID: ${post[1].userId}</li>
//                  <li>Title: ${post[1].title}</li>
//                  <li>body: ${post[1].body}</li>
//                 </ul>
//                 `
//                 document.getElementById('users').innerHTML = output;
//             }
//         }
//     }
//     xhr.send();
// }

//api.openweathermap.org/geo/1.0/direct?q={Lagog},{100211},{+234}&limit={limit}&appid={ 13145baaf7726f3f2c3674419bd33977}
