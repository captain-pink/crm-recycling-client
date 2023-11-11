import { FC } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export interface MenuLinkProps {
  title: string;
  url: string;
}

export const MenuLink: FC<MenuLinkProps> = (props) => (
  <Link to={props.url} style={{ textDecoration: 'none' }}>
    <Typography color={"primary"} fontSize={'1rem'} fontWeight={400} sx={{
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-.25rem)'
      },
    }}>
      {props.title}
    </Typography>
  </Link>
)
