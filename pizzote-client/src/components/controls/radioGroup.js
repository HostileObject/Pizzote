import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import { RadioGroup as MuiRadioGroup } from '@material-ui/core';

export default function RadioGroup(props) {
    const { name, label, value, onChange, items } = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row name={name} value={value} onChange={onChange}>
                {items.map((item, index) => (
                    <FormControlLabel
                        key={item.id}
                        value={item.id}
                        control={<Radio />}
                        label={item.title}
                    />
                ))}
            </MuiRadioGroup>
        </FormControl>
    );
}
