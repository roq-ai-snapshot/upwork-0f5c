interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Finance Manager', 'HR Manager', 'Project Manager', 'Business Owner', 'Contractors'],
  tenantName: 'Organization',
  applicationName: 'upwork ',
  addOns: ['chat', 'notifications', 'file'],
};
