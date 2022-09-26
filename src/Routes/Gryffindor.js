import React, { useState, useEffect } from 'react';
import * as S from '../Styles/mainStyle';
import axios from 'axios';

export default function Gryffindor(){
  const [data, setData] = useState([]);

  const url = 'https://hp-api.herokuapp.com/api/characters/house/Gryffindor';

  useEffect(() => {
    axios
      .get(url)
      .then((resposta) => {
        setData(resposta.data);
      })
      .catch((error) => {
        console.log("Erro ao tentar se comunicar com o servidor, tente novamente mais tarde.", error);
      });
  }, []);

  return (
    <section>
        <S.Title>
        <h1>GRIFINÓRIA</h1>
        </S.Title>
    <S.Container>
      {data.map((item) => (
        <S.Div>
          <S.Images src={item.image} alt="Roles" />
          <S.Text>{item.name}</S.Text>
        </S.Div>
      ))}
    </S.Container>
    </section>
  );
}