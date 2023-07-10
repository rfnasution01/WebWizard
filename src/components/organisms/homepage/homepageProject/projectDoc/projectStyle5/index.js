import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export const ProjectStyle5 = ({data}) => {
    // --- Labtob ---
    const labtobView = data?.labtobView;
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
                        xl: '28%',
                        lg: '28%',
                        md: '40%',
                        sm: '23%',
                        xs: '16%',
                    },
                    left: {
                        xl: '0%',
                        lg: '0%',
                        md: '0%',
                        sm: '0%',
                        xs: '0%',
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
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '60%',
                            height: {
                                xl: '30%',
                                lg: '30%',
                                md: '15%',
                                sm: '40%',
                                xs: '40%',
                            },
                            border: '1px solid #f5f5f5',
                            bgcolor: '#F5FFFA',
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
                                src={labtobView[0].picture}
                                alt={labtobView[0].alt}
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
                            borderTop: '10px solid #D3D3D3',
                            borderLeft: '20px solid transparent',
                            borderRight: '20px solid transparent',
                            boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                </Box>
                
                {/* --- Tablet Horizontal --- */}
                <Box
                    sx={{
                        width: {
                            xl: '40%',
                            lg: '40%',
                            md: '40%',
                            sm: '30%',
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
                        bgcolor: '#F5FFFA',
                        borderRadius: '8px',
                        p: '5px 5px 20px 5px',
                        position: 'relative',
                        top: {
                            xl: '-740px',
                            lg: '-420px',   
                            md: '-790px',
                            sm: '-320px',
                            xs: '-110px',
                        },
                        left: {
                            xl: '0px',
                            lg: '0px',
                            md: '0px',
                            sm: '0px',
                            xs: '10px',
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
                {/* --- Tablet Vertical --- */}
                <Box
                    sx={{
                        width: {
                            xl: '25%',
                            lg: '25%',
                            md: '25%',
                            sm: '20%',
                            xs: '20%',
                        },
                        height: {
                            xl: '30%',
                            lg: '35%',
                            md: '15%',
                            sm: '30%',
                            xs: '35%',
                        },
                        border: '1px solid #f5f5f5',
                        bgcolor: '#F5FFFA',
                        borderRadius: '8px',
                        p: '5px 5px 20px 5px',
                        position: 'relative',
                        top: {
                            xl: '-1030px',
                            lg: '-620px',
                            md: '-950px',
                            sm: '-480px',
                            xs: '-210px',
                        },
                        left: {
                            xl: '540px',
                            lg: '365px',
                            md: '280px',
                            sm: '375px',
                            xs: '210px',
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
                            src={dataMobile?.picture}
                            alt={dataMobile?.alt}
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