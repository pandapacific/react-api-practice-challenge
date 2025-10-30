import { useState } from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import {useEffect} from 'react';
import fetchCall from './fetchCall.js';



function App() {
  const [content, setContent] = useState([]);
  const [items, setItems] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
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
        error.forEach(err => console.error('Error fetching data:', err));
        setError(error);
      }finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

 
  const renderContent = (position) => {
    const selectedContent = content[position] || [];
    setItems(selectedContent);
  }
  // const errorHandler = (error) => {
    
  // }

  return (
    <div>
      <Header 
        renderContent={renderContent}
      />
      <Content 
        items={items} 
        error={error}
        loading={loading}
      />
    </div>
  )
}

export default App
