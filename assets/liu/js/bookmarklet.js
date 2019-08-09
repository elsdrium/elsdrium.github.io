javascript:
(function load() {
  var host = "https://elsdrium.github.io/assets";
  var s1 = document.createElement("script");
  var c1 = document.createElement("link");
  s1.setAttribute("src", host + "/liu/js/cliu-loader.min.js");
  c1.setAttribute("href", host + "/liu/css/cloud-liu.css");
  c1.setAttribute("rel", "stylesheet");
  document.body.appendChild(s1);
  document.head.appendChild(c1);
})();
