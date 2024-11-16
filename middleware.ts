import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({ 
  locales: ['tr', 'en','mn'],
  
  defaultLocale: 'en'
});
 
export const config = { 
  matcher: ['/', '/(tr|en|mn)/:path*']
};