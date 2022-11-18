import { Box } from "./Layout.styled";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <Box>
            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
            </nav>
            <Outlet />
        </Box>
    )
}