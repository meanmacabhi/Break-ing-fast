import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  // static defaultProps = {
  //   country:'in',
  //   pagesize:3,
  //   category:'general'
  // }
  // static PropTypes={
  //   country: PropTypes.string,
  //   pagesize: PropTypes.number,
  //   category: PropTypes.string
  // }
   
    
  constructor(){
    super();
    
    this.state = {
      page:1,
      articles : [],
      loading : false,
      totalresults:0
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?sources=${this.props.source}&apiKey=90f340162f0746fd8f92dd0448eca5c0&country=${this.props.country}&category=${this.props.category}&pagesize=${this.props.pagesize}&page=1`
    this.setState({loading:true});
    let data = await fetch(url);
   let parsed_data = await data.json();
    this.setState({loading:false})
    console.log(parsed_data)
    this.setState({articles:parsed_data.articles})
    this.setState({totalresults:parsed_data.totalResults})

  }

   handleprev=async()=>{
    console.log("prev")
    let url = `https://newsapi.org/v2/top-headlines?sources=${this.props.source}&apiKey=90f340162f0746fd8f92dd0448eca5c0${this.props.country}&pagesize=${this.props.pagesize}&page=${(this.state.page)-1}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({loading:false})
    console.log(parsed_data)
    this.setState({articles:parsed_data.articles})

    this.setState({
      page:this.state.page-1
    })
   }

   handlenext = async () => {
    console.log("Next button clicked");
    let url = `https://newsapi.org/v2/top-headlines?sources=${this.props.source}&apiKey=90f340162f0746fd8f92dd0448eca5c0${this.props.country}&pagesize=${this.props.pagesize}&page=${this.state.page + 1}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({loading:false})
  
    console.log("Next Page Data:", parsed_data);
  
    if (parsed_data.articles.length > 0) {
      this.setState({
        articles: parsed_data.articles,
        page: this.state.page + 1
      });
    
    }
  }

  render() {
    return (
      <div className='container my-3'>
        
        <h2>Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {this.state.articles.map((elements)=>{
          return ( <div className="col-md-4" key={elements.url}>
            <NewsItem title={elements.title} desc={elements.description} imgsrc={elements.urlToImage} newsurl={elements.url}/>
          </div>)
        })}
         </div>

         <div className="d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handleprev}>&larr;Previous</button>
         <button disabled={this.state.page>=Math.ceil(this.state.totalresults/this.props.pagesize)} type="button" className="btn btn-primary" onClick={this.handlenext}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}

export default News


