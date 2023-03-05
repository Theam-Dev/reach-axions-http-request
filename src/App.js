import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PostList extends React.Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="#">Tutorail Sharing</a>
          </div>
        </nav>
        <div class="container">
          <table className="table table-bordered">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    )
  }
}