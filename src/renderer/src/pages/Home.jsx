import { Box, Grid, Card, CardContent, CardActions, Button, Typography} from '@mui/material'

export default function Home() {
  const statsData = [{name: 'Members Total', total: 1100}, 
    {name: 'MUMC Total', total: 200}, {name: 'MUMC Full', total: 150}, {name: 'MUMC Probation', total: 50},
    {name: 'RRW Total', total: 500}, {name: 'RRW Full', total: 400}, {name: 'RRW Probation', total: 100},
    {name: 'UMYF Total', total: 250}, {name: 'UMYF Full', total: 175}, {name: 'UMYF Probation', total: 75},
    {name: 'JC Total', total: 150}, {name: 'JC Baptised', total: 75}, {name: 'JC Not Baptised', total: 75}
  ]

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      <Grid container spacing={{ xs: 2, md: 3 }} >
        {statsData.map((stat, index) => (
          <Grid item  key={index}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {stat.name}
                </Typography>
                <Typography variant="h5" component="div">
                  {stat.total}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

//  columns={{ xs: 2, sm: 8, md: 12 }}
// xs={2} sm={4} md={4}