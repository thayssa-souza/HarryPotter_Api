import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Container = styled.section`
    font-family: 'Montserrat', sans-serif;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const Logo = styled.img`
    height:12vh;
`

export const Images = styled.img`
    width: 14vw;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width:70vw;
    height:12vh;
`

export const Li = styled.li`
    list-style: none;
    width:15vw;
    text-align: center;
    &:hover{
        font-size:20px;
    }
`