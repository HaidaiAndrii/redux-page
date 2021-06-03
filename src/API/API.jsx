const SEARCHBYID = 'https://front-test.beta.aviasales.ru/tickets?searchId=';



export function getId() {
    return fetch("https://front-test.beta.aviasales.ru/search")
      .then((response) => {
        return response.json();
      })
  }

  export function getTickets(id) {
    return fetch(`${SEARCHBYID}${id}`).then((response) =>{console.log(response.json); return response.json()})
    
  }

  export function getMovies() {
    return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9002146c`).then((response) => response.json())
    
  }


  export function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {;
        return data;
      });
  }


  export async function sendUser(user) {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
  }


  export const getUser = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => response.json())