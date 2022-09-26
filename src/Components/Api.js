import axios from "axios";
import React, { useState, useEffect } from "react";
import * as S from '../Styles/mainStyle';

const Api = () => {
    const [data, setData] = useState([]);

    const url = 'https://hp-api.herokuapp.com/api/characters';

    useEffect(() => {
        axios
            .get(url)
            .then((resposta) => {
                setData(resposta.data);
            })
            .catch((error) => {
                console.log("Erro ao tentar se comunicar com o servidor, tente novamente mais tarde.", error);
            });
    }, [])

    return(
        <S.Container>
            {data.map((item, index) => (
                <S.Div key={index}>
                    <figure>
                        <S.Images src={item.image} alt={item.name} />
                    </figure>
                    <ul>
                        <S.Text>{item.name}</S.Text>
                        <S.Text>{item.house}</S.Text>
                    </ul>
                </S.Div>
                ))}
        </S.Container>
    );
}

export default Api;