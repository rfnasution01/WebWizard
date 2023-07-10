import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export const ProjectStyle2 = ({data}) => {
    // --- Mobile Left ---
    const mobileView = data?.mobileView;

    // --- Mobile Right ---
    const tabletView = data?.tabletView;

     // --- Labtob ---
     const labtobView = data?.labtobView;
     const [indexLabtob, setIndexLabtob] = useState(0);
     const [dataLabtob, setDataLabtob] = useState(labtobView[indexLabtob]);
 
     useEffect(() => {
         const interval = setInterval(() => {
             setIndexLabtob(prevIndex => (prevIndex + 1) % labtobView.length);
         }, 9000);
 
         return () => {
             clearInterval(interval);
         };
     }, [labtobView]);
 
     useEffect(() => {
         setDataLabtob(labtobView[indexLabtob]);
     }, [indexLabtob, labtobView]);

    return (
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
            <Box
                sx={{
                    position: 'relative',
                    top: {
                        xl: '31%',
                        lg: '23%',
                        md: '40%',
                        sm: '23%',
                        xs: '20%',
                    },
                    left: {
                        xl: '18%',
                        lg: '18%',
                        md: '16%',
                        sm: '18%',
                        xs: '15%',
                    },
                    width: '100%',
                    height: '100%',
                    transition: "transform 0.3s",
                    "&:hover": {
                        transform: "translateY(-20px)",
                    }
                }}
            >
                {/* --- Labtob --- */}
                <Box
                    sx={{
                        width: '60%',
                        height: {
                            xl: '30%',
                            lg: '40%',
                            md: '15%',
                            sm: '40%',
                            xs: '40%',
                        },
                        border: '1px solid #f5f5f5',
                        bgcolor: '#f5f5f5',
                        borderRadius: '8px',
                        p: '20px 10px 10px 10px',
                        boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid #c4c4c4',
                            borderRadius: '4px',
                        }}
                    >
                        <Box
                            component='img'
                            src={dataLabtob.picture}
                            alt={dataLabtob.alt}
                            sx={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Box>
                </Box>
                {/* --- Mobile Left --- */}
                <Box
                    sx={{
                        width: {
                            xl: '12%',
                            lg: '12%',
                            md: '12%',
                            sm: '12%',
                            xs: '10%',
                        },
                        height: {
                            xl: '20%',
                            lg: '23%',
                            md: '10%',
                            sm: '25%',
                            xs: '20%',
                        },
                        border: '1px solid #f5f5f5',
                        bgcolor: '#f5f5f5',
                        borderRadius: '8px',
                        p: '5px 5px 5px 5px',
                        position: 'relative',
                        top: {
                            xl: '-180px',
                            lg: '-100px',
                            md: '-80px',
                            sm: '-100px',
                            xs: '-40px',
                        },
                        left: {
                            xl: '-70px',
                            lg: '-50px',
                            md: '-35px',
                            sm: '-50px',
                            xs: '-25px',
                        },
                        boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid #c4c4c4',
                            borderRadius: '4px',
                        }}
                    >
                        <Box
                            component='img'
                            src={mobileView[0].picture}
                            alt={mobileView[0].alt}
                            sx={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Box>
                </Box>
                {/* --- Mobile Right --- */}
                <Box
                    sx={{
                        width: {
                            xl: '12%',
                            lg: '12%',
                            md: '12%',
                            sm: '12%',
                            xs: '10%',
                        },
                        height: {
                            xl: '20%',
                            lg: '23%',
                            md: '10%',
                            sm: '25%',
                            xs: '20%',
                        },
                        border: '1px solid #f5f5f5',
                        bgcolor: '#f5f5f5',
                        borderRadius: '8px',
                        p: '5px 5px 5px 5px',
                        position: 'relative',
                        top: {
                            xl: '-370px',
                            lg: '-220px',
                            md: '-180px',
                            sm: '-220px',
                            xs: '-90px',
                        },
                        left: {
                            xl: '470px',
                            lg: '320px',
                            md: '240px',
                            sm: '320px',
                            xs: '190px',
                        },
                        boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid #c4c4c4',
                            borderRadius: '4px',
                        }}
                    >
                        <Box
                                component='img'
                                src={tabletView[0].picture}
                                alt={tabletView[0].alt}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}