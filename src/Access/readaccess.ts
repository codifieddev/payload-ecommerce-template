import type { Access, AccessResult } from "payload";

// Helpers return AccessResult so TS does not try to merge object shapes
const businessWhere = (ids: string[]): AccessResult => ({
  id: {
    in: ids,
  },
});

const adminFranchiseWhere = (userId: string): AccessResult => ({
  createdBy: {
    equals: userId,
  },
});

export const readAccess: Access = async ({ req }) => {
  const user = req.user;

  if (!user || user.collection !== "administrators") {
    console.log("❌ User check failed:", { user: user?.id, collection: user?.collection });
    return false;
  }

  const roleName = user.role;

  console.log("🔍 Role info:", {
    userId: user.id,
    roleName,
    hasSuperadmin: roleName === "admin",
  });

  if (!roleName) {
    return false;
  }

  if (roleName === "admin") {
    return true;
  }

  if (roleName === "business") {
    const adminDocs = await req.payload.find({
      collection: "administrators",
      where: {
        createdFor: {
          equals: user.id,
        },
      },
      limit: 0,
      pagination: false,
    });

    const mappedUserIds = adminDocs.docs.map((d: any) => d.id).filter(Boolean);

    console.log("✅ Business access:", [...mappedUserIds, user.id]);
    return businessWhere([...mappedUserIds, user.id]);
  }


  return false;
};
