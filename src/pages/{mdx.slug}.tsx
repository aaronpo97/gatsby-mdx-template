import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box } from 'theme-ui';

interface PostPageProps {
  data: {
    mdx: {
      id: string;
      slug: string;
      body: string;
      frontmatter: {
        date: string;
        title: string;
      };
    };
  };
}
const PostPage: FC<PostPageProps> = ({ data }) => {
  const {
    body,
    frontmatter: { title },
  } = data.mdx;
  return (
    <>
      {/* @ts-ignore */}
      <Box as="h1" variant="styles.h1" fontSize="4xl">
        {title}
      </Box>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  );
};

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        date
        title
      }
    }
  }
`;

export default PostPage;
