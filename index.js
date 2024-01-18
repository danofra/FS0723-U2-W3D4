const query = "sport";
const query2 = "cat";
const myURL = "https://api.pexels.com/v1/search?query=" + query;
const myURL2 = "https://api.pexels.com/v1/search?query=" + query2;
const key = "lquFV3FXRG8HfwySSrWruh3osb7kjiXluEkC6syNB1xoWdbZ0PE2ms0f";
const image = document.getElementById("load");
const image2 = document.getElementById("reLoad");

const fetchFunction = function (url) {
  fetch(url, {
    headers: {
      Authorization: key,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Riscontrato errore");
      }
    })
    .then((data) => {
      console.log(data);
      data.photos.forEach((photo) => {
        let src = photo.src.landscape;
        let idPhoto = photo.id;
        let photographer = photo.photographer;
        let alt = photo.alt;
        let row = document.getElementById("card");
        let col = document.createElement("div");
        let card = document.createElement("div");
        col.classList.add("col", "col-md-4");
        card.classList.add(
          "d-flex",
          "flex-column",
          "card",
          "mb-4",
          "shadow-sm"
        );
        card.innerHTML = `<img
            src=${src}
            class="bd-placeholder-img card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">${photographer}</h5>
            <p class="card-text">
            ${alt}
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small class="text-muted">${idPhoto}</small>
            </div>
          </div>`;
        row.appendChild(col);
        col.appendChild(card);
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
};

image.addEventListener("click", () => {
  fetchFunction(myURL);
});
image2.addEventListener("click", () => {
  fetchFunction(myURL2);
});
