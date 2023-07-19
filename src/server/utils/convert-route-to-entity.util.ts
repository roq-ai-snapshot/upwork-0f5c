const mapping: Record<string, string> = {
  contractors: 'contractor',
  freelancers: 'freelancer',
  organizations: 'organization',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
