import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  routes: [{
    path: '/index',
    handler: () => import('./pages/index.astro')
  },
  {
    path: '/Generation1',
    handler: () => import('./pages/generation1.astro')
  },
  {
    path: '/Generation12',
    handler: () => import('./pages/generation2.astro')
  },
  {
    path: '/Generation3',
    handler: () => import('./pages/generation3.astro')
  },
  {
    path: '/Generation4',
    handler: () => import('./pages/generation4.astro')
  },
  {
    path: '/Generation5',
    handler: () => import('./pages/generation5.astro')
  },
  {
    path: '/Generation6',
    handler: () => import('./pages/generation6.astro')
  },
  {
    path: '/Generation7',
    handler: () => import('./pages/generation7.astro')
  },
  {
    path: '/Generation8',
    handler: () => import('./pages/generation8.astro')
  },
  {
    path: '/Generation9',
    handler: () => import('./pages/generation9.astro')
  },
  ]
});