sap.ui.define([
		"AgentPortal_Testing/AgentPortal_Testing/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("AgentPortal_Testing.AgentPortal_Testing.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);