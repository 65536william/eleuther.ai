const importBlogPosts = async () => {
  const markdownFiles = require
    .context("../../content/blog", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/blog/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export async function getStaticProps() {
  const postsList = await importBlogPosts();

  return {
    props: {
      postsList,
    },
  };
}

export default function BlogIndex({ postsList }) {
  return (
    <div>
      <h2>Blog</h2>
    </div>
  );
}
