// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * 
     */
    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("logaligroup.SAPUI5.controler.App", {
            onInit: function () {
                
            },
            onShowHello: function () {
                //REad Text from i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });