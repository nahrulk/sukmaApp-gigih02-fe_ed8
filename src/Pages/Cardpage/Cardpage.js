import React from "react";

const Cardpage = () => {
  return (
    <div>
      <h2 class="text-center">CYBER BULLYING</h2>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Cyber Bullying</h4>
            <h6 class="text-muted card-subtitle mb-2">perundungan Sosial</h6>
            <p>
              <br />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula ipsum sed vehicula congue. Donec tincidunt accumsan
                magna, a efficitur quam imperdiet quis. Donec nisl libero,
                eleifend vitae dui finibus, pulvinar molestie enim. Cras nibh
                justo, molestie sed massa in, laoreet congue quam. Ut et libero
                tincidunt, ultricies nisi vel, vulputate nibh. Integer
                scelerisque pulvinar sem vel eleifend. Nam in tempus tellus.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Mauris sed luctus augue. Nam ut dictum
                elit. Quisque at sapien aliquet, convallis leo at, varius lorem.
                Integer ornare ante id nulla pulvinar cursus. Morbi at laoreet
                ligula
              </span>
              <br />
              <br />
            </p>
            <span class="d-flex justify-content-between">
              <button class="btn btn-primary" type="button">
                Prev
              </button>
              <button class="btn btn-link" type="button">
                Read more.
              </button>
              <button class="btn btn-primary" type="button">
                Next
              </button>
            </span>
          </div>
        </div>
        <span class="d-flex flex-column">
          <button class="btn btn-link" type="button">
            Back
          </button>
        </span>
      </div>
    </div>
  );
};

export default Cardpage;
