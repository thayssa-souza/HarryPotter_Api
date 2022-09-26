import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Container = styled.section`
    width:100%;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: 'Montserrat', sans-serif;
`

export const Title = styled.h2`
display:flex;
justify-content: center;
align-items: center;
height:25vh;
font-size:45px;
`

export const Div = styled.div`
    width:24vw;
    height:60vh;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    &:hover{
        border:solid;
    }
`

export const Images = styled.img`
    width: 14vw;
    height:40vh;
    &:hover{
        width:18vw;
        height:50vh;
        cursor:pointer;
    }
`

export const Text = styled.h2`
    font-size:20px;
`