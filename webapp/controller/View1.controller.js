	var oView
sap.ui.define([ 
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.cam.camera.controller.View1", {
		onInit: function () {
	 oView = this.getView();
		},
		onCapture: function() {
		
        navigator.camera.getPicture(this.onSuccess, this.onFail, {
            quality: 75,
            targetWidth: 300,
            targetHeight: 300,
            sourceType: navigator.camera.PictureSourceType.CAMERA,
            destinationType: navigator.camera.DestinationType.FILE_URI
        });
    },
    onSelect: function() {
    	
        navigator.camera.getPicture(this.onSuccess, this.onFail, {
            quality: 75,
            targetWidth: 300,
            targetHeight: 300,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: navigator.camera.DestinationType.FILE_URI
        });
    },
    onSuccess: function(imageData) {
    	 alert(imageData);
        var imageId = oView.byId("myImage");
        imageId.setSrc(imageData);
       

    },
    onFail: function(message) {
        alert("Failed because: " + message);
    }

	});
});