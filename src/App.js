import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PostList extends React.Component {
  state = {
    users : []
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">Tutorail Sharing</a>
          </div>
        </nav>
        <div className="container">
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            </thead>
           <tbody>
           {this.state.users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
           </tbody>
          </table>
        </div>
      </div>
    )
  }
}