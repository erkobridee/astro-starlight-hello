<script lang="ts">
  import { onMount } from 'svelte';

  import { redefineUrl } from '~/utils/redefineUrl';

  export let supportedLocales: string[];

  onMount(() => {
    const { lang = 'en' } = document.documentElement;
    const prevUrl = window.location.href;

    let langUrl = lang.toLocaleLowerCase();
    if (supportedLocales.length > 0) {
      for (let locale of supportedLocales) {
        if (prevUrl.includes(locale)) {
          langUrl = locale;
          break;
        }
      }
    }

    const error404Url = redefineUrl(`/${langUrl}/404`);

    localStorage.setItem(
      'redirect-404',
      JSON.stringify({
        prevUrl,
        supportedLocales
      })
    );

    window.location.assign(error404Url);
  });
</script>
