import React from 'react';
import { useState, createContext } from 'react';

import { WelcomeTitle, Container } from '../views';

export const LayoutContext = createContext({ windowWidth: 0 });

const Layout: React.FC = () => {
  const [windowWidth] = useState(0);

  return (
    <LayoutContext.Provider value={{ windowWidth }}>
      <Container>
        <WelcomeTitle>Styled Component Example</WelcomeTitle>
      </Container>
    </LayoutContext.Provider>
  );
};
export { Layout };
