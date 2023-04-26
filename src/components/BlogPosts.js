import React from "react";
import "../css/blogposts.css";
import blogdata from '../data/blog_post_example.xml';
import axios from "axios";
import { XMLParser } from 'fast-xml-parser';


export default class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }

  }
  componentDidMount() {
    axios.get(blogdata, {
      "Content-Type": "application/xml; charset=utf-8"
    })
      .then((response) => {
        var posts = response.data;

        const parser = new XMLParser();
        let blogposts = parser.parse(posts);
        console.log(blogposts.blog);
        console.log(blogposts.blog.post);


        this.setState({
          posts: blogposts.blog.post,
          showbody:false
        })
      });

  }

  render() {
    let blogpost = this.state.posts.map(post => {
      // console.log(post);
      return (
        <div className="blog-post" key={post.title}>
          <div className="blog-image">
            <img alt="logo"
              className="blog-img"
              src={post.summary.image_path}
            />
          </div>
          <div className="blog-details">
            <div className="blog-title"><a href="#" onClick={() => {
              let filtposts = this.state.posts.filter(filtpost => filtpost.title == post.title)
              this.setState({posts:filtposts,showbody:true})
            }}>{post.title}</a> </div>
            <div className="blog-date">{post.date}</div>
            <div className="blog-author">{post.author}</div>
            <div className="blog-summary">{post.summary.text}</div>
          </div>
          <div className="blog-body" hidden={!this.state.showbody}>
            {post.body}
          </div>
        </div>
      )
    })


    return (
      <div className="blogposts">
        {blogpost}

      </div>
    );
  }
}


