// src/app/page.tsx

export const dynamic = "force-dynamic";

import {
  DefaultKnowledgeProvider,
} from "@/core";

import { SQLiteKnowledgeStore } from "@/core/store/SQLiteKnowledgeStore";

export default async function Home() {
  const store = new SQLiteKnowledgeStore();

  const provider = new DefaultKnowledgeProvider(store);

  const object = await provider.getRandomObject();

  if (!object) {
    return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>KennisSysteem</h1>
        <p>Geen object gevonden.</p>
      </main>
    );
  }

  const relationValues =
    await provider.getRelationValuesForObject(object.id);

  const parameterValues =
    await provider.getParameterValuesForObject(object.id);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>KennisSysteem 3.1</h1>

      <p>Eerste werkende verticale keten (SQLiteKnowledgeStore).</p>

      <h2>Willekeurig object</h2>

      <p>
        <strong>Namespace:</strong> {object.id.namespace}
      </p>

      <p>
        <strong>Identifier:</strong> {object.id.value}
      </p>

      <p>
        <strong>Label:</strong> {object.label}
      </p>

      <p>
        <strong>Relaties:</strong> {relationValues.length}
      </p>

      <p>
        <strong>Parameters:</strong> {parameterValues.length}
      </p>

      {parameterValues.length > 0 && (
        <>
          <h3>Parameterwaarden</h3>

          <ul>
            {parameterValues.map((parameterValue) => (
              <li key={parameterValue.id.value}>
                {parameterValue.value}
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}