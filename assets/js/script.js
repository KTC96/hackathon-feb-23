document.addEventListener("DOMContentLoaded", function() {

let carouselNgos = "";

for(let category of ngosCategories) {
  carouselNgos += `<div class="container-fluid carousel-container col-lg-6">
                            <div class="carousel">
                            <h2 class="text-success">${category}</h2>
                                <div id="carousel${category.replace(" ", "")}" class="carousel carousel-dark slide" data-bs-ride="true">
                                    <div class="carousel-inner">`;
  let currentCategory = ngos.filter((el) => el.category === category);

  for (let i = 0; i < currentCategory.length; i++) {
    carouselNgos += "<div class='carousel-item";
    if(i === 0) {
      carouselNgos += " active";
    }
    carouselNgos += `'>
                                <div class="card-wrapper">
                                <div class="card">
                                  <img src="assets/images/ngos/${currentCategory[i].image}" class="d-block w-100 img-card" alt="${currentCategory[i].name} Logo" height="200px" width="200px">
                                  <div class="card-body">
                                    <h5 class="card-title">${currentCategory[i].name}</h5>
                                    <p class="card-text">${currentCategory[i].description}</p>
                                    <a href="${currentCategory[i].link}" target="_blank" class="btn btn-primary">Read More About</a>
                                    <a href="${currentCategory[i].donationLink}" target="_blank" class="btn btn-danger">Donate</a>
                                  </div>
                                </div>
                                </div>
                              </div>`;
  }
  carouselNgos += `</div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel${category.replace(" ", "")}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carousel${category.replace(" ", "")}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                      </div>
                    </div>`;                 
}

document.getElementById("carousel-ngos").innerHTML = carouselNgos;

});
