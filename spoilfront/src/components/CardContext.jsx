import React, { createContext, useState } from "react";

export const CardsDataContext = createContext({
  cardsData: [],
  setCardsData: () => {},
});

export const CardsDataProvider = ({ children }) => {
  const [cardsData, setCardsData] = useState([]);

  return (
    <CardsDataContext.Provider value={{ cardsData, setCardsData }}>
      {children}
    </CardsDataContext.Provider>
  );
};
