import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Arsalan Jumani
      </h1>
      <p className="mb-4">
        {`I'm passionate about sharing knowledge and empowering others to learn and grow.`}
      </p>
      <p className="mb-4">
        {`These days I'm obsessing over technical leadership, scaling data engineering
        capabilities through Gen AI and improving math pedagogy through technology.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
