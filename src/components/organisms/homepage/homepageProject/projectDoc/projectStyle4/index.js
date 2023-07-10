import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export const ProjectStyle4 = ({data}) => {
    // --- Labtob ---
    const labtobView = data?.labtobView;
    // --- Labtob ---
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
                        xl: '30%',
                        lg: '30%',
                        md: '40%',
                        sm: '23%',
                        xs: '20%',
                    },
                    left: {
                        xl: '5%',
                        lg: '5%',
                        md: '5%',
                        sm: '5%',
                        xs: '5%',
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
                                xs: '35%',
                            },
                            border: '1px solid #f5f5f5',
                            bgcolor: '#F0FFFF',
                            borderRadius: '8px 8px 0px 0px',
                            p: '20px 10px 10px 10px',
                            boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                border: '1px solid #c3c3c3',
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
                            borderTop: '10px solid #D3D3D3',
                            borderLeft: '20px solid transparent',
                            borderRight: '20px solid transparent',
                            boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                </Box>
                {/* --- Tablet --- */}
                <Box
                    sx={{
                        width: {
                            xl: '30%',
                            lg: '30%',
                            md: '35%',
                            sm: '35%',
                            xs: '25%',
                        },
                        height: {
                            xl: '20%',
                            lg: '20%',
                            md: '10%',
                            sm: '20%',
                            xs: '20%',
                        },
                        border: '1px solid #f5f5f5',
                        bgcolor: '#F0FFFF',
                        borderRadius: '8px',
                        p: '5px 5px 10px 5px',
                        position: 'relative',
                        top: {
                            xl: '-760px',
                            lg: '-415px',
                            md: '-805px',
                            sm: '-315px',
                            xs: '-130px',
                        },
                        left: {
                            xl: '0px',
                            lg: '0px',
                            md: '0px',
                            sm: '0px',
                            xs: '0px',
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
                {/* --- Mobile --- */}
                <Box
                    sx={{
                        width: {
                            xl: '8%',
                            lg: '8%',
                            md: '10%',
                            sm: '8%',
                            xs: '6%',
                        },
                        height: {
                            xl: '13%',
                            lg: '16%',
                            md: '8%',
                            sm: '18%',
                            xs: '15%',
                        },
                        border: '1px solid #f5f5f5',
                        bgcolor: '#F0FFFF',
                        borderRadius: '8px',
                        p: '2px 2px 10px 2px ',
                        position: 'relative',
                        top: {
                            xl: '-880px',
                            lg: '-505px',
                            md: '-880px',
                            sm: '-405px',
                            xs: '-170px',
                        },
                        left: {
                            xl: '210px',
                            lg: '145px',
                            md: '120px',
                            sm: '170px',
                            xs: '70px',
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