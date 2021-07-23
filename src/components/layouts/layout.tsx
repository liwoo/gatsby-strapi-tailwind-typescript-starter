import React from 'react';
import { useState, createContext } from 'react';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';

import { LangList } from '../languages';
import { PageTitle, Container } from '../views';

export const LayoutContext = createContext({ windowWidth: 0 });

const Layout: React.FC = () => {
  const [windowWidth] = useState(0);
  const { languages, changeLanguage } = useI18next();

  return (
    <LayoutContext.Provider value={{ windowWidth }}>
      <Container>
        <PageTitle>
          <Trans>Tailwind Styled Component Example</Trans>
        </PageTitle>
        <p>Language Example: click any language to select</p>
        <LangList
          languages={languages}
          changeLanguage={changeLanguage}
        ></LangList>
      </Container>
    </LayoutContext.Provider>
  );
};

export { Layout };
