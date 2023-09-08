const colors = {
  White: '#FFFFFF',
  Black: '#000000',
  Grayscales_50: '#FBFBFB',
  Grayscales_100: '#F1F3F5',
  Grayscales_200: '#E9ECEF',
  Grayscales_300: '#DEE2E6',
  Grayscales_400: '#CED4DA',
  Grayscales_500: '#ADB5BD',
  Grayscales_600: '#868E96',
  Grayscales_700: '#495057',
  Grayscales_800: '#343A40',
  Grayscales_900: '#212529',
  Yello_Main_100: '#FFFDEE',
  Yello_Main_200: '#FFFBD7',
  Yello_Main_300: '#FFF8B1',
  Yello_Main_400: '#FFF270',
  Yello_Main_500: '#FDEC4A',
  Yello_Main_600: '#FFDE31',
  Yello_Main_700: '#FDCB4A',
  Yello_Main_800: '#FDB54A',
  Sub_Pink: '#F5D4BF',
  Sub_Blue: '#C3DCEC',
} as const;

interface Font {
  weight: 300 | 350 | 400 | 500 | 700;
  size: number;
  lineHeight: number;
}

function FONT({ weight, size, lineHeight }: Font): string {
  return `
    font-family: 'Noto Sans' ;
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${lineHeight}rem;
    color: ${colors.Grayscales_900};
  `;
}

const fonts = {
  Headline_01: FONT({ weight: 700, size: 6.4, lineHeight: 9.267 }),
  Headline_02: FONT({ weight: 700, size: 6, lineHeight: 6 }),
  Headline_03: FONT({ weight: 700, size: 5.2, lineHeight: 7.53 }),
  Mobile_Headline_01: FONT({ weight: 700, size: 1.6, lineHeight: 2.4 }),
  Subtitle_01: FONT({ weight: 700, size: 3.8, lineHeight: 4 }),
  Subtitle_02: FONT({ weight: 700, size: 3.6, lineHeight: 5.213 }),
  Subtitle_03: FONT({ weight: 700, size: 2.8, lineHeight: 3.2 }),
  Subtitle_04: FONT({ weight: 700, size: 2.6, lineHeight: 3.2 }),
  Subtitle_05: FONT({ weight: 700, size: 2.2, lineHeight: 3.2 }),
  Mobile_Subtitle_01: FONT({ weight: 700, size: 2.6, lineHeight: 3.2 }),
  Mobile_Subtitle_02: FONT({ weight: 700, size: 2.6, lineHeight: 3.2 }),
  Mobile_Subtitle_03: FONT({ weight: 500, size: 2, lineHeight: 2.6 }),
  Mobile_Subtitle_04: FONT({ weight: 300, size: 2, lineHeight: 2.6 }),
  Body_01: FONT({ weight: 400, size: 4, lineHeight: 6 }),
  Body_02: FONT({ weight: 300, size: 3.5, lineHeight: 5 }),
  Body_03: FONT({ weight: 500, size: 3, lineHeight: 4 }),
  Body_04: FONT({ weight: 300, size: 3, lineHeight: 4 }),
  Mobile_Body_01: FONT({ weight: 400, size: 1.6, lineHeight: 2.5 }),
  Mobile_Body_02: FONT({ weight: 500, size: 1.5, lineHeight: 2.17 }),
  Mobile_Body_03: FONT({ weight: 400, size: 1.5, lineHeight: 3 }),
  Mobile_Body_04: FONT({ weight: 350, size: 1.4, lineHeight: 2 }),
  Mobile_Body_05: FONT({ weight: 300, size: 1.3, lineHeight: 1.8 }),
  Caption_01: FONT({ weight: 300, size: 2.5, lineHeight: 4 }),
  Caption_02: FONT({ weight: 400, size: 2.2, lineHeight: 3 }),
  Caption_03: FONT({ weight: 400, size: 2, lineHeight: 3 }),
  Caption_04: FONT({ weight: 400, size: 1.5, lineHeight: 2.4 }),
  Mobile_Caption_03: FONT({ weight: 300, size: 1, lineHeight: 1.6 }),
  Mobile_Caption_01: FONT({ weight: 300, size: 1.3, lineHeight: 2 }),
  Mobile_Caption_02: FONT({ weight: 400, size: 1.2, lineHeight: 1.8 }),
} as const;

const theme = {
  colors,
  fonts,
};

export default theme;
