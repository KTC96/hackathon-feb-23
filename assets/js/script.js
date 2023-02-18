document.addEventListener("DOMContentLoaded", function() {

let ngosCategory = document.getElementById("ngos-category");

ngosCategory.innerHTML = `<div class='carousel-item active'>
                            <div class="card-wrapper">
                            <div class="card" style="width: 18rem;">
                              <img src="assets/images/ngos/${category[0].image}" class="d-block w-100" alt="${category[0].name} Logo" height="200px" width="200px">
                              <div class="card-body">
                                <h5 class="card-title">${category[0].name}</h5>
                                <p class="card-text">${category[0].description}</p>
                                <a href="${category[0].link}" target="_blank" class="btn btn-primary">Read More About</a>
                                <a href="${category[0].donationLink}" target="_blank" class="btn btn-danger">Donate</a>
                              </div>
                            </div>
                            </div>
                          </div>`;

for (let i = 1; i < category.length; i++) {
  ngosCategory.innerHTML += `<div class='carousel-item'>
                              <div class="card-wrapper">
                              <div class="card" style="width: 18rem;">
                                <img src="assets/images/ngos/${category[i].image}" class="d-block w-100" alt="${category[i].name} Logo" height="200px" width="200px">
                                <div class="card-body">
                                  <h5 class="card-title">${category[i].name}</h5>
                                  <p class="card-text">${category[i].description}</p>
                                  <a href="${category[i].link}" target="_blank" class="btn btn-primary">Read More About</a>
                                  <a href="${category[i].donationLink}" target="_blank" class="btn btn-danger">Donate</a>
                                </div>
                              </div>
                              </div>
                            </div>`;
}
});
