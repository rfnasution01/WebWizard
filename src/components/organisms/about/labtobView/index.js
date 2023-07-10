import { Box, Grid, Typography } from "@mui/material"
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AboutMenu } from "../../../../data/aboutMenu"

export const LabtobView = () => {
    const [hover, setHover] = useState(false);
        const [id, setId] = useState(null)
        const pathname = useLocation().pathname;
        const pathArr = pathname.split('/');
        const path = pathArr[2]

        const menuHoverEnter = (id) => {
            setId(id)
            setHover(true)
        }
            
        const menuHoverLeave = (id) => {
            setId(id)
            setHover(false)
        }

    return (
        <Grid
            container
            item={12}
            sx={{
                minHeight: '69vh',
                pt: '10vh'
            }}
        >
            {/* --- TabPanel --- */}
            <Grid
                item
                xl={2}
                lg={2}
                md={2}
                sm={3}
                component='aside'
            >
                <Box
                    sx={{
                        bgcolor: '#FFFAFA',
                        borderRadius: '16px 16px 0px 0px',
                        height: 'auto',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'fantasy',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '130%',
                            letterSpacing: '1px',
                            color: '#333',
                            bgcolor: '#F5F5DC',
                            p: '20px',
                            borderRadius: '16px 16px 0px 0px',
                        }}
                    >About Me</Typography>
                    <Box
                        sx={{
                            py: '15px',
                            px: '20px'
                        }}
                    >
                        {AboutMenu.map((item, idx)=>(
                            <Link
                                to={`${item.path}`}
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                <Typography
                                    key={idx}
                                    onMouseEnter={() => menuHoverEnter(idx)}
                                    onMouseLeave={() => menuHoverLeave(idx)}
                                    sx={{
                                        fontFamily: 'fantasy',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        fontSize: '16px',
                                        lineHeight: '130%',
                                        letterSpacing: '1px',
                                        color:
                                            id !== null &&
                                            ((idx === id && hover) || 
                                            path === item.path) ? 
                                                '#bfbfbf': 
                                                path === undefined && item.path === 'summary' ?
                                                '#bfbfbf': 
                                                '#5c5c5c',
                                        cursor: 'pointer',
                                        my: '7px'
                                    }}
                                >{item.title}</Typography>
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Grid>
            {/* --- Article --- */}
            <Grid
                item
                xl={10}
                lg={10}
                md={10}
                sm={9}
                component='article'
            >
                <Box
                    sx={{
                        px: '30px',
                        
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: '#FFFAFA',
                            p: '20px',
                            height: '100%',
                            minHeight: '50vh',
                            borderRadius: '16px'
                        }}
                    >
                        <Outlet />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}