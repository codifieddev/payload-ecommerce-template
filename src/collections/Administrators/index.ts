// import { authenticated } from "@/access/authenticated";
// import { readAccess } from "@/Access/readaccess";

// import type { CollectionConfig } from "payload";

// export const Administrators: CollectionConfig = {
//   slug: "administrators",
//   labels: {
//     singular: {
//       en: "Administrator",
//       pl: "Administrator",
//     },
//     plural: {
//       en: "Administrators",
//       pl: "Administratorzy",
//     },
//   },
//   access: {
//     admin: authenticated,
//     create: authenticated,
//     delete: authenticated,
//     read: readAccess,
//     update: authenticated,
//   },
//   admin: {
//     defaultColumns: ["name", "email", "role", "mongodbActions", "createdBy"],
//     useAsTitle: "name",
//     group: {
//       en: "Administration",
//       pl: "Administracja",
//     },
//   },
//   auth: true,
//   fields: [
//     {
//       name: "name",
//       type: "text",
//     },
//     {
//       name: "role",
//       type: "select"
//     }
//     {
//       name: "createdBy",
//       type: "relationship",
//       relationTo: "administrators",

//       admin: {
//         // readOnly: true,
//         position: "sidebar",
//       },
//     },
//   ],
//   timestamps: true,
// };

import { authenticated } from "@/access/authenticated";
// import { readAccess } from "@/Access/readaccess";

import type { CollectionConfig } from "payload";

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
    read: () => true,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["name", "email", "role", "createdBy"],
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
      required: true,
    },
    {
      name: "role",
      type: "select",
      required: true,
      options: [
        {
          label: "Super Admin",
          value: "superadmin",
        },
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Guest",
          value: "guest",
        },
        {
          label: "Client",
          value: "client",
        },
        {
          label: "Business",
          value: "business",
        },
        {
          label: "Designer",
          value: "designer",
        },
        {
          label: "Franchise",
          value: "franchise",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "administrators",
      admin: {
        position: "sidebar",
      },
    },
  ],
  timestamps: true,
};
