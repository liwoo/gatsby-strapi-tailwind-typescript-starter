import React from 'react';
import { useState, createContext } from 'react';

import { WelcomeTitle, MainContainer } from './styled';

export const LayoutContext = createContext({ windowWidth: 0 });

const Layout: React.FC = () => {
  const [windowWidth] = useState(0);

  return (
    <LayoutContext.Provider value={{ windowWidth }}>
      <MainContainer>
        <WelcomeTitle>Styled Component Example</WelcomeTitle>
      </MainContainer>
    </LayoutContext.Provider>
  );
};
export default Layout;
