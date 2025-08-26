import React from 'react';
import { Box, Typography } from '@mui/material';

// About Page Component
const AboutPage = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      About Us
    </Typography>
    <Typography paragraph>
      This is the About page. Here you can provide information about your company, project, or anything else relevant.
    </Typography>
    <Typography paragraph>
      We aim to provide a seamless user experience with a clean and responsive design.
    </Typography>
  </Box>
);

export default AboutPage;