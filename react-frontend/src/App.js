import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Testing.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
      <div class="walmart-buy-now" data-publisherid="{Publisher ID}" data-item-walmartid="{walmart_id1|qty1, walmart_id2|qty2, ....}" data-item-upc="{upc1|qty1, upc2|qty2, ...}" data-color="{color}" data-size="{size}">
</div>
      </body>
    </div>
  );
}

export default App;
