import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
    top: 0;
    left: 0;
    z-index: 1100;
    display: flex;
    max-height: 64px;
    width: 100vw;
    padding: 12px 24px;
    margin-bottom: 40px;
    background-color: darkblue;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const HomeLink = styled(NavLink)`
    color: #ffffff;
    text-decoration: none;
    margin-right: 80px;
    padding: 20px;
`
export const MoviesLink = styled(NavLink)`
    color: #ffffff;
    text-decoration: none;
    padding: 20px;
`