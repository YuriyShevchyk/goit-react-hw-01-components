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
    <Title>{title}</Title>

    <StatList>
      {stats.map(stat => {
        return (
          <li key={stat.id} style={{ backgroundColor: randomColor() }}>
            <Label>{stat.label}</Label>
            <Quantity>{stat.percentage}%</Quantity>
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