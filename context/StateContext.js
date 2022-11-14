import React, { createContext, useContext, useState } from "react";

const Context = createContext();
export const StateContext = ({ children }) => {
  const [userimageUrl, setUserImageUrl] = useState(null);
  const [crushimageUrl, setCrushImageUrl] = useState(null);
  const [username, setUserName] = useState(null);
  const [crushname, setCrushName] = useState(null);

  return (
    <Context.Provider
      value={{
        userimageUrl,
        setUserImageUrl,
        crushimageUrl,
        setCrushImageUrl,
        username,
        setUserName,
        crushname,
        setCrushName,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
