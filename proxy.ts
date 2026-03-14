
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PATHS } from './lib/paths';

export function proxy(request: NextRequest) {
  const { pathname, search, host } = request.nextUrl;

  const permanentRedirects: { [key: string]: string } = {
    '/?page_id=110.html': PATHS.services.newConstruction,
    '/?page_id=140.html': PATHS.services.homeRemodeling,
    '/2019/09/10/steel-framing-in-hawaii-prevents-termites': PATHS.services.pestRepair,
    '/2019/08/16/ada-handicap-renovations-in-honolulu-hi': PATHS.services.homeRemodeling,
    '/2018/01/18/home-additions-options-in-honolulu': PATHS.services.additions,
    '/2018/01/18/honolulu-bathroom-remodeling-ideas': PATHS.services.bathroomRemodeling,
    '/2018/01/18/what-to-do-about-honolulu-building-code-violations': PATHS.services.newConstruction,
    '/services': PATHS.services.base,
    '/2019/07/21/5-honolulu-kitchen-remodel-projects-you-shouldnt-do-yourself': PATHS.services.kitchenRemodeling,
    '/services/': PATHS.services.base,
    '/blog/how-much-should-a-kitchen-remodel-cost-in-honolulu': PATHS.services.kitchenRemodeling,
    '/wholehouse.html': PATHS.services.homeRemodeling,
    '/2018/01/18/adu-accessory-dwelling-unit-info-for-hawaii-homeowners': PATHS.services.additions,
    '/blog/steel-framing-in-hawaii-prevents-termites': PATHS.services.pestRepair,
    '/privacy.html': PATHS.privacyPolicy,
    '/blog/honolulu-kitchen-remodeling-ideas-updates/?no_redirect=true': PATHS.services.kitchenRemodeling,
    '/blog': PATHS.home,
    '/blog/': PATHS.home,
    '/category/dumoreconstruction/page/2/': PATHS.home,
    '/home/': PATHS.home,
    '/gallery-structure/': PATHS.home,
    '/site/dumoreconstruction/home?url=https://www.dumoreconstruction.com/the-best-of-awards/': PATHS.home,
    '/blog/home-remodeling-for-your-honolulu-home/': PATHS.services.homeRemodeling,
    '/category/dumoreconstruction/': PATHS.home,
    '/tear-down/': PATHS.services.newConstruction,
    '/blog/contact-us-blog/': PATHS.home,
    '/index.html': PATHS.home,
  };

  const requestPath = pathname + search;

  if (process.env.NODE_ENV === 'production') {
    if (host.startsWith('www.') || request.headers.get('x-forwarded-proto') !== 'https') {
      const newHost = host.replace('www.', '');
      const url = request.nextUrl.clone();
      url.host = newHost;
      url.protocol = 'https';
      url.pathname = request.nextUrl.pathname;
      url.search = request.nextUrl.search;
      return NextResponse.redirect(url.toString(), 301);
    }
  }

  if (permanentRedirects[requestPath]) {
    const url = request.nextUrl.clone();
    url.pathname = permanentRedirects[requestPath];
    url.search = '';
    return NextResponse.redirect(url, 301);
  }

  if (pathname.endsWith('/') && pathname !== '/') {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  const oldBlogUrlRegex = /^\/\d{4}\/\d{2}\/\d{2}\/([a-zA-Z0-9-]+)/;
  const match = pathname.match(oldBlogUrlRegex);

  if (match && match[1]) {
    const slug = match[1];
    const redirects: { [key: string]: string } = {
      'steel-framing-in-hawaii-prevents-termites': PATHS.services.pestRepair,
      'ada-handicap-renovations-in-honolulu-hi': PATHS.services.homeRemodeling,
      'home-additions-options-in-honolulu': PATHS.services.additions,
      'honolulu-bathroom-remodeling-ideas': PATHS.services.bathroomRemodeling,
      'what-to-do-about-honolulu-building-code-violations': PATHS.services.newConstruction,
      '5-honolulu-kitchen-remodel-projects-you-shouldnt-do-yourself': PATHS.services.kitchenRemodeling,
      'adu-accessory-dwelling-unit-info-for-hawaii-homeowners': PATHS.services.additions,
    };

    if (redirects[slug]) {
      const url = request.nextUrl.clone();
      url.pathname = redirects[slug];
      return NextResponse.redirect(url, 301);
    } else {
      const homeUrl = request.nextUrl.clone();
      homeUrl.pathname = PATHS.home;
      return NextResponse.redirect(homeUrl, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
