import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router"
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Link from "next/link"

const ll = [
    { name: 'Home', icon: <HomeIcon />, link: "/" },
    { name: 'Purchase', icon: <ShoppingCartIcon />, link: "/purchase" },
    { name: 'Sell', icon: <SellIcon />, link: "/sell" },
    { name: 'Auction', icon: <AutoAwesomeIcon />, link: "/auction" }
]

export default function ButtonAppBar(props) {
    const [state, setState] = React.useState(false)
    const router = useRouter();
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={() => setState(false)}
            onKeyDown={() => setState(false)}
        >
            <List>
                {ll.map((a, index) => (
                    <Link href={a.link} key={a.name}>
                        <ListItem button >
                            <ListItemIcon>
                                {a.icon}
                            </ListItemIcon>
                            <ListItemText primary={a.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>

        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {(props.name).toUpperCase()}
                        </Typography>
                        <Button color="inherit" onClick={() => {
                            localStorage.clear()
                            router.push('/login')
                        }}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor={"left"}
                open={state}
                onClose={() => setState(false)}
            >
                {list("left")}
            </Drawer>
        </>
    );
}
