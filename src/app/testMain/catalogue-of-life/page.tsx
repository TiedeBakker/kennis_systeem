'use client';

import { useState } from 'react';
import Link from 'next/link';

type TaxonStatus = 'IDLE' | 'LOADING' | 'ACCEPTED' | 'SYNONYM_RESOLVED' | 'NOT_FOUND' | 'ERROR';

interface ColCheckResult {
    status: TaxonStatus;
    searchedName: string;
    acceptedName?: string;
    acceptedTaxonId?: string;
    rank?: string;
    message?: string;
    rawData?: any; // Om alle details te tonen
}

export default function ColTestPage() {
    const [inputName, setInputName] = useState('Passer domesticus');
    const [result, setResult] = useState<ColCheckResult>({ status: 'IDLE', searchedName: '' });

    const handleCheckName = async () => {
        if (!inputName.trim()) return;

        setResult({ status: 'LOADING', searchedName: inputName });

        try {
            const cleanInput = inputName.trim();

            // Forceer dat we ALLEEN in Catalogue of Life (datasetKey 3LR) zoeken
            const res = await fetch(
                `https://api.checklistbank.org/nameusage/search?q=${encodeURIComponent(cleanInput)}&datasetKey=3LR&limit=10`
            );

            if (!res.ok) throw new Error(`API fout (${res.status})`);

            const data = await res.json();
            const matches = data.result || [];

            // STRIKTE MATCHING: Zoek een match waar de wetenschappelijke naam exact overeenkomt met de zoekterm
            const exactMatch = matches.find((m: any) => {
                const sciName = m.usage?.name?.scientificName?.toLowerCase() || '';
                return sciName === cleanInput.toLowerCase();
            });

            // Als er geen exacte match is, is het geen bekende/valide naam!
            if (!exactMatch || !exactMatch.usage) {
                setResult({
                    status: 'NOT_FOUND',
                    searchedName: cleanInput,
                    message: `De naam "${cleanInput}" is niet gevonden als exacte wetenschappelijke naam in de index.`,
                    rawData: matches.length > 0 ? { opmerking: 'Geen exacte match. Wel gerelateerde zoekresultaten gevonden:', resultaten: matches } : null,
                });
                return;
            }

            const usage = exactMatch.usage;
            const isSynonym = usage.status === 'synonym' || usage.status === 'ambiguous synonym';

            // SCENARIO 1: Synoniem
            if (isSynonym) {
                const acceptedObject = exactMatch.accepted || usage.accepted;
                const realAcceptedName = acceptedObject?.name?.scientificName
                    || acceptedObject?.scientificName
                    || 'Onbekende geaccepteerde naam';

                setResult({
                    status: 'SYNONYM_RESOLVED',
                    searchedName: cleanInput,
                    acceptedName: realAcceptedName,
                    acceptedTaxonId: acceptedObject?.id || usage.acceptedUsageId,
                    rank: usage.name?.rank,
                    rawData: exactMatch,
                });
            }
            // SCENARIO 2: Direct geaccepteerd
            else if (usage.status === 'accepted' || usage.status === 'provisionally accepted') {
                setResult({
                    status: 'ACCEPTED',
                    searchedName: cleanInput,
                    acceptedName: usage.name.scientificName,
                    acceptedTaxonId: usage.id,
                    rank: usage.name.rank,
                    rawData: exactMatch,
                });
            }
            // SCENARIO 3: Overige status
            else {
                setResult({
                    status: 'NOT_FOUND',
                    searchedName: cleanInput,
                    message: `Naam gevonden, maar heeft een afwijkende status: "${usage.status}"`,
                    rawData: exactMatch,
                });
            }
        } catch (err: any) {
            setResult({
                status: 'ERROR',
                searchedName: inputName,
                message: err.message || 'Er is een fout opgetreden bij het raadplegen van de API.',
            });
        }
    };

    const handleProceed = () => {
        alert(`Vervolgstap gestart voor de geaccepteerde naam: "${result.acceptedName}" (ID: ${result.acceptedTaxonId})`);
    };

    const canProceed = result.status === 'ACCEPTED' || result.status === 'SYNONYM_RESOLVED';

    return (
        <div style={{ maxWidth: '850px', margin: '40px auto', padding: '0 20px', fontFamily: 'system-ui, sans-serif' }}>
            <Link href="/testMain" style={{ color: '#0066cc', textDecoration: 'none', fontSize: '0.9rem' }}>
                ← Terug naar Sandbox Menu
            </Link>

            <h1 style={{ fontSize: '1.8rem', marginTop: '12px' }}>🧪 COL Naamvalidatie & Inspector</h1>
            <p style={{ color: '#555' }}>
                Valideer wetenschappelijke namen en inspecteer de ruwe API-informatie uit Catalogue of Life.
            </p>

            {/* INVOERFORMULIER */}
            <div style={{ display: 'flex', gap: '8px', margin: '24px 0' }}>
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Bijv. Passer domesticus"
                    onKeyDown={(e) => e.key === 'Enter' && handleCheckName()}
                    style={{
                        flex: 1,
                        padding: '10px 14px',
                        fontSize: '1rem',
                        border: '1px solid #ccc',
                        borderRadius: '6px',
                    }}
                />
                <button
                    onClick={handleCheckName}
                    disabled={result.status === 'LOADING'}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: '#0066cc',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        opacity: result.status === 'LOADING' ? 0.7 : 1,
                    }}
                >
                    {result.status === 'LOADING' ? 'Controleren...' : 'Valideer Naam'}
                </button>
            </div>

            {/* STATUS OVERZICHT */}
            {result.status !== 'IDLE' && result.status !== 'LOADING' && (
                <div style={{ marginTop: '20px', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', backgroundColor: '#fff' }}>

                    {/* Status 1: DIRECT GEACCEPTEERD */}
                    {result.status === 'ACCEPTED' && (
                        <div style={{ backgroundColor: '#e6f4ea', borderLeft: '5px solid #137333', padding: '16px', borderRadius: '4px' }}>
                            <strong style={{ color: '#137333', fontSize: '1.1rem' }}>✅ Formeel Geaccepteerde Naam</strong>
                            <p style={{ margin: '8px 0 0 0' }}>
                                De naam <em>"{result.searchedName}"</em> is actueel en geaccepteerd.
                            </p>
                        </div>
                    )}

                    {/* Status 2: SYNONIEM GEVONDEN */}
                    {result.status === 'SYNONYM_RESOLVED' && (
                        <div style={{ backgroundColor: '#fef7e0', borderLeft: '5px solid #b06000', padding: '16px', borderRadius: '4px' }}>
                            <strong style={{ color: '#b06000', fontSize: '1.1rem' }}>⚠️ Verouderde Naam / Synoniem</strong>
                            <p style={{ margin: '8px 0 0 0' }}>
                                <em>"{result.searchedName}"</em> is een synoniem.
                            </p>
                            <div style={{ marginTop: '8px', padding: '10px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #f0c36d' }}>
                                👉 Actuele geaccepteerde naam: <strong><em>{result.acceptedName}</em></strong>
                            </div>
                        </div>
                    )}

                    {/* Status 3: NIET GEVONDEN */}
                    {result.status === 'NOT_FOUND' && (
                        <div style={{ backgroundColor: '#fce8e6', borderLeft: '5px solid #c5221f', padding: '16px', borderRadius: '4px' }}>
                            <strong style={{ color: '#c5221f', fontSize: '1.1rem' }}>❌ Niet Gevonden als Wetenschappelijke Naam</strong>
                            <p style={{ margin: '8px 0 0 0' }}>{result.message}</p>
                        </div>
                    )}

                    {/* VERVOLGKNOP */}
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            onClick={handleProceed}
                            disabled={!canProceed}
                            style={{
                                padding: '10px 20px',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                color: '#fff',
                                backgroundColor: canProceed ? '#1e8e3e' : '#ccc',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: canProceed ? 'pointer' : 'not-allowed',
                            }}
                        >
                            {canProceed ? `Ga verder met "${result.acceptedName}" →` : 'Vervolgstap geblokkeerd'}
                        </button>
                    </div>

                    {/* RUWE DATA INSPECTOR (Handig voor ontwikkelaars) */}
                    {result.rawData && (
                        <details style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #eee' }}>
                            <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#555' }}>
                                🔍 Bekijk ruwe COL API gegevens (JSON)
                            </summary>
                            <pre style={{
                                marginTop: '12px',
                                backgroundColor: '#282c34',
                                color: '#abb2bf',
                                padding: '16px',
                                borderRadius: '6px',
                                overflowX: 'auto',
                                fontSize: '0.85rem',
                                maxHeight: '400px'
                            }}>
                                {JSON.stringify(result.rawData, null, 2)}
                            </pre>
                        </details>
                    )}

                </div>
            )}
        </div>
    );
}