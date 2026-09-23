import projects from "@/data/Projects";

export default async function Page({ params }) {
  const { slug } =await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.category} — {project.year}</p>
      <p>{project.description}</p>
      <ul>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}