import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaControlCard() {
  const [isSelected, setIsSelected] = useState(false);

  const selectedBackgroundColor = 'rgba(223, 226, 255, 0.5)'; // Adjust RGB values as needed

  const cardStyle = {
    display: 'flex',
    width: '368px',
    height: '173px',
    backgroundColor: isSelected ? selectedBackgroundColor : '#FFFFFF',
    border: '2px solid #1E2EDE',
    borderRadius: '12px',
    cursor: 'pointer',
  };

  const cardContentStyle = {
    display: 'flex',
    padding: '24px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '12px',
    width: '100%',
  };

  const courseStatStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  };

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    // You can perform additional actions on card click if needed
  };

  return (
    <Card sx={cardStyle} onClick={handleCardClick}>
      <CardContent style={cardContentStyle}>
        <Typography component="div" variant="h5">
          Course Code
        </Typography>
        <Typography component="div" variant="subtitle1">
          Course Name
        </Typography>
        <div className="course-stats" style={courseStatStyle}>
          <Typography component="div" variant="subtitle2">
            Prof. Name
          </Typography>
          <Typography component="div" variant="subtitle2">
            Curr. Enrollment
          </Typography>
          <Typography component="div" variant="subtitle2">
            Avg. Grade
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
