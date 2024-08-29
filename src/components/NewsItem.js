import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,desc,imgsrc,newsurl}=this.props
    return (
      <div>
                <div className="card" style={{width: "18rem"}}>
          <img src={imgsrc} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={newsurl} className="btn btn-primary">read more</a>
          </div>
</div>
      </div>
    )
  }
}
