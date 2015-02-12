//var host = "https://maps.google.com";
var host = "https://www.google.com/maps/";


function generateRandomPoint(center, radius) {
  var x0 = center.lng;
  var y0 = center.lat;
  // Convert Radius from meters to degrees.
  var rd = radius/111300;

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x/Math.cos(y0);

  // Resulting point.
  return {'lat': y+y0, 'lng': xp+x0};
}


var returnRandomLocation = function(details) {

  var geo = generateRandomPoint({lng:0,lat:0}, 2*6378100);
  var strll = "@" + geo.lat + "," + geo.lng + ",7z";

  return {
           redirectUrl: host + strll
         };
};



chrome.webRequest.onBeforeRequest.addListener(

  returnRandomLocation,
    {
        urls: [
            "*://maps.google.com/",
            "*://www.google.com/maps/"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);