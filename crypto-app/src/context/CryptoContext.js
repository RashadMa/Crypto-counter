import { createContext, useState } from "react";
export const CryptoContext = createContext({});

export const CryptoProvider = ({children}) => {
      const [test, setTest] = useState("Test")

      return(
            <CryptoContext.Provider value={{test, setTest}}>
                  {children}
            </CryptoContext.Provider>
      )
}
 