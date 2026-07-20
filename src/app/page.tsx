import {
  DefaultKnowledgeProvider,
  MemoryKnowledgeStore,
} from "@/core";

export default async function Home() {
  const store = new MemoryKnowledgeStore();
  const provider = new DefaultKnowledgeProvider(store);

  const object = await provider.getRandomObject();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>KennisSysteem</h1>

      <p>Eerste (v2)werkende verticale keten.</p>

      {object ? (
        <>
          <h2>Willekeurig object</h2>

          <p>
            <strong>Namespace:</strong> {object.id.namespace}
          </p>

          <p>
            <strong>Identifier:</strong> {object.id.value}
          </p>
        </>
      ) : (
        <p>Geen object gevonden.</p>
      )}
    </main>
  );
}