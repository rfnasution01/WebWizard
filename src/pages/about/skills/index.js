import { Box, Grid, IconButton, Typography } from "@mui/material"
import { IconStar } from "../../../assets/skill/icons";
import { ImgList } from "../../../assets/skill/img";
import { dataSkills } from "../../../data/skills";

export const Skills = () => {

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
            >Skills</Typography>
            <Grid
                container
                columns={12}
                sx={{
                    my: '30px'
                }}
            >
                {
                    dataSkills?.map((item, idx)=>(
                        <Grid
                            key={idx}
                            item
                            xl={1}
                            lg={idx === 0 ? 3 : 9}
                            md={1}
                            sm={1}
                            xs={1}
                            sx={{
                                overflowY: 'scroll',
                                maxHeight: {
                                    xl: '',
                                    lg: '58vh',
                                    md: '',
                                    sm: '',
                                    xs: '',
                                },
                                position: 'relative',
                            }}
                        >
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
                                    position: 'sticky', 
                                    top: '0',
                                    zIndex: '1',
                                    backgroundColor: '#FFFAFA',
                                }}
                            >{item?.title}</Typography>
                            
                            <Box
                                component='article'
                                sx={{
                                    my: '10px'
                                }}
                            >
                                {
                                    item?.skill?.map((detail, idx)=>(
                                        <Box
                                            key={idx}
                                            sx={{
                                                display: 'flex',
                                                maxWidth: 'fit-content',
                                                p: 0,
                                                my: '10px',
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    width: '20px',
                                                    height: '20px',
                                                    marginRight: '5px',
                                                    background: `url(${ImgList})`,
                                                    backgroundSize: 'cover',
                                                    },
                                            }}
                                            component='ul'
                                        >
                                            <Box
                                                component='li'
                                            >
                                                <Typography
                                                    sx={{
                                                        fontFamily: 'fantasy',
                                                        fontStyle: 'normal',
                                                        fontWeight: 400,
                                                        fontSize: '16px',
                                                        lineHeight: '130%',
                                                        letterSpacing: '1px',
                                                        textAlign: 'justify',
                                                        color: 'text.secondary',
                                                        width: 'auto',
                                                    }}
                                                >{detail?.title}</Typography>
                                                <Box
                                                    component='ul'
                                                    sx={{
                                                        p: 0,
                                                        m: 0,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        maxWidth: {
                                                            xl: '',
                                                            lg: '101vh',
                                                            md: '',
                                                            sm: '',
                                                            xs: '',
                                                        },
                                                        overflowX: 'scroll',
                                                        gap: '20px',
                                                    }}
                                                >
                                                    {
                                                        detail?.tectStack?.map((items, idx)=>(
                                                            // --- Card ---
                                                            <Box
                                                                component='article'
                                                                sx={{
                                                                    gap: '20px',
                                                                    my: '20px',
                                                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                                                    p: '10px',
                                                                    minWidth: '100px',
                                                                    textAlign: 'center',
                                                                    cursor: 'pointer',
                                                                    transition: "box-shadow 0.3s ease",
                                                                    "&:hover": {
                                                                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                                                                    },
                                                                }}
                                                            >
                                                                <IconButton
                                                                    sx={{
                                                                        p: '0px'
                                                                    }}
                                                                >{items?.icon}</IconButton>
                                                                
                                                                {/* --- Name --- */}
                                                                <Typography
                                                                    sx={{
                                                                        fontFamily: 'fantasy',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: 400,
                                                                        fontSize: '12px',
                                                                        lineHeight: '130%',
                                                                        letterSpacing: '1px',
                                                                        color: 'text.secondary',
                                                                        width: 'auto',
                                                                        mt: '3px',
                                                                    }}
                                                                >{items?.title}</Typography>
                                                                
                                                                {/* --- Star --- */}
                                                                {Array(items?.star)
                                                                    .fill()
                                                                    .map((_, idx) => (
                                                                    <IconButton
                                                                        key={idx}
                                                                        sx={{
                                                                            p: 0
                                                                        }}
                                                                    >
                                                                        <IconStar />
                                                                    </IconButton>
                                                                ))}                                    
                                                            </Box>
                                                        ))
                                                    }
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}