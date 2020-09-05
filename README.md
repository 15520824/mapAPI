# mapAPI
#code

var result = [];
for(var i = 0;i<10000;i++)
{

    var ramdomLat = Math.random()*16+8;
    
    var ramdomLong = Math.random()*8+102;
    
    result.push({lat:ramdomLat,lng:ramdomLong})
}

var mapView = MapView();

mapView.style.height = "100%";

mapView.addMapDataHouse(result);

mapView.addMapHouse();
