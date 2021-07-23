import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/layouts';

const IndexPage = () => <Layout />;

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
