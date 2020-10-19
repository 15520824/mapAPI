function HashTableFilter(data = []) {

    this.hash = [];
    this.data = data;
    this.check = [];
    this.functionSetHash(data);
    this.indexCount = [];
    this.lastIndex = [];
    this.lastKey = [];
    this.lastIndexFilter = [];
    return this;
}

HashTableFilter.prototype.functionSetHash = function(data, dataParent = "") {
    var hash = this.hash;
    var value;
    var object;
    for (var m = 0; m < data.length; m++) {
        object = data[m].data.data;
        var stringCheck = m + dataParent;
        if (this.check[stringCheck] == undefined) {
            this.check[stringCheck] = [];
            this.check[stringCheck].data = data[m];
        }
        for (var i = 0; i < object.length; i++) {
            if (object[i].value !== undefined)
                value = object[i].value;
            else if (typeof object[i] !== "object")
                value = object[i];
            else
                value = "";
            if (Array.isArray(value)) {
                for (var j = 0; j < value.length; j++) {
                    if (hash[i] === undefined)
                        hash[i] = [];
                    if (hash[i][value[j]] === undefined)
                        hash[i][value[j]] = [];
                    hash[i][value[j]].push(stringCheck);
                }
            } else {
                if (hash[i] === undefined)
                    hash[i] = [];
                if (hash[i][value] === undefined)
                    hash[i][value] = [];
                hash[i][value].push(stringCheck);
            }


            if (data[m].child !== undefined) {
                this.functionSetHash(data[m].child, "_" + m + dataParent);
            }
        }

    }
}

HashTableFilter.prototype.getKey = function(key, index) {
    var hash = this.hash;

    this.lastKey[index] = key;
    if (key == 0) {
        if (this.lastIndex[index] !== undefined)
            for (var i = 0; i < this.lastIndex[index].length; i++)
                this.lastIndex[index][i][index] = undefined;
        delete this.indexCount[index];
        var countAll = this.indexCount.reduce((a, b) => a + b, 0);
        if (countAll > 0) {
            for (var tempx in this.indexCount) {
                index = parseInt(tempx);
                key = this.lastKey[index];
                break;
            }
        } else {
            this.lastIndexFilter = [];
            for (var i = 0; i < this.data.length; i++) {
                this.data[i].isFilter = undefined;
                this.lastIndexFilter.push({ data: this.data[i] })
            }
            this.data.isFilter = undefined;
            return;
        }

    }

    this.indexCount[index] = 1;
    this.data.isFilter = true

    var countAll = this.indexCount.reduce((a, b) => a + b, 0);
    if (this.lastIndex[index] !== undefined)
        for (var i = 0; i < this.lastIndex[index].length; i++)
            this.lastIndex[index][i][index] = undefined;
    this.lastIndex[index] = [];

    for (var i = 0; i < this.lastIndexFilter.length; i++) {
        this.lastIndexFilter[i].data.isFilter = undefined;
    }
    this.lastIndexFilter = [];
    if (hash[index][key] !== undefined)
        for (var i = 0; i < hash[index][key].length; i++) {
            var checkRow = this.check[hash[index][key][i]];

            checkRow[index] = true;
            this.lastIndex[index].push(checkRow);
            var countIn = 0
            for (var param in checkRow) {
                if (checkRow[param] === true) {
                    countIn++;
                }
            }
            if (countIn == countAll) {
                this.lastIndexFilter.push(checkRow);
                checkRow.data.isFilter = true;
            } else {
                checkRow.data.isFilter = undefined;
            }
        }
}

window.MapView = MapView;

function MapView(input, lat = 10, lng = 106) {
    var maps = absol._({
        class: "card-edit-company-block-maps-child"
    });
    var map = new google.maps.Map(maps, { zoom: 12, center: new google.maps.LatLng(lat, lng) });
    Object.assign(maps, MapView.prototype);
    maps.map = map;
    maps.draggable = true;
    maps.input = input;
    maps.delay = 10;
    maps.numDeltas = 50;
    maps.stopFunction = false;
    return maps;
};

MapView.prototype.setColorIconMarker = function(color) {
    var image = {
        path: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
        // This marker is 20 pixels wide by 32 pixels high.
        scaledSize: new google.maps.Size(24, 24),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(12, 12),
        fillColor: color,
        fillOpacity: 1,
        strokeColor: "white",
        strokeWeight: 4
    };
    this.currentMarker.setIcon(image);
};

