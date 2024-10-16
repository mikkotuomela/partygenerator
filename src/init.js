const scripts = 'functions constants organization competition production person venue date programtrack program party partygenerator';
let head = document.getElementsByTagName('head')[0];
scripts.split(' ').forEach(script => {
  let scriptElement = document.createElement('script');
  scriptElement.src = `src/${script}.js`;
  head.appendChild(scriptElement);
});
console.log('Init complete');