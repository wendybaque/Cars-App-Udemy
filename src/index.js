import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(
    <App />
);