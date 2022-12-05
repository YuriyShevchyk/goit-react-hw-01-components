import PropTypes from 'prop-types';
import {StatSection, Title, StatList, Label, Quantity} from './Statistics.styled';


function randomColor() {
  let color = `#${(Math.random().toString(16) + '000000')
    .substring(2, 8)
    .toUpperCase()}80`;
  return color;
}

export const Statistics = ({ title, stats }) => (
  <StatSection>
    {title ? <Title>{title}</Title> : ''}


    <StatList>
      {stats.map(({id, label, percentage}) => {
        return (
          <li key={id} style={{ backgroundColor: randomColor() }}>
            <Label>{label}</Label>
            <Quantity>{percentage}%</Quantity>
          </li>
        );
      })}
    </StatList>
  </StatSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};