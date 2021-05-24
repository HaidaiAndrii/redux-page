export function getId() {
    return fetch("https://front-test.beta.aviasales.ru/search")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, 'data0')
        return data;
      });
  }

const SEARCHBYID = 'https://front-test.beta.aviasales.ru/tickets?searchId='
  export function getTickets(id) {

    let count = 0;
    let tickets = {};

    while(count < 3 || tickets === {}) {
      count++;
      tickets = fetch(`${SEARCHBYID}${id}`)
       .then((response) => {
         return response.json();
       })
       .then((data) => {
         return data;
       });
    }

    return tickets;
  }
