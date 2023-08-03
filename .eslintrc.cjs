module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'react-hooks', 'import', 'jsx-a11y'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 'off', //react 17부턴 import react가 필요없는데 off해두지 않으면 에러뜸
    'react/jsx-uses-react': 'off',

    'no-duplicate-imports': 'error', //중복 Import 안돼
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }], //콘솔은 확인 뒤 지우기
    'no-unused-vars': 'error', //사용하지 않은 변수면 없애기
    'no-multiple-empty-lines': 'error', //공백 금지
    'no-undef': 'error', //정의 안 한 변수 사용 x
    indent: 'off', // 프리티어 충돌로 인한 OFF
    'no-trailing-spaces': 'error', // 쓸데없는 공백 없애기
    'import/newline-after-import': ['error', { count: 1 }], //import 구문들 뒤에 한 칸 띄우고 코드 작성
    'react-hooks/rules-of-hooks': 'error', // 리액트 훅의 순서를 지키게끔 한다. (React는 Hook이 호출되는 순서에 의존하기 때문에)
    'arrow-parens': ['error', 'always'], // arrow-function 인자가 2개 이상이면 괄호 필수
    'no-multi-spaces': 'error', // 스페이스 여러개 금지
    'import/no-unresolved': 'off', //타입스크립트에서 경로를 제대로 잡지 못할 때 사용 or  eslint-import-resolver-typescript 설치

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'], //import 순서를 고정. builtin- 외부- 내부
        pathGroups: [
          //react 컴포넌트가 builtin 뒤에 (external import 앞에 나오도록 설정)
          { pattern: 'react', group: 'builtin', position: 'after' },
          { pattern: 'react-dom', group: 'builtin', position: 'after' },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-dom'], //pathGroups가 올바르게 적용하기 위해.. (확실치 않음)
        alphabetize: {
          order: 'asc', //알파벳 순서 정렬 방식
          caseInsensitive: true, //알파벳 대소문자 구분
        },
        'newlines-between': 'always', // group들 사이마다 개행 적용 (group 내부에서 개행 적용 불가)
      },
    ],
  },
};
