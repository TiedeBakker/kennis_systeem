export const dynamic = "force-dynamic";
import {
  DefaultKnowledgeProvider,
  MemoryKnowledgeStore,
} from "@/core";

export default async function Home() {
  const store = new MemoryKnowledgeStore();
  const provider = new DefaultKnowledgeProvider(store);

  const object = await provider.getRandomObject();
  const relations =
    object
      ? await provider.getRelationsForObject(object.id)
      : [];

  const parameters =
    object
      ? await provider.getParametersForObject(object.id)
      : [];

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
          <p>
            <strong>Relaties:</strong> {relations.length}
          </p>
          {relations.map(relation => (
            <p key={relation.id.value}>
              <strong>Relatie:</strong> {relation.type}
            </p>
          ))}

          <p>
            <strong>Parameters:</strong> {parameters.length}
          </p>
          {parameters.map(parameter => (
            <p key={parameter.id.value}>
              <strong>{parameter.name}:</strong> {parameter.value}
            </p>
          ))}
        </>
      ) : (
        <p>Geen object gevonden.</p>
      )}
    </main>
  );
}