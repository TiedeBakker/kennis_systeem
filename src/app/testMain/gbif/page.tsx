'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GbifTestPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const searchGbif = async () => {
    if (!query) return;
    setLoading(true);
    try {
      // GBIF Species Match API endpoint
      const res = await fetch(`https://api.gbif.org/v1/species/match?name=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data ? [data] : []);
    } catch (err) {
      console.error('Fout bij ophalen GBIF data:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: 'system-ui, sans-serif' }}>
      <Link href="/testMain" style={{ color: '#0066cc', textDecoration: 'none' }}>
        ← Terug naar Testmenu
      </Link>

      <h1 style={{ marginTop: '16px' }}>🌿 GBIF API Test</h1>

      <div style={{ display: 'flex', gap: '8px', margin: '20px 0' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Bijv. Parus major of Vulpes vulpes"
          style={{ flex: 1, padding: '8px 12px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button
          onClick={searchGbif}
          disabled={loading}
          style={{ padding: '8px 16px', fontSize: '1rem', cursor: 'pointer' }}
        >
          {loading ? 'Zoeken...' : 'Zoek Soort'}
        </button>
      </div>

      <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '6px', overflowX: 'auto' }}>
        {JSON.stringify(results, null, 2)}
      </pre>
    </div>
  );
}