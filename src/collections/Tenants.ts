import { Access, CollectionConfig } from 'payload'

const access: Access = ({ req }) => {
  const user = req.user
  const url = req?.url
  if(url?.includes('/api')){
    return true
  }
    if (user?.collection=="administrators" && (url?.includes('/api') || user?.role === 'superadmin')) {
        return true
      } else if (user?.collection=="administrators" && user?.role == 'admin') {
        return {
          createdBy: {
            equals: user.id,
          },
        }
      }
  else {
    return false
  }
}

export const Websites: CollectionConfig = {
  slug: 'websites',
  labels: {
    singular: 'Website',
    plural: 'Websites',
  },
  admin: {
    useAsTitle: 'name',
    group: "Website Management",
  },
  access: {
    read: access,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'domains', type: 'array', fields: [{ name: 'domain', type: 'text' }] },
    {
      name: 'theme',
      type: 'group',
      fields: [
        { name: 'primaryColor', type: 'text' },
        { name: 'font', type: 'text' },
      ],
    },
    { name: 'settings', type: 'json' },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'administrators',
      required: true,
      defaultValue: ({ req: { user } }) => user?.id,
      admin: {
        readOnly: true,
        position: 'sidebar',
      }
    },
    {
        name:"tenantID",
        type:"relationship",
        relationTo:"administrators",
        filterOptions: ({ user }) => {
            if (!user) return false
            if (user.collection=="administrators" && user.role === 'superadmin') return true
            return {
                createdBy: { equals: user.id },
            }
        }
    }
  ],
}