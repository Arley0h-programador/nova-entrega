const colors = [
  "#000080", "#FFFAFA", "#E9FFDB", "#CC7722", "#808000", "#556B2F", "#6B8E23", 
  "#DA70D6", "#9932CC", "#BA55D3", "#FFD700", "#CD853F", "#CC6600", "#C0C0C0", 
  "#000000", "#FFDAB9", "#800080", "#9370DB", "#111111", "#51484F", "#B5818B", 
  "#FDF5E6", "#FFCBDB", "#CD69CD", "#FFB7CE", "#FF007F", "#FC0FC0", "#FFB6C1", 
  "#DA69A1", "#FFE4E1", "#FF69B4", "#FF1493", "#B5818B", "#FFCBDB", "#FFCBDB", 
  "#993399", "#8A008A", "#FF0000", "#6D351A", "#FA7F72", "#FFA07A", "#E9967A", 
  "#9D5450", "#705714", "#FF8247", "#F28500", "#E2725B", "#B22222", "#FF6347", 
  "#F5DEB3", "#FF2401", "#40E0D0", "#00CED1", "#48D1CC", "#AFEEEE", "#8878C3", 
  "#EC2300", "#421C52", "#008000", "#00FF00", "#18FFDD", "#90EE90", "#006400", 
  "#228B22", "#CCFF33", "#32CD32", "#7CFC00", "#20B2AA", "#8FBC8F", "#3CB371", 
  "#78866B", "#6B8E23", "#7FFF00", "#00FF7F", "#00FA9A", "#98FB98", "#008080", 
  "#7DFDC0", "#FF0000", "#550000", "#8B0000", "#CD5C5C", "#BE0040", "#D02090", 
  "#C71585", "#DB7093", "#EE82EE", "#9400D3", "#F8CBF8", "#738678", "#0014A8" 
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
