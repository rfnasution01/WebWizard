import { Box, Typography } from "@mui/material"
import { ImgBackground, ImgProfile } from "../../../../assets/commons"

export const HomepageBanner = () => {
    return (
        <Box
            component='section'
            sx={{
                backgroundImage: `linear-gradient(to top, rgba(81, 177, 92, 0.2), rgba(81, 177, 92, 0.2)), url(${ImgBackground})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                minHeight: '86vh',
              }}
        >
            <Box
                sx={{
                    minHeight: '86vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box 
                        component='img'
                        src={ImgProfile}
                        alt='Rivai Fansuri Nasution'
                        style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                        }}
                    />
                    <Typography
                        sx={{
                            fontFamily: 'fantasy',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '45px',
                            lineHeight: '130%',
                            letterSpacing: '1px',
                            color: '#333333',
                            my: '12px',
                            textAlign: 'center',
                        }}
                    >I'm Rivai Fansuri Nasution</Typography>
                    <Typography
                        sx={{
                            fontFamily: 'fantasy',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '130%',
                            letterSpacing: '1px',
                            color: '#333'
                        }}
                    >Frontend Developer</Typography>
                </Box>
            </Box>
        </Box>
    )
}