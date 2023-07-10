import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export const ProjectStyle1 = ({data}) => {
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

    // --- Tablet ---
    const tabletView = data?.tabletView;
    const [indexTablet, setIndexTablet] = useState(0);
    const [dataTablet, setDataTablet] = useState(tabletView[indexTablet]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexTablet(prevIndex => (prevIndex + 1) % tabletView.length);
        }, 9000);

        return () => {
            clearInterval(interval);
        };
    }, [tabletView]);

    useEffect(() => {
        setDataTablet(tabletView[indexTablet]);
    }, [indexTablet, tabletView]);

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
                        xl: '30%',
                        lg: '20%',
                        md: '40%',
                        sm: '23%',
                        xs: '20%',
                    },
                    left: {
                        xl: '29%',
                        lg: '32%',
                        md: '30%',
                        sm: '30%',
                        xs: '22%',
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
                        bgcolor: '#F0FFF0',
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
                            src={dataLabtob?.picture}
                            alt={dataLabtob?.alt}
                            sx={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Box>
                </Box>
                {/* --- Tablet --- */}
                <Box
                    sx={{
                        width: {
                            xl: '40%',
                            lg: '40%',
                            md: '40%',
                            sm: '40%',
                            xs: '20%',
                        },
                        height: {
                            xl: '20%',
                            lg: '25%',
                            md: '10%',
                            sm: '25%',
                            xs: '20%',
                        },
                        border: '1px solid #f5f5f5',
                        bgcolor: '#F0FFF0',
                        borderRadius: '8px',
                        p: '5px 5px 15px 5px',
                        position: 'relative',
                        top: {
                            xl: '-120px',
                            lg: '-100px',
                            md: '-70px',
                            sm: '-100px',
                            xs: '-35px',
                        },
                        left: {
                            xl: '-150px',
                            lg: '-150px',
                            md: '-100px',
                            sm: '-150px',
                            xs: '-30px',
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
                            src={dataTablet?.picture}
                            alt={dataTablet?.alt}
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
