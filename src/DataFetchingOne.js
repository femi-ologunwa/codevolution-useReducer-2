import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

//initial state
const initialState = {
   loading: true,
   error: '',
   post: {},
};

//reducer function
const reducer = (state, action) => {
   switch (action.type) {
      case 'FETCH_SUCCESS':
         return {
            loading: false,
            error: '',
            post: action.payload,
         };

      case 'FETCH_ERROR':
         return {
            loading: false,
            error: 'Something went wrong',
            post: {},
         };
      default:
         return state;
   }
};

function DataFetchingOne() {
   const [state, dispatch] = useReducer(reducer, initialState);

   //fetching data from api & updating state
   useEffect(() => {
      axios
         .get('https://jsonplaceholder.typicode.com/posts/1')
         .then((response) => {
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
         })
         .catch((error) => {
            dispatch({ type: 'FETCH_ERROR' });
         });
   }, []);

   if (state.loading) {
      return <h3>Loading...</h3>;
   }

   if (state.error) {
      return <h3>{state.error}</h3>;
   }

   return <h3>{state.post.title}</h3>;
}

export default DataFetchingOne;
