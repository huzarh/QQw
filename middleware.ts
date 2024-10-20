import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({ 
  locales: ['tr', 'en','kz','mn'],
  
  defaultLocale: 'en'
});
 
export const config = { 
  matcher: ['/', '/(tr|en|kz|mn)/:path*']
};