MapView.prototype.addMoveMarker = function(position, color) {
    var self = this;
    this.stopFunction = true;
    if (color === undefined)
        if (typeof systemconfig != 'undefined')
            color = systemconfig.markerColor;
    setTimeout(function() {
        var marker;
        self.stopFunction = false;
        if (self.currentMarker !== undefined) {
            marker = self.currentMarker;
            self.transition(position).then(function(value) {
                self.map.setCenter(new google.maps.LatLng(position[0], position[1]));
                self.smoothZoom(20, self.map.getZoom());
            })
        } else {
            var image = {
                path: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
                // This marker is 20 pixels wide by 32 pixels high.
                scaledSize: new google.maps.Size(24, 24),
                // The origin for this image is (0, 0).
                origin: new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at (0, 32).
                anchor: new google.maps.Point(12, 12),
                fillColor: color,
                fillOpacity: 1,
                strokeColor: "white",
                strokeWeight: 4
            };
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(position[0], position[1]),
                map: self.map,
                draggable: self.draggable,
                icon: image,
                title: "Latitude:" + position[0] + " | Longtitude:" + position[1],
                zIndex: 2
            });
            self.currentMarker = marker;
            self.map.setCenter(new google.maps.LatLng(position[0], position[1]));

            self.smoothZoom(20, self.map.getZoom());

            marker.addListener("dragend", function(event) {
                var result = [event.latLng.lat(), event.latLng.lng()];
                self.map.setCenter(new google.maps.LatLng(result[0], result[1]));
                self.smoothZoom(20, self.map.getZoom());
                if (self.input)
                    self.input.value = result[0] + "," + result[1];
            });
        }
    }, 60)
};

MapView.prototype.transition = function(result) {
    var self = this;
    var position = [this.currentMarker.getPosition().lat(), this.currentMarker.getPosition().lng()];

    var deltaLat = (result[0] - position[0]) / this.numDeltas;
    var deltaLng = (result[1] - position[1]) / this.numDeltas;
    return this.moveMarker(position, deltaLat, deltaLng);
}

MapView.prototype.moveMarker = function(position, deltaLat, deltaLng, i = 0) {
    var self = this;
    return new Promise(function(resolve, reject) {
        position[0] += deltaLat;
        position[1] += deltaLng;
        var latlng = new google.maps.LatLng(position[0], position[1]);
        self.currentMarker.setTitle("Latitude:" + position[0] + " | Longtitude:" + position[1]);
        self.currentMarker.setPosition(latlng);
        if (i != self.numDeltas - 1) {
            i++;
            setTimeout(function() {
                if (self.stopFunction === true) {
                    resolve();
                    return;
                }

                resolve(self.moveMarker(position, deltaLat, deltaLng, i));
            }, self.delay);
        } else
            resolve();
    })
};

MapView.prototype.getLongLat = function(text) {
    return new Promise(function(resolve, reject) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': text }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                resolve([results[0].geometry.location.lat(), results[0].geometry.location.lng()]);
            } else {
                reject();
            }
        });
    })
}

MapView.prototype.smoothZoom = function(max, cnt) {
    var self = this;
    if (cnt >= max) {
        return;
    } else {
        var z = google.maps.event.addListener(this.map, 'zoom_changed', function(event) {
            google.maps.event.removeListener(z);
            self.smoothZoom(this.map, max, cnt + 1);
        });
        setTimeout(function() {
            if (self.stopFunction === true)
                return;
            if (cnt !== undefined)
                self.map.setZoom(cnt)
        }, 50); // 80ms is what I found to work well on my system -- it might not work well on all systems
    }
};


