sap.ui.controller("smax.prod.controller.Master", {

	onItemSelection :function(oEvent){
		var productID = oEvent.getSource().getTitle();
		
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.navTo("toDetail", {prodID : productID});
		
	},
	onSearch : function(oControlEvent){
		
		var search = oControlEvent.getParameters().query;
		
		var filterCollection = [];
		// filter option - where query contains PRODUCTID...
		
		var filter1 = new sap.ui.model.Filter("ProductID", sap.ui.model.FilterOperator.Contains, search);
		
		filterCollection.push(filter1);
		
		this.getView().byId("idList").getBinding("items").filter(filterCollection);
		
	}
});