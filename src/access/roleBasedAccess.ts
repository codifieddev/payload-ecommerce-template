import type { Access } from "payload";

/**
 * Access control for admin users - only allows superadmin to access certain collections
 * Admin users are restricted to only tenant and client management
 */
export const superAdminOnly: Access = ({ req }) => {
  const user = req.user;
  const url = req?.url;

  // Allow API access
  if (url?.includes("/api")) {
    return true;
  }

  // Only superadmin can access these restricted collections
  if (user?.collection === "administrators" && user?.role === "superadmin") {
    return true;
  }

  // Block admin users from accessing certain collections
  return false;
};

/**
 * Admin access control - only superadmin can see admin panel for certain collections
 */
export const superAdminOnlyAdmin = ({ req }: { req: any }): boolean => {
  const user = req.user;

  // Only superadmin can access admin panel for restricted collections
  if (user?.collection === "administrators" && user?.role === "superadmin") {
    return true;
  }

  return false;
};

/**
 * Access control that allows superadmin full access and admin limited access to their own created items
 */
export const adminOrSuperAdmin: Access = ({ req }) => {
  const user = req.user;
  const url = req?.url;

  // Allow API access
  if (url?.includes("/api")) {
    return true;
  }

  if (user?.collection === "administrators") {
    // Superadmin has full access
    if (user?.role === "superadmin") {
      return true;
    }

    // Admin has access to items they created
    if (user?.role === "admin") {
      return {
        createdBy: {
          equals: user.id,
        },
      };
    }
  }

  return false;
};
