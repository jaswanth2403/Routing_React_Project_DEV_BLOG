import React from 'react'
import { useParams } from 'react-router-dom'
import BlogItemDetails from './BlogItemDetails'

const BlogItemDetailsWrapper = () => {
    const { id } = useParams() // Extract the `id` param from the URL
    return <BlogItemDetails id={id} /> // Pass `id` as a prop
}

export default BlogItemDetailsWrapper