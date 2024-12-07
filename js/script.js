
let imgesContainer = Array.from(
    document.querySelectorAll(".img-container img")
  );
  
  let overLayImg = document.querySelector(".overlay-img");
  let imgBox = document.querySelector(".img-box");
  let contentPage=document.querySelector(".content-page")

  let closeBtn = document.querySelector("#close");
  let imgIndexSrc;

  imgesContainer.forEach((item, index) => {
    item.addEventListener("click", function (e) {
      overLayImg.classList.replace("d-none", "d-block");
      contentPage.classList.replace("d-none", "d-block");
      imgIndexSrc = e.target.src;
      imgBox.style.backgroundImage = `url(${imgIndexSrc})`;
  
      imgIndexSrc = index;
    });
  });

  
  closeBtn.addEventListener("click", () => {
    overLayImg.classList.replace("d-block", "d-none");
  
  
  });

  