import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { StrictMode } from 'react';

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </StrictMode>
);
