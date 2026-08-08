type DemoRoleCardProps = {
  label: string;
  description: string;
  href: string;
};

export default function DemoRoleCard({ label, description, href }: DemoRoleCardProps) {
  return (
    <article className="role-card">
      <h3>{label}</h3>
      <p>{description}</p>
      <a className="role-card-link" href={href}>
        Login as {label}
      </a>
    </article>
  );
}
