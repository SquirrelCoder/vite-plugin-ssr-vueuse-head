export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [ 'pageProps', 'urlPathname' ]

import { renderToString } from '@vue/server-renderer';
import { dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { createApp } from './app';
import type { PageContextServer } from './types';
import { createHead, renderHeadToString } from "@vueuse/head";


async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  if (!Page) {
    throw new Error('My render() hook expects pageContext.Page to be defined')
  }

  const app = createApp(Page, pageProps, pageContext);


  const appHtml = await renderToString(app);
  const head = createHead();

  const { headTags, htmlAttrs, bodyAttrs, bodyTags } = await renderHeadToString(head);

  const documentHtml = dangerouslySkipEscape(`<!DOCTYPE html>
    <html ${ htmlAttrs }>
      <head>
        ${ headTags }
      </head>
      <body>
        <div id="app">${ appHtml }</div>
        ${ bodyTags }
      </body>
    </html>`);

  return {
    documentHtml,
    pageContext: {},
  };
}

