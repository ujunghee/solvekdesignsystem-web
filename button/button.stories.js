import './button.css';
import '../css/css/icon.css';

const sizes = ['xl', 'lg', 'md', 's', 'xs'];

/** @type {Record<string, { prefix: string }>} */
const appearances = {
  blue: { prefix: 'blue-button' },
  blueBorder: { prefix: 'blue-button-border' },
  slate: { prefix: 'slate-button' },
  borderSlate: { prefix: 'border-slate-button' },
  slate50: { prefix: 'slate-50-button' },
  transparent: { prefix: 'transparent-button' },
};

/**
 * @param {keyof typeof appearances} appearance
 * @param {string} size
 * @param {boolean} withIcon
 */
function classFor(appearance, size, withIcon) {
  const { prefix } = appearances[appearance];
  const base = `${prefix}-${size}`;
  return withIcon ? `${base} flex align-center` : base;
}

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: Object.keys(appearances),
    },
    size: {
      control: 'select',
      options: sizes,
    },
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    withIcon: {
      control: 'boolean',
    },
  },
};

export const Playground = {
  name: 'Playground',
  args: {
    appearance: 'blue',
    size: 'md',
    label: '저장',
    disabled: false,
    withIcon: false,
  },
  render: ({ appearance, size, label, disabled, withIcon }) => {
    const cls = classFor(appearance, size, withIcon);
    const icon = withIcon ? '<span class="arrow-right-white"></span>' : '';
    const disabledAttr = disabled ? 'disabled' : '';
    return `<button type="button" class="${cls}" ${disabledAttr}>${label}${icon}</button>`;
  },
};

export const WithIcon = {
  name: 'With icon',
  args: {
    appearance: 'blue',
    size: 'xl',
    label: 'blue button',
    disabled: false,
    withIcon: true,
  },
  render: Playground.render,
};

export const Disabled = {
  name: 'Disabled',
  args: {
    appearance: 'blue',
    size: 'lg',
    label: 'disabled button',
    disabled: true,
    withIcon: false,
  },
  render: Playground.render,
};

export const AllSizes = {
  name: 'All sizes (blue)',
  parameters: { controls: { disable: true } },
  render: () => {
    const buttons = sizes
      .map(
        (size) =>
          `<button type="button" class="blue-button-${size}">blue button</button>`
      )
      .join('\n  ');
    return `<div style="display:flex;flex-direction:column;gap:12px;align-items:flex-start;">${buttons}</div>`;
  },
};

export const Overview = {
  name: 'Overview (demo page)',
  parameters: { controls: { disable: true } },
  render: () => {
    const wrap = (inner) =>
      `<div style="display:flex;flex-direction:column;gap:8px;align-items:flex-start;">${inner}</div>`;

    const blueSizes = sizes
      .map((size) => `<button type="button" class="blue-button-${size}">blue button</button>`)
      .join('');
    const blueBorder = sizes
      .map(
        (size) =>
          `<button type="button" class="blue-button-border-${size}">border button</button>`
      )
      .join('');
    const slate = sizes
      .map((size) => `<button type="button" class="slate-button-${size}">slate button</button>`)
      .join('');
    const borderSlate = sizes
      .map(
        (size) =>
          `<button type="button" class="border-slate-button-${size}">border button</button>`
      )
      .join('');
    const slate50 = sizes
      .map(
        (size) =>
          `<button type="button" class="slate-50-button-${size}">slate 50 button</button>`
      )
      .join('');
    const transparent = sizes
      .map(
        (size) =>
          `<button type="button" class="transparent-button-${size}">transparent button</button>`
      )
      .join('');

    return wrap(`
  <p class="body3-r-14 color-gray-700 pt-16">blue button</p>
  <button disabled type="button" class="button-48">disabled button<span class="icon-arrow-right-90deg-white"></span></button>
  <p class="body3-r-14 color-gray-700 pt-16">blue icon button</p>
  <button type="button" class="blue-button-xl flex align-center">blue button<span class="arrow-right-white"></span></button>
  <p class="body3-r-14 color-gray-700 pt-16">blue button</p>
  ${blueSizes}
  <p class="body3-r-14 color-gray-700 pt-16">border blue button</p>
  ${blueBorder}
  <p class="body3-r-14 color-gray-700 pt-16">slate button</p>
  ${slate}
  <p class="body3-r-14 color-gray-700 pt-16">border slate button</p>
  ${borderSlate}
  <p class="body3-r-14 color-gray-700 pt-16">slate 50 button</p>
  ${slate50}
  <p class="body3-r-14 color-gray-700 pt-16">transparent button</p>
  ${transparent}
`.trim());
  },
};
