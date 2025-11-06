// src/access/isAdmin.ts
import type { Access } from "payload";

export const isAdmin: Access = ({ req: { user } }) =>
  user?.collection === "administrators" && (
    (typeof user.role === "string" && user.role === "admin")
  );

// src/access/isSuperAdmin.ts

// export const isSuperAdmin: Access = ({ req: { user } }) =>
//   user?.collection === "administrators" && (
//     (typeof user.role === "string" && user.role === "superadmin")
//   );
