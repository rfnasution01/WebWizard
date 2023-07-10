import { Box, Typography } from "@mui/material"
import { dataSummary } from "../../../data/summary"

export const Summary = () => {
    const data = dataSummary;

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
            >{data.title}</Typography>
            <Typography
                sx={{
                    fontFamily: 'fantasy',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '130%',
                    letterSpacing: '1px',
                    textAlign: 'justify',
                    color: '#5c5c5c',
                    width: 'auto',
                    my: '30px',
                }}
            >{data.desc}</Typography>
        </Box>
    )
}