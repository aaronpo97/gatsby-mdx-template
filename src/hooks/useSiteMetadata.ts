import { graphql, useStaticQuery } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
