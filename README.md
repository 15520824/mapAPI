# mapAPI
#code

```js
var result = [];
for(var i = 0;i<100;i++)
{
    var ramdomLat = Math.random()*16+8;
    var ramdomLong = Math.random()*8+102;
    result.push({lat:ramdomLat,lng:ramdomLong,color:getRandomColor(),tooltip:{style:{},element:{}},data:[(Math.floor(Math.random() * Math.floor(2))+1)]})
}
var mapView = MapView();
mapView.style.height = "calc(100% - 30px)";
// mapView.addMapDataHouse(result);

mapView.addMapHouse(result);

var filter = absol.buildDom({
    tag:"selectmenu",
    props:{
        items:[
            {text:"Có",value:2},
            {text:"Không",value:1},
            {text:"Tất cả",value:0},
        ]
    }
});

document.body.appendChild(filter);
mapView.addFilter(filter,0);
document.body.appendChild(mapView);
```
