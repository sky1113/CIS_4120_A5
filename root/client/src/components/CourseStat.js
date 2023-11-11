import React from 'react';
import Typography from '@mui/material/Typography';

const CourseStat = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row', // Adjusted to arrange divs horizontally
      };

      const mainRectangleStyle = {
        width: '894.263pxpx',
        height: '140px', // Adjusted height to accommodate the text labels
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px 20px',
        borderRadius: '12px',
        border: '1px solid #1E2EDE',
        background: '#FFF',
        justifyContent: 'space-between',
        flexShrink: '0',
      };

  const individualDivStyle = {
    margin: '0 30px', // Adjust as needed for spacing between divs
  };

  const rectangleStyle = {
    width: '80px',
    height: '60px',
    textAlign: 'center',
    borderRadius: '12px',
    border: '1px solid #1E2EDE',
    background: '#F3F7FD',
  };

  const titleStyle = {
    fontWeight: 'bold',
  }

  const textStyle = {
    color: '#1E2EDE',
    fontWeight: 'bold',
  };


  return (
    <div style={containerStyle}>
        <div style={mainRectangleStyle}>
      <div style={individualDivStyle}>
        <Typography variant="body" style={titleStyle}>
            Difficulty
            </Typography>
        <div style={rectangleStyle}>
        <Typography variant="h5" style={textStyle}>
                3.1
            </Typography>
        </div>
      </div>

      <div style={individualDivStyle}>
      <Typography variant="body" style={titleStyle}>
            Workload
            </Typography>
        <div style={rectangleStyle}>
            <Typography variant="h5" style={textStyle}>
                2.7
            </Typography>
            </div>
      </div>

      <div style={individualDivStyle}>
      <Typography variant="body" style={titleStyle}>
            Avg. Grade
            </Typography>
        <div style={rectangleStyle}>
        <Typography variant="h5" style={textStyle}>
                B+
            </Typography>
        </div>
      </div>

      <div style={individualDivStyle}>
      <Typography variant="body" style={titleStyle}>
            Prof. Rating
            </Typography>
        <div style={rectangleStyle}>
        <Typography variant="h5" style={textStyle}>
                3.0
            </Typography>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CourseStat;
