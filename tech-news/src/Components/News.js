import React, { Component } from "react";
import NewItems from "./NewItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1
    }
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8bdeb04f5da54d04a90cda1b5ea9ad56&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true })
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
  }

  prevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8bdeb04f5da54d04a90cda1b5ea9ad56&page=${this.state.page - 1
      }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false

    });
  };

  nextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8bdeb04f5da54d04a90cda1b5ea9ad56&page=${this.state.page + 1
        }&pagesize=${this.props.pageSize}`;
      console.log(this.state.page);
      this.setState({ loading: true })
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData)
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Tech News</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewItems
                  key={element.url}
                  title={element.title ? element.title.slice(0, 15) : ""}
                  description={
                    element.description ? element.description.slice(0, 60) : ""
                  }
                  imageUrl={!element.urlToImage ? "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" : element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source["name"]}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.prevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn  btn-dark"
            onClick={this.nextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
