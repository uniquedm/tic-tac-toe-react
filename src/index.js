import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ShoppingList extends React.Component {
    render() {
      return (
        <div>
          <h1>Shopping List for {this.props.x}</h1>
          <ul class="list-group">
            <li class="list-group-item">Instagram</li>
            <li class="list-group-item">WhatsApp</li>
            <li class="list-group-item">Oculus</li>
          </ul>
        </div>
      );
    }
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ShoppingList x="Mark" />);