/** @type { import('@storybook/html-vite').Preview } */


// 토큰 & 공통 CSS 전역 import
import '../css/tokens/index.css';
import '../css/css/common.css';
import '../css/css/layout.css';
import '../css/css/spacing.css';
import '../css/css/border.css';
import '../css/css/color.css';
import '../css/css/typography.css';


const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;