import React from 'react';
import Header from './components/Header';
import SignUpForm from './components/SignUpForm';
import CreateAudience from './components/CreateAudience';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <SignUpForm />
    <CreateAudience />
    <Footer />
  </div>
);

export default App;

