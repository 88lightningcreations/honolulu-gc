
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PATHS } from './lib/paths';

export function proxy(request: NextRequest) {
  const { pathname, host } = request.nextUrl;

  // Force HTTPS and non-www in production
  if (process.env.NODE_ENV === 'production') {
    if (host.startsWith('www.') || request.headers.get('x-forwarded-proto') !== 'https') {
      const newHost = host.replace('www.', '');
      const url = new URL(`https://${newHost}${request.nextUrl.pathname}${request.nextUrl.search}`);
      return NextResponse.redirect(url.toString(), 301);
    }
  }

  // Regex to catch old blog formats like /YYYY/MM/DD/slug or /blog/slug
  const oldBlogUrlRegex = /^(\/\d{4}\/\d{2}\/\d{2}\/|\/blog\/)/;

  if (oldBlogUrlRegex.test(pathname)) {
    const homeUrl = request.nextUrl.clone();
    homeUrl.pathname = PATHS.home;
    homeUrl.search = '';
    return NextResponse.redirect(homeUrl, 301);
  }

  // Handle a few essential, specific redirects
  const permanentRedirects: { [key: string]: string } = {
    '/index.php': PATHS.home,
    '/services': PATHS.services.base,
    '/services/': PATHS.services.base,
    '/home/': PATHS.home,
  };

  if (permanentRedirects[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = permanentRedirects[pathname];
    url.search = '';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
