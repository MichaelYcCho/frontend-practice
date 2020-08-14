import React from 'react';
import { Button } from 'antd';
import 'App.css';


class PostDetail extends React.Component {
  state = {
    PostDetail: null,
  }

  componentDidMount() {
    const { postId } = this.props;
    this.requestPost(postId);

  }

  componentDidUpdate(prevProps) {
    const { postId } = this.props;
    if (postId !== prevProps.postId) {
      this.requestPost(postId);
    }
  }

  requestPost(postId) {
    console.log(`request post # ${postId}`);
    this.setState({
      PostDetail: null
    });
    setTimeout(() => {
      this.setState({
        PostDetail: `로딩된 post # ${postId}`
      })
    }, 3000);


  }


  render() {
    const { postId } = this.props;
    const { PostDetail } = this.state;
    return (
      <div>
        포스팅 #{postId}
        <hr />
        포스팅내용 ...
        {/* this.state.PostDetail */}
        {PostDetail}
      </div>
    )
  }
}



class App extends React.Component {
  state = {
    postId: 10
  }
  render() {
    return (
      <div>
        <PostDetail postId={this.state.postId} />
        <button onClick={() => this.setState({ postId: 20 })}>
          PostId 변경
        </button>
      </div>
    );
  }
}

export default App;
