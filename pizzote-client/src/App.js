import "./App.css";
import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import NavBar from "./components/navbar";
import LandingPage from "./components/landingPage";
import MediaCard from "./components/mediaCard";
import { connect } from "react-redux";
import * as actions from "./actions/pizzaData";
import TitleHeader from "./components/titleHeader";
import DataTable from "./components/dataTable";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const App = (props) => {
  useEffect(() => {
    props.fetchAllPizzaData();
  }, []);
  console.log(props.pizzaDataList);

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false}>
        <NavBar />
        <LandingPage />
        <MediaCard pizzaDataList={props.pizzaDataList} />
        <TitleHeader title="Data" />
        <DataTable actions={mapDispatchToProps} />
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  pizzaDataList: state.pizzaData.list,
});

const mapDispatchToProps = {
  fetchAllPizzaData: actions.fetchAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
