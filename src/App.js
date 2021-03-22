import React from 'react';
import Bechdel from './components/Bechdel';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import './scss/styles.scss';

export default function App() {
  return (
    <>
      <main>
        <Header />
        <Form />
        <Bechdel />
      </main>
      <Footer />
    </>
  );
}
