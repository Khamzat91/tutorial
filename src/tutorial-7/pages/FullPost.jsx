import React from "react";
import { Button } from "react-bootstrap";
import {useParams, Link, useNavigate} from "react-router-dom";
import {posts} from './Home';

export const FullPost = () => {

  let {id} = useParams();
  const navigate = useNavigate();

  const post = posts.find((obj) => obj.id === Number(id))

React.useEffect(() => {
  setTimeout(() => {
    navigate('/')
  },3000)
}, [])

if (!post) {
  return <h1>Статья не найдена</h1>
}

  return (
    <div className="full-post">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.text}</p>
      <a href="/">
        <Link to="/"><Button>Назад</Button></Link>
      </a>
    </div>
  );
};