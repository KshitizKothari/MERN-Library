import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import BookList from "./components/booklist";
// import Footer from './components/footer';
import axios from "axios";
import { Component } from "react";
import NewBook from "./components/newbook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UpdateBook from './components/updatebook';

// const http= new HttpService();
var api = axios.create({
  baseURL: ``,
});

class App extends Component {
  state = {
    bookList: [],
  };

  constructor(props) {
    super(props);
    this.getBooks();
  }

  getBooks = async () => {
    let data = await api.get("/book").then(({ data }) => data);
    this.setState({ bookList: data });
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/view">
            <div className="container row mt-2">
              <BookList bookList={this.state.bookList} />
            </div>
            <div className="container mt-3">
              <NewBook />
            </div>
          </Route>
          <Route path="/book/update">
          <div className="container row mt-2">
              <UpdateBook/>
              </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
