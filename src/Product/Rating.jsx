import Star from '../assets/star.svg';
import PropTypes from 'prop-types';

function Rating({ value }) {
    const integerPart = Math.floor(value);
    const decimalPart = value - integerPart;
    const stars = [];

    for (let i = 0; i < integerPart; i++) {
        stars.push(
            <img
                key={i}
                src={Star}
                alt={`Star ${i + 1}`}
                width="14"
                height="14"
            />
        );
    }

    if (decimalPart > 0) {
        stars.push(
            <img
                key={integerPart}
                src={Star}
                alt={`Partial Star`}
                style={{ width: `${decimalPart * 14}px` }}
                width="14"
                height="14"
            />
        );
    }

    return <>{stars}</>;
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Rating;
