import css from './Statistics.module.css'
export const Statistics = ({ data }) => {
    return <section>
  <h2 className={css.title}>Upload stats</h2>
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