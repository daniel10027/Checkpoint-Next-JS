import Layout from "@/components/Layout";
import { posts } from "@/lib/data";
import Image from "next/image";


export default function News() {
  return (
    <Layout title='News & Tips — Daniel' description='Articles et astuces'>
      <h1>News & Tips</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
        {posts.map((p) => (
          <article key={p.slug} style={{ border: '1px solid var(--line)', borderRadius: 12, padding: 16 }}>
            <Image src={p.image} alt={p.title} width={640} height={360} style={{ borderRadius: 8 }} />
            <h3 style={{ marginTop: 12 }}>{p.title}</h3>
            <p style={{ color: 'var(--ink-muted)' }}>{p.excerpt}</p>
            <a href='#' aria-disabled style={{ color: 'var(--brand)' }}>Continue Reading →</a>
          </article>
        ))}
      </div>
    </Layout>
  );
}