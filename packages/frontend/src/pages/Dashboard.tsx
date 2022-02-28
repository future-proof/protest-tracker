import * as React from 'react'
import { A, navigate } from 'hookrouter'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import useEventData from '../hooks/useEventData'

const Dashboard: React.FC = () => {


  // We need to split this into upcoming events and past events. And order chronologically

  const data = useEventData()
  return (
    <Grid container spacing={3}>
      {
        data.map((event, i) => (
          <Grid item xs={ 12 } sm={ 4 }>
            <Card sx={{ width: '100%' }}>
              {
                event.images.length > 0 && (
                  <A href={`/event/${event.id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={ event.images[0] }
                    />
                  </A>
                )
              }
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  { event.name}
                </Typography>
                <Typography gutterBottom variant="h8" component="div">
                  { event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  { event.brief }
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  onClick={ () => {
                    navigate(`/event/${event.id}`)
                  }}
                >
                  Learn More
                </Button>
              </CardActions>

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

            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Dashboard