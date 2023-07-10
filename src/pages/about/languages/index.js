import { Box, IconButton, Typography } from "@mui/material"
import { dataLanguages } from "../../../data/languages"

export const Languages = () => {

    return (
        <Box
            component='section'
        >
            <Typography
                sx={{
                    fontFamily: 'fantasy',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '130%',
                    letterSpacing: '1px',
                    color: '#333',
                    width: 'auto',
                }}
            >Languages</Typography>
            <Box
                component='article'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    my: '30px'
                }}
            >
                {dataLanguages.map((item, idx)=>(
                    <Box
                        key={idx}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '40vh',
                            mb: '20px',
                            cursor: 'pointer',
                            transition: "transform 0.3s",
                            "&:hover": {
                                transform: "translateX(20px)",
                            },
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            p: '10px'
                        }}
                    >
                        <IconButton
                            sx={{
                                p: '0px'
                            }}
                        >
                            {item.icon}
                        </IconButton>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                marginLeft: '8px',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'fantasy',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '20px',
                                    lineHeight: '130%',
                                    letterSpacing: '1px',
                                    color: '#333',
                                    width: 'auto',
                                }}
                            >{item.name}</Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'fantasy',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '130%',
                                    letterSpacing: '1px',
                                    color: 'text.secondary',
                                    width: 'auto',
                                }}
                            >{item.status}</Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'fantasy',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '130%',
                                    letterSpacing: '1px',
                                    color: 'text.secondary',
                                    width: 'auto',
                                }}
                            >{item.value}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}