document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bgVideo");
  const iframeContainer = document.getElementById("iframeContainer");
  const yourIframe = document.getElementById("yourIframe");

  const iframeSrc = "https://ambientweather.net/devices/public/815090641f17338c96bc00d9500e35d4?embed=true"; // Replace with your iFrame URL.

  video.addEventListener("loadeddata", () => {
    video.style.opacity = 1;
    setTimeout(() => {
      iframeContainer.style.opacity = 1;
      yourIframe.src = iframeSrc;
    }, 10000);
  });
});
