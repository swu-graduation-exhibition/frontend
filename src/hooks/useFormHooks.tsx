import React, { useState } from 'react';
import { FormPayload } from '~/types/commonFormSection';

const useFormHooks = () => {
  const [formData, setSetFormData] = useState<FormPayload>({
    to: '',
    message: '',
  });

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      setSetFormData((prev) => ({ ...prev, to: e.target.value }));
    }
  };
  const textAreaOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length < 101) {
      setSetFormData((prev) => ({ ...prev, message: e.target.value }));
    }
  };

  const isButtonActive = formData.to.length && formData.message.length;
  return { formData, setSetFormData, isButtonActive, inputOnChange, textAreaOnChange };
};

export default useFormHooks;
