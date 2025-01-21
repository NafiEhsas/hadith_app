
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/hadith_app',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/hadith_app/app-home",
    "route": "/hadith_app"
  },
  {
    "renderMode": 2,
    "route": "/hadith_app/app-home"
  },
  {
    "renderMode": 2,
    "route": "/hadith_app/app-sirat"
  },
  {
    "renderMode": 2,
    "route": "/hadith_app/app-about-us"
  },
  {
    "renderMode": 2,
    "route": "/hadith_app/all-hadith"
  },
  {
    "renderMode": 2,
    "route": "/hadith_app/app-narrators"
  },
  {
    "renderMode": 2,
    "route": "/hadith_app/**"
  }
],
  assets: {
    'index.csr.html': {size: 3607, hash: '520aa5abb298bdf7f969b1b9e729e2e558772ff8513368c36d03c53dc83e003a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1205, hash: '73edb1381be02e940ae9e99d02cda226d7e47c6e0da0e6335f271212053fc88f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'app-home/index.html': {size: 12297, hash: '1186210b7f24aba02e84c6eaaab3d0ee956926681a61fe4af165e86f043cade1', text: () => import('./assets-chunks/app-home_index_html.mjs').then(m => m.default)},
    'app-sirat/index.html': {size: 11945, hash: 'b6353d7ce283dae113a6bddbdf448aa0bcde8288cd8192c2e4efc70d2b1929da', text: () => import('./assets-chunks/app-sirat_index_html.mjs').then(m => m.default)},
    'app-narrators/index.html': {size: 21979, hash: 'e4120d4598526c6c4d97bdfe978e561b32b6c56aa433f719c89a649bbdaeb814', text: () => import('./assets-chunks/app-narrators_index_html.mjs').then(m => m.default)},
    'app-about-us/index.html': {size: 12542, hash: 'ce27310c9a69e34416696679455d8481010efa13f83a0884ac8980e36c70c5fa', text: () => import('./assets-chunks/app-about-us_index_html.mjs').then(m => m.default)},
    'all-hadith/index.html': {size: 33353, hash: '47256b393d405204874033a40c9aeb26d6f9566d2d1fb9ef969af1ea22d75d6d', text: () => import('./assets-chunks/all-hadith_index_html.mjs').then(m => m.default)},
    'styles-C4UTHDLE.css': {size: 131175, hash: 'z6KH9tNTXPA', text: () => import('./assets-chunks/styles-C4UTHDLE_css.mjs').then(m => m.default)}
  },
};
