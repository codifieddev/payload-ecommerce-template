import { authenticated } from "@/access/authenticated";

import type { Access, CollectionConfig } from "payload";
import { uuidv4 } from "zod";

const access: Access = async ({ req }) => {
  const user = req.user;

  if (!user) return false;

  // Type guard: only apply role logic if it's an Administrator
  if (user.collection === 'administrators') {
    const role = user.role;

    if (role === 'superadmin') return true;

    if (role === 'admin') {
      return {
        createdBy: {
          equals: user.id,
        },
      };
    }
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
    read: access,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["name", "email"],
    useAsTitle: "name",
    group: {
      en: "Page Settings",
      pl: "Ustawienia strony",
    },
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: 'role',
      type: 'select',
      label: 'Role',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Super Admin', value: 'superadmin' },
        { label: 'Tenants', value: 'tenants' },
      ],
      defaultValue: 'admin',
      required: true,
      admin: {
        position: 'sidebar',
      },
      filterOptions: ({ req, options }) => {
        if (req.user?.collection === 'administrators') {
          if (req.user.role === 'admin') {
            // Admins can only see "Tenants"
            return [
              { label: 'Tenants', value: 'tenants' },
            ];
          }
          if (req.user.role === 'superadmin') {
            // Superadmins can see all
            return options;
          }
        }
    
        // Other users (tenants/customers) see none
        return [];
      },
    },
    // {
    //   name: "tenantID",
    //   type: "text",
    //   admin: {
    //     position: "sidebar",
    //     readOnly: true,
    //   },
    //   unique: true,
    // },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "administrators",
      defaultValue: ({ req }) => req.user?.id,
      admin: {
        readOnly: true,
        position: "sidebar",
      },
    }
  ],
  // hooks: {
  //   beforeValidate: [
  //     async ({ data, operation }) => {
  //       // Only generate on create
  //       if (operation === "create" && data && !data.tenantID) {
  //         data.tenantID = uuidv4(); // or custom format
  //       }
  //       return data;
  //     },
  //   ],
  // },
  timestamps: true,
};
