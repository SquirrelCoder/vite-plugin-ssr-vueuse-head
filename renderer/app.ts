import { createSSRApp, defineComponent, h } from 'vue';
import PageShell from './PageShell.vue';
import { setPageContext } from './usePageContext';
import type { Component, PageContext, PageProps } from './types';
import { createHead } from "@vueuse/head";

export { createApp };

function createApp(Page: Component, pageProps: PageProps | undefined, pageContext: PageContext) {
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        }
      );
    },
  });

  const app = createSSRApp(PageWithLayout);
  const head = createHead();
  app.use(head);

  setPageContext(app, pageContext);

  return app;
}

