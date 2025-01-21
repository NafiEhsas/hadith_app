
export default {
  basePath: '/hadith_app',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
