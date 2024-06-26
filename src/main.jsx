import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ProductContextProvider from './Context/ProductContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductContextProvider>
        <App />
    </ProductContextProvider>
)
