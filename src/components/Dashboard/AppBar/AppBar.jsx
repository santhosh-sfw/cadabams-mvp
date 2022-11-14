import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
export default function AppBars() {
    const [isLogin, setLogin] = useState(true)
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{
                backgroundColor: 'white',
                color: '#000'
            }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Tooltip title="Cadabams">
                            <Avatar src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/46/d9/4d/46d94d35-d4e3-5b08-8fd9-c9b67f06fb6e/AppIconCadabam-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp" />
                        </Tooltip>
                    </Typography>
                    {
                        isLogin === true ? <><Tooltip title="AADITYA MURALIDHARAN">
                            <Avatar {...stringAvatar('AADITYA MURALIDHARAN')} />
                        </Tooltip>
                            <Tooltip title="Log Out">
                                <Button color="inherit" onClick={() => { setLogin(false) }}>
                                    <LogoutIcon />
                                </Button>
                            </Tooltip>
                        </> : <Tooltip title="Log In">
                            <Button color="inherit" onClick={() => { setLogin(true) }}>
                                <LoginIcon />
                            </Button>
                        </Tooltip>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
