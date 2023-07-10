import { AppBar, Box, IconButton, Typography, useScrollTrigger } from "@mui/material";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconLogo } from "../../../assets/commons";
import { DataNavigation } from "../../../data";

export const MainHeader = () => {
    const trigger = useScrollTrigger();
    const navigate = useNavigate();
    const pathname = useLocation().pathname;
    const pathArr = pathname.split('/');
    const path = pathArr[1]
    const [hover, setHover] = useState(false);
    const [id, setId] = useState(null)

    const logoHandle = () => {
        navigate('/')
    }

    const menuHoverEnter = (id) => {
        setId(id)
        setHover(true)
    }

    const menuHoverLeave = (id) => {
        setId(id)
        setHover(false)
    }

    return (
        <AppBar
            position="sticky"
            sx={{
                bgcolor: '#fff',
                shadow: 'none',
                border: 'none',
                boxShadow: 'none',
                transform: trigger ? 'translateY(-100%)' : 'translateY(0)',
                transition: 'transform 0.3s ease',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: '12px 40px'
                }}
            >
                {/* --- Logo --- */}
                <Box
                    component='section'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={logoHandle}
                >
                    <IconButton
                        sx={{
                            p: '0px'
                        }}
                    >
                        <IconLogo />
                    </IconButton>
                    <Typography
                        sx={{
                            fontFamily: 'fantasy',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '24px',
                            lineHeight: '130%',
                            letterSpacing: '1px',
                            color: '#5c5c5c',
                            ml: '4px',
                        }}
                    >Rivai Fansuri Nasution</Typography>
                </Box>

                {/* --- Menu --- */}
                <Box
                    component='nav'
                    sx={{
                        display: 'flex',
                        gap: '20px',
                    }}
                >
                    {DataNavigation.map((item, idx) => (
                        <Link
                            to={`/${item.path}`}
                            style={{
                                textDecoration: 'none',
                                color:
                                    id !== null &&
                                    ((idx === id && hover) || path === item.path)
                                        ? '#bfbfbf'
                                        : path === undefined && item.path === '/' ?
                                        '#bfbfbf': 
                                        '#5c5c5c',
                            }}
                            onMouseEnter={() => menuHoverEnter(idx)}
                            onMouseLeave={() => menuHoverLeave(idx)}
                            key={idx}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'fantasy',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '130%',
                                    letterSpacing: '1px',
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Link>
                    ))}
                </Box>
            </Box>
        </AppBar>
    );
};
