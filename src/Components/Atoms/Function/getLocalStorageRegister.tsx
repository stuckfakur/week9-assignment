import { useEffect } from 'react'

interface LocalStorageProps {
  setValue?: any
  data?: any
  keys: string

}

export function useLocalStorageRegister({ setValue, data,  keys  }: LocalStorageProps) {
  if (setValue){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const savedData = localStorage.getItem(keys)
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        Object.keys(parsedData).forEach((key) => {
          setValue(key, parsedData[key])
        })
      }
    }, [setValue, keys])
  }

  if (data){
    localStorage.setItem(keys, JSON.stringify(data))
  }
}
