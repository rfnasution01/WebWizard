import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export const ProjectStyle3 = ({data}) => {
    // --- Labtob ---
    const tabletView = data?.tabletView;
    // --- Mobile ---
    const mobileView = data?.mobileView;
    const [indexMobile, setIndexMobile] = useState(0);
    const [dataMobile, setDataMobile] = useState(mobileView[indexMobile]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexMobile(prevIndex => (prevIndex + 1) % mobileView.length);
        }, 9000);

        return () => {
            clearInterval(interval);
        };
    }, [mobileView]);

    useEffect(() => {
        setDataMobile(mobileView[indexMobile]);
    }, [indexMobile, mobileView]);

    // --- Tablet ---
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
                        xl: '35%',
                        lg: '33%',
                        md: '42%',
                        sm: '40%',
                        xs: '35%',
                    },
                    left: {
                        xl: '7%',
                        lg: '9%',
                        md: '8%',
                        sm: '9%',
                        xs: '11%',
                    },
                    width: '100%',
                    height: '100%',
                    transition: "transform 0.3s",
                    "&:hover": {
                        transform: "translateY(-20px)",
                    }
                }}
            >
                
                {/* --- Tablet --- */}
                <Box
                    sx={{
                        width: {
                            xl: '20%',
                            lg: '20%',
                            md: '25%',
                            sm: '15%',
                            xs: '15%',
                        },
                        height: {
                            xl: '25%',
                            lg: '30%',
                            md: '15%',
                            sm: '25%',
                            xs: '30%',
                        },
                        border: '1px solid #f5f5f5',
                        bgcolor: '#f5f5f5',
                        borderRadius: '8px',
                        p: '5px 5px 15px 5px',
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
                
                {/* --- Labtob --- */}
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        top: {
                            xl: '-290px',
                            lg: '-205px',
                            md: '-170px',
                            sm: '-210px',
                            xs: '-120px',
                        },
                        left: {
                            xl: '10px',
                            lg: '0px',
                            md: '30px',
                            sm: '-15px',
                            xs: '0px',
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: '60%',
                            height: {
                                xl: '30%',
                                lg: '35%',
                                md: '15%',
                                sm: '40%',
                                xs: '40%',
                            },
                            border: '1px solid #f5f5f5',
                            bgcolor: '#f5f5f5',
                            borderRadius: '8px 8px 0px 0px',
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
                    <Box
                        sx={{
                            width: '75%',
                            height: 0,
                            borderTop: '10px solid #DCDCDC',
                            borderLeft: '20px solid transparent',
                            borderRight: '20px solid transparent',
                            boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                    <Box
                        sx={{
                            width: '68%',
                            height: 0,
                            borderTop: '10px solid #c4c4c4',
                            borderLeft: '20px solid transparent',
                            borderRight: '20px solid transparent',
                            boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                </Box>
                {/* --- Mobile --- */}
                <Box
                    sx={{
                        width: {
                            xl: '10%',
                            lg: '10%',
                            md: '12%',
                            sm: '10%',
                            xs: '12%',
                        },
                        height: {
                            xl: '15%',
                            lg: '18%',
                            md: '10%',
                            sm: '20%',
                            xs: '30%',
                        },
                        border: '1px solid #f5f5f5',
                        bgcolor: '#f5f5f5',
                        borderRadius: '8px',
                        p: '5px 5px 15px 5px',
                        position: 'relative',
                        top: {
                            xl: '-1010px',
                            lg: '-585px',
                            md: '-980px',
                            sm: '-535px',
                            xs: '-275px',
                        },
                        left: {
                            xl: '-40px',
                            lg: '-40px',
                            md: '-40px',
                            sm: '-40px',
                            xs: '-40px',
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
                                src={dataMobile.picture}
                                alt={dataMobile.alt}
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