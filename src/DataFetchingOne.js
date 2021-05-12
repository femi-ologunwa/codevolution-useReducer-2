import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
   //define state variables required for data fetching
   const [loading, setLoading] = useState(true);
   const [post, setPost] = useState({});
   const [error, setError] = useState('');

   //fetching data from api & updating state
   useEffect(() => {
      axios
         .get('https://jsonplaceholder.typicode.com/posts/1')
         .then((response) => {
            setLoading(false);
            setPost(response.data);
            setError(''); //to remove any error message if there was..
         })
         .catch((error) => {
            setLoading(false);
            setPost({});
            setError('Something went wrong');
         });
   }, []);

   if (loading) {
      return <h3>Loading...</h3>;
   }

   if (error) {
      return <h3>{error}</h3>;
   }

   return <h3>{post.title}</h3>;
}

export default DataFetchingOne;
