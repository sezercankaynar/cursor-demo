export const posts = [
  {
    id: 1,
    title: "Node.js: Modern Web Uygulamalarının Temeli",
    excerpt: "Node.js nedir, nasıl çalışır ve neden modern web geliştirmede bu kadar önemli bir rol oynuyor?",
    content: `Node.js, modern web geliştirmenin temel taşlarından biridir. JavaScript'i sunucu tarafında çalıştırabilme yeteneği sayesinde, tam yığın (full-stack) geliştirmeyi tek bir dil ile yapabilmeyi mümkün kılar.

Node.js'in Temelleri:
- Event-driven (olay tabanlı) mimari
- Non-blocking I/O (engellemesiz giriş/çıkış) modeli
- V8 JavaScript motoru
- npm (Node Package Manager) ekosistemi

Node.js'in Avantajları:
1. Hızlı ve Verimli: Asenkron yapısı sayesinde, I/O işlemlerini çok verimli bir şekilde yönetir.
2. Geniş Ekosistem: npm üzerinde 1.5 milyondan fazla paket bulunur.
3. Mikroservis Mimarisi: Küçük, bağımsız servisler geliştirmek için idealdir.
4. Real-time Uygulamalar: WebSocket desteği ile gerçek zamanlı uygulamalar geliştirilebilir.

Örnek Kullanım Alanları:
- REST API'ler
- Real-time chat uygulamaları
- Streaming servisleri
- IoT (Nesnelerin İnterneti) uygulamaları

Node.js ile Başlangıç:
1. Kurulum ve Temel Kavramlar
2. Express.js ile Web Sunucusu Oluşturma
3. Asenkron Programlama ve Promise'ler
4. Hata Yönetimi
5. Veritabanı Entegrasyonu

Node.js, modern web uygulamalarının vazgeçilmez bir parçası haline gelmiştir. Özellikle mikroservis mimarisi ve real-time uygulamalarda sunduğu avantajlar, onu tercih edilen bir teknoloji yapmaktadır.`,
    author: "Sezer Can Kaynar",
    date: "2024-01-01"
  },
  {
    id: 2,
    title: "React: Modern Kullanıcı Arayüzleri Geliştirme",
    excerpt: "React'in temel konseptleri, bileşen yapısı ve modern web uygulamalarındaki rolü.",
    content: `React, Facebook tarafından geliştirilen ve modern web uygulamalarının frontend kısmını oluşturmak için kullanılan güçlü bir JavaScript kütüphanesidir.

React'in Temel Kavramları:

1. Bileşen (Component) Yapısı:
- Fonksiyonel Bileşenler
- Class Bileşenleri
- Props ve State Yönetimi
- Yaşam Döngüsü Metodları

2. Virtual DOM:
- Gerçek DOM vs Virtual DOM
- Render Optimizasyonu
- Reconciliation Süreci

3. Hooks Sistemi:
- useState: Durum yönetimi
- useEffect: Yan etki yönetimi
- useContext: Bağlam yönetimi
- useReducer: Karmaşık durum yönetimi
- Custom Hooks oluşturma

4. State Management:
- Local State
- Prop Drilling
- Context API
- Redux veya Recoil gibi state yönetim çözümleri

Modern React Geliştirme Pratikleri:
1. Bileşen Kompozisyonu
2. Code Splitting
3. Lazy Loading
4. Error Boundaries
5. Performance Optimization

React Ekosistemi:
- React Router: Sayfa yönlendirme
- Styled Components: CSS-in-JS
- Material-UI / Chakra UI: UI kütüphaneleri
- React Query: Veri fetching
- React Testing Library: Test yazımı

React'in sunduğu deklaratif programlama yaklaşımı ve zengin ekosistemi, onu modern web uygulamaları geliştirmek için ideal bir seçenek haline getirmektedir.`,
    author: "Sezer Can Kaynar",
    date: "2024-01-02"
  },
  {
    id: 3,
    title: "Modern CSS Framework'ü: Tailwind CSS",
    excerpt: "Tailwind CSS'in utility-first yaklaşımı ve modern web tasarımındaki rolü.",
    content: `Tailwind CSS, geleneksel CSS framework'lerinden farklı olarak utility-first yaklaşımını benimseyen modern bir CSS framework'üdür.

Tailwind CSS'in Temel Özellikleri:

1. Utility-First Yaklaşımı:
- Hazır class'lar ile hızlı geliştirme
- Özelleştirilebilir tasarım sistemi
- Responsive tasarım desteği
- Dark mode desteği

2. Performans Optimizasyonu:
- PurgeCSS entegrasyonu
- JIT (Just-In-Time) compiler
- Minimal CSS çıktısı
- Tree-shaking desteği

3. Tasarım Sistemi:
- Renk paleti
- Tipografi sistemi
- Spacing sistemi
- Flexbox ve Grid sistemleri
- Animasyon ve geçişler

Tailwind ile Geliştirme Pratikleri:

1. Responsive Tasarım:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

2. Component Oluşturma:
- @apply direktifi
- Komponent ekstraktı
- Tema özelleştirme
- Plugin sistemi

3. Best Practices:
- Organizasyon stratejileri
- Naming conventions
- Reusable komponentler
- Maintainability

Tailwind CSS Ekosistemi:
- Tailwind UI: Hazır komponentler
- Headless UI: Erişilebilir komponentler
- Heroicons: SVG ikonlar
- Typography plugin
- Forms plugin

Tailwind CSS, modern web tasarımında hızlı prototipleme ve tutarlı UI geliştirme imkanı sunar. Özellikle React, Vue gibi modern frontend framework'leri ile birlikte kullanıldığında çok güçlü bir geliştirme deneyimi sağlar.`,
    author: "Sezer Can Kaynar",
    date: "2024-01-03"
  },
  {
    id: 4,
    title: "Modern Backend Veritabanı: MongoDB ve Mongoose",
    excerpt: "NoSQL veritabanı MongoDB ve Mongoose ORM ile modern backend uygulamaları geliştirme.",
    content: `MongoDB, modern web uygulamalarında sıkça kullanılan, esnek ve ölçeklenebilir bir NoSQL veritabanıdır. Mongoose ise MongoDB için geliştirilmiş, şema tabanlı bir ODM (Object Document Mapper) kütüphanesidir.

MongoDB'nin Temel Özellikleri:

1. Doküman Tabanlı Yapı:
- JSON benzeri BSON formatı
- Şemasız yapı
- Esnek veri modelleme
- Zengin sorgu dili

2. Ölçeklenebilirlik:
- Yatay ölçekleme (Sharding)
- Replica sets
- Load balancing
- Auto-failover

3. Performans Özellikleri:
- İndeksleme
- Aggregation pipeline
- Text search
- Geospatial queries

Mongoose ile Geliştirme:

1. Şema Tanımlama:
- Veri tipleri
- Validasyon kuralları
- Middleware hooks
- Virtual fields

2. Model İşlemleri:
- CRUD operasyonları
- Query builders
- Population
- Transactions

3. İlişkisel Veri Modelleme:
- References
- Embedded documents
- Populate işlemleri
- Nested schemas

Best Practices:

1. Veritabanı Tasarımı:
- Şema stratejileri
- İndeksleme stratejileri
- Veri normalizasyonu vs denormalizasyonu
- Performans optimizasyonu

2. Güvenlik:
- Authentication
- Authorization
- Data encryption
- Input validation

3. Error Handling:
- Try-catch blokları
- Error middleware
- Custom error sınıfları
- Logging stratejileri

MongoDB ve Mongoose kombinasyonu, modern web uygulamalarında esnek ve güçlü bir backend altyapısı sunar. Özellikle Node.js ile birlikte kullanıldığında, tam yığın JavaScript geliştirme deneyimi sağlar.`,
    author: "Sezer Can Kaynar",
    date: "2024-01-04"
  },
  {
    id: 5,
    title: "Modern Web Uygulamalarında Redis Kullanımı",
    excerpt: "In-memory veritabanı Redis'in modern web uygulamalarındaki rolü ve kullanım senaryoları.",
    content: `Redis (Remote Dictionary Server), yüksek performanslı, in-memory veri yapısı deposu olarak çalışan ve modern web uygulamalarında yaygın olarak kullanılan bir veritabanı sistemidir.

Redis'in Temel Özellikleri:

1. Veri Yapıları:
- Strings
- Lists
- Sets
- Sorted sets
- Hashes
- Bitmaps
- HyperLogLogs
- Streams

2. Performans Özellikleri:
- In-memory storage
- Single-threaded yapı
- Asenkron I/O
- Persistence options (RDB ve AOF)

Kullanım Senaryoları:

1. Caching:
- Sayfa önbellekleme
- API response caching
- Database query caching
- Session storage
- Rate limiting

2. Real-time Özellikler:
- Pub/Sub sistemi
- Real-time analytics
- Message queuing
- Live leaderboards
- Real-time feeds

3. Distributed Systems:
- Distributed locks
- Distributed caching
- Job queues
- Session management
- Rate limiting

Redis ile Node.js Entegrasyonu:

1. Temel İşlemler:
- Bağlantı kurulumu
- CRUD operasyonları
- Pipeline kullanımı
- Transaction yönetimi

2. Caching Stratejileri:
- Cache-aside pattern
- Write-through caching
- Write-behind caching
- Cache invalidation
- Cache warming

3. Performance Optimization:
- Connection pooling
- Pipelining
- Batch operations
- Memory management
- Eviction policies

Best Practices:

1. Veri Modelleme:
- Key naming conventions
- Data structure seçimi
- Expiration stratejileri
- Memory optimization

2. High Availability:
- Redis Sentinel
- Redis Cluster
- Backup stratejileri
- Failover yönetimi

Redis, modern web uygulamalarında performans optimizasyonu ve ölçeklenebilirlik için vazgeçilmez bir araç haline gelmiştir. Özellikle yüksek trafikli uygulamalarda, caching ve real-time özellikler için ideal bir çözüm sunar.`,
    author: "Sezer Can Kaynar",
    date: "2024-01-05"
  }
]; 