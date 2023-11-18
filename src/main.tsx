
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Game from './Game';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <Game />
  </QueryClientProvider>
);


ReactDOM.render(<App />, document.getElementById('root'));




// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

//  ReactDOM.createRoot(document.getElementById('root')!).render(
//     <App />
 
// )
