import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useForm, Form } from './controls/useForm';
import { connect } from 'react-redux';
import Controls from './controls/controls';
import * as actions from '../actions/pizzaData';

const momentItems = [
    { id: 'launch', title: 'Launch' },
    { id: 'dinner', title: 'Dinner' },
];

const initialFValues = {
    id: 0,
    RestaurantName: '',
    Date: new Date().toISOString().slice(0, 10),
    WaitTime: '',
    Moment: '',
    Type: '',
    Price: '',
    Rating: 1,
    Comments: '',
};

function PizzaForm(props) {
    useEffect(() => {
        if (props.currentID != 0) {
            setValues({ ...props.recordForEdit });
        }
    }, [props.currentID]);

    const {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange,
    } = useForm(initialFValues);

    const validate = () => {
        let temp = { ...errors };
        temp.RestaurantName = values.RestaurantName
            ? ''
            : 'This Field is Required.';
        temp.WaitTime = values.WaitTime ? '' : 'Enter a Valid Time.';
        temp.Moment = values.Moment ? '' : 'This Field is Required.';
        temp.Type = values.Type ? '' : 'This Field is Required.';
        temp.Price = values.Price ? '' : 'Enter a Valid Price.';
        setErrors({
            ...temp,
        });
        return Object.values(temp).every((x) => x == '');
    };

    const refreshAll = () => {
        setTimeout(() => {
            props.getPizzaData();
        }, 500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const onSuccess = () => {
            console.log('Submitted Succefully');
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
                        name="RestaurantName"
                        value={values.RestaurantName}
                        onChange={handleInputChange}
                        {...(errors.RestaurantName && {
                            error: true,
                            helperText: errors.RestaurantName,
                        })}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controls.DatePicker
                        name="Date"
                        label="Date"
                        value={values.Date}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controls.RadioGroup
                        name="Moment"
                        label="Moment"
                        value={values.Moment}
                        onChange={handleInputChange}
                        items={momentItems}
                        {...(errors.Moment && {
                            error: true,
                            helperText: errors.Moment,
                        })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Type"
                        name="Type"
                        value={values.Type}
                        onChange={handleInputChange}
                        {...(errors.Type && {
                            error: true,
                            helperText: errors.Type,
                        })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Comments"
                        name="Comments"
                        value={values.Comments}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Price"
                        name="Price"
                        value={values.Price}
                        onChange={handleInputChange}
                        {...(errors.Price && {
                            error: true,
                            helperText: errors.Price,
                        })}
                    />
                    <Controls.Input
                        label="Time Waited"
                        name="WaitTime"
                        value={values.WaitTime}
                        onChange={handleInputChange}
                        {...(errors.WaitTime && {
                            error: true,
                            helperText: errors.WaitTime,
                        })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RangeSlider
                        name="Rating"
                        value={values.Rating}
                        label="Rating"
                        onChange={handleInputChange}
                    />
                    <Controls.Button
                        color="primary"
                        type="submit"
                        text="Submit"
                    />
                    <Controls.Button
                        color="default"
                        onClick={resetForm}
                        text="Reset"
                    />
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
