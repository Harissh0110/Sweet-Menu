import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';

export default function Dashboard() {
  return (
    <Box md={2} container spacing={12}sx={{ display: 'flex', flexDirection: 'row',flexWrap: 'wrap' , justifyContent: 'space-evenly'} }>
      <Card sx={{ minWidth: '350px', m: 4, minHeight: '150px' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Total orders <DoneOutlineIcon />
          </Typography>
          <Typography variant="h6" color="text.secondary">
            1000
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: '350px', m: 4, minHeight: '150px' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Total orders produced <CheckCircleOutlineIcon />
          </Typography>
          <Typography variant="h6" color="text.secondary">
            1000
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: '350px', m: 4,  minHeight: '150px'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Total orders deliverd <LocalShippingIcon />
          </Typography>
          <Typography variant="h6" color="text.secondary">
            1000
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: '350px', m: 4, minHeight: '150px' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Total orders pending <RunningWithErrorsIcon />
          </Typography>
          <Typography variant="h6" color="text.secondary">
            1000
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
