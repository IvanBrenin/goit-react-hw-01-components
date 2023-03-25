import css from './Statistics.module.css'
import PropTypes from 'prop-types'

export const Statistics = ({ data, text }) => {
    return <section>
        {text && <h2 className={css.title}>{text}</h2>}
        <ul className={css.statsList}>
            {data.map((item) =>
            (<li className={css.statsItem} style={{ backgroundColor: getRandomHexColor() }} key={item.id}>
                <span className={css.label}>{item.label}:</span>
                <span className={css.percentage}>{item.percentage}%</span>
            </li>)
            )}
  </ul>
</section>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired        
    }).isRequired,).isRequired,
    text: PropTypes.string
}