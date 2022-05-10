import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';


const App = () => (
  <Router>
    <Navigation />
    <Content />
  </Router>
);


const TOKENS = {
  0: {
    title: 'Token 1',
    url: 'www.google.com',
  },
  1: {
    title: 'Token 2',
    url: 'B',
  },
  2: {
    title: 'Token 3',
    url: 'c',
  },
  3: {
    title: 'Token 4',
    url: 'd',
  },
};


const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Wallet</Link>
    </li>
    <li>
      <Link to="/Transactions">Transactions</Link>
    </li>
    <li>
      <Link to="/Tokens">Tokens</Link>
    </li>
  </ul>
);

const Content = () => (
  <Routes>
    <Route exact path="/" element={<Wallet />} />
    <Route path="/Transactions" element={<Transactions />} />
    <Route path="/Tokens/*" element={<Tokens />} />
  </Routes>
);

const Wallet = () => <h1>MY Wallet</h1>;

const Transactions = () => <h1>My Transactions</h1>;

const Tokens = () => (
  <>
    <h1>My Tokens and Public Tokens are availiable here</h1>
    <Routes>
      <Route exact path="/" element={<TokenList />} />  
    </Routes>
  </>
);

const TokenList = () => (
  <>
    <h2>All Tokens</h2>
    <ul>
      {Object.keys(TOKENS).map((key) => (
        <li key={key}>
          Go to individual Token:&nbsp;
          <Link to={`/courses/${key}`}>{TOKENS[key].title}</Link>
        </li>
      ))}
    </ul>
  </>
);


export default App;
