/**
 * @jest-environment jsdom
 */
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  let tooltip, button;

  beforeEach(() => {
    document.body.innerHTML = '<button class="btn">Нажми меня</button>';
    tooltip = new Tooltip();
    button = document.querySelector('.btn');
  });

  test('добавляет tooltip в DOM', () => {
    tooltip.showTooltip({ title: 'Заголовок', description: 'Текст' }, button);
    expect(document.querySelector('.tooltip')).not.toBeNull();
  });

  test('удаляет tooltip из DOM', () => {
    const id = tooltip.showTooltip({ title: 'Заголовок', description: 'Текст' }, button);
    tooltip.removeTooltip(id);
    expect(document.querySelector('.tooltip')).toBeNull();
  });
});
