import { useState } from 'react';
import CategoryDropBox from './CategoryDropBox';

const Letters = () => {
  const [designerId, setDesignerId] = useState(-1);

  return (
    <>
      <CategoryDropBox designerId={designerId} setDesignerId={setDesignerId} />
    </>
  );
};

export default Letters;
