import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type MetaImage = {
  src: string;
};

type MetaType =
  | { property: string; content: string | undefined; name: undefined }
  | { name: string; content: string | undefined; property: undefined };

type ISeoProp = {
  pathname?: string;
  siteUrl?: string;
  lang?: string;
  meta?: MetaType[];
  keywords?: Array<string>;
  title?: string;
  description?: string;
  author?: string;
  image?: MetaImage;
};

export const SEO: React.FC<ISeoProp> = ({
  description,
  lang,
  meta,
  image: metaImage,
  siteUrl,
  title,
  pathname,
  keywords,
  author,
}: ISeoProp) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  const image = metaImage && metaImage.src ? metaImage.src : null;
  const canonical = pathname ? `${siteUrl}${pathname}` : null;
  const metaDescription =
    description && description.length > 200
      ? description.substring(0, 200) + '...'
      : description;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: keywords?.join(',') ?? '',
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        image
          ? [
              {
                property: 'og:image',
                content: image,
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                property: 'twitter:image',
                content: image,
              },
            ]
          : [
              {
                name: 'twitter:card',
                content: 'summary',
              },
            ],
        canonical
          ? [
              {
                property: 'og:url',
                content: canonical,
              },
              {
                property: 'twitter:url',
                content: canonical,
              },
            ]
          : [
              {
                name: 'twitter:card',
                content: 'summary',
              },
            ],
        meta ?? []
      )}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      property: PropTypes.any,
    }).isRequired
  ),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  pathname: PropTypes.string,
};
