import { Container, Grid, Typography } from '@mui/material'
//
//  Debug Settings
//
import debugSettings from '../../debug/debugSettings'
//..............................................................................
//.  Initialisation
//.............................................................................
//
// Debug Settings
//
const debugLog = debugSettings()
//===================================================================================
const QuizSplash = () => {
  if (debugLog) console.log('Start QuizSplash')
  //...................................................................................
  //.  Render the form
  //...................................................................................
  return (
    <Grid container>
      <Container>
        <Typography variant='h6' sx={{ marginTop: '8px', color: 'blue' }}>
          STATIC VERSION 009
        </Typography>
        <Typography variant='h6' sx={{ marginTop: '8px' }}>
          This version has beeN DISCONTINUED
        </Typography>
        <Typography variant='subtitle2' sx={{ marginTop: '8px' }}>
          It has been developed by Richard Stuart and is FREE to use/distribute.
        </Typography>
        <Typography variant='subtitle2' sx={{ marginTop: '8px' }}>
          Comments you can email me at richardstuart007@hotmail.com
        </Typography>
        <Typography variant='subtitle2' sx={{ marginTop: '32px', color: 'red' }}>
          PLEASE CLICK ON THE LINK BELOW TO SWITCH TO THE NEW VERSION 010
        </Typography>
        <Typography variant='h3' sx={{ marginTop: '8px' }}>
          <a href='https://richardstuart007.github.io/quizclient010/'>Database 010</a>
        </Typography>
        {/* <Typography variant='subtitle2' sx={{ marginTop: '32px' }}>
          Alternatively click on the Static version 010 which corresponds to version 009
        </Typography>
        <Typography variant='subtitle2' sx={{ marginTop: '8px' }}>
          <a href='https://richardstuart007.github.io/quizclientstatic010/'>Static 010</a>
        </Typography> */}
      </Container>
    </Grid>
  )
}

export default QuizSplash
