import ogImage from '../assets/og-image.png'

export function setMetaImage() {
  // Set OG image
  const ogImageMeta = document.getElementById('og-image') as HTMLMetaElement;
  if (ogImageMeta) {
    ogImageMeta.content = ogImage;
  }

  // Set Twitter image
  const twitterImageMeta = document.getElementById('twitter-image') as HTMLMetaElement;
  if (twitterImageMeta) {
    twitterImageMeta.content = ogImage;
  }
}