import React, { Component } from 'react'


export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=97a52a31c6d64af6ae3ba0813409cda1").then(resp => {
            return resp.json()
        }).then(data => {
            this.setState({ news: data.articles })

        })



    }


    render() {
        console.log(this.state.news);
        let latestnews=this.state.news.map(news=>{
            return(
                <div key={news.title} className='news-item'><a href={news.url} target="_blank">{news.title}</a></div>
            )
        });
        return (
            <div >
              {latestnews}
            </div>
        )
    }
}
