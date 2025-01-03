import React, { Component } from 'react';
import BlogItem from './BlogItem'
import '../App.css'
export default class BlogsList extends Component {
  state = {
    blogsData:[]
  }
componentDidMount=()=>{
this.getBlogsData()
}
getBlogsData=async()=>{
  const response=await fetch('https://apis.ccbp.in/blogs')
  const data= await response.json()
  console.log(data)
  const formatedData=data.map(each=>({
    id:each.id,
    title:each.title,
    author:each.author,
    avatarUrl:each.avatar_url,
    imageUrl:each.image_url,
    topic:each.topic
  })
)
this.setState({blogsData:formatedData})
}

  render() {
    const {blogsData} = this.state
    return (
      <div>{ blogsData.map(item => <BlogItem blogData={item} key={item.id} />)} </div>
    )
  }
}
