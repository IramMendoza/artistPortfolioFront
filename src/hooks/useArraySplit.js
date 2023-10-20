import { useState, useEffect } from 'react';

export const useArraySplit = (array, howManyParts) => {
  const [dividedArray, setDividedArray] = useState([]);

  useEffect(() => {
    const size = Math.ceil(array.length / howManyParts);
    const newArray = new Array(howManyParts)
      .fill('')
      .map(() => array.splice(0, size));
    setDividedArray(newArray);
  }, [array, howManyParts]);

  return dividedArray
}



