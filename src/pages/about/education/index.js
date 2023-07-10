import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { dataEducation } from "../../../data/education";

export const Education = () => {
    const data = dataEducation;

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
                }}
            >Education</Typography>
            <Card
                sx={{
                    position: 'relative',
                    width: 250,
                    height: 300,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: 10,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                    cursor: 'pointer',
                    mt: '30px',
                }}
            >
            <Box 
                component='img'
                src={data?.pictures}
                alt={data?.name}
                style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 10,
                }}
            />
            <CardContent
                sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backdropFilter: 'blur(10px)',
                transition: 'opacity 0.3s ease',
                '&:hover': {
                    opacity: 0,
                },
                }}
            >
                <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
            {data?.name} {data?.domicily} ({data?.year})
                </Typography>
                <Typography variant="body1" color="text.secondary">
                {data?.major}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {data?.gpa}
                </Typography>
            </CardContent>
            </Card>
        </Box>
        
    );
};
