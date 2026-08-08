import DemoRoleCard from '@/components/DemoRoleCard';
import { demoRoles } from '@/lib/demo-roles';

export default function DemoPage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="kicker">Demo Access</p>
        <h1>Try the YNF platform in one click</h1>
        <p>
          Choose a role below. Each button calls the frontend proxy route and signs you into the
          demo backend as that role.
        </p>
      </section>

      <section className="role-grid">
        {demoRoles.map((role) => (
          <DemoRoleCard
            key={role.slug}
            label={role.label}
            description={role.description}
            href={`/api/demo-login/${role.slug}`}
          />
        ))}
      </section>
    </main>
  );
}
