import * as React from 'react'
import { A } from 'hookrouter'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

import useEventData from '../hooks/useEventData'

const Event: React.FC<{
  id: string,
}> = ({
  id,
}) => {
  const allData = useEventData()
  const event = allData.find(e => e.id == id)
  if(!event) {
    return (
      <div>no event found</div>
    )
  }
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: '24px',
        }}
      >
        { event.name }
      </Typography>
      <A href="/">
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          home
        </Typography>
      </A>
      <Box sx={{
        height: '400px',
        backgroundImage: `url(${event.images[0]})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}>

      </Box>
      <Grid container spacing={3}>
        <Grid item xs={ 12 } sm={ 6 }>
            <Typography
            sx={{
              marginTop: '24px',
              marginBottom: '24px',
            }}
          >
            { event.description }
          </Typography>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <Box justifyContent="center" sx={{
            padding: '16px'
          }}>
            <iframe src={ event.location.googleMapEmbedUrl } width="100%" height="350" style={{border:0}} loading="lazy"></iframe>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      {
        event.links.map((link, i) => (
          <Grid item xs={ 12 } sm={ 4 }>
            <Card sx={{ width: '100%' }}>
              <a href={link.url}>
                <CardMedia
                  component="img"
                  height="140"
                  image={ link.image }
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  { link.name }
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={ () => {
                    window.location.href = link.url
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid>
    </Box>
  )
}

export default Event