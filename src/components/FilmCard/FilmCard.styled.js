import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Card = styled.div`
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-bottom: 10px;

    &:hover {
        scale: 1.1;
    }
`

export const FilmTitle = styled.p`
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 20px;
    color: darkblue;
`

export const Link = styled(NavLink)`
    text-decoration: none;
`

export const Image = styled.img`
    margin-bottom: 20px;
`

export const FilmDate = styled.p`
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 20px;
    color: darkblue;
`
