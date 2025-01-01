import Head from 'next/head'
import Link from 'next/link'
import { posts } from '../data/posts'
import { useTheme } from '../context/ThemeContext'

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <Head>
        <title>Tech Blog</title>
        <meta name="description" content="Technology blog with latest insights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="header">
          <h1>Tech Blog</h1>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? '☀️ Açık Tema' : '🌙 Koyu Tema'}
          </button>
        </div>
        <div className="posts">
          {posts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-content">
                <Link href={`/post/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
                <p className="excerpt">{post.excerpt}</p>
                <div className="meta">
                  <span className="author">Yazar: {post.author}</span>
                  <span className="date">Tarih: {new Date(post.date).toLocaleDateString('tr-TR')}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
} 