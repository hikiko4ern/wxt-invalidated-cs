export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    console.log('-- main --');

    ctx.onInvalidated(() => {
      console.log('invalidated');
    });
  },
});
