import React, { useState, useEffect } from 'react';
import { ReactComponent as Pizza1 } from '../../assets/images/pizza-1.svg';
import { ReactComponent as Pizza2 } from '../../assets/images/pizza-2.svg';
import { ReactComponent as Pizza3 } from '../../assets/images/pizza-3.svg';
import { ReactComponent as Pizza4 } from '../../assets/images/pizza-4.svg';
import { ReactComponent as Pizza5 } from '../../assets/images/pizza-5.svg';
import { ReactComponent as Pizza6 } from '../../assets/images/pizza-6.svg';
import { ReactComponent as Pizza7 } from '../../assets/images/pizza-7.svg';
import { ReactComponent as Pizza8 } from '../../assets/images/pizza-8.svg';
import '../../assets/styles/slider.css';

function RangeSlider(props) {
    const { name, value, label, onChange } = props;

    const [sliderValue, setSliderValue] = useState(0);

    useEffect(() => {
        setSliderValue(value);
    }, [value]);

    function checkRating(value) {
        if (Number(value) === 1) {
            return <Pizza1 className="pizza-rating" />;
        } else if (Number(value) === 2) {
            return <Pizza2 className="pizza-rating" />;
        } else if (Number(value) === 3) {
            return <Pizza3 className="pizza-rating" />;
        } else if (Number(value) === 4) {
            return <Pizza4 className="pizza-rating" />;
        } else if (Number(value) === 5) {
            return <Pizza5 className="pizza-rating" />;
        } else if (Number(value) === 6) {
            return <Pizza6 className="pizza-rating" />;
        } else if (Number(value) === 7) {
            return <Pizza7 className="pizza-rating" />;
        } else if (Number(value) === 8) {
            return <Pizza8 className="pizza-rating" />;
        } else {
            return <Pizza1 className="pizza-rating" />;
        }
    }

    return (
        <div className="range-slider">
            <div className="slider">
                <p>{label}</p>
                <input
                    name={name}
                    label={label}
                    type="range"
                    id="myRange"
                    value={sliderValue}
                    onChange={onChange}
                    step="1"
                    min="1"
                    max="8"
                />
            </div>
            <div className="pizza-rating">{checkRating(sliderValue)}</div>
        </div>
    );
}

export default RangeSlider;
