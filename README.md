Polyline cut for the Google Maps V3 API
===========================================

This library adds an `cut` method to the `google.maps.Polyline` class. When the polyline is in edit mode it shows up draggable markers for every point. Right clicking an existing marker will remove it. By default you will see transparent "ghost" markers. Click and drag them to add new points to the polyline. 


![Screenshot](https://github.com/hkanata/PolylineCut/google.maps.polyline.edit/raw/master/screenshot.png)


### Examples ###

* <script type="text/javascript" src="http://maps.google.com/maps/api/js?libraries=geometry,drawing&amp;sensor=false"></script>
* <script type="text/javascript" src="../src/polyline.edit.js"></script>
* <script type="text/javascript" src="../src/polyline.cut.js"></script>

* [Default example](http://opba.com.br/polylinecut/examples/default.html)


### Basic Usage ###

<<<<<<< HEAD
=======
http://maps.google.com/maps/api/js?libraries=geometry,drawing&amp;sensor=false

/src/polyline.edit.js

/src/polyline.cut.js

```javascript
>>>>>>> origin/master


```javascript
	var polyline = new google.maps.Polyline({THE_PARAMETERS_OF_POLYLINE});
	polyline.cut({hideAfterCut: true, drawingControl: false, drawingMode:"POLYGON"});

```

### Thanks ###

[Origial work](http://www.opba.com.br) is done by [opba](mailto:hkanata@gmail.com).

### License ###

Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).
