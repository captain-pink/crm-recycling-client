import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export const LandingPage = () => {

  return (
    <Container sx={{ marginTop: '4rem' }}>
      <Grid container spacing={1.5}>
        <Grid item lg={6} xl={6} sx={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <CardMedia
            loading="lazy"
            component="img"
            sx={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center', borderRadius: '1rem' }}
            image="/public/critical-raw-material-background.png"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Typography color={'primary'} variant="h1" fontWeight={600} fontSize={'4rem'}>
              Join the <span style={{
              paddingRight: '15px',
              background: 'linear-gradient(to bottom, transparent 40%, #D1F8D6 40%)'
            }}>Green</span> <br/>
              Revolution
            </Typography>

            <Typography color={"#000000DE"} fontSize={'1.5rem'} fontWeight={300} lineHeight={'2rem'}>
              A platform connecting manufacturers, recycling centers, and users to promote sustainable practices.
            </Typography>

            <Box sx={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography color={"#000000DE"} fontSize={'1rem'} fontWeight={300}>
                  Recycled devices
                </Typography>

                <Typography color={"#000000DE"} fontSize={'2.125rem'} fontWeight={700}>
                  112 275 g
                </Typography>
              </Box>
              <Box sx={{ width: '1px', height: '3rem', borderRight: '1px solid #28384140' }}></Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography color={"#000000DE"} fontSize={'1rem'} fontWeight={300}>
                  Raw materials received
                </Typography>
                <Typography color={"#000000DE"} fontSize={'2.125rem'} fontWeight={700}>
                  396 571 g
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Button size={'large'} variant="contained" color="primary">
                Join the revolution
              </Button>

              <Button size={'large'} color="primary">
                Get a Demo
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6} xl={6}>
          <CardMedia
            height={'650px'}
            loading="lazy"
            component="img"
            sx={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '1rem' }}
            image="/public/critical-raw-material-background.png"
          />
        </Grid>
      </Grid>
    </Container>
  )
}
