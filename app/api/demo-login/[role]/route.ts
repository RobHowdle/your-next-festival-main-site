import { NextRequest, NextResponse } from 'next/server';
import { demoRoles, type DemoRoleSlug } from '@/lib/demo-roles';

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ role: string }> }
) {
  const params = await context.params;
  const role = params.role.toLowerCase();
  const allowedRoles = new Set(demoRoles.map((r) => r.slug));

  if (!allowedRoles.has(role as DemoRoleSlug)) {
    return NextResponse.json({ error: 'Unknown role' }, { status: 404 });
  }

  const baseUrl = process.env.YNF_DEMO_BASE_URL;
  if (!baseUrl) {
    return NextResponse.json({ error: 'YNF_DEMO_BASE_URL is not configured' }, { status: 500 });
  }

  const target = new URL(`/demo/login/${role}`, baseUrl);

  const sharedKey = process.env.YNF_DEMO_SHARED_KEY;
  if (sharedKey) {
    target.searchParams.set('key', sharedKey);
  }

  return NextResponse.redirect(target);
}
