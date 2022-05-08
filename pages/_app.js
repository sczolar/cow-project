import '../styles/globals.scss';
import { ThemeProvider, createTheme } from "@mui/material"

const Theme = createTheme({
  palette: {
    primary: {
      main: '#00ddb3'
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
