import { authenticated } from "@/access/authenticated";

import type { Access, CollectionConfig } from "payload";
import { uuidv4 } from "zod";

// const access: Access = async ({ req }) => {
//   const user = req.user;

//   if (!user) return false;

//   // Type guard: only apply role logic if it's an Administrator
//   if (user.collection === "administrators") {
//     const role = user.role;

//     if (role === "superadmin") return true;

//     if (role === "admin") {
//       return {
//         createdBy: {
//           equals: user.id,
//         },
//       };
//     }
//   }

//   return false;
// };

// Read access: determines who can see which administrators
const readAccess: Access = async ({ req }) => {
  const user = req.user;

  if (!user || user.collection !== "administrators") return false;

  const role = user.role;

  // Superadmin can see all administrators
  if (role === "superadmin") return true;

  // Franchise can see only their created users (and themselves)
  if (role === "franchise") {
    return {
      or: [
        {
          createdBy: {
            equals: user.id,
          },
        },
        {
          id: {
            equals: user.id,
          },
        },
      ],
    } as any;
  }

  // Admin can see only their created users (and themselves)
  if (role === "admin") {
    return {
      or: [
        {
          createdBy: {
            equals: user.id,
          },
        },
        {
          id: {
            equals: user.id,
          },
        },
      ],
    } as any;
  }

  if (role === "clients") {
    return {
      or: [
        {
          createdBy: {
            equals: user.id,
          },
        },
        {
          id: {
            equals: user.id,
          },
        },
      ],
    } as any;
  }

  return false;
};

export const Administrators: CollectionConfig = {
  slug: "administrators",
  labels: {
    singular: {
      en: "Administrator",
      pl: "Administrator",
    },
    plural: {
      en: "Administrators",
      pl: "Administratorzy",
    },
  },
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: readAccess,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["name", "email", "role", "mongodbActions", "createdBy"],
    useAsTitle: "name",
    group: {
      en: "Administration",
      pl: "Administracja",
    },
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      label: "Role",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Super Admin", value: "superadmin" },
        { label: "Tenants", value: "tenants" },
        { label: "Clients", value: "clients" },
        { label: "Designer", value: "designer" },
        { label: "Editor", value: "editor" },
        { label: "Franchise", value: "franchise" },
        { label: "Guest", value: "guest" },
      ],
      admin: {
        position: "sidebar",
      },
      filterOptions: ({ req, options }) => {
        // If no user is authenticated (first user creation), show all options
        if (!req.user) {
          return options;
        }

        if (req.user?.collection === "administrators") {
          if (req.user.role === "admin") {
            // Admins can only see "Tenants"
            return [
              { label: "Tenants", value: "tenants" },
              { label: "Clients", value: "clients" },
            ];
          }
          if (req.user.role === "superadmin") {
            // Superadmins can see all
            return options;
          }
        }

        // Other users (tenants/customers) see none
        return [];
      },
    },
    {
      name: "mongodbActions",
      type: "ui",
      label: "MongoDB Actions",
      admin: {
        components: {
          Cell: "@/components/MongoDBButtonCell/MongoDBButtonCell#default",
        },
      },
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "administrators",
      defaultValue: ({ req }) => req.user?.id,
      admin: {
        readOnly: true,
        position: "sidebar",
      },
    },
  ],
  timestamps: true,
};
