// $(document).ready(function () {
//   $("#profile__ripple").ripples({
//     resolution: 512,
//     dropRadius: 10,
//   });
// });

$(document).ready(function () {
  $("#profile__ripple").ripples({
    imageUrl: "path/to/your/image.jpg",
    resolution: 556,
    dropRadius: 10,
    perturbance: 0.03,
    interactive: true,
    crossOrigin: "",
  });

  const bars = document.querySelectorAll(".progress__bar");

  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    // console.log(percentage);
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
  });
});
