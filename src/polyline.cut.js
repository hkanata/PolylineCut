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
var polylineNonDeleted = [];
(function($) {
    $.fn.polylineCut = function(options) {
        if (this == null) {
            console.error("Erro ao carregar o mapa");return;
        }
        
        if(options.thePolyline==null){
            console.error("Polyline não existe");return;
        }
        var theMap;
        var defaults = {
            drawingControl: false,
            drawingMode: null,
            hideAfterCut: true
        };
        var settings = $.extend({}, defaults, options);
        var init = function() {
            theMap = settings.thePolyline.getMap();

            if (settings.drawingMode == "POLYGON") {
                settings.drawingMode = google.maps.drawing.OverlayType.POLYGON;
            }

            drawingManager = new google.maps.drawing.DrawingManager({
                drawingMode: settings.drawingMode,
                drawingControl: settings.drawingControl,
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
            if (!settings.hideAfterCut)
                allDrawingManager.push(drawingManager);

        };

        var setCompletePolygon = function() {
            google.maps.event.addListener(drawingManager, 'polygoncomplete', function(polygon) {
                polyline.edit(false);
                for (var i = 0; i < polyline.getPath().getArray().length; i++) {
                    if (!google.maps.geometry.poly.containsLocation(polyline.getPath().getArray()[i], polygon)) {
                        polylineNonDeleted.push(new google.maps.LatLng(polyline.getPath().getArray()[i].lat(),
                                polyline.getPath().getArray()[i].lng()));
                    }
                }
                polyline.setMap(null);
                polyline = new google.maps.Polyline({
                    map: theMap,
                    strokeColor: '#ff0000',
                    strokeOpacity: 0.6,
                    strokeWeight: 4,
                    path: polylineNonDeleted
                });
                polyline.setMap(theMap);
                addListeners();
                polyline.edit();
                polylineNonDeleted = [];

                if (settings.hideAfterCut)
                    polygon.setMap(null);
            });
        };

        return this.each(function() {
            init();
            setCompletePolygon();
        });
    };
}(jQuery));