MapView.prototype.addMapHouse = function(data) {
    var self = this;
    if (data !== undefined)
        this.dataHouse = data;
    if (this.dataHouse == undefined)
        this.dataHouse = [];
    var arrayTemp = [];
    var value = this.dataHouse;
    var now = new Date();
    for (var i = 0; i < value.length; i++) {
        value[i].getPosition = function(marker) {
            return function() {
                return {
                    lat: function() {
                        return parseFloat(marker.lat);
                    },
                    lng: function() {
                        return parseFloat(marker.lng);
                    }
                }
            }
        }(value[i])
        arrayTemp.push(value[i]);
    }
    console.log(arrayTemp);
    if (self.markerCluster !== undefined) {
        self.markerCluster.setMap(null);
        delete self.markerCluster;
    }
    self.markerCluster = new MarkerClusterer(self.map, arrayTemp, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

    self.arrayMarker = self.markerCluster.getMarkers();
    // if (value.caculateSum !== undefined)
    //     self.arrayMarker.caculateSum = value.caculateSum;
}

MapView.prototype.addFilter = function(input, index, functionChange) {
    var self = this;
    // console.log(self.arrayMarker)
    self.hashTableFilter = new HashTableFilter(self.arrayMarker);
    var functionFilter;
    if (functionChange === undefined) {
        functionFilter = function(event) {
            self.checkTableViewFilter(input.value, index);
        }
    } else {
        functionFilter = functionChange
    }
    input.on("change", functionFilter)
    if (self.inputFilter === undefined)
        self.inputFilter = [];
    self.inputFilter.push([input, index]);
}

MapView.prototype.checkTableViewFilter = function(value, index) {
    var self = this;
    self.hashTableFilter.getKey(value, index);
    google.maps.event.trigger(self.map, 'zoom_changed');
}


MapView.prototype.checkMapHouse = function(operator) {
    return new Promise(function(resolve, reject) {
        if (this.worker !== undefined) {
            this.worker.postMessage("cancel");
            this.worker.terminate();
        }
        this.worker = new Worker(URL.createObjectURL(new Blob(["(" + worker_function.toString() + ")()"], { type: 'text/javascript' })));
        this.worker.postMessage({ array: this.dataHouse, operator })
        this.worker.onmessage = e => {
            resolve(e.data);
        }
    }.bind(this))
}

MapView.prototype.addMapDataHouse = function(data) {
    this.dataHouse = data;
}

MapView.prototype.addRenderToMap = function() {
    if (this.directionsDisplay === undefined) {
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsDisplay.setMap(this.map);
    }
    if (this.directionsService === undefined)
        this.directionsService = new google.maps.DirectionsService();
}

MapView.prototype.calculateAndDisplayRoute = function(waypoints = []) {
    this.addRenderToMap();
    var waypointData = [];
    var directionsDisplay = this.directionsDisplay;
    var directionsService = this.directionsService;
    var start;
    var end;
    if (typeof waypoints == "string")
        waypoints = waypoints.split(";")
    for (var i = 0; i < waypoints.length; i++) {
        if (i == 0) {
            start = waypoints[i];
            continue;
        }
        if (i == waypoints.length - 1) {
            end = waypoints[i];
            continue;
        }
        waypointData.push({ location: waypoints[i], stopover: false })
    }
    var request = {
        origin: start,
        destination: end,
        waypoints: waypointData,
        optimizeWaypoints: true,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            // var route = response.routes[0];
            // var summaryPanel = "";
            // // For each route, display summary information.
            // for (var i = 0; i < route.legs.length; i++) {
            //     var routeSegment = i + 1;
            //     summaryPanel += "<b>Route Segment: " + routeSegment + "</b><br />";
            //     summaryPanel += route.legs[i].start_address + " to ";
            //     summaryPanel += route.legs[i].end_address + "<br />";
            //     summaryPanel += route.legs[i].distance.text + "<br /><br />";
            // }
            // console.log(summaryPanel)
        } else {
            alert("Yêu cầu chỉ đường không thành công do " + status);
        }
    });
}


function worker_function() {
    this.onmessage = e => {
        var data = e.data;
        if (data == "cancel") {
            this.stop = true;
            return;
        }
        var result = [];
        for (var i = 0; i < data.array.length; i++) {
            if (this.stop == true)
                return;
            if (generalOperator(data.array[i], data.operator)) {
                result.push(data.array[i]);
            }
        }
        this.postMessage(result)
    }

    function generalOperator(data, WHERE) {
        var stringResult = operator(data, WHERE);
        return eval(stringResult);
    }

    function operator(data, WHERE) {
        var stringResult = "(";
        for (var i = 0; i < WHERE.length; i++) {
            stringResult += equal(data, WHERE[i]);
        }
        return stringResult + ")";
    }

    function equal(data, WHERE) {
        var stringResult = "";
        if (typeof WHERE === "string") {
            return WHERE;
        } else
        if (typeof WHERE === "object") {
            if (Array.isArray(WHERE)) {
                stringResult += operator(data, WHERE);
            } else {
                for (var param in WHERE) {
                    if (typeof WHERE[param] === "object") {
                        if (eval(data[param] + WHERE[param].operator + WHERE[param].value))
                            stringResult += true;
                        else
                            stringResult += false;
                    } else {
                        if (data[param] === WHERE[param])
                            stringResult += true;
                        else
                            stringResult += false;
                    }
                }
            }
        }
        return stringResult;
    }
}