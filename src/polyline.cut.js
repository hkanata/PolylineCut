/**
 * @site www.opba.com.br
 * @name polyline.cut for Google Maps V3 API
 * @version 1.0.0 [April 1, 2015]
 * @author: falecom@opba.com.br
 *   <b>Licence:</b>
 *   Licensed under <a
 *   href="http://opensource.org/licenses/mit-license.php">MIT</a>
 *   license.<br/> 
 */

var allDrawingManager = [];
var drawingManager;

(function($) {

    google.maps.Polyline.prototype.cut = function(obj) {
        var theMap = this.getMap();
        var polyGlob = this;

        var thisDrawingMode = null;
        if (obj.drawingMode == "POLYGON") {
            thisDrawingMode = google.maps.drawing.OverlayType.POLYGON;
        }

        var thisDrawingControlMode = false;
        if (obj.drawingControl) {
            thisDrawingControlMode = true;
        }

        var thishideAfterCut = true;
        if (!obj.hideAfterCut) {
            thishideAfterCut = false;
        }


        drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: thisDrawingMode,
            drawingControl: thisDrawingControlMode,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [
                    google.maps.drawing.OverlayType.POLYGON
                ]
            },
            circleOptions: {
                fillColor: '#ffff00',
                fillOpacity: 1,
                strokeWeight: 5,
                clickable: false,
                editable: true,
                zIndex: 1
            }
        });
        drawingManager.setMap(theMap);

        if (!thishideAfterCut)
            allDrawingManager.push(drawingManager);


        google.maps.event.addListener(drawingManager, 'polygoncomplete', function(polygon) {
            var polylineNonDeleted = [];
            polyGlob.edit(false);
            for (var i = 0; i < polyGlob.getPath().getArray().length; i++) {
                if (!google.maps.geometry.poly.containsLocation(polyGlob.getPath().getArray()[i], polygon)) {
                    polylineNonDeleted.push(new google.maps.LatLng(polyGlob.getPath().getArray()[i].lat(),
                            polyGlob.getPath().getArray()[i].lng()));
                }
            }
            for (var i = 0; i < polyGlob.getPath().getArray().length; i++) {
                polyGlob.getPath().removeAt(i);
            }
            polyGlob.setPath(polylineNonDeleted);
            polyGlob.edit();
            if (thishideAfterCut)
                polygon.setMap(null);
        });

    }
}());