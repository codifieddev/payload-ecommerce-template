// import { CollectionConfig } from "payload";

// export const Roles: CollectionConfig = {
//   slug: "roles",
//   labels: {
//     singular: {
//       en: "Role",
//       pl: "Role",
//     },
//     plural: {
//       en: "Roles",
//       pl: "Roles",
//     },
//   },
//   admin: {
//     useAsTitle: "Roles",
//   },
//   fields: [
//     {
//       name: "Roles",
//       type: "select",
//       options: [
//         {
//           label: "Admin",
//           value: "admin",
//         },
//         {
//           label: "Super Admin",
//           value: "superadmin",
//         },
//         {
//           label: "Client",
//           value: "client",
//         },
//         {
//           label: "Business",
//           value: "business",
//         },
//         {
//           label: "Designer",
//           value: "Designer",
//         },
//         {
//           label: "Franchise",
//           value: "franchise",
//         },
//       ],
//       admin: {
//         position: "sidebar",
//       },
//     },
//     {
//       name: "User",
//       type: "relationship",
//       relationTo: "administrators",
//       admin: {
//         position: "sidebar",
//       },
//       filterOptions: async ({ req }) => {
//         const user = req.user?.id;
//         const data = await req.payload.find({
//           collection: "roles",
//           where: {
//             "User.id": {
//               equals: user,
//             },
//           },
//         });
//         return true;
//         let rolename = data.docs[0].Roles;
//         if (data.docs[0].Roles == "superadmin") {
//           return true;
//         } else if (rolename == "admin") {
//           const users = await req.payload.find({
//             collection: "administrators",
//             where: {
//               "createdBy.id": {
//                 equals: user,
//               },
//             },
//           });
//           return users.docs;
//         }

//         return false;
//       },
//     },
//     {
//       name: "pagePermission",
//       label: "Page Permission",
//       type: "select",
//       hasMany: true,
//       options: [
//         {
//           label: "Read",
//           value: "read",
//         },
//         {
//           label: "Write",
//           value: "write",
//         },
//         {
//           label: "Delete",
//           value: "delete",
//         },
//         {
//           label: "Update",
//           value: "update",
//         },
//       ],
//     },
//     {
//       name: "productPermission",
//       label: "Product List Permission",
//       type: "select",
//       hasMany: true,
//       options: [
//         {
//           label: "Read",
//           value: "read",
//         },
//         {
//           label: "Write",
//           value: "write",
//         },
//         {
//           label: "Delete",
//           value: "delete",
//         },
//         {
//           label: "Update",
//           value: "update",
//         },
//       ],
//     },
//     {
//       name: "productcatPermission",
//       label: "Product Category Permission",
//       type: "select",
//       hasMany: true,
//       options: [
//         {
//           label: "Read",
//           value: "read",
//         },
//         {
//           label: "Write",
//           value: "write",
//         },
//         {
//           label: "Delete",
//           value: "delete",
//         },
//         {
//           label: "Update",
//           value: "update",
//         },
//       ],
//     },
//     {
//       name: "userPermission",
//       label: "User Permission",
//       type: "select",
//       hasMany: true,
//       options: [
//         {
//           label: "Read",
//           value: "read",
//         },
//         {
//           label: "Write",
//           value: "write",
//         },
//         {
//           label: "Delete",
//           value: "delete",
//         },
//         {
//           label: "Update",
//           value: "update",
//         },
//       ],
//     },
//     {
//       name: "createdFor",
//       type: "relationship",
//       relationTo: "administrators",

//       admin: {
//         position: "sidebar",
//       },
//     },
//   ],
//   timestamps: true,
// };

import { CollectionConfig } from "payload";

export const Permission: CollectionConfig = {
  slug: "permission",
  labels: {
    singular: {
      en: "Permission Set",
      pl: "Zestaw Uprawnień",
    },
    plural: {
      en: "Permission Sets",
      pl: "Zestawy Uprawnień",
    },
  },
  admin: {
    useAsTitle: "createdFor",
    group: {
      en: "Administration",
      pl: "Administracja",
    },
  },
  access: {},
  fields: [
    {
      name: "pagePermission",
      label: "Page Permissions",
      type: "select",
      hasMany: true,
      options: [
        {
          label: "Read",
          value: "read",
        },
        {
          label: "Write",
          value: "write",
        },
        {
          label: "Delete",
          value: "delete",
        },
        {
          label: "Update",
          value: "update",
        },
      ],
    },
    {
      name: "productPermission",
      label: "Product List Permissions",
      type: "select",
      hasMany: true,
      options: [
        {
          label: "Read",
          value: "read",
        },
        {
          label: "Write",
          value: "write",
        },
        {
          label: "Delete",
          value: "delete",
        },
        {
          label: "Update",
          value: "update",
        },
      ],
    },
    {
      name: "productcatPermission",
      label: "Product Category Permissions",
      type: "select",
      hasMany: true,
      options: [
        {
          label: "Read",
          value: "read",
        },
        {
          label: "Write",
          value: "write",
        },
        {
          label: "Delete",
          value: "delete",
        },
        {
          label: "Update",
          value: "update",
        },
      ],
    },
    {
      name: "userPermission",
      label: "User Permissions",
      type: "select",
      hasMany: true,
      options: [
        {
          label: "Read",
          value: "read",
        },
        {
          label: "Write",
          value: "write",
        },
        {
          label: "Delete",
          value: "delete",
        },
        {
          label: "Update",
          value: "update",
        },
      ],
    },
    {
      name: "parent",
      type: "relationship",
      relationTo: "administrators",
      label: "Parent Requiring Access",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "createdFor",
      type: "relationship",
      relationTo: "administrators",
      label: "Created For (Business)",
      admin: {
        position: "sidebar",
      },
    },
  ],
  timestamps: true,
};
