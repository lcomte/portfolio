import BlogList from './Blog/BlogList';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Blog Posts
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        <div className="mt-12">
          <BlogList />
        </div>
      </div>
    </section>
  );
}