import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { posts } from '../../data/posts'
import { useTheme } from '../../context/ThemeContext'

export default function Post() {
  const router = useRouter()
  const { id } = router.query
  const post = posts.find(p => p.id === Number(id))
  const { darkMode, toggleDarkMode } = useTheme();

  if (!post) {
    return <div>Gönderi bulunamadı</div>
  }

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <Head>
        <title>{post.title} - Tech Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <main>
        <article className="post-full">
          <div className="header">
            <Link href="/">
              <span className="back-link">← Ana Sayfaya Dön</span>
            </Link>
            <button onClick={toggleDarkMode} className="theme-toggle">
              {darkMode ? '☀️ Açık Tema' : '🌙 Koyu Tema'}
            </button>
          </div>

          <h1>{post.title}</h1>
          <div className="meta">
            <span className="author">Yazar: {post.author}</span>
            <span className="date">Tarih: {new Date(post.date).toLocaleDateString('tr-TR')}</span>
          </div>
          <div className="content">
            {post.content}
          </div>
        </article>
      </main>
    </div>
  )
} 