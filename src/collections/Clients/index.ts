import { Access, CollectionConfig } from "payload";

const access: Access = ({ req }) => {
  const user = req.user;
  const url = req?.url;

  if (url?.includes("/api")) {
    return true;
  }

  if (user?.collection === "administrators") {
    if (user?.role === "superadmin") {
      return true;
    } else if (user?.role === "admin") {
      return {
        createdBy: {
          equals: user.id,
        },
      };
    }
  }

  return false;
};

const adminAccess = ({ req }) => {
  const user = req.user;

  if (!user) return false;

  if (user?.collection === "administrators") {
    return user?.role === "admin" || user?.role === "superadmin";
  }

  return false;
};


