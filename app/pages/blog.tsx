// pages/blog.tsx
import Link from 'next/link';
import { Heading, Text, Box } from '@chakra-ui/react';

const posts = [
  { title: 'Post 1', slug: 'post-1' },
  { title: 'Post 2', slug: 'post-2' },
];

const Blog: React.FC = () => {
  return (
    <Box p={4}>
      <Heading size="2xl">Blog</Heading>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <a>
            <Text>{post.title}</Text>
          </a>
        </Link>
      ))}
    </Box>
  );
};

export default Blog;
