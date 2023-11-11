import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { StepCard } from "../../component/step-card/step.card.tsx";
import { Link } from "react-router-dom";
import { MenuLink } from "../../component/menu-link/menu.link.tsx";

export const LandingPage = () => {

  return (
    <Container sx={{ marginTop: '4rem' }}>
      <Grid container justifyContent={'space-between'}>
        <Grid item lg={5.8} xl={5.8} sx={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <CardMedia
            loading="lazy"
            component="img"
            sx={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center', borderRadius: '1rem' }}
            image="/public/image-9.png"
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
        <Grid item lg={5.8} xl={5.8} overflow={'hidden'} sx={{ borderRadius: '1rem', padding: 0 }}>
          <CardMedia
            height={'650px'}
            loading="lazy"
            component="img"
            sx={{ objectFit: 'cover', objectPosition: 'center' }}
            image="/public/frame-28.png"
          />
        </Grid>
      </Grid>

      <Box height={'10rem'}/>

      <Typography color={'primary'} variant="h1" fontWeight={600} fontSize={'3rem'} textAlign={'center'}>
        Be Earth Advocates
      </Typography>

      <Typography color={"#000000DE"} fontSize={'1.5rem'} fontWeight={300} lineHeight={'2rem'} textAlign={'center'}>
        Demonstrate your commitment to the environment.
      </Typography>


      <Box height={'10rem'}/>

      <Box
        sx={{ backgroundImage: 'url("/public/image-18.png")', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Typography color={'primary'} variant="h1" fontWeight={600} fontSize={'3rem'} textAlign={'center'}>
          How It Works
        </Typography>

        <Typography color={"#000000DE"} fontSize={'1.5rem'} fontWeight={300} lineHeight={'2rem'} textAlign={'center'}>
          Simple Steps to a Sustainable Future
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
          <StepCard
            iconUrl="/public/icon-register.png"
            description="Manufacturers register every produced device in our system and describe the CRMs used."
          />

          <StepCard
            iconUrl="/public/icon-qr.png"
            description="Each device receives a unique QR code with the information about the CRMs used."
          />

          <StepCard
            iconUrl="/public/icon-coins.png"
            description="Customers pay the price of the device plus a deposit."
          />

          <StepCard
            iconUrl="/public/icon-recycling.png"
            description="Customers can check the value of deposit and return/send the device to a recycling facility."
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
        <Button size={'large'} variant="contained" color="primary">
          Explore how it works
        </Button>
      </Box>

      <Box height={'10rem'}/>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography color={'primary'} variant="h1" fontWeight={600} fontSize={'3rem'}>
            Why Register Your<br/> <span style={{
            paddingRight: '15px',
            background: 'linear-gradient(to bottom, transparent 40%, #D1F8D6 40%)'
          }}>Devices</span>?
          </Typography>

          <Typography color={"#000000DE"} fontSize={'1.5rem'} fontWeight={300} lineHeight={'2rem'}>
            Showcase your commitment to sustainability, boost brand image, and contribute to a greener planet. Plus, gain exposure to environmentally-conscious consumers.
          </Typography>
        </Box>

        <Box sx={{position: 'relative', backgroundColor: '#C9F7FF', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'stretch'}}>
          <Box sx={{
            overflow: 'hidden',
            position: 'absolute',
            width: '50%',
            top: 0,
            right: 0,
            bottom: 0,
            borderBottomRightRadius: '1rem',
            borderTopRightRadius: '1rem'
          }}>
            <CardMedia
              loading="lazy"
              component="img"
              sx={{ padding: 0, width: '100%', objectFit: 'cover', objectPosition: 'center', height: '100%' }}
              image="/public/image-9.png"
            />
          </Box>

          <CardMedia
            loading="lazy"
            component="img"
            sx={{ zIndex: 10, padding: 0, width: '70%', objectFit: 'cover', objectPosition: 'center', margin: '-10%' }}
            image="/public/earth.png"
          />
        </Box>

      </Box>

      <Box height={'10rem'}/>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '1rem',
        backgroundColor: '#D3FBD8',
        padding: '1rem 1rem 0 3rem',
        borderRadius: '1rem',
      }}>
        <CardMedia
          loading="lazy"
          component="img"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            borderRadius: '1rem',
            alignSelf: 'flex-end',
          }}
          image="/public/image-17.png"
          />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1rem', paddingRight: '2rem', textAlign: 'right' }}>
          <Typography color={"primary"} fontSize={'2rem'} fontWeight={500}>
            Join the movement toward a sustainable future.
          </Typography>
          <Typography color={"#000000DE"} fontSize={'1.5rem'} fontWeight={300} lineHeight={'2rem'}>
            Register your devices and let the world know you care about nature.
          </Typography>
          <Box>
            <Button size={'large'} variant="contained" color="primary">
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>

      <Box height={'10rem'}/>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <CardMedia
          loading="lazy"
          component="img"
          sx={{width: '100px', objectFit: 'contain', objectPosition: 'center'}}
          image="/public/logo.png"
        />

        <Box sx={{display: 'flex', gap: '1.5rem', padding: '1.5rem 0'}}>
          <MenuLink url={'/'} title={'Home.'} />
          <MenuLink url={'/'} title={'About Us.'} />
          <MenuLink url={'/'} title={'How it works.'} />
          <MenuLink url={'/'} title={'Manufacturers.'} />
          <MenuLink url={'/'} title={'Recycling Centers.'} />
        </Box>
      </Box>

      <Box sx={{borderBottom: '1px solid #2838410D'}}></Box>

      <Box sx={{display: 'flex', gap: '1.5rem', padding: '1.5rem 0', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography color={"primary"} fontSize={'1rem'} fontWeight={300}>
          © 2023 Re* - All Rights Reserved.
        </Typography>

        <Box sx={{display: 'flex', gap: '1.5rem', padding: '1.5rem 0', alignItems: 'center'}}>
          <Link to={'/'} style={{textDecoration: 'none'}}>
            <Typography color={"primary"} fontSize={'1rem'} fontWeight={300}>
              Terms & Conditions
            </Typography>
          </Link>
          <Link to={'/'} style={{textDecoration: 'none'}}>
            <Typography color={"primary"} fontSize={'1rem'} fontWeight={300}>
              Privacy Policy
            </Typography>
          </Link>
        </Box>
      </Box>

    </Container>
  )
}
