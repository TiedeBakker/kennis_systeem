import Link from 'next/link';

interface TestModule {
  id: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
}

const modules: TestModule[] = [
  {
    id: 'gbif',
    title: 'GBIF API Test',
    description: 'Zoeken naar soorten, waarnemingen en taxonomische gegevens via Global Biodiversity Information Facility.',
    href: '/testMain/gbif',
    badge: 'API v1',
  },
  {
    id: 'col',
    title: 'Catalogue of Life (CoL)',
    description: 'Testen van de Catalogue of Life API voor officiële checklists en taxonomische hiërarchieën.',
    href: '/testMain/catalogue-of-life',
    badge: 'API v2',
  },
  {
    id: 'turso-sync',
    title: 'Database Import Test',
    description: 'Test het direct wegschrijven van API-data naar de Turso/SQLite database via Drizzle ORM.',
    href: '/testMain/db-sync',
    badge: 'Drizzle',
  },
];

export default function TestMainPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '32px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '2rem', margin: 0 }}>🔬 Sandbox & Test Modules</h1>
        <p style={{ color: '#666', marginTop: '8px' }}>
          Interne omgeving voor het testen van externe biodiversity-APIs en Drizzle/Turso integraties.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '16px' }}>
        {modules.map((mod) => (
          <Link
            key={mod.id}
            href={mod.href}
            style={{
              display: 'block',
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{mod.title}</h2>
              {mod.badge && (
                <span style={{
                  backgroundColor: '#f0f0f0',
                  color: '#555',
                  fontSize: '0.75rem',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontWeight: 600
                }}>
                  {mod.badge}
                </span>
              )}
            </div>
            <p style={{ margin: '8px 0 0 0', color: '#555', fontSize: '0.95rem' }}>
              {mod.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}