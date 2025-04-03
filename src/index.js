import './css/styles.css';
import Tooltip from './js/Tooltip';

const tooltip = new Tooltip();

document.querySelector('.btn').addEventListener('click', (e) => {
  tooltip.showTooltip({
    title: 'Подсказка',
    description: 'Это текст тултипа'
  }, e.currentTarget);
});
