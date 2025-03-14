sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, MessageBox, MessageToast, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("com.tableentry.tablestructure.controller.Table_Entry", {
        onInit: function () {
            var oData = {
                items: [
                    { requestId: "RM00000001", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Send Back", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Send Back" },
                    { requestId: "RM00000001", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Send Back", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Send Back" },
                    { requestId: "RM00000001", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Send Back", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Send Back" },
                    { requestId: "RM00000001", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Send Back", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Send Back" },
                    { requestId: "RM00000001", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Send Back", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Send Back" },
                    { requestId: "RM00000002", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000002", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000002", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000002", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000002", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000002", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH1@pdilite.coPH1@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000003", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Rejected", pendingWith: "PH1@pdilite.com", requestAging: "Rejected" },
                    { requestId: "RM00000003", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Rejected", pendingWith: "PH1@pdilite.com", requestAging: "Rejected" },
                    { requestId: "RM00000003", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Rejected", pendingWith: "PH1@pdilite.com", requestAging: "Rejected" },
                    { requestId: "RM00000003", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Rejected", pendingWith: "PH1@pdilite.com", requestAging: "Rejected" },
                    { requestId: "RM00000003", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Rejected", pendingWith: "PH1@pdilite.com", requestAging: "Rejected" },
                    { requestId: "RM00000003", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Rejected", pendingWith: "PH1@pdilite.com", requestAging: "Rejected" },
                    { requestId: "RM00000004", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH2@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000004", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH2@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000004", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH2@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000004", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH2@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000004", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH2@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000004", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH2@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000004", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH2@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000004", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH2@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000004", createdBy: "Buyer", createdOn: "Feb 02, 2025", purchaseOrg: "1000", status: "Pending Request", pendingWith: "PH2@pdilite.com", requestAging: "Pending Request" },
                    { requestId: "RM00000005", createdBy: "Buyer", createdOn: "Feb 03, 2025", purchaseOrg: "1000", status: "Approved", pendingWith: "PH3@pdilite.com", requestAging: "Approved" },
                    { requestId: "RM00000005", createdBy: "Buyer", createdOn: "Feb 03, 2025", purchaseOrg: "1000", status: "Approved", pendingWith: "PH3@pdilite.com", requestAging: "Approved" },
                    { requestId: "RM00000005", createdBy: "Buyer", createdOn: "Feb 03, 2025", purchaseOrg: "1000", status: "Approved", pendingWith: "PH3@pdilite.com", requestAging: "Approved" },
                    { requestId: "RM00000005", createdBy: "Buyer", createdOn: "Feb 03, 2025", purchaseOrg: "1000", status: "Approved", pendingWith: "PH3@pdilite.com", requestAging: "Approved" },
                    { requestId: "RM00000005", createdBy: "Buyer", createdOn: "Feb 03, 2025", purchaseOrg: "1000", status: "Approved", pendingWith: "PH3@pdilite.com", requestAging: "Approved" },
                    { requestId: "RM00000005", createdBy: "Buyer", createdOn: "Feb 03, 2025", purchaseOrg: "1000", status: "Approved", pendingWith: "PH3@pdilite.com", requestAging: "Approved" },
                    { requestId: "RM00000005", createdBy: "Buyer", createdOn: "Feb 03, 2025", purchaseOrg: "1000", status: "Approved", pendingWith: "PH3@pdilite.com", requestAging: "Approved" },
                    { requestId: "RM00000005", createdBy: "Buyer", createdOn: "Feb 03, 2025", purchaseOrg: "1000", status: "Approved", pendingWith: "PH3@pdilite.com", requestAging: "Approved" }
                ],
                draftCount: 0,
                sentBackCount: 0,
                rejectedCount: 0,
                inProgressCount: 0,
                allCount: 0
            };

            this._updateTileCounts(oData);
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "products");
        },

        _updateTileCounts: function (oData) {
            var aItems = oData.items;
            oData.draftCount = aItems.filter(item => item.status === "Draft").length;
            oData.sentBackCount = aItems.filter(item => item.status === "Send Back").length;
            oData.rejectedCount = aItems.filter(item => item.status === "Rejected").length;
            oData.inProgressCount = aItems.filter(item => item.status === "Pending Request").length;
            oData.allCount = aItems.length;
        },

        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("query");
            var oTable = this.byId("productsTable");
            var oBinding = oTable.getBinding("items");
            var aFilters = [];

            if (sQuery) {
                aFilters.push(new Filter("requestId", FilterOperator.Contains, sQuery));
            }

            oBinding.filter(aFilters);
        },

        onStatusChange: function (oEvent) {
            var sKey = oEvent.getParameter("selectedItem").getKey();
            var oTable = this.byId("productsTable");
            var oBinding = oTable.getBinding("items");
            var aFilters = [];

            if (sKey !== "All") {
                aFilters.push(new Filter("status", FilterOperator.EQ, sKey));
            }

            oBinding.filter(aFilters);
        },

        onTilePress: function (oEvent) {
            var oTile = oEvent.getSource();
            var sTileId = oTile.getId();
            var oTable = this.byId("productsTable");
            var oBinding = oTable.getBinding("items");
            var aFilters = [];

            if (sTileId.includes("draftTile")) {
                aFilters.push(new Filter("status", FilterOperator.EQ, "Draft"));
            } else if (sTileId.includes("sentBackTile")) {
                aFilters.push(new Filter("status", FilterOperator.EQ, "Send Back"));
            } else if (sTileId.includes("rejectedTile")) {
                aFilters.push(new Filter("status", FilterOperator.EQ, "Rejected"));
            } else if (sTileId.includes("inProgressTile")) {
                aFilters.push(new Filter("status", FilterOperator.EQ, "Pending Request"));
            } else if (sTileId.includes("allTile")) {
                oBinding.filter([]);
                return;
            }

            oBinding.filter(aFilters);
        },

        onClearPress: function () {
            this.byId("searchField").setValue("");
            this.byId("materialInput").setValue("");
            this.byId("vendorInput").setValue("");
            this.byId("statusComboBox").setSelectedKey("All");
            var oTable = this.byId("productsTable");
            var oBinding = oTable.getBinding("items");
            oBinding.filter([]);
        },

        onDownloadPress: function () {
            try {
                var oModel = this.getView().getModel("products");
                var aData = oModel.getProperty("/items");

                if (!aData || aData.length === 0) {
                    MessageBox.warning("No data available to download.");
                    return;
                }

                var sJsonData = JSON.stringify(aData, null, 2);
                var oBlob = new Blob([sJsonData], { type: "application/json" });
                var sUrl = URL.createObjectURL(oBlob);
                var oLink = document.createElement("a");

                oLink.href = sUrl;
                oLink.download = "source_list_data_" + new Date().toISOString().slice(0, 10) + ".json";
                document.body.appendChild(oLink);
                oLink.click();
                document.body.removeChild(oLink);
                URL.revokeObjectURL(sUrl);

                MessageToast.show("Download completed successfully!");
            } catch (error) {
                MessageBox.error("Download failed: " + error.message);
                console.error(error);
            }
        },

        onUploadPress: function () {
            var oFileUploader = this.byId("fileUploader");
            if (!oFileUploader) {
                oFileUploader = new sap.ui.unified.FileUploader({
                    id: this.createId("fileUploader"),
                    uploadComplete: this.onFileChange.bind(this),
                    change: this.onFileChange.bind(this)
                });
                this.getView().addDependent(oFileUploader);
            }
            oFileUploader.clear();
            oFileUploader.$().find("input[type=file]").click();
        },

        onFileChange: function (oEvent) {
            var oFileUploader = oEvent.getSource();
            var oFile = oEvent.getParameter("files") && oEvent.getParameter("files")[0];

            if (!oFile) {
                MessageBox.error("No file selected.");
                return;
            }

            if (oFile.type !== "application/json") {
                MessageBox.error("Please upload a JSON file.");
                oFileUploader.clear();
                return;
            }

            var oReader = new FileReader();
            oReader.onload = function (e) {
                try {
                    var sResult = e.target.result;
                    var oNewData = JSON.parse(sResult);

                    if (!Array.isArray(oNewData) || !oNewData.every(item =>
                        item.requestId && item.createdBy && item.createdOn && item.purchaseOrg && item.status && item.pendingWith && item.requestAging)) {
                        MessageBox.error("Invalid JSON format. Must contain array of objects with requestId, createdBy, createdOn, purchaseOrg, status, pendingWith, and requestAging.");
                        return;
                    }

                    var oModel = this.getView().getModel("products");
                    oModel.setProperty("/items", oNewData);
                    this._updateTileCounts(oModel.getData());
                    oModel.refresh();
                    MessageToast.show("Upload successful! " + oNewData.length + " items loaded.");

                    oFileUploader.clear();
                } catch (error) {
                    MessageBox.error("Upload failed: " + error.message);
                    console.error(error);
                }
            }.bind(this);

            oReader.onerror = function () {
                MessageBox.error("Error reading file.");
            };

            oReader.readAsText(oFile);
        },

        onTableSelectionChange: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("listItem");
            if (oSelectedItem) {
                var oContext = oSelectedItem.getBindingContext("products");
                var oData = oContext.getObject();
                var oDetailLayout = this.byId("detailLayout");

                oDetailLayout.removeAllContent();
                oDetailLayout.addContent(new sap.m.Text({ text: "Request ID: " + oData.requestId }));
                oDetailLayout.addContent(new sap.m.Text({ text: "Created By: " + oData.createdBy }));
                oDetailLayout.addContent(new sap.m.Text({ text: "Created On: " + oData.createdOn }));
                oDetailLayout.addContent(new sap.m.Text({ text: "Purchase Org: " + oData.purchaseOrg }));
                oDetailLayout.addContent(new sap.m.Text({ text: "Status: " + oData.status }));
                oDetailLayout.addContent(new sap.m.Text({ text: "Pending With: " + oData.pendingWith }));
                oDetailLayout.addContent(new sap.m.Text({ text: "Request Aging: " + oData.requestAging }));

                this.byId("flexibleColumnLayout").setLayout("TwoColumnsMidExpanded");
                this.byId("fullScreenButton").setVisible(false);
                this.byId("exitFullScreenButton").setVisible(true);
            }
        },

        onFullScreenPress: function () {
            this.byId("flexibleColumnLayout").setLayout("TwoColumnsMidExpanded");
            this.byId("fullScreenButton").setVisible(false);
            this.byId("exitFullScreenButton").setVisible(true);
        },

        onExitFullScreenPress: function () {
            this.byId("flexibleColumnLayout").setLayout("OneColumn");
            this.byId("fullScreenButton").setVisible(true);
            this.byId("exitFullScreenButton").setVisible(false);
        },

        onEditPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oItem = oButton.getParent().getParent();
            var aCells = oItem.getCells();
            var oModel = this.getView().getModel("products");
            var oData = oItem.getBindingContext("products").getObject();
            var iIndex = oItem.getParent().indexOfItem(oItem);

            if (oButton.getIcon() === "sap-icon://edit") {
                oButton.setIcon("sap-icon://save");
                for (var i = 0; i < 6; i++) {
                    var oText = aCells[i];
                    if (oText instanceof sap.m.Text) {
                        var oInput = new sap.m.Input({ value: oText.getText() });
                        oItem.removeCell(oText);
                        oItem.insertCell(oInput, i);
                    }
                }
            } else {
                oButton.setIcon("sap-icon://edit");
                for (var i = 0; i < 6; i++) {
                    var oInput = aCells[i];
                    if (oInput instanceof sap.m.Input) {
                        var sValue = oInput.getValue();
                        var oText = new sap.m.Text({ text: sValue });
                        oItem.removeCell(oInput);
                        oItem.insertCell(oText, i);
                        switch (i) {
                            case 0: oData.requestId = sValue; break;
                            case 1: oData.createdBy = sValue; break;
                            case 2: oData.createdOn = sValue; break;
                            case 3: oData.purchaseOrg = sValue; break;
                            case 4: oData.status = sValue; break;
                            case 5: oData.pendingWith = sValue; break;
                        }
                    }
                }
                this._updateTileCounts(oModel.getData());
                oModel.refresh();
                MessageToast.show("Changes saved successfully!");
            }
        },

        onDeletePress: function (oEvent) {
            var oItem = oEvent.getSource().getParent().getParent();
            var oModel = this.getView().getModel("products");
            var aItems = oModel.getProperty("/items");
            var iIndex = oItem.getParent().indexOfItem(oItem);

            aItems.splice(iIndex, 1);
            oModel.setProperty("/items", aItems);
            this._updateTileCounts(oModel.getData());
            oModel.refresh();
            MessageToast.show("Item deleted successfully");
        },

        onOrderPress: function () {
            MessageToast.show("New Source List created successfully!");
        }
    });
});
