import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as S from './Styles/globalStyle';
import Header from './Components/Header';
import Main from './Components/Main';
import Api from './Components/Api';

function App() {
  return (
    <section>
      <S.GlobalStyle/>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Api />
      </div>
    </section>
  );
}

export default App;