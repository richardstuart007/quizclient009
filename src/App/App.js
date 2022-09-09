//
// Libraries
//
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider
} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
//
//  Pages
//
import QuizControl from '../pages/QuizControl'
//
//  Common Components
//
import Layout from '../components/Layout/Layout'
//
//  Utilities
//
import { ValtioStore } from '../pages/ValtioStore'
//
//  Layout Theme
//
const theme = createTheme({})
//
//  Server
//
const { SERVER_REMOTE } = require('../services/constants.js')
const { URL_REMOTE } = require('../services/constants.js')
const { SERVER_LOCAL } = require('../services/constants.js')
const { URL_LOCAL } = require('../services/constants.js')
//
//  Render the components
//
function App() {
  //
  //  Update Valtio store with URL and Server Name
  //
  const port = window.location.port
  if (port === '9003') {
    ValtioStore.v_Server = SERVER_REMOTE
    ValtioStore.v_URL = URL_REMOTE
    console.log(
      `DataEntry-PORT(${port}) REMOTE: SERVER(${SERVER_REMOTE}) URL(${URL_REMOTE})`
    )
  } else {
    ValtioStore.v_Server = SERVER_LOCAL
    ValtioStore.v_URL = URL_LOCAL
    console.log(
      `DataEntry-PORT(${port}) LOCAL: SERVER(${SERVER_LOCAL}) URL(${URL_LOCAL})`
    )
  }
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Layout>
            <QuizControl />
          </Layout>
          <CssBaseline />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  )
}

export default App
