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
      <A href="/">
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'left',
            marginBottom: '24px',
          }}
        >
          back
        </Typography>
      </A>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: '24px',
        }}
      >
        { event.name }
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          marginBottom: '24px',
        }}
      >
        { event.date }
      </Typography>
      <Box sx={{
        height: '400px',
        backgroundImage: `url(${event.images[0]})`,
        backgroundPosition: 'center',
        marginBottom: '50px'
      }}>

      </Box>
      <Grid container spacing={3}>
        <Grid item xs={ 12 } sm={ 6 }>
          <Typography
            variant="h6"
              sx={{
                marginBottom: '24px',
              }}
            >
            { event.brief }
          </Typography>
          <Typography
            sx={{
              marginTop: '24px',
              marginBottom: '24px'
            }}
          >
            { event.description }
          </Typography>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <Typography
            variant="h6"
              sx={{
                marginBottom: '24px',
                textAlign: 'center'
              }}
          >
            Where is this protest happening?
          </Typography>
          <Box justifyContent="center" sx={{
            padding: '16px'
          }}>
            <iframe src={ event.location.googleMapEmbedUrl } width="100%" height="350" style={{border:0}} loading="lazy"></iframe>
          </Box>
        </Grid>
      </Grid>
      


      <Grid container spacing={4}>
        {
          event.links.map((link, i) => (
            <Grid item >
              <Button
                size="small"
                
                // needs to open in new window

                onClick={ () => {
                  window.location.href = link.url
                }}
              >
               { link.name }
              </Button>
            </Grid>
          ))
        }
      </Grid>
      

      <Grid container spacing={1}>
        {
          event.categories.map((categories, i) => (
            <Grid item >
              <Button
                size="small"
                variant="contained"

                // This should open a view of all events filtered with that category (hide other events)
                onClick={ () => {
                  navigate(`#`)
                }}
              >
               { categories }
              </Button>
            </Grid>
          ))
        }
      </Grid>


    </Box>
  )
}

export default Event