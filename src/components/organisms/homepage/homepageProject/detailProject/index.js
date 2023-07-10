import { Box, Grid, IconButton, Link, Typography } from "@mui/material"
import { useState } from "react";

export const DetailProject = ({data}) => {
    const [hover, setHover] = useState(false);
    const title = data?.title;
    const description = data?.description;
    const tectStack = data?.techstack;
    const demo = data?.demo;

    return (
        <Grid 
            item 
            xl={1} 
            lg={1} 
            md={1} 
            sm={2} 
            xs={2}
            component='section'
            sx={{
                display: 'flex',
                alignItem: 'center',
                justifyContent: 'center',
                height: {
                    xl: '86vh',
                    lg: '86vh',
                    md: '86vh',
                    sm: 'auto',
                    xs: 'auto',
                },
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80%',
                    mb: '15px',
                }}
            >   
                {/* --- Title --- */}
                <Typography
                    sx={{
                        fontFamily: 'fantasy',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '45px',
                        lineHeight: '130%',
                        letterSpacing: '1px',
                        color: '#5c5c5c',
                        textAlign: 'center',
                        mb: '18px',
                    }}
                >{title}</Typography>
                {/* --- Description --- */}
                <Typography
                    sx={{
                        fontFamily: 'fantasy',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '130%',
                        letterSpacing: '1px',
                        color: '#5c5c5c',
                        textAlign: 'center',
                        mb: '18px',
                    }}
                >{description}</Typography>
                {/* --- Tect Stack --- */}
                <Box 
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        mb: '28px',
                    }}
                >
                    {
                        tectStack.map((item, idx)=>(
                        <Box 
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#E1F3E9',
                                p: '8px',
                                borderRadius: '12px',
                                color: '#333',
                                gap: '10px',
                            }}
                            key={idx}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'fantasy',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '12px',
                                    lineHeight: '130%',
                                    letterSpacing: '1px',
                                    color: '#5c5c5c',
                                    textAlign: 'center',                                                                    
                                }}
                            >{item.title}</Typography>
                            <IconButton
                                sx={{
                                    p: '0px'
                                }}
                            >{item.icon}</IconButton>
                        </Box>
                        ))
                    }
                </Box>
                {/* --- Link --- */}
                <Link
                    onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}
                    href={demo}
                    underline="none"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Typography
                        sx={{
                            fontFamily: 'fantasy',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '130%',
                            letterSpacing: '1px',
                            color: hover ? '#bfbfbf' : '#5c5c5c',
                            textAlign: 'center',
                        }}
                    > Visit Website </Typography>
                </Link>
            </Box>
        </Grid>
    )
}