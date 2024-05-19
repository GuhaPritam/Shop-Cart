import Star from '../assets/star.svg';
import PropTypes from 'prop-types';

function Rating({ value }) {
    const stars = Array(value).fill(Star);

    return (
        <>
            {
                stars.map((star, index) => (
                    <img
                        key={index}
                        src={star}
                        width="14"
                        height="14"
                    />
                ))
            }
        </>
    )
}

Rating.propTypes = {
    value: PropTypes.any.isRequired,
};

export default Rating;
