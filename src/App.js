import React, { Component, useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import {initialData} from './actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from "react-redux";

const App = props => {
  useEffect(()=> {
    props.initialData();
  },[])
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    smurfs : state.smurfs,
    isLoading : state.isLoading,
    error : state.error
  };
}

export default connect(mapStateToProps, {initialData})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.