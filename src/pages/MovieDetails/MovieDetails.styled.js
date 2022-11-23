import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const BackLink = styled(NavLink)`
    color: darkblue;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin-bottom: 20px;
`

export const FilmDetails = styled.div`
    margin-top: 70px;
    margin-left: -370px;
    padding: 40px
`

export const FilmTitle = styled.h2`
    font-size: 60px;
    color: black;
    margin: 0 0 20px 0;
`

export const Card = styled.div`
    display: flex;
`

export const Image = styled.div`
    margin-right: 40px;
    margin-bottom: 12px;
`

export const SubTitles = styled.p`
    margin: 0 0 20px 0;
`

export const AdditionalLinks = styled(NavLink)`
    color: black;
    margin-right: 20px;
    padding: 10px;
`