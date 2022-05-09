import "../styles/globals.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import Router from "next/router";
import { useReducer, useContext, useEffect } from "react";
import { Reducer, Reducervalue } from "../components/reducer/reducer";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#00ddb3",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [value, dispatch] = useReducer(Reducer, Reducervalue);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      dispatch({ type: "loading" });
      console.log("routing start");
    });
    Router.events.on("routeChangeComplete", (url) => {
      dispatch({ type: "loadingstop" });
      console.log("routing complete");
    });
  }, []);

  if (value.loading) {
   <h1>loading...</h1>;
  }
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
