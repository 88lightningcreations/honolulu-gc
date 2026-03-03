
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const redirects: { [key: string]: string } = {
    'kitchen': '/services/kitchen-remodeling',
    'bathroom': '/services/bathroom-remodeling',
    'addition': '/services/additions',
    'remodeling': '/services/home-remodeling',
    'construction': '/services/new-construction',
    'storm': '/services/storm-damage-repair',
    'damage': '/services/storm-damage-repair',
    'pest': '/services/pest-repair',
    'termite': '/services/pest-repair',
    'moving': '/services/house-moving',
  };

  const { pathname } = request.nextUrl;

  // Regex to match old blog post URLs like /2018/01/18/slug
  const oldBlogUrlRegex = /^\/\d{4}\/\d{2}\/\d{2}\/(.*)$/;

  if (oldBlogUrlRegex.test(pathname)) {
    const slug = pathname.split('/').pop() || '';
    
    for (const keyword in redirects) {
      if (slug.includes(keyword)) {
        const url = request.nextUrl.clone();
        url.pathname = redirects[keyword];
        // 301 redirect for permanent move, which is good for SEO
        return NextResponse.redirect(url, 301); 
      }
    }
    
    // If no keyword match, redirect to the homepage as a fallback
    const homeUrl = request.nextUrl.clone();
    homeUrl.pathname = '/';
    return NextResponse.redirect(homeUrl, 301);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};
