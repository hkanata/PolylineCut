Polyline cut for the Google Maps V3 API
===========================================

This library adds an `cut` method to the `google.maps.Polyline` class. When the polyline is in edit mode it shows up draggable markers for every point. Right clicking an existing marker will remove it. By default you will see transparent "ghost" markers. Click and drag them to add new points to the polyline. 


![Screenshot](https://github.com/hkanata/PolylineCut/blob/master/screenshot.png)


### Examples ###

* [Default example](http://opba.com.br/polylinecut/examples/advanced.html)


### Basic Usage ###

http://maps.google.com/maps/api/js?libraries=geometry,drawing&amp;sensor=false

/src/polyline.edit.js

/src/polyline.cut.js

```javascript

	$( "#map" ).polylineCut(
		{
			hideAfterCut: true,  
			thePolyline: polyline, //Required 
			drawingControl:true, 
			drawingMode:"POLYGON"
		}
	);

```

### Thanks ###

[Origial work](http://www.opba.com.br) is done by [opba](mailto:hkanata@gmail.com).

### License ###

Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).
