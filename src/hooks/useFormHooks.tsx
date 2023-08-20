import React, { useState } from 'react';

interface IFormContents {
  to: string;
  message: string;
}

const useFormHooks = () => {
  const [formData, setSetFormData] = useState<IFormContents>({
    to: '',
    message: '',
  });

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 8) {
      setSetFormData((prev) => {
        return { ...prev, to: e.target.value };
      });
    }
  };
  const textAreaOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length < 101) {
      setSetFormData((prev) => {
        return { ...prev, message: e.target.value };
      });
    }
  };

  const isButtonActive = formData.to.length > 0 && formData.message.length > 0;
  return { formData, isButtonActive, inputOnChange, textAreaOnChange };
};

export default useFormHooks;
