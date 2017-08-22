sap.ui.controller("smax.prod.controller.DetailView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.DetailView
*/
	onInit: function() {
         
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.getRoute("toDetail").attachPatternMatched(function(oEvent){
		//	debugger;
			var productID = oEvent.getParameters().arguments.prodID;
			
			this.getView().bindElement("/ProductSet('"+productID+"')");
			
		},this);
	},



});