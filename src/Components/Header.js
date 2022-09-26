import React from 'react';
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from "styled-components";
import * as S from '../Styles/headerStyle';
import Gryffindor from '../Routes/Gryffindor';
import Slytherin from '../Routes/Slytherin';
import Hufflepuff from '../Routes/Hufflepuff';
import Ravenclaw from '../Routes/Ravenclaw';
import LogoCerto from './Images/LogoCerto.jpg'

export default function Header(){
  return (
    <S.Container>
            <S.Logo src={LogoCerto} alt="Logo" />
    <BrowserRouter>
      <nav>
        <S.Ul>
          <S.Li>
            <Link to='Home'>Página inicial</Link>
          </S.Li>
          <S.Li>
            <Link to="Gryffindor">Grifinoria</Link>
          </S.Li>
          <S.Li>
            <Link to='Slytherin'>Sonserina</Link>
          </S.Li>
          <S.Li>
            <Link to='Ravenclaw'>Corvinal</Link>
          </S.Li>
          <S.Li>
            <Link to='Hufflepuff'>Lufa-Lufa</Link>
          </S.Li>
        </S.Ul>
      </nav>

      <Routes>
        <Route path="Home" />
        <Route path="Gryffindor" element={<Gryffindor />} />
        <Route path="Slytherin" element={<Slytherin />} />
        <Route path="Ravenclaw" element={<Ravenclaw />} />
        <Route path="Hufflepuff" element={<Hufflepuff />} />
      </Routes>
    </BrowserRouter>
    </S.Container>
  );
};