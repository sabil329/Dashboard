document.addEventListener("DOMContentLoaded", function () {
  showChurn(); // grafik awal
});

function showChurn() {
  Plotly.newPlot(
    "mainChart",
    [
      {
        x: ["No", "Yes"],
        y: [5174, 1869],
        type: "bar",
        text: [5174, 1869],
        textposition: "auto",
      },
    ],
    {
      title: "Distribusi Customer Churn",
    },
  );
}

function showContract() {
  Plotly.newPlot(
    "mainChart",
    [
      { x: ["Month-to-month", "One year", "Two year"], y: [1655, 166, 48], name: "Yes", type: "bar" },
      { x: ["Month-to-month", "One year", "Two year"], y: [2220, 1300, 1154], name: "No", type: "bar" },
    ],
    {
      title: "Churn Berdasarkan Kontrak",
      barmode: "group",
    },
  );
}

function showMonthly() {
  Plotly.newPlot(
    "mainChart",
    [
      {
        x: ["No", "Yes"],
        y: [61.3, 74.4],
        type: "bar",
        text: ["$61.3", "$74.4"],
        textposition: "auto",
      },
    ],
    {
      title: "Average Monthly Charges",
    },
  );
}

function showInternet() {
  Plotly.newPlot(
    "mainChart",
    [
      { x: ["DSL", "Fiber optic", "No"], y: [459, 1297, 113], name: "Yes", type: "bar" },
      { x: ["DSL", "Fiber optic", "No"], y: [1962, 1799, 1413], name: "No", type: "bar" },
    ],
    {
      title: "Churn vs Internet Service",
      barmode: "group",
    },
  );
}
chart.innerHTML = "Menampilkan grafik: " + type;
