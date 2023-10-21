# An RSC-based nested router

*or, let's clone Next's app-router for fun and profit*

This is a demo app using the new router from [tangle](https://github.com/lubieowoce/tangle). The API is meant to roughly match what NextJS does.

Go to `src/routes` to see all the pages/layouts. That's like Next's `src/app`. There's a janky rebuild-on-change setup, so the code is technically editable live, but you'll probably have to refresh the page to bust the router's cache.

There's a bunch of artificial delays inserted on the fake DB operations in `src/server/db.ts`. You can remove them if it's annoying.

If you're interested in the guts of the router, check out the flurry of logs in the console and `window.LAYOUT_CACHE` / `window.LAYOUT_CACHE_S`.

The router code is in [this PR](https://github.com/lubieowoce/tangle/pull/1).