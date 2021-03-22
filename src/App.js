import React from 'react';
import Bechdel from './components/Bechdel';
import Form from './components/Form';
import Header from './components/Header';
import './scss/styles.scss';

export default function App() {
  return (
    <>
      <Header />
      <Form />
      <Bechdel />
    </>
  );
}
