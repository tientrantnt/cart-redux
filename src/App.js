import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from '../src/containers/ProductsContainer';
import CartContainer from '../src/containers/CartContainer';
import MessageContainer from '../src/containers/MessageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer></ProductsContainer>
            <MessageContainer></MessageContainer>
            <CartContainer></CartContainer>
          </div>
        </main>
        <Footer></Footer>
    </div>
    )
  }
}

export default App;
