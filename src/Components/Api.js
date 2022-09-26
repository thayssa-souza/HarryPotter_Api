import axios from "axios";
import React, { useState, useEffect } from "react";

const Api = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
            .get("https://hp-api.herokuapp.com/api/characters")
            .then((resposta) => {
                setInfo(resposta.data.results);
            })
            .catch((error) => {
                console.log("Erro ao tentar se comunicar com o servidor, tente novamente mais tarde.", error);
            });
    }, [])

    return(
        <section>
            {info.map((item) => (
                <div>
                    <figure>
                        <img src={item.image} alt={item.name} />
                    </figure>
                    <ul>
                        <li>{item.name}</li>
                        <li>{item.gender}</li>
                        <li>{item.house}</li>
                    </ul>
                </div>
                ))}
        </section>
    );
};

export default Api;