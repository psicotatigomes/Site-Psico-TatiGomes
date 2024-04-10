import PostCard from "@components/PostCard";

function Blog({ posts }) {
  console.log(posts);
  return (
    <section className="blog container" id="blog">
      <div>
        <h2 className="section-title">Blog</h2>
        <p>
          Aqui você encontrará alguns artigos que escrevo, relacionados à saúde
          mental, desenvolvimento pessoal te contanto um pouco como funciona os
          tratamentos e abordagens psicoterápicas, fatores de risco e e de
          proteção da saúde mental no dia-dia, hábitos saudáveis e práticas de
          autocuidado.
        </p>
      </div>

      <div className="articles">
        {posts.map(function renderPosts(post) {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
    </section>
  );
}

export default Blog;
