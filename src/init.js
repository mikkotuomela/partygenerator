const scripts = 'functions constants organization person competition universe production venue date programtrack program party partygenerator';
const head = document.getElementsByTagName('head')[0];
scripts.split(' ').forEach(script => {
  const scriptElement = document.createElement('script');
  scriptElement.src = `src/${script}.js`;
  head.appendChild(scriptElement);
});
console.log('Init complete');
