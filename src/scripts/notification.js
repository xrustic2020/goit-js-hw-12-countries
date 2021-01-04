export default function (type, message) {
  type({
    text: message,
    hide: true,
    delay: 1000,
    animation: 'fade',
    animateSpeed: 'slow',
    sticker: false,
    mouseReset: true,
  });
}
