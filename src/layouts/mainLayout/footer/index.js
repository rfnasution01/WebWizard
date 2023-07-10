import { Box, Link } from "@mui/material"
import { useState } from "react";
import { IconLinkedin, IconWhatsapp } from "../../../assets/commons"

export const MainFooter = () => {
    const [hover, setHover] = useState(false);
    const [id, setId] = useState(null);

    const hoverFooter = (id, status) => {
        setId(id)
        setHover(status)
    } 
    return (
        <Box
            component='footer'
            sx={{
                position: 'relative',
                left: 0,
                bottom: 0,
                width: '100%',
                bgcolor: '#f5f5f5',
                padding: '32px 0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
            }}
        >
            {/* --- Linkedin --- */}
            <Link
                style={{
                    p: '0px',
                    fill: 
                        id !== null && 
                        id === 1 && hover ? '#bfbfbf' : '#5c5c5c',
                }}
                onMouseEnter={()=>hoverFooter(1, true)}
                onMouseLeave={()=>hoverFooter(1, false)}
                href="https://www.linkedin.com/in/rivai-nasution/"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconLinkedin />
            </Link>
            {/* --- Whatsapp --- */}
            <Link
                style={{
                    p: '0px',
                    fill: 
                        id !== null && 
                        id === 2 && hover ? '#bfbfbf' : '#5c5c5c',
                }}
                onMouseEnter={()=>hoverFooter(2, true)}
                onMouseLeave={()=>hoverFooter(2, false)}
                href="https://api.whatsapp.com/send?phone=082298511578"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconWhatsapp />
            </Link>
        </Box>
    )
}
