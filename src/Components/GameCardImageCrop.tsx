import NoImage from "../assets/NoImage.jpg";

const getCardImageCrop = (url: string) => {
  if (!url) return NoImage;

  const index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCardImageCrop;
