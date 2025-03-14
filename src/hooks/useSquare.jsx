import React, { useMemo } from 'react'

const useSquare = (number) => {
    let square=useMemo(()=> number * number,[number])
  return square
}

export default useSquare
