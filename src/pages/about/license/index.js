import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { ImgUB } from '../../../assets/commons';

export const License = () => {
    const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  return (
    <Card
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      sx={{
        position: 'relative',
        width: 250,
        height: 300,
        borderRadius: 10,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        boxShadow: hover ? '0 8px 16px rgba(0, 0, 0, 0.2)' : 'none',
      }}
    >
      <CardActionArea>
        <img
          src={ImgUB}
          alt="Product Image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 10,
          }}
        />
        {hover && (
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
              opacity: hover ? 1 : 0,
            }}
          >
            <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
              Product Title
            </Typography>
            <Typography variant="body1" color="text.secondary">
              $99.99
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description of the product
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};
