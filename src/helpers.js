// This function will preload an image so it's already cached in the browser for any other coomponent that needs it.
export const preloadImage = (image) => {
  return new Promise(resolve => {
    const img = document.createElement('img');
    img.src = image;
    img.addEventListener('load', () => {
      resolve(true);
    });
  });
}
