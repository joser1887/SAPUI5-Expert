sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {
        'use strict';
        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                manifest : "json"
            },

            init: function () {
                //Call the Init Fucion of parent
                UIComponent.prototype.init.apply(this, arguments);

                //Set DAta Model on the view
                this.setModel(Models.createRecipient());

                //Set I18N on the View
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });
    });