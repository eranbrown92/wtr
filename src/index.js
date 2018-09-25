import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        username: "jdoe",
        status: "this is a post"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Feed post={this.state.post} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header">Header</h1>
      </div>
    );
  }
}

class Feed extends React.Component {
  render() {
    return (
      <div>
        <AddPost />
        <Posts post={this.props.post} />
      </div>
    );
  }
}

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    const message = e.target.message.value;

    if (message) {
      alert(message);
    }
    return message;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="message" />
          <button>Add Post</button>
        </form>
      </div>
    );
  }
}

class Posts extends React.Component {
  render() {
    return (
      <div>
        <div class="people-you-might-know">
          <div class="add-people-header">
            <h6 class="header-title">My Feed</h6>
          </div>
          <div class="row add-people-section">
            <div class="small-12 medium-6 columns about-people">
              <div class="about-people-avatar">
                <img
                  class="avatar-image"
                  src="https://i.imgur.com/UPVxPjb.jpg"
                  alt="Kishore Kumar"
                />
              </div>
              <div class="about-people-author">
                <p class="author-name">{this.props.post.status}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="people-you-might-know">
          <div class="add-people-header">
            <h6 class="header-title" />
          </div>
          <div class="row add-people-section">
            <div class="small-12 medium-6 columns about-people">
              <div class="about-people-avatar">
                <img
                  class="avatar-image"
                  src="https://i.imgur.com/UPVxPjb.jpg"
                  alt="Kishore Kumar"
                />
              </div>
              <div class="about-people-author">
                <p class="author-name">{this.props.post.status}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="people-you-might-know">
          <div class="add-people-header">
            <h6 class="header-title" />
          </div>
          <div class="row add-people-section">
            <div class="small-12 medium-6 columns about-people">
              <div class="about-people-avatar">
                <img
                  class="avatar-image"
                  src="https://i.imgur.com/UPVxPjb.jpg"
                  alt="Kishore Kumar"
                />
              </div>
              <div class="about-people-author">
                <p class="author-name">{this.props.post.status}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="people-you-might-know">
          <div class="add-people-header">
            <h6 class="header-title" />
          </div>
          <div class="row add-people-section">
            <div class="small-12 medium-6 columns about-people">
              <div class="about-people-avatar">
                <img
                  class="avatar-image"
                  src="https://i.imgur.com/UPVxPjb.jpg"
                  alt="Kishore Kumar"
                />
              </div>
              <div class="about-people-author">
                <p class="author-name">{this.props.post.status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
