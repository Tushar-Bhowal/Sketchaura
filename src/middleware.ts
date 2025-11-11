import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";
import {
  isBypassRoutes,
  isProtectedRoutes,
  isPublicRoutes,
} from "./lib/permisssion";

const PublickMatcher = createRouteMatcher(isPublicRoutes);
const BypassMatcher = createRouteMatcher(isBypassRoutes);
const ProtectedMatcher = createRouteMatcher(isProtectedRoutes);


export default convexAuthNextjsMiddleware(
  async (request, { convexAuth }) => {
    if (BypassMatcher(request)) return;
    const authed = await convexAuth.isAuthenticated();
    if (PublickMatcher(request) && authed) {
      return nextjsMiddlewareRedirect(request, "/dashboard");
    }
    if (ProtectedMatcher(request) && !authed) {
      return nextjsMiddlewareRedirect(request, "/auth/signin");
    }
    return;
  },
  {
    cookieConfig: { maxAge: 60 * 60 * 24 * 30 },
  }
);

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
