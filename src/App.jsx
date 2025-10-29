import { useState } from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import {useEffect} from 'react';
import fetchCall from './fetchCall.js';



function App() {
  const [content, setContent] = useState([]);
  const [items, setItems]
  const [error, setError] = useState(null);
  const API_URLS = {
    users: 'https://jsonplaceholder.typicode.com/users',
    posts: 'https://jsonplaceholder.typicode.com/posts',
    comments: 'https://jsonplaceholder.typicode.com/comments'
  }

  // Load functionality
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const results = await Promise.all([
          fetchCall(API_URLS.users),
          fetchCall(API_URLS.posts),
          fetchCall(API_URLS.comments)
        ]);
        console.log(results)
        const validData = [];
        const errors = [];

        results.forEach(result => {
          if (result.message) errors.push(result);
          else validData.push(result);
        });

        if (errors.length) throw (errors);

        setContent(validData);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    fetchAllData();
  }, []);

  // const renderContent = (e) => {
  //   const name = e.target.innerText;
  // }
  

  return (
    <div>
      <Header 
     
      />
      <Content />
    </div>
  )
}

export default App
