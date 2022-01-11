import 'whatwg-fetch';

var getBooks = () =>{
    fetch('http://localhost:3004/book')
    .then(response=>{
        console.log(response.json());
    })
}



export default getBooks;