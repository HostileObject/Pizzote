import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useForm, Form } from "./controls/useForm";
import { connect } from "react-redux";
import Controls from "./controls/controls";
import * as actions from "../actions/pizzaData";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  secondary: {
    backgroundColor: "#d21f3c",
    "& .MuiButton-label": {
      color: "#fff",
    },
  },
  primary: {
    backgroundColor: "#87c9ff",
    "& .MuiButton-label": {
      color: "#232354",
    },
  },
}));

const momentItems = [
  { id: "launch", title: "Launch" },
  { id: "dinner", title: "Dinner" },
];

const initialFValues = {
  id: 0,
  restaurantName: "",
  entryDate: new Date().toISOString().slice(0, 10),
  waitTime: "",
  moment: "",
  type: "",
  price: "",
  rating: 1,
  comments: "",
};

function PizzaForm(props) {
  const classes = useStyles();
  useEffect(() => {
    if (props.currentID != 0) {
      setValues({ ...props.recordForEdit });
    }
  }, [props.currentID]);

  const { values, setValues, errors, setErrors, resetForm, handleInputChange } =
    useForm(initialFValues);

  const validate = () => {
    let temp = { ...errors };
    temp.restaurantName = values.restaurantName
      ? ""
      : "This Field is Required.";
    temp.waitTime = values.waitTime ? "" : "Enter a Valid Time.";
    temp.moment = values.moment ? "" : "This Field is Required.";
    temp.type = values.type ? "" : "This Field is Required.";
    temp.price = values.price ? "" : "Enter a Valid price.";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };

  const refreshAll = () => {
    setTimeout(() => {
      props.getPizzaData();
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess = () => {
      console.log("Submitted Succefully");
    };
    if (validate()) {
      if (props.currentID != 0) {
        props.updatePizzaData(props.currentID, values, onSuccess);
        refreshAll();
      } else {
        props.createPizzaData(values, onSuccess);
      }
      props.setCurrentID(0);
      props.setOpenPopup(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Restaurant Name"
            name="restaurantName"
            value={values.restaurantName}
            onChange={handleInputChange}
            {...(errors.restaurantName && {
              error: true,
              helperText: errors.restaurantName,
            })}
          />
        </Grid>
        <Grid item xs={3}>
          <Controls.DatePicker
            name="entryDate"
            label="Date"
            value={values.entryDate}
          />
        </Grid>
        <Grid item xs={3}>
          <Controls.RadioGroup
            name="moment"
            label="Moment"
            value={values.moment}
            onChange={handleInputChange}
            items={momentItems}
            {...(errors.moment && {
              error: true,
              helperText: errors.moment,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="Type"
            name="type"
            value={values.type}
            onChange={handleInputChange}
            {...(errors.type && {
              error: true,
              helperText: errors.type,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="Comments"
            name="comments"
            value={values.comments}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="price"
            name="price"
            value={values.price}
            onChange={handleInputChange}
            {...(errors.price && {
              error: true,
              helperText: errors.price,
            })}
          />
          <Controls.Input
            label="Time Waited"
            name="waitTime"
            value={values.waitTime}
            onChange={handleInputChange}
            {...(errors.waitTime && {
              error: true,
              helperText: errors.waitTime,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RangeSlider
            name="rating"
            value={values.rating}
            label="rating"
            onChange={handleInputChange}
          />
          <Controls.Button
            className={classes.primary}
            type="submit"
            text="Submit"
          />
          <Controls.Button color="default" onClick={resetForm} text="Reset" />
        </Grid>
      </Grid>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  pizzaDataList: state.pizzaData.list,
});

const mapDispatchToProps = {
  getPizzaData: actions.fetchAll,
  createPizzaData: actions.create,
  updatePizzaData: actions.update,
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaForm);
