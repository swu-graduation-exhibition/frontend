import { DefaultTheme } from 'styled-components';

export interface FormPayload {
  to: string;
  message: string;
}

export interface FormSectionProps {
  page: 'project' | 'designer';
}

export interface SubmitButtonProps {
  $isButtonActive: boolean;
  theme: DefaultTheme;
}
