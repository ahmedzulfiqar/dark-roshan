import React from "react";

function Reviewcard({ data }) {
  return (
    <div class="card overflow-visible bg-primarys border-0 mt-md-5 mt-5 rounded-2">
      <div class="row g-0 ">
        <div class="col-md-3 p-0 ">
          <img
            src={data.img}
            class="img-fluid w-100 mt-auto rounded-start d-md-block d-none"
            alt="..."
          />{" "}
          <img
            src={data.img}
            class="img-fluid w-25 imgde mx-auto rounded-circle  d-md-none d-block"
            alt="..."
          />
        </div>
        <div class="col-md-8  px-lg-3 px-0 mt-lg-0 mt-5 text-start align-self-center">
          <div class="card-body ms-lg-3">
            <h5 class="card-title text-light display-6 mb-2 fw-bold">
              {data.name}
            </h5>
            <h5 class="card-title text-main mb-md-4 mb-3">
              {" "}
              {data.profession}
            </h5>
            <p class="card-text text-light d-md-block d-none opacity-75">
              {data.text}
            </p>
            <p class="card-text text-light opacity-75 d-md-none d-block small">
              {data.text}
            </p>
            <p class="card-text text-start ">
              <ul class="list-unstyled d-flex justify-content-start">
                <li>
                  <i class="fas fa-star fa-sm text-main me-1"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-main me-1"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-main me-1"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-main me-1"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-main"></i>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviewcard;
