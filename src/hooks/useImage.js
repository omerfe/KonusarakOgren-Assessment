const useImage = (fileName) => {
  let imgSource;
  switch (fileName) {
    case "1":
      imgSource = require(`../../assets/thumbnails/1.webp`);
      break;
    case "2":
      imgSource = require(`../../assets/thumbnails/2.webp`);
      break;
    case "3":
      imgSource = require(`../../assets/thumbnails/3.webp`);
      break;
    case "4":
      imgSource = require(`../../assets/thumbnails/4.webp`);
      break;
    case "5":
      imgSource = require(`../../assets/thumbnails/5.webp`);
      break;
    case "6":
      imgSource = require(`../../assets/thumbnails/6.webp`);
      break;
    case "7":
      imgSource = require(`../../assets/thumbnails/7.webp`);
      break;
    case "8":
      imgSource = require(`../../assets/thumbnails/8.webp`);
      break;
    case "9":
      imgSource = require(`../../assets/thumbnails/9.webp`);
      break;
    case "10":
      imgSource = require(`../../assets/thumbnails/10.webp`);
      break;
    case "11":
      imgSource = require(`../../assets/thumbnails/11.webp`);
      break;
    case "12":
      imgSource = require(`../../assets/thumbnails/12.webp`);
      break;
    case "13":
      imgSource = require(`../../assets/thumbnails/13.webp`);
      break;
    case "14":
      imgSource = require(`../../assets/thumbnails/14.webp`);
      break;
    case "15":
      imgSource = require(`../../assets/thumbnails/15.webp`);
      break;
    case "16":
      imgSource = require(`../../assets/thumbnails/16.webp`);
      break;
    case "17":
      imgSource = require(`../../assets/thumbnails/17.webp`);
      break;
    case "18":
      imgSource = require(`../../assets/thumbnails/18.webp`);
      break;
    case "19":
      imgSource = require(`../../assets/thumbnails/19.webp`);
      break;
    case "20":
      imgSource = require(`../../assets/thumbnails/20.webp`);
      break;
    default:
      imgSource = require(`../../assets/thumbnails/1.webp`);
      break;
  }
  return {
    imgSource,
  };
};

export default useImage;
