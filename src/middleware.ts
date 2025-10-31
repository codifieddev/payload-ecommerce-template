// import createMiddleware from "next-intl/middleware";

// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(pl|en)/:path*", "/((?!api|_next|next|admin|route|proxy|.*\\..*).*)"],
// };

import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

// 1️⃣ Create the i18n middleware from next-intl
const intlMiddleware = createMiddleware(routing);

export function middleware(req: NextRequest) {
  // --- Tenant extraction ---
  const host = req.headers.get("host") || "";
  const domain = host.replace(/:\d+$/, ""); // remove port
  const parts = domain.split(".");
  let tenant = "default";

  if (parts.length > 2) {
    tenant = parts[0]; // e.g. subdomain.example.com → subdomain
  }

  // --- Run next-intl middleware ---
  const response = intlMiddleware(req);

  // --- Add tenant info to response headers ---
  response.headers.set("x-tenant", tenant);

  return response;
}

// 2️⃣ Merge both matchers (i18n + custom middleware)
export const config = {
  matcher: [
    "/",
    "/(pl|en)/:path*",
    "/((?!api|_next|next|admin|route|proxy|.*\\..*).*)",
  ],
};
