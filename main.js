const btn = document.querySelector(".play");

btn.addEventListener("click", () => {
  const jumpscare = document.querySelector("video");
  jumpscare.style.display = "block";
  jumpscare.src = "./media/video.mp4";
  jumpscare.autoplay = true;
  btn.style.display = "none;";

  jumpscare.addEventListener("ended", () => {
    document.querySelector(".face").style.display = "block";
    jumpscare.style.display = "none";
  });
});
