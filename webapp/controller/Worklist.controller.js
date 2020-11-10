/*global location history */ /*cus_inq*/
var oSorter, co_eta, co_etd, nac_crew1, sa, imoval, ci_id_eta, ci_id_etd, ms, wbs1, sonum, itmlast, item_no;
var passarray = [], Arraysof1 = [],
	arr9 = [],
	arr10 = [],
	excgrt1, ci_imo1, headerbind = [],ci_orderstatus,
	headerbind1 = [],
	kflag, hflag,TotalAmount,sofcustid,
custOrderStatus,
agentcomments,ci_cport,ci_cives,ci_imo1,agentattach1,agentattach2,agentattach3,agentattach4,agentattach5,filnam1,
filnam2,filnam3,filnam4,filnam5,
	nc, ncimm, vsulog, vasum, quotid, portadd1, invoicedate, invoiceid,ci_ordstatuss;
	var arry1 = [],arry2 = [],arry3=[];
	var ordertimex, cusnamex, currencyx, orderdatex, etax, etdx, discountx, cusidx, orderidx, inqnumx, imox, agentcom;
var ciArrayport = [],
	eCurrency, ci_vesseldesc, ciArrayport2 = [];
	var code2 = 0,code3 = 0;
var services_dialog, destroy, etacheck, etdcheck, Custnamee, cussnames, Custnameexist;
var inqnumordarray = [],
	orderidfinal, busyDialog, asignto;
var ordertimem, customernamem, currencym, orderdatem, etamm, etdmm, discount, customeidm;
var co_tabel1len1, co_tabel1len, sername, r1, r2, r3, r4, r5, name2, postnac_crew, postnac_imm, postvsu_logis, postvsu_mat, ves_status,
	Countt, customeridTT;
var co_att1 = [],
	orderid,
	co_attach, co_obj1 = [],
	rolearr = [];
var cc_aData122, orderstatusinit, services_dialog2, attachmetvsu, attachvsubase, ci_ordstat, ci_astot, nac_imm1, vsu_log, vsu_mat1;
var code1 = 0;

var	finprice;
var InquirynumberOD, Nac_crew, services_dialogco;
var InquirynumberODarray = [];
var finaltotamountt, actualtotamountt, dis;
var myFormatter = {
	formatCombobox: function (a) {
		console.log(a)
		if (a == "NAC_PORT") {
			return a === 'false';
		}

	}
};
var ETASF, ATBSF, nac_crew, nac_imm, vsu_logis, vsu_mat, sFilename;
var arr1 = [],
	arr2 = [],
	arr3 = [],
	arr4 = [],
	arr5 = [],
	Array2 = [],
	Array1 = [],
	Co_Array2 = [],
	Co_Array3, husaprroved, servtype, inqnumberod,
	portaprroved2, r1;
var services_dialogco, services_dialog, modeltree, modelCosort, servicetype, qty, InqNo, samp, ci_eta, ci_etd, ci_currency, ci_servicetype,
	ci_portname, ci_vesselname;
var samp, services_dialog1, services_dialog_open, viewseaman, reamark, cc_aData12, cc_aDa, Danumberrender;
var baseval = [];
var inqre = [];
var co_oSelectedIndex, co_radval, vesselstatus, oTableat, total_act_val;
var samp, Coglobal, Coglobal1, DANUMBER, Co_Array2, BASE64FINAL, att1, att2, att3, att4, att5, aData12, file1, file2, file3, file4, file5;
var high, medium, low, DANUMBERfind, Addportservices;
var imo_post, inq_dat, inq_etd;
var CUSTOMERID, IMO, VESSELNAME, PORTNAME;
var t_ORDERID, t_ITEMNO, t_INQUIRYNUMBER, t_SERVICETYPE, t_VESSELNAME, t_QTY, t_INQUIRYDATE, t_INQUIRYTIME, t_PORTNAME, t_DANUMBER,
	t_PASSPORTNUMBER,
	t_VENDOR, t_CURRENCY, t_SEAMANBOOKNUMBER, t_ITEMPRICE, t_SERVICENAME, t_CHANGEORDER, t_CUSTOMERID, t_FIRSTNAME, t_LASTNAME, t_NATIONALITY,
	t_DATEOFISSUE,
	t_PLACEOFISSUE, t_PASSPORTEXPIRY, t_GENDER, t_HOTELREQUIRED, t_JOINEROFFSIGNER, t_MATERIALDESC, t_ATTACHMENT, t_PARAMETER1, t_VALUE1,
	t_PARAMETER2, t_VALUE2,
	t_PARAMETER3, t_VALUE3, t_PARAMETER4, t_VALUE4, t_PARAMETER5, t_VALUE5, t_REORDER, t_FILENAME, t_BASE64, t_TOTALPRICE, t_ORDERSTATUS,
	cc_aData12;
var cc_arr1 = [];
var cnt = 0;
var titems2, oModelcc1, ServiceTable, obj1, con, s, ServiceName, oModel, items, cc_aData, oModelcc, cc_aData1, oModelcc1, cc_aData2,
	oModelcc2, cc_aData3, oModelcc3, cc_aData4, oModelcc4, cc_aData5, oModelcc5, cc_aData6, oModelcc6, cc_aData7, oModelcc7, cc_aData8, CUSid,
	oModelcc8, priority_ci, itemno_ci, base64;
var ci_oSelectedIndex, ci_radval = "Approved",
	ci_custid, ci_disc, ci_finpri;
var attresult, ci_attach1, oModel, viewseamanorder;
var ci_obj1 = [],
	ci_att1 = [];
var s_fulldt, s_fultime, ci_accallfunct = "";
var userModel = new sap.ui.model.json.JSONModel("/services/userapi/currentUser");
var imoval, customeridval, vesfilter, sortmodel, sort_dialog, soffilter, sortmodel2, sort_dialog2, verfilter,
	sortmodel3, sort_dialog3, assignto, custid, inqno, ostatus, tamount, oModel, myOrderID, orderid, codate, otime, otype, oservicename,
	coname, cocurncy, coordcount, coimo, coeta, coedt, otype;
/***cus_inq***/
sap.ui.define([
	"AgentPortal_Testing/AgentPortal_Testing/controller/BaseController",
	'sap/ui/core/Fragment',
	'sap/m/MessageToast',
	'sap/m/Label',
	'sap/m/Text',
	'sap/m/TextArea',
	'sap/ui/model/Sorter',
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"AgentPortal_Testing/AgentPortal_Testing/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageBox", "sap/m/Dialog", "sap/m/Button", "sap/ui/model/odata/v2/ODataModel",
], function (BaseController, Fragment, MessageToast, Label, Text, TextArea, Sorter, JSONModel, History, formatter, Filter, FilterOperator,
	MessageBox, Dialog, Button, ODataModel) {
	"use strict";
	var imoval, customeridval, vesfilter, sortmodel, sort_dialog, soffilter, sortmodel2, sort_dialog2, verfilter, add_vesel_dialog,
		addvesselcal
	sortmodel3, sort_dialog3, custid, inqno, ostatus, tamount, oModel, myOrderID, orderid, codate, otime, otype;
	return BaseController.extend("AgentPortal_Testing.AgentPortal_Testing.controller.Worklist", {

		formatter: formatter,

		onInit: function () {

			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Vessel");

			vesfilter = sap.ui.xmlfragment("vesselfilterfragment", "AgentPortal_Testing.AgentPortal_Testing.view.vesselfilter", this);
			this.getView().addDependent(vesfilter);

			soffilter = sap.ui.xmlfragment("soffilterfragment", "AgentPortal_Testing.AgentPortal_Testing.view.soffilter", this);
			this.getView().addDependent(soffilter);

			verfilter = sap.ui.xmlfragment("verfilterfragment", "AgentPortal_Testing.AgentPortal_Testing.view.verfilter", this);
			this.getView().addDependent(verfilter);

			assignto = sap.ui.xmlfragment("assigntofragment", "AgentPortal_Testing.AgentPortal_Testing.view.assignto", this);
			this.getView().addDependent(assignto);

			addvesselcal = sap.ui.xmlfragment("addvesselcalid", "AgentPortal_Testing.AgentPortal_Testing.view.addvesselcal", this);
			this.getView().addDependent(addvesselcal);

			viewseaman = sap.ui.xmlfragment("viewseaman", "AgentPortal_Testing.AgentPortal_Testing.view.viewseaman", this);
			this.getView().addDependent(viewseaman);

			viewseamanorder = sap.ui.xmlfragment("viewseamanorder", "AgentPortal_Testing.AgentPortal_Testing.view.viewseamanorder", this);
			this.getView().addDependent(viewseamanorder);

			Addportservices = sap.ui.xmlfragment("Addportservices", "AgentPortal_Testing.AgentPortal_Testing.view.Addportservices", this);
			this.getView().addDependent(Addportservices);

			this.sortmodelfn();
			this.sortmodelfn2();
			this.sortmodelfn3();
			this.byId("viewdet").setVisible(false);
			this.byId("SavePendingEditVessel").setText("Save & Approve")

			this.getView().setModel(userModel, "userapi");

			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			//	var oModel = this.getModel();
			var sPath = "/RoleMatrix";
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					console.log(oData)
					for (var i = 0; i < (oData.results).length; i++) {
						var rolename = {
							role: oData.results[i].ROLENAME
						};
						arr5.push(rolename);
					}
				},
			});

			oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var sPath = "/PassportInfo";
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					for (var i = 0; i < (oData.results).length; i++) {
						var passports1 = {
							pass12: oData.results[i].PASSPORTID
						};
						passarray.push(passports1);
					}
				},
			});

			/*var ofilters = [new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r1),
			new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r2),
			new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r3),
			new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r4),
			new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r5),
			];
	
				var oTable11 = this.byId("RidTableMyOrders");
			var oTemp11 = this.byId('idCLMyOrders1');
			var oSorter = [new sap.ui.model.Sorter("REQUESTEDDATE",{descending:'true'}),
			new sap.ui.model.Sorter("REQUESTEDTIME",{descending:'false'})];
			oTable11.bindAggregation("items", {
			path: "/MyInquiryHeader",
			template: oTemp11,
	
			sorter:oSorter
			});*/

			oTableat = this.byId("idTableMyOrdersLine");

			/******** customer inquiries end *********/

			/*--customer order Start---    Count*/

			/*---------Pie chart---------------
					var oModel = new sap.ui.model.odata.ODataModel('S0019363960/dev/NACServices/AgentPortal.xsodata', true);
					var status1 = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, 'InProcess')];

			oModel.read("/MyOrders", {
				filters: status1,
				success: function (oData, oResponse) {
					var Hinpro = (oData.results).length;
					this.getView().byId("Hinpro").setValue(Hinpro);
					this.getView().byId("Hinpro").setDisplayedValue(Hinpro);
				}.bind(this)
			});

			var status2 = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, 'Approved')];

			oModel.read("/MyOrders", {
				filters: status2,
				success: function (oData, oResponse) {
					var Happro = (oData.results).length;
					this.getView().byId("Happro").setValue(Happro);
					this.getView().byId("Happro").setDisplayedValue(Happro);
				}.bind(this)
			});

			var status3 = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, 'Rejected')];

			oModel.read("/MyOrders", {
				filters: status3,
				success: function (oData, oResponse) {
					var Hrejec = (oData.results).length;
					this.getView().byId("Hrejec").setValue(Hrejec);
					this.getView().byId("Hrejec").setDisplayedValue(Hrejec);
				}.bind(this)
			});
			
			var status4 = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, 'Completed')];

			oModel.read("/MyOrders", {
				filters: status4,
				success: function (oData, oResponse) {
					var Hcomp = (oData.results).length;
					this.getView().byId("Hcomp").setValue(Hcomp);
					this.getView().byId("Hcomp").setDisplayedValue(Hcomp);
				}.bind(this)
			});*/

			/*---------------Bar chart--------------
			
 			oModel.read("/MyOrdersChart", { 
				success: function (oData, oResponse) {
					var low = oData.results[0].LAST_30_DAYS;
					if(low=== undefined || low===0){
						low=0;
					}else{
						low;
					}
					this.getView().byId("Hlow").setValue(low);
					this.getView().byId("Hlow").setDisplayedValue(low);
					
					var high = oData.results[0].LAST_6_MONTHS;
					if(high=== undefined || high===0){
						high=0;
					}else{
						high;
					}
					 
					this.getView().byId("Hhigh").setValue(high);
					this.getView().byId("Hhigh").setDisplayedValue(high);
 
 					var medium = oData.results[0].LAST_12_MONTHS;
 					if(medium=== undefined || medium===0){
						medium=0;
					}else{
						medium;
					}
					this.getView().byId("Hmedium").setValue(medium);
					this.getView().byId("Hmedium").setDisplayedValue(medium);
					
				}.bind(this)
			});*/
			/*--customer order End---*/
			/*----customer inquiries-----
			var link2 = this.getView().byId("linkid2").setVisible(false);

			var oViewModel,iOriginalBusyDelay;
			var panel = this.getView().byId("Rsplitter1").setVisible(false);
			// Model used to manipulate control states
			oViewModel = new JSONModel({});
			this.setModel(oViewModel, "worklistView");
			this.currentdatefunc();

			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);
			var status0 = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, 'New')];

			oModel.read("/MyInquiryHeader", {
				filters: status0,
				success: function (oData, oResponse) {
					var innew = (oData.results).length;
					this.getView().byId("id_new").setValue(innew);
					this.getView().byId("id_new").setDisplayedValue(innew);
				}.bind(this)
			});
			
			var status1 = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, 'InProcess')];

			oModel.read("/MyInquiryHeader", {
				filters: status1,
				success: function (oData, oResponse) {
					var inpro = (oData.results).length;
					this.getView().byId("inpro").setValue(inpro);
					this.getView().byId("inpro").setDisplayedValue(inpro);
				}.bind(this)
			});

			var status2 = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, 'Approved')];

			oModel.read("/MyInquiryHeader", {
				filters: status2,
				success: function (oData, oResponse) {
					var appro = (oData.results).length;
					this.getView().byId("appro").setValue(appro);
					this.getView().byId("appro").setDisplayedValue(appro);
				}.bind(this)
			});

			var status3 = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, 'Rejected')];

			oModel.read("/MyInquiryHeader", {
				filters: status3,
				success: function (oData, oResponse) {
					var rejec = (oData.results).length;
					this.getView().byId("rejec").setValue(rejec);
					this.getView().byId("rejec").setDisplayedValue(rejec);
				}.bind(this)
			});
				
				oModel.read("/MyInquiriesChart", { 
				success: function (oData, oResponse) {
					var low = oData.results[0].LAST_30_DAYS;
					if(low=== undefined || low===0){
						low=0;
					}else{
						low;
					}
					this.getView().byId("low").setValue(low);
					this.getView().byId("low").setDisplayedValue(low + "%");
					
					var high = oData.results[0].LAST_6_MONTHS;
					if(high=== undefined || high===0){
						high=0;
					}else{
						high;
					}
					 
					this.getView().byId("medium").setValue(high);
					this.getView().byId("medium").setDisplayedValue(high + "%");
 
 					var medium = oData.results[0].LAST_12_MONTHS;
 					if(medium=== undefined || medium===0){
						medium=0;
					}else{
						medium;
					}
					this.getView().byId("high").setValue(medium);
					this.getView().byId("high").setDisplayedValue(medium + "%");
					
				}.bind(this)
			});
				/*----customer inquiries End-----*/

		},

		assigninq: function () {
			arr4 = [];
			var assigntab = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable");

			var dettab = this.getView().byId("idTableMyOrdersLine").getSelectedItems();
			var dettablen = dettab.length;

			var dettab1 = this.getView().byId("idOtherinq").getSelectedItems();
			var dettablen1 = dettab1.length;

			var dettab2 = this.getView().byId("idTableMyOrdersLine1").getSelectedItems();
			var dettablen2 = dettab2.length;

			var dettab3 = this.getView().byId("idhub").getSelectedItems();
			var dettablen3 = dettab3.length;

			if (dettablen != 0) {

				for (var i = 0; i < dettablen; i++) {
					var item3 = dettab[i];
					var Cells3 = item3.getCells();
					var ServiceName = Cells3[1].getText();
					var servtype = Cells3[12].getText();
					var assigntype = Cells3[13].getText();
					//	//alert(servtype);
					var obj2 = {
						ServiceName1: ServiceName,
						servtyp1: servtype,
						assignval: assigntype
					};

					arr4.push(obj2);
					console.log(arr4);
				}
			}
			if (dettablen1 != 0) {

				for (var i = 0; i < dettablen1; i++) {
					var item3 = dettab1[i];
					var Cells3 = item3.getCells();
					var ServiceName = Cells3[1].getText();
					var obj2 = {
						ServiceName1: ServiceName
					};
					arr4.push(obj2);
				}
			}
			if (dettablen2 != 0) {

				for (var i = 0; i < dettablen2; i++) {
					var item3 = dettab2[i];
					var Cells3 = item3.getCells();
					var ServiceName = Cells3[0].getText();
					var obj2 = {
						ServiceName1: ServiceName
					};
					arr4.push(obj2);
				}
			}

			if (dettablen3 != 0) {

				for (var i = 0; i < dettablen3; i++) {
					var item3 = dettab3[i];
					var Cells3 = item3.getCells();
					var ServiceName = Cells3[0].getText();
					var obj3 = {
						ServiceName1: ServiceName
					};
					arr4.push(obj3);
				}
			}

			var cc_aData = arr4;

			var oModela1 = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModela1.setData({ // Set the data to the model using the JSON object defined already  
				assign1: cc_aData,
				assign2: arr5
			});
			assigntab.setModel(oModela1);

			assignto.open();
		},
		vesseltabexpensepress: function () {
			this.getView().byId("Customer").setValue(invoiceid);
			this.getView().byId("DP1").setValue(invoicedate);
		},

		roleassign: function (oEvent) {
			nac_crew = "";
			nac_imm = "";
			vsu_logis = "";
			vsu_mat = "";

			var role_val = oEvent.getSource().getValue();
			var oSrc = oEvent.getSource();
			var aItems = oSrc.getSelectedKey();
			var indexi = oEvent.getSource().getBindingContext().getPath();
			var arrayId12 = indexi.split("/");

			var cc_roletab = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable");

			var rolsetab = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems();

			var servval = cc_roletab.getItems()[arrayId12[2]].getCells()[2].getText();
			var rolsetablen = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems().length;
			console.log(rolsetablen)
			if (role_val === servval) {
				for (var k = 0; k < rolsetablen; k++) {
					var item1 = rolsetab[k];
					var Cells1 = item1.getCells();
					var role = Cells1[1].getSelectedKey();

					if (role === "NAC_CREW") {
						nac_crew = "X"
					} else if (role === "NAC_IMM") {
						nac_imm = "X"
					} else if (role === "VSU_Logistics") {
						vsu_logis = "X"
					} else if (role === "VSU_Materials") {
						vsu_mat = "X"
					} else {

					}

				}
			} else {
				sap.m.MessageBox.confirm("The Role cannot be assigned", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			}

		},

		assingtopost: function () {

			//		//alert("post");
			//		console.log("ci_att1.Base64[0]:"+ci_att1.Base64[0])
			 ci_imo1 = this.getView().byId("id_imo").getText();
			var ci_inq1 = this.getView().byId("id_inq_no1").getText();
			//	var ci_cusid = this.getView().byId("id_cid").getText();
			 ci_cport = this.getView().byId("id_port").getText();
			 ci_cives = this.getView().byId("id_vessel_name").getText();
			var ci_comments = this.getView().byId("ci_Commnt").getValue();

			var ci_table1 = this.getView().byId("idTableMyOrdersLine");
			var rowItems = ci_table1.getSelectedItems();
			var ci_tabel1len = ci_table1.getSelectedItems().length;

			var ci_price = this.getView().byId("ci_price").getValue();
			var ci_discount = this.getView().byId("ci_discount").getValue();
			var ci_finalpri = this.getView().byId("ci_fprice").getValue();
			var ci_attach = this.getView().byId("ci_fileUploader1").getValue();
			var ci_commnt = this.getView().byId("ci_Commnt").getValue();
			//	//alert(ci_accallfunct);

			//	//alert("else");
			if (servicetype === "Husbandry/Vessel support services") {

				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {

					var ciArray2 = [];
					////alert("else");
					var ocontroller = this;
					var ci_table1 = ocontroller.getView().byId("idTableMyOrdersLine");
					var ci_porttable = ocontroller.getView().byId("idTableMyOrdersLine1");
					var portrows = ci_porttable.getSelectedItems();
					var rowItems = ci_table1.getSelectedItems();
					var ci_tabel1len = ci_table1.getSelectedItems().length;
					var porttablelen = ci_porttable.getSelectedItems().length;
					//				//alert(ci_tabel1len);
					var rolsetab = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems();
					var rolsetablen = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems().length;
					console.log(rolsetablen)
					for (var k = 0; k < rolsetablen; k++) {
						var item1 = rolsetab[k];
						var Cells1 = item1.getCells();
						var role = Cells1[1].getSelectedKey();
						rolearr.push(role);
					}
					console.log(rolearr);
					ocontroller.ram_caldate();
					for (var i = 0; i < ci_tabel1len; i++) {
						////alert("for");
						var item3 = rowItems[i];
						var Cells3 = item3.getCells();
						// Get ID and Name
						var rowid = Cells3[0].getText();
						var servnam = Cells3[1].getText();
						var quant = Cells3[2].getValue();
						var itmprice1 = Cells3[3].getValue();
						var curr = Cells3[3].getDescription();
						var tot = (itmprice1 * quant).toString();
						var flag = Cells3[6].getText();
						var baseval1 = Cells3[7].getText();
						var fname1 = Cells3[8].getText();
						var cusbase = Cells3[9].getText();
						var cusfil = Cells3[10].getText();
						var servtyp1 = Cells3[12].getText();
						var servicecodehus = Cells3[14].getText();
						var MyInquiriespay = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": servtyp1,
							"QTY": quant,
							"TOTALPRICE": tot,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": ci_currency,
							"ORDERSTATUS": ci_ordstat,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": rowid,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodehus,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": cusbase,
							"CUSTMLAREFFILENAME": cusfil,
							"AGENTMLAFREBASE64": baseval1,
							"AGENTMLAREFFILENAME": fname1,
							"SERVICEFLAG": flag,
							"SAPQUOTATIONID": "",
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": rolearr[i],

						};

						ciArray2.push(MyInquiriespay);
						// console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalue = JSON.stringify(ciArray2);
						console.log("Myinqdatavalue:" + Myinqdatavalue);
					};
					for (var i = 0; i < porttablelen; i++) {
						//	//alert("for");

						var rows = portrows[i];
						var Cells3 = rows.getCells();

						var servnam = Cells3[0].getText();

						var itmprice1 = Cells3[1].getValue();
						var curr = Cells3[1].getDescription();
						var portflag = Cells3[3].getText();
						//	var tot = (itmprice1*quant).toString();
						var servicecodeport = Cells3[4].getText();
						var MyInquiriespayport = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": servicetype,
							"QTY": "1",
							"TOTALPRICE": itmprice1,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": ci_currency,
							"ORDERSTATUS": ci_ordstat,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": itemno_ci,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodeport,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": "",
							"CUSTMLAREFFILENAME": "",
							"AGENTMLAFREBASE64": "",
							"AGENTMLAREFFILENAME": "",
							"SAPQUOTATIONID": "",
							"SERVICEFLAG": portflag,
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": "",

						};

						ciArrayport.push(MyInquiriespayport);
						//console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalueport = JSON.stringify(ciArrayport);
						console.log("Myinqdatavalueport:" + Myinqdatavalueport);
					};

					var MyInquiriesheader = [{
						REQUESTEDDATE: s_fulldt, //s_fulldt
						REQUESTEDTIME: s_fultime, //s_fultime
						SERVICETYPE: servicetype,
						TOTALPRICE: ci_astot,
						FINALPRICE: ci_finalpri,
						VESSELNAME: ci_cives,
						IMO: ci_imo1,
						ETA: ci_eta,
						ETD: ci_etd,
						PORTNAME: ci_cport,
						CURRENCY: ci_currency,
						ORDERSTATUS: ci_ordstat,
						ORDERSTATUSCOUNT: "1",
						DISCOUNT: ci_discount,
						ATTACHMENT1: att1, //ci_att1.Base64[0]
						ATTACHMENT2: att2,
						ATTACHMENT3: att3,
						ATTACHMENT4: att4,
						ATTACHMENT5: att5,
						QUOTATIONTYPE: "UpdatedQuotation",
						CUSTOMERID: ci_custid,
						INQUIRYNUMBER: ci_inq1,
						SAPQUOTATIONID: "",
						CUSTOMERCOMMENTS: "",
						AGENTCOMMENTS: ci_comments,
						FILENAME1: file1,
						FILENAME2: file2,
						FILENAME3: file3,
						FILENAME4: file4,
						FILENAME5: file5,
						CURRENTSTATUS: "",
						AGENTROLE: "S",
						COUNTRY: "",
						NAC_CREW: nac_crew,
						NAC_IMM: nac_imm,
						VSU_LOGISTICS: vsu_logis,
						VSU_MATERIALS: vsu_mat

					}];
					var Myinqdataheader = JSON.stringify(MyInquiriesheader);
					console.log("Myinqdataheader:" + Myinqdataheader);
					var msgtext = this.getView().byId("reset1").getText();
					var ocontroller = this;
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
						"Are you sure to assign Roles ?", {
							//  icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Confirmation",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								if (oAction == "YES") {
									//	//alert("yes");

									/////********my inquiries header posting******//////////////
									jQuery.ajax({
										url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiryHeaderUpdate.xsjs',
										//   type: 'POST' ,
										data: Myinqdataheader,
										method: 'POST',
										//   dataType: 'json',
										//contentType:'application/json',
										/*username: "S0019363960",
										password: "Ud@y2007",
										xhrFields: {
											withCredentials: true
										},*/
										success: function (data, response) {
											// 	//alert("success")
											console.log(data);
											console.log("headerdata:" + JSON.stringify(data));
											console.log("response:" + response);
											/////********my inquiries multiple posting******//////////////
											jQuery.ajax({
												url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
												//   type: 'POST' ,
												data: Myinqdatavalue,
												method: 'POST',
												//   dataType: 'json',
												//contentType:'application/json',
												/*username: "S0019363960",
												password: "Ud@y2007",
												xhrFields: {
													withCredentials: true
												},*/
												success: function (data, response) {
													// 	//alert("success")
													console.log(data);
													console.log("inqdata:" + JSON.stringify(data));
													console.log("response:" + response);
													jQuery.ajax({
														url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
														//   type: 'POST' ,
														data: Myinqdatavalueport,
														method: 'POST',
														//   dataType: 'json',
														//contentType:'application/json',
														/*username: "S0019363960",
														password: "Ud@y2007",
														xhrFields: {
															withCredentials: true
														},*/
														success: function (data, response) {
															// 	//alert("success")
															console.log(data);
															console.log("inqdata:" + JSON.stringify(data));
															console.log("response:" + response);
															sap.m.MessageBox.success("Role has been assigned by Agent", {
																icon: sap.m.MessageBox.Icon.SUCCESS,
																title: "Success",
																actions: [sap.m.MessageBox.Action.OK],
																onClose: function (oAction) {
																	if (oAction == "OK") {
																		Array2.length = 0;
																		Array2 = [];
																		ocontroller.sendquo_clear();
																		rolearr = [];
																		arr4 = [];
																		nac_crew = "";
																		nac_imm = "";
																		vsu_logis = "";
																		vsu_mat = "";
																		assignto.close();
																	}
																}.bind(ocontroller)
															});

														},
														error: function (xhr, ajaxOptions, throwError) {
															sap.m.MessageToast.show(throwError);
															Array2.length = 0;
															Array2 = [];
															ocontroller.sendquo_clear();
														},
													});

												},
												error: function (xhr, ajaxOptions, throwError) {
													sap.m.MessageToast.show(throwError);
													Array2.length = 0;
													Array2 = [];
													ocontroller.sendquo_clear();
												},
											});
										},
										error: function (xhr, ajaxOptions, throwError) {
											sap.m.MessageToast.show(throwError);
											Array2.length = 0;
											Array2 = [];
											ocontroller.sendquo_clear();
										},
									});
								} else {
									rolearr = [];
									nac_crew = "";
									nac_imm = "";
									vsu_logis = "";
									vsu_mat = "";
									arr4 = [];
								}
							}
						});
				}
			} else if (servicetype === "Hub Agency Services") {
				var ocontroller = this;
				var ci_table1 = ocontroller.getView().byId("idhub");
				var rowItems = ci_table1.getSelectedItems();
				var rolsetab = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems();
				var rolsetablen = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems().length;
				console.log(rolsetablen)
				for (var k = 0; k < rolsetablen; k++) {
					var item1 = rolsetab[k];
					var Cells1 = item1.getCells();
					var role = Cells1[1].getSelectedKey();
					rolearr.push(role);
				}
				console.log(rolearr);

				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {

					var ciArray2 = [];
					////alert("else");
					var ocontroller = this;
					var ci_table1 = ocontroller.getView().byId("idhub");
					var rowItems = ci_table1.getSelectedItems();
					var ci_tabel1len = ci_table1.getSelectedItems().length;

					ocontroller.ram_caldate();
					for (var i = 0; i < ci_tabel1len; i++) {
						////alert("for");
						var item3 = rowItems[i];
						var Cells3 = item3.getCells();
						// Get ID and Name
						var rowid = Cells3[0].getText();
						var servnam = Cells3[1].getText();
						var quant = Cells3[2].getValue();
						var itmprice1 = Cells3[3].getValue();
						var curr = Cells3[3].getDescription();
						var tot = (itmprice1 * quant).toString();
						var servicecodehub = Cells3[6].getText();

						var MyInquiriespay = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": servicetype,
							"QTY": quant,
							"TOTALPRICE": tot,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": ci_currency,
							"ORDERSTATUS": ci_ordstat,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": itemno_ci,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodehub,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": "",
							"CUSTMLAREFFILENAME": "",
							"AGENTMLAFREBASE64": "",
							"AGENTMLAREFFILENAME": "",
							"SERVICEFLAG": flag,
							"SAPQUOTATIONID": "",
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": rolearr[i]
						};
						ciArray2.push(MyInquiriespay);
						// console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalue = JSON.stringify(ciArray2);
						console.log("Myinqdatavalue:" + Myinqdatavalue);
					};

					var MyInquiriesheader = [{
						REQUESTEDDATE: s_fulldt, //s_fulldt
						REQUESTEDTIME: s_fultime, //s_fultime
						SERVICETYPE: servicetype,
						TOTALPRICE: ci_price,
						FINALPRICE: ci_finalpri,
						VESSELNAME: ci_cives,
						IMO: ci_imo1,
						ETA: ci_eta,
						ETD: ci_etd,
						PORTNAME: ci_cport,
						CURRENCY: ci_currency,
						ORDERSTATUS: ci_ordstat,
						ORDERSTATUSCOUNT: "1",
						DISCOUNT: ci_discount,
						ATTACHMENT1: att1, //ci_att1.Base64[0]
						ATTACHMENT2: att2,
						ATTACHMENT3: att3,
						ATTACHMENT4: att4,
						ATTACHMENT5: att5,
						QUOTATIONTYPE: "UpdatedQuotation",
						CUSTOMERID: ci_custid,
						INQUIRYNUMBER: ci_inq1,
						SAPQUOTATIONID: "",
						CUSTOMERCOMMENTS: "",
						AGENTCOMMENTS: ci_comments,
						FILENAME1: file1,
						FILENAME2: file2,
						FILENAME3: file3,
						FILENAME4: file4,
						FILENAME5: file5,
						CURRENTSTATUS: "",
						AGENTROLE: "",
						COUNTRY: "",
						NAC_CREW: nac_crew,
						NAC_IMM: nac_imm,
						VSU_LOGISTICS: vsu_logis,
						VSU_MATERIALS: vsu_mat

					}];
					var Myinqdataheader = JSON.stringify(MyInquiriesheader);
					console.log("Myinqdataheader:" + Myinqdataheader);
					var msgtext = this.getView().byId("reset1").getText();
					var ocontroller = this;
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
						"Are you sure to " + msgtext + " ?", {
							//  icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Confirmation",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								if (oAction == "YES") {
									//	//alert("yes");

									/////********my inquiries header posting******//////////////
									jQuery.ajax({
										url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiryHeaderUpdate.xsjs',
										//   type: 'POST' ,
										data: Myinqdataheader,
										method: 'POST',
										//   dataType: 'json',
										//contentType:'application/json',
										/*username: "S0019363960",
										password: "Ud@y2007",
										xhrFields: {
											withCredentials: true
										},*/
										success: function (data, response) {
											// 	//alert("success")
											console.log(data);
											console.log("headerdata:" + JSON.stringify(data));
											console.log("response:" + response);
											/////********my inquiries multiple posting******//////////////
											jQuery.ajax({
												url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
												//   type: 'POST' ,
												data: Myinqdatavalue,
												method: 'POST',
												//   dataType: 'json',
												//contentType:'application/json',
												/*username: "S0019363960",
												password: "Ud@y2007",
												xhrFields: {
													withCredentials: true
												},*/
												success: function (data, response) {
													// 	//alert("success")
													console.log(data);
													console.log("inqdata:" + JSON.stringify(data));
													console.log("response:" + response);
													sap.m.MessageBox.success("Inquiry has been approved by Agent", {
														icon: sap.m.MessageBox.Icon.SUCCESS,
														title: "Success",
														actions: [sap.m.MessageBox.Action.OK],
														onClose: function (oAction) {
															if (oAction == "OK") {
																Array2.length = 0;
																Array2 = [];
																ocontroller.sendquo_clear();
															}
														}.bind(ocontroller)
													});

												},
												error: function (xhr, ajaxOptions, throwError) {
													sap.m.MessageToast.show(throwError);
													Array2.length = 0;
													Array2 = [];
													ocontroller.sendquo_clear();
												},
											});
										},
										error: function (xhr, ajaxOptions, throwError) {
											sap.m.MessageToast.show(throwError);
											Array2.length = 0;
											Array2 = [];
											ocontroller.sendquo_clear();
										},
									});
								}
							}
						});
				}
			} else if (servicetype === "Port Charges") {

				/*	//alert("port");*/
				var ciArray2 = [];
				/* //alert("else if")*/
				var ocontroller = this;

				var ci_table1 = ocontroller.getView().byId("idTableMyOrdersLine1");
				var rowItems = ci_table1.getSelectedItems();
				var ci_tabel1len = ci_table1.getSelectedItems().length;
				var rolsetab = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems();
				var rolsetablen = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems().length;
				console.log(rolsetablen)
				for (var k = 0; k < rolsetablen; k++) {
					var item1 = rolsetab[k];
					var Cells1 = item1.getCells();
					var role = Cells1[1].getSelectedKey();
					rolearr.push(role);
				}
				console.log(rolearr);
				console.log(ci_tabel1len);
				ocontroller.ram_caldate();
				for (var i = 0; i < ci_tabel1len; i++) {
					//	//alert("for");

					var rows = rowItems[i];
					var Cells3 = rows.getCells();

					var servnam = Cells3[0].getText();

					var itmprice1 = Cells3[1].getValue();
					var curr = Cells3[1].getDescription();
					var portflag = Cells3[3].getText();
					var servicecodeport = Cells3[4].getText();
					//	var tot = (itmprice1*quant).toString();

					var MyInquiriespay = {
						"REQUESTEDDATE": s_fulldt,
						"REQUESTEDTIME": s_fultime,
						"SERVICETYPE": servicetype,
						"QTY": "1",
						"TOTALPRICE": itmprice1,
						"ITEMPRICE": itmprice1,
						"DURATIONOFPASS": " ",
						"PRIORITY": priority_ci,
						"LOADINGAREA": " ",
						"CURRENCY": ci_currency,
						"ORDERSTATUS": ci_ordstat,
						"ORDERSTATUSCOUNT": "1",
						"RATE": "",
						"AGENTAPPROVAL": "X",
						"CUSTOMERID": ci_custid,
						"ITEMNO": itemno_ci,
						"INQUIRYNUMBER": ci_inq1,
						"SERVICEDESCRIPTION": servnam,
						"SERVICENAME": servicecodeport,
						"CATALOG_FLAG": "",
						"REMARKS": "",
						"IMPA": "",
						"CUSTMLAREFBASE64": "",
						"CUSTMLAREFFILENAME": "",
						"AGENTMLAFREBASE64": "",
						"AGENTMLAREFFILENAME": "",
						"SAPQUOTATIONID": "",
						"SERVICEFLAG": portflag,
						"CUSTOMERCOMMENTS": "",
						"AGENTCOMMENTS": ci_comments,
						"AGENTROLE": rolearr[i]
					};
					ciArray2.push(MyInquiriespay);
					//console.log("postPayLoad:" + JSON.stringify(postPayLoad));
					var Myinqdatavalue = JSON.stringify(ciArray2);
					console.log("Myinqdatavalue:" + Myinqdatavalue);
				};

				var MyInquiriesheader = [{
					REQUESTEDDATE: s_fulldt, //s_fulldt
					REQUESTEDTIME: s_fultime, //s_fultime
					SERVICETYPE: servicetype,
					TOTALPRICE: ci_price,
					FINALPRICE: ci_finalpri,
					VESSELNAME: ci_cives,
					IMO: ci_imo1,
					ETA: ci_eta,
					ETD: ci_etd,
					PORTNAME: ci_cport,
					CURRENCY: ci_currency,
					ORDERSTATUS: ci_ordstat,
					ORDERSTATUSCOUNT: "1",
					DISCOUNT: ci_discount,
					ATTACHMENT1: att1, //ci_att1.Base64[0]
					ATTACHMENT2: att2,
					ATTACHMENT3: "",
					ATTACHMENT4: " ",
					ATTACHMENT5: " ",
					QUOTATIONTYPE: "UpdatedQuotation",
					CUSTOMERID: ci_custid,
					INQUIRYNUMBER: ci_inq1,
					SAPQUOTATIONID: "",
					CUSTOMERCOMMENTS: "",
					AGENTCOMMENTS: ci_comments,
					FILENAME1: file1,
					FILENAME2: file2,
					FILENAME3: file3,
					FILENAME4: file4,
					FILENAME5: file5,
					CURRENTSTATUS: "",
					AGENTROLE: "",
					COUNTRY: "",
					NAC_CREW: nac_crew,
					NAC_IMM: nac_imm,
					VSU_LOGISTICS: vsu_logis,
					VSU_MATERIALS: vsu_mat

				}];
				var Myinqdataheader = JSON.stringify(MyInquiriesheader);
				console.log("Myinqdataheader:" + Myinqdataheader);

				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Are you sure to proceed with the quotation?", {
						//  icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							if (oAction == "YES") {
								/////********my inquiries header posting******//////////////
								jQuery.ajax({
									url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiryHeaderUpdate.xsjs',
									//   type: 'POST' ,
									data: Myinqdataheader,
									method: 'POST',
									//   dataType: 'json',
									//contentType:'application/json',
									/*	username: "S0019363960",
										password: "Ud@y2007",
										xhrFields: {
											withCredentials: true
										},*/
									success: function (data, response) {
										// 	//alert("success")
										console.log("headerdata:" + JSON.stringify(data));
										console.log("response:" + response);
										/////********my inquiries multiple posting******//////////////
										jQuery.ajax({
											url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
											//   type: 'POST' ,
											data: Myinqdatavalue,
											method: 'POST',
											//   dataType: 'json',
											//contentType:'application/json',
											/*username: "S0019363960",
											password: "Ud@y2007",
											xhrFields: {
												withCredentials: true
											},*/
											success: function (data, response) {
												// 	//alert("success")
												console.log("inqdata:" + JSON.stringify(data));
												console.log("response:" + response);
												sap.m.MessageBox.success("Inquiry has been approved by Agent", {
													icon: sap.m.MessageBox.Icon.SUCCESS,
													title: "Success",
													actions: [sap.m.MessageBox.Action.OK],
													onClose: function (oAction) {
														if (oAction == "OK") {
															Array2.length = 0;
															Array2 = [];
															ocontroller.sendquo_clear();
														}
													}.bind(ocontroller)
												});

											},
											error: function (xhr, ajaxOptions, throwError) {
												sap.m.MessageToast.show(throwError);
												Array2.length = 0;
												Array2 = [];
												ocontroller.sendquo_clear();
											},
										});
									},
									error: function (xhr, ajaxOptions, throwError) {
										sap.m.MessageToast.show(throwError);
										Array2.length = 0;
										Array2 = [];
										ocontroller.sendquo_clear();
									},
								});
							}
						}
					});

			} else {
				var ocontroller = this;
				var ci_table1 = ocontroller.getView().byId("idOtherinq");
				var rowItems = ci_table1.getSelectedItems();

				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {

					var ciArray2 = [];
					////alert("else");
					var ocontroller = this;
					var ci_table1 = ocontroller.getView().byId("idOtherinq");
					var ci_porttable = ocontroller.getView().byId("idTableMyOrdersLine1");
					var portrows = ci_porttable.getSelectedItems();
					var rowItems = ci_table1.getSelectedItems();
					var ci_tabel1len = ci_table1.getSelectedItems().length;
					var porttablelen = ci_porttable.getSelectedItems().length;
					var rolsetab = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems();
					var rolsetablen = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems().length;
					console.log(rolsetablen)
					for (var k = 0; k < rolsetablen; k++) {
						var item1 = rolsetab[k];
						var Cells1 = item1.getCells();
						var role = Cells1[1].getSelectedKey();
						rolearr.push(role);
					}
					console.log(rolearr);
					//				//alert(ci_tabel1len);
					ocontroller.ram_caldate();
					for (var i = 0; i < ci_tabel1len; i++) {
						////alert("for");
						var item3 = rowItems[i];
						var Cells3 = item3.getCells();
						// Get ID and Name
						//	var	rowid = Cells3[0].getText();
						var servnam = Cells3[0].getText();

						var itmprice1 = Cells3[1].getNumber();
						var curr = Cells3[1].getUnit();
						var flag = Cells3[3].getText();
						//	var tot = (itmprice1*quant).toString();
						var servicecodeother = Cells3[7].getText();
						var MyInquiriespay = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": servicetype,
							"QTY": quant,
							"TOTALPRICE": itmprice1,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": ci_currency,
							"ORDERSTATUS": ci_ordstat,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": itemno_ci,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodeother,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": "",
							"CUSTMLAREFFILENAME": "",
							"AGENTMLAFREBASE64": "",
							"AGENTMLAREFFILENAME": "",
							"SERVICEFLAG": flag,
							"SAPQUOTATIONID": "",
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": rolearr[i]
						};
						ciArray2.push(MyInquiriespay);
						// console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalue = JSON.stringify(ciArray2);
						console.log("Myinqdatavalue:" + Myinqdatavalue);
					};
					for (var i = 0; i < porttablelen; i++) {
						//	//alert("for");

						var rows = portrows[i];
						var Cells3 = rows.getCells();

						var servnam = Cells3[0].getText();

						var itmprice1 = Cells3[1].getValue();
						var curr = Cells3[1].getDescription();
						var portflag = Cells3[3].getText();
						//	var tot = (itmprice1*quant).toString();
						var servicecodeport = Cells3[4].getText();
						var MyInquiriespayport = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": servicetype,
							"QTY": "1",
							"TOTALPRICE": itmprice1,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": ci_currency,
							"ORDERSTATUS": ci_ordstat,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": itemno_ci,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodeport,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": "",
							"CUSTMLAREFFILENAME": "",
							"AGENTMLAFREBASE64": "",
							"AGENTMLAREFFILENAME": "",
							"SAPQUOTATIONID": "",
							"SERVICEFLAG": portflag,
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": ""
						};
						ciArrayport.push(MyInquiriespayport);
						//console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalueport = JSON.stringify(ciArrayport);
						console.log("Myinqdatavalueport:" + Myinqdatavalueport);
					};

					var MyInquiriesheader = [{
						REQUESTEDDATE: s_fulldt, //s_fulldt
						REQUESTEDTIME: s_fultime, //s_fultime
						SERVICETYPE: servicetype,
						TOTALPRICE: ci_price,
						FINALPRICE: ci_finalpri,
						VESSELNAME: ci_cives,
						IMO: ci_imo1,
						ETA: ci_eta,
						ETD: ci_etd,
						PORTNAME: ci_cport,
						CURRENCY: ci_currency,
						ORDERSTATUS: ci_ordstat,
						ORDERSTATUSCOUNT: "1",
						DISCOUNT: ci_discount,
						ATTACHMENT1: att1, //ci_att1.Base64[0]
						ATTACHMENT2: att2,
						ATTACHMENT3: att3,
						ATTACHMENT4: att4,
						ATTACHMENT5: att5,
						QUOTATIONTYPE: "UpdatedQuotation",
						CUSTOMERID: ci_custid,
						INQUIRYNUMBER: ci_inq1,
						SAPQUOTATIONID: "",
						CUSTOMERCOMMENTS: "",
						AGENTCOMMENTS: ci_comments,
						FILENAME1: file1,
						FILENAME2: file2,
						FILENAME3: file3,
						FILENAME4: file4,
						FILENAME5: file5,
						CURRENTSTATUS: "",
						AGENTROLE: "",
						COUNTRY: "",
						NAC_CREW: nac_crew,
						NAC_IMM: nac_imm,
						VSU_LOGISTICS: vsu_logis,
						VSU_MATERIALS: vsu_mat

					}];
					var Myinqdataheader = JSON.stringify(MyInquiriesheader);
					console.log("Myinqdataheader:" + Myinqdataheader);
					var msgtext = this.getView().byId("reset1").getText();
					var ocontroller = this;
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
						"Are you sure to " + msgtext + " ?", {
							//  icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Confirmation",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								if (oAction == "YES") {
									//	//alert("yes");

									/////********my inquiries header posting******//////////////
									jQuery.ajax({
										url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiryHeaderUpdate.xsjs',
										//   type: 'POST' ,
										data: Myinqdataheader,
										method: 'POST',
										//   dataType: 'json',
										//contentType:'application/json',
										/*username: "S0019363960",
										password: "Ud@y2007",
										xhrFields: {
											withCredentials: true
										},*/
										success: function (data, response) {
											// 	//alert("success")
											console.log(data);
											console.log("headerdata:" + JSON.stringify(data));
											console.log("response:" + response);
											/////********my inquiries multiple posting******//////////////
											jQuery.ajax({
												url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
												//   type: 'POST' ,
												data: Myinqdatavalue,
												method: 'POST',
												//   dataType: 'json',
												//contentType:'application/json',
												/*username: "S0019363960",
												password: "Ud@y2007",
												xhrFields: {
													withCredentials: true
												},*/
												success: function (data, response) {
													// 	//alert("success")
													console.log(data);
													console.log("inqdata:" + JSON.stringify(data));
													console.log("response:" + response);
													jQuery.ajax({
														url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
														//   type: 'POST' ,
														data: Myinqdatavalueport,
														method: 'POST',
														//   dataType: 'json',
														//contentType:'application/json',
														/*username: "S0019363960",
														password: "Ud@y2007",
														xhrFields: {
															withCredentials: true
														},*/
														success: function (data, response) {
															// 	//alert("success")
															console.log(data);
															console.log("inqdata:" + JSON.stringify(data));
															console.log("response:" + response);
															sap.m.MessageBox.success("Inquiry has been approved by Agent", {
																icon: sap.m.MessageBox.Icon.SUCCESS,
																title: "Success",
																actions: [sap.m.MessageBox.Action.OK],
																onClose: function (oAction) {
																	if (oAction == "OK") {
																		Array2.length = 0;
																		Array2 = [];
																		ocontroller.sendquo_clear();
																	}
																}.bind(ocontroller)
															});

														},
														error: function (xhr, ajaxOptions, throwError) {
															sap.m.MessageToast.show(throwError);
															Array2.length = 0;
															Array2 = [];
															ocontroller.sendquo_clear();
														},
													});

												},
												error: function (xhr, ajaxOptions, throwError) {
													sap.m.MessageToast.show(throwError);
													Array2.length = 0;
													Array2 = [];
													ocontroller.sendquo_clear();
												},
											});
										},
										error: function (xhr, ajaxOptions, throwError) {
											sap.m.MessageToast.show(throwError);
											Array2.length = 0;
											Array2 = [];
											ocontroller.sendquo_clear();
										},
									});
								}
							}
						});
				}

			}

		},

		assigncancelDialog: function () {
			assignto.close();
			arr4 = [];
		},

		mystatus: function (a) {
			if (a === 'PENDING' || a === 'Pending') {
				return 'Warning';
			} else if (a === 'APPROVED' || a === 'Approved') {
				return 'Success';

			} else {
				return 'None';
			}

		},

		formatdates: function (a) {
			var mydater = new Date(a);
			var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydater.getMonth()];
			return month + ' ' + mydater.getDate() + ', ' + mydater.getFullYear();
		},

		radiobuttonselect: function (oEvent) {
			var oSelectedIndex = oEvent.getParameter("selectedIndex");
			var oRadioButtonSrc = oEvent.getSource().getAggregation("buttons");
			var oSelectedRadioText = oRadioButtonSrc[oSelectedIndex].getText();

			if (oSelectedRadioText === "Pending") {
				var oTable11 = this.byId("idOperationTabel1");
				var oTemp11 = this.byId('idOperIncrementTable1');
				var ofilters = [new sap.ui.model.Filter("VESSELSTATUS", sap.ui.model.FilterOperator.EQ, "Pending")];

				oTable11.bindAggregation("items", {
					path: "/MyFleet",
					template: oTemp11,
					filters: ofilters
				});
			/*	var tablen = this.byId("idOperationTabel1").getItems().length;
				console.log(tablen)
				this.getView().byId("itemlist").setText(tablen);*/
			} else if (oSelectedRadioText === "Approved") {
				var oTable11 = this.byId("idOperationTabel1");
				var oTemp11 = this.byId('idOperIncrementTable1');

				var ofilters = [new sap.ui.model.Filter("VESSELSTATUS", sap.ui.model.FilterOperator.EQ, "Approved")];

				oTable11.bindAggregation("items", {
					path: "/MyFleet",
					template: oTemp11,
					filters: ofilters
				});
			/*		var tablen = oTable11.getItems().length;
				this.getView().byId("itemlist").setText(tablen);*/
			} else {
				var oTable11 = this.byId("idOperationTabel1");
				var oTemp11 = this.byId('idOperIncrementTable1');

				oTable11.bindAggregation("items", {
					path: "/MyFleet",
					template: oTemp11
				});
			/*		var tablen = oTable11.getItems().length;
				this.getView().byId("itemlist").setText(tablen);*/
			}
		},
		onmyfleetfinished:function()
		{
				var tablen = this.byId("idOperationTabel1").getItems().length;
				console.log(tablen)
				this.getView().byId("itemlist").setText("Items(" +tablen +")");
		},
		

		onBeforeRendering: function () {

			/********** customers **********/
			var oCont = this;

			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var oFilterscid = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, '0000100002')];
			var sPath = "/Customers";
			oModel.read(sPath, {
				filters: oFilterscid,
				success: function (oData, oResponse) {
					//   console.log(oData);

					oCont.getView().byId("hiscusname").setText(oData.results[0].CUSTOMERNAME);
				},
			});

			/********** customer inquiries**********/

			var oCont = this;
			var oModel1 = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var oFilterscid1 = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, '0000100034')];
			var sPath1 = "/Customers";
			oModel1.read(sPath1, {
				filters: oFilterscid1,
				success: function (oData, oResponse) {
					console.log(oData);
					oCont.getView().byId("id_cid1").setText(oData.results[0].CUSTOMERID);
					oCont.getView().byId("id_cname1").setText(oData.results[0].CUSTOMERNAME);
					oCont.getView().byId("id_cid").setText(oData.results[0].CUSTOMERID);
					oCont.getView().byId("id_cname").setText(oData.results[0].CUSTOMERNAME);
					//		oCont.getView().byId("ocompname").setText(oData.results[0].COMPANYNAME);
				},
			});
			/********** customer Orders**********/
			var oCont = this;
			oModel = new sap.ui.model.odata.ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);
			var sPath = "/MyOrders";
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					console.log(oData);
					var count = (oData.results).length;
					oCont.getView().byId("idcount").setText("Item List (" + count + ")");
					oCont.getView().byId("idoa").setText(count);
				}
			});

			var oTable = this.getView().byId("idTable1");
			var oFirstItem1 = oTable.getItems().length;

			console.log("oFirstItem1 :", oFirstItem1)
			var oFirstItem = oTable.getItems()[0];
			orderidfinal = oFirstItem.getCells()[0].getText();
			console.log("orderidfinal :", orderidfinal)

		},

		/* Customer Functionality */

		/*	onSelectionChange :function(oEvent){
				var vesselCombo =  this.byId("multicombo2").getSelectedKey();
				console.log(vesselCombo);
					//	var oTable1 = this.byId("idOperationTabel1");
			if (vesselCombo=="Cargo"){
			
			var SamTbl = oEvent.getParameter("newValue");
			var filters = new Array();
			var oFilter = new sap.ui.model.Filter([
			new sap.ui.model.Filter("VESSELTYPE", sap.ui.model.FilterOperator.EQ, "Cargo")
				],
				false);
			filters = (oFilter);
			var listItem = this.getView().byId("idOperationTabel1");
			var binding = listItem.getBinding("items");
			binding.filter(filters);
						}
						
					},*/

		refresh1: function () {
			var oTable11 = this.byId("idOperationTabel1");
			var oTemp11 = this.byId('idOperIncrementTable1');

			oTable11.bindAggregation("items", {
				path: "/MyFleet",
				template: oTemp11
			});
		},
			statusselect:function(oEvent)
		{
				var oSelectedIndex = oEvent.getParameter("selectedIndex");
			var oRadioButtonSrc = oEvent.getSource().getAggregation("buttons");
			var oSelectedRadioText = oRadioButtonSrc[oSelectedIndex].getText();
			if(oSelectedRadioText === "New")
			{
			var tabfilter = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, "New")];
			var oTable11 = this.byId("idTable1");
									var oTemp11 = this.byId('idCLMyOrderss');
									var oSorter = [new sap.ui.model.Sorter("ORDERDATE", {
											descending: 'true'
										}),
										new sap.ui.model.Sorter("ORDERTIME", {
											descending: 'false'
										})
									];
									oTable11.bindAggregation("items", {
										path: "/MyOrders",
										template: oTemp11,
										filters: tabfilter,
										sorter: oSorter
									});
			}
			else if(oSelectedRadioText === "Approved")
			{
			var tabfilter = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, "Approved")];	
			var oTable11 = this.byId("idTable1");
									var oTemp11 = this.byId('idCLMyOrderss');
									var oSorter = [new sap.ui.model.Sorter("ORDERDATE", {
											descending: 'true'
										}),
										new sap.ui.model.Sorter("ORDERTIME", {
											descending: 'false'
										})
									];
									oTable11.bindAggregation("items", {
										path: "/MyOrders",
										template: oTemp11,
										filters: tabfilter,
										sorter: oSorter
									});
			}
			else if(oSelectedRadioText === "Rejected")
				{
			var tabfilter = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, "Rejected")];
			var oTable11 = this.byId("idTable1");
									var oTemp11 = this.byId('idCLMyOrderss');
									var oSorter = [new sap.ui.model.Sorter("ORDERDATE", {
											descending: 'true'
										}),
										new sap.ui.model.Sorter("ORDERTIME", {
											descending: 'false'
										})
									];
									oTable11.bindAggregation("items", {
										path: "/MyOrders",
										template: oTemp11,
										filters: tabfilter,
										sorter: oSorter
									});
			this.byId("cancelorder").setVisible(false);
				this.byId("approvere").setVisible(false);
				this.byId("approveselectre").setVisible(false);
				this.byId("cancelapprove").setVisible(false);
				this.byId("confirmorder").setVisible(false);
				this.byId("approvechange").setVisible(false);
				this.byId("approveselect").setVisible(false);
			}
			else if(oSelectedRadioText === "InProcess")
			{
				var tabfilter = [new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, "InProcess")];	
				var oTable11 = this.byId("idTable1");
									var oTemp11 = this.byId('idCLMyOrderss');
									var oSorter = [new sap.ui.model.Sorter("ORDERDATE", {
											descending: 'true'
										}),
										new sap.ui.model.Sorter("ORDERTIME", {
											descending: 'false'
										})
									];
									oTable11.bindAggregation("items", {
										path: "/MyOrders",
										template: oTemp11,
										filters: tabfilter,
										sorter: oSorter
									});
			}
			
			else
			{
									var oTable11 = this.byId("idTable1");
									var oTemp11 = this.byId('idCLMyOrderss');
									var oSorter = [new sap.ui.model.Sorter("ORDERDATE", {
											descending: 'true'
										}),
										new sap.ui.model.Sorter("ORDERTIME", {
											descending: 'false'
										})
									];
									oTable11.bindAggregation("items", {
										path: "/MyOrders",
										template: oTemp11,
										sorter: oSorter
									});
				
			}
		
			
			
			
		},

		existcustomer: function () {

			var existcustomer = this.getView().byId("existcus").getSelectedItem().getText();

			console.log(existcustomer);

			this.byId("EditVessel").setVisible(true);
			this.byId("sbtn").setVisible(false);

			var oCont = this;
			var oFilterscid = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, existcustomer)];
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var sPath = "/MyFleet";
			oModel.read(sPath, {
				filters: oFilterscid,
				success: function (oData, oResponse) {
					console.log(oData);

					var VESSELNAME = oData.results[0].VESSELNAME;
					var IMO = oData.results[0].IMO;
					var SWDT = oData.results[0].SWDT;
					var NRT = oData.results[0].NRT;
					var GRT = oData.results[0].GRT;
					var LOA = oData.results[0].LOA;
					var VESSELEMAILID = oData.results[0].VESSELEMAILID;
					var VESSELPHONENUM = oData.results[0].VESSELPHONENUM;
					var ex6 = oData.results[0].MMSI;
					var ex7 = oData.results[0].CALLSIGN;
					var ex8 = oData.results[0].FLAG;
					var ex9 = oData.results[0].VESSELTYPE;
					var ex10 = oData.results[0].CLASSIFICATION;
					var ex11 = oData.results[0].PICLUB;
					var ex12 = oData.results[0].VESSELOWNER;
					var ex13 = oData.results[0].OWNEREMAILID;
					var ex14 = oData.results[0].CHARTERERNAME;
					var ex15 = oData.results[0].CHARTEREREMAILID;
					var ex20 = oData.results[0].YEARBUILT;
					var ex24 = oData.results[0].CAPTAINNAME;
					var ex25 = oData.results[0].OTHERS;
					var ex26 = oData.results[0].REMARKS;

					ves_status = oData.results[0].VESSELSTATUS;
					Countt = oData.results[0].COUNT;
					customeridTT = oData.results[0].CUSTOMERID;
					asignto = oData.results[0].ASSIGNTO;
					//	//alert(ves_status)

					oCont.getView().byId("ex2").setValue(VESSELNAME);
					oCont.getView().byId("ex1").setValue(IMO);
					oCont.getView().byId("ex16").setValue(SWDT);
					oCont.getView().byId("ex17").setValue(NRT);
					oCont.getView().byId("ex18").setValue(GRT);
					oCont.getView().byId("ex19").setValue(LOA);
					oCont.getView().byId("ex21").setValue(VESSELEMAILID);
					oCont.getView().byId("ex22").setValue(VESSELPHONENUM);

					oCont.getView().byId("ex6").setValue(ex6);
					oCont.getView().byId("ex7").setValue(ex7);
					oCont.getView().byId("ex8").setValue(ex8);
					oCont.getView().byId("ex9").setValue(ex9);
					oCont.getView().byId("ex10").setValue(ex10);
					oCont.getView().byId("ex11").setValue(ex11);
					oCont.getView().byId("ex12").setValue(ex12);
					oCont.getView().byId("ex13").setValue(ex13);
					oCont.getView().byId("ex14").setValue(ex14);
					oCont.getView().byId("ex15").setValue(ex15);
					oCont.getView().byId("ex20").setValue(ex20);
					oCont.getView().byId("ex24").setValue(ex24);
					oCont.getView().byId("ex25").setValue(ex25);
					oCont.getView().byId("ex26").setValue(ex26);

				}
			});

		},

		addvessel: function () {

			this.byId("itb1");
			this.byId("panel1").setVisible(false);
			this.byId("panel3").setVisible(true);
			this.byId("cbtn").setVisible(true);
			this.byId("sbtn").setVisible(true);
			this.byId("abtn").setVisible(false);
			this.byId("EditVessel").setVisible(false);
			this.byId("newcustomer").setSelected(true);
			this.byId("existcus").setEditable(false);
			this.newcustomer();

		},
		render: function () {

			var tab2 = this.getView().byId("idOperationTabel1sof");
			var oFirstItem1 = tab2.getItems().length;
			console.log("oFirstItem1 :", oFirstItem1)
		//	//alert(oFirstItem1)
			var oFirstItem = tab2.getItems()[0];
			Danumberrender = oFirstItem.getCells()[3].getText(); // '1' - Change the index to where the input control placed in the item
		////alert("oCell:", Danumberrender);
		sofcustid = oTable.getItems()[0].getBindingContext().getProperty("CUSTOMERID");
				//alert(sofcustid)
			
		

		},

		TableLinkPress: function (oEvent) {

			//	var TablePress = this.byId("idOperationTabel1");

			vesselstatus = oEvent.getSource().getBindingContext().getProperty("VESSELSTATUS");
			//	//alert(vesselstatus)

			console.log("vesselstatus :", vesselstatus)
			CUSid = oEvent.getSource().getBindingContext().getProperty("CUSTOMERID");
			console.log(vesselstatus);
			cussnames = oEvent.getSource().getBindingContext().getProperty("CUSTOMERNAME");
			//	//alert(cussnames)

			if (vesselstatus == "PENDING" || vesselstatus == "Pending" || vesselstatus == "Approved") {
		//	//alert("if");
				this.byId("pendingpanel").setVisible(true);

				var penCustomerid = oEvent.getSource().getBindingContext().getProperty("IMO");
				var oCont = this;
				var oFilterscid = [new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, penCustomerid)];
				var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var sPath = "/MyFleet";
				oModel.read(sPath, {
					filters: oFilterscid,
					success: function (oData, oResponse) {
						console.log(oData);
						var penvessl = oData.results[0].VESSELNAME;
						var penimo = oData.results[0].IMO;
						var penswdt = oData.results[0].SWDT;
						var pennrt = oData.results[0].NRT;
						var pengrt = oData.results[0].GRT;
						var penloa = oData.results[0].LOA;
						var pen6 = oData.results[0].MMSI;
						var pen7 = oData.results[0].CALLSIGN;
						var pen8 = oData.results[0].FLAG;
						var pen9 = oData.results[0].VESSELTYPE;
						var pen10 = oData.results[0].CLASSIFICATION;
						var pen11 = oData.results[0].PICLUB;
						var pen12 = oData.results[0].VESSELOWNER;
						var pen13 = oData.results[0].OWNEREMAILID;
						var pen14 = oData.results[0].CHARTERERNAME;
						var pen15 = oData.results[0].CHARTEREREMAILID;
						var pen20 = oData.results[0].YEARBUILT;
						var pen24 = oData.results[0].CAPTAINNAME;
						var pen25 = oData.results[0].OTHERS;
						var pen26 = oData.results[0].REMARKS;

						var penvesselemail = oData.results[0].VESSELEMAILID;
						var penvesselphonenum = oData.results[0].VESSELPHONENUM;
						oCont.getView().byId("pen2").setValue(penvessl);
						oCont.getView().byId("pen1").setValue(penimo);
						oCont.getView().byId("pen16").setValue(penswdt);
						oCont.getView().byId("pen17").setValue(pennrt);
						oCont.getView().byId("pen18").setValue(pengrt);
						oCont.getView().byId("pen19").setValue(penloa);
						oCont.getView().byId("pen21").setValue(penvesselemail);
						oCont.getView().byId("pen22").setValue(penvesselphonenum);

						oCont.getView().byId("pen6").setValue(pen6);
						oCont.getView().byId("pen7").setValue(pen7);
						oCont.getView().byId("pen8").setValue(pen8);
						oCont.getView().byId("pen9").setValue(pen9);
						oCont.getView().byId("pen10").setValue(pen10);
						oCont.getView().byId("pen11").setValue(pen11);
						oCont.getView().byId("pen12").setValue(pen12);
						oCont.getView().byId("pen13").setValue(pen13);
						oCont.getView().byId("pen14").setValue(pen14);
						oCont.getView().byId("pen15").setValue(pen15);
						oCont.getView().byId("pen20").setValue(pen20);
						oCont.getView().byId("pen24").setValue(pen24);
						oCont.getView().byId("pen25").setValue(pen25);
						oCont.getView().byId("pen26").setValue(pen26);

					}
				});

			} else {
				this.byId("approvedpanel").setVisible(true);
				this.byId("SavePendingEditVessel").setVisible(false);
				this.byId("cbtn").setVisible(false);
				var appCustomerid = oEvent.getSource().getBindingContext().getProperty("VESSELNAME");
				console.log("appCustomerid :", appCustomerid);
				var oCont = this;
				var oFilterscid = [new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, appCustomerid)];
				var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var sPath = "/MyFleet";
				oModel.read(sPath, {
					filters: oFilterscid,
					success: function (oData, oResponse) {
						var appvessl = oData.results[0].VESSELNAME;
						var appimo = oData.results[0].IMO;
						var appswdt = oData.results[0].SWDT;
						var appnrt = oData.results[0].NRT;
						var appgrt = oData.results[0].GRT;
						var apploa = oData.results[0].LOA;

						var app6 = oData.results[0].MMSI;
						var app7 = oData.results[0].CALLSIGN;
						var app8 = oData.results[0].FLAG;
						var app9 = oData.results[0].VESSELTYPE;
						var app10 = oData.results[0].CLASSIFICATION;
						var app11 = oData.results[0].PICLUB;
						var app12 = oData.results[0].VESSELOWNER;
						var app13 = oData.results[0].OWNEREMAILID;
						var app14 = oData.results[0].CHARTERERNAME;
						var app15 = oData.results[0].CHARTEREREMAILID;
						var app20 = oData.results[0].YEARBUILT;
						var app24 = oData.results[0].CAPTAINNAME;
						var app25 = oData.results[0].OTHERS;
						var app26 = oData.results[0].REMARKS;

						var appvesselemail = oData.results[0].VESSELEMAILID;
						var appvesselphonenum = oData.results[0].VESSELPHONENUM;
						oCont.getView().byId("app2").setValue(appvessl);
						oCont.getView().byId("app1").setValue(appimo);
						oCont.getView().byId("app16").setValue(appswdt);
						oCont.getView().byId("app17").setValue(appnrt);
						oCont.getView().byId("app18").setValue(appgrt);
						oCont.getView().byId("app19").setValue(apploa);
						oCont.getView().byId("app21").setValue(appvesselemail);
						oCont.getView().byId("app22").setValue(appvesselphonenum);

						oCont.getView().byId("app6").setValue(app6);
						oCont.getView().byId("app7").setValue(app7);
						oCont.getView().byId("app8").setValue(app8);
						oCont.getView().byId("app9").setValue(app9);
						oCont.getView().byId("app10").setValue(app10);
						oCont.getView().byId("app11").setValue(app11);
						oCont.getView().byId("app12").setValue(app12);
						oCont.getView().byId("app13").setValue(app13);
						oCont.getView().byId("app14").setValue(app14);
						oCont.getView().byId("app15").setValue(app15);
						oCont.getView().byId("app20").setValue(app20);
						oCont.getView().byId("app24").setValue(app24);
						oCont.getView().byId("app25").setValue(app25);
						oCont.getView().byId("app26").setValue(app26);
					}
				});
			}
			this.byId("SavePendingEditVessel").setVisible(true);
			this.byId("cbtn").setVisible(true);
			this.byId("panel1").setVisible(false);
			this.byId("panel3").setVisible(false);
			this.byId("cbtn").setVisible(true);
			this.byId("sbtn").setVisible(false);
			this.byId("abtn").setVisible(false);
			this.byId("EditVessel").setVisible(false);
			//this.byId("existingcustomerid").setSelected(true);
			//this.existingcustomerid();

		},

		newcustomer: function () {

			/* new Customer form comes to true when click new customer id */
			this.byId("sbtn").setVisible(true);
			this.byId("existcus").setEditable(false);
			this.byId("existcus").setValue("");
			this.byId("SaveEditVessel").setVisible(false);
			this.byId("EditVessel").setVisible(false);
			var customerid = this.byId("new1").setVisible(true);
			var imo = this.byId("new2").setVisible(true);
			//	var vesselname = this.byId("new3").setVisible(true);
			//	var dan = this.byId("new4").setVisible(true);
			//	var portname = this.byId("new5").setVisible(true);
			var eta = this.byId("new6").setVisible(false);
			var mmsi = this.byId("new7").setVisible(true);
			var callsign = this.byId("new8").setVisible(true);
			var flag = this.byId("new9").setVisible(true);
			var vesseltype = this.byId("new10").setVisible(true);
			var classification = this.byId("new11").setVisible(true);
			var piclub = this.byId("new12").setVisible(true);
			var vesowner = this.byId("new13").setVisible(true);
			var vesowneremail = this.byId("new14").setVisible(true);
			var vesschar = this.byId("new15").setVisible(true);
			var vesscharemail = this.byId("new16").setVisible(true);
			var summerdead = this.byId("new17").setVisible(true);
			var net = this.byId("new18").setVisible(true);
			var gross = this.byId("new19").setVisible(true);
			var length = this.byId("new20").setVisible(true);
			var yearbuilt = this.byId("new21").setVisible(true);
			var vessphone = this.byId("new22").setVisible(true);
			//	var vessemail = this.byId("new23").setVisible(true);
			var portcall = this.byId("new24").setVisible(true);
			var captain = this.byId("new25").setVisible(true);
			var others = this.byId("new26").setVisible(true);
			this.byId("ipp3").setVisible(false);
			/* Existing Customer forms go to false when click  new customer radio button */

			var customerid = this.byId("exist1").setVisible(false);
			var imo = this.byId("exist2").setVisible(false);
			//	var vesselname = this.byId("exist3").setVisible(false);
			//	var dan = this.byId("exist4").setVisible(false);
			//	var portname = this.byId("exist5").setVisible(false);
			var eta = this.byId("exist6").setVisible(false);
			var mmsi = this.byId("exist7").setVisible(false);
			var callsign = this.byId("exist8").setVisible(false);
			var flag = this.byId("exist9").setVisible(false);
			var vesseltype = this.byId("exist10").setVisible(false);
			var classification = this.byId("exist11").setVisible(false);
			var piclub = this.byId("exist12").setVisible(false);
			var vesowner = this.byId("exist13").setVisible(false);
			var vesowneremail = this.byId("exist14").setVisible(false);
			var vesschar = this.byId("exist15").setVisible(false);
			var vesscharemail = this.byId("exist16").setVisible(false);
			var summerdead = this.byId("exist17").setVisible(false);
			var net = this.byId("exist18").setVisible(false);
			var gross = this.byId("exist19").setVisible(false);
			var length = this.byId("exist20").setVisible(false);
			var yearbuilt = this.byId("exist21").setVisible(false);
			var vessphone = this.byId("exist22").setVisible(false);
			//	var vessemail = this.byId("exist23").setVisible(false);
			var portcall = this.byId("exist24").setVisible(false);
			var captain = this.byId("exist25").setVisible(false);
			var others = this.byId("exist26").setVisible(false);

			var vesselname = this.byId("ex2").setEditable(false);
			//	var dan = this.byId("ex3").setEditable(false);
			//	var portname = this.byId("ex4").setEditable(false);
			//	var eta = this.byId("ex5").setEditable(false);
			//	var mmsi = this.byId("ex6").setEditable(false);
			var callsign = this.byId("ex7").setEditable(false);
			var flag = this.byId("ex8").setEditable(false);
			var vesseltype = this.byId("ex9").setEditable(false);
			var classification = this.byId("ex10").setEditable(false);
			var piclub = this.byId("ex11").setEditable(false);
			var vesowner = this.byId("ex12").setEditable(false);
			var vesowneremail = this.byId("ex13").setEditable(false);
			var vesschar = this.byId("ex14").setEditable(false);
			var vesscharemail = this.byId("ex15").setEditable(false);
			var summerdead = this.byId("ex16").setEditable(false);
			var net = this.byId("ex17").setEditable(false);
			var gross = this.byId("ex18").setEditable(false);
			var length = this.byId("ex19").setEditable(false);
			var yearbuilt = this.byId("ex20").setEditable(false);
			var vessphone = this.byId("ex21").setEditable(false);
			var vessemail = this.byId("ex22").setEditable(false);
			//	var portcall = this.byId("ex23").setEditable(false);
			var captain = this.byId("ex24").setEditable(false);
			var others = this.byId("ex25").setEditable(false);
			var remarks = this.byId("ex26").setEditable(false);

			this.byId("ex1").setValue("");
			var vesselname = this.byId("ex2").setValue("");
			//	var dan = this.byId("ex3").setValue("");
			//	var portname = this.byId("ex4").setValue("");
			//	var eta = this.byId("ex5").setValue("");
			//	var mmsi = this.byId("ex6").setValue("");
			var callsign = this.byId("ex7").setValue("");
			var flag = this.byId("ex8").setValue("");
			var vesseltype = this.byId("ex9").setValue("");
			var classification = this.byId("ex10").setValue("");
			var piclub = this.byId("ex11").setValue("");
			var vesowner = this.byId("ex12").setValue("");
			var vesowneremail = this.byId("ex13").setValue("");
			var vesschar = this.byId("ex14").setValue("");
			var vesscharemail = this.byId("ex15").setValue("");
			var summerdead = this.byId("ex16").setValue("");
			var net = this.byId("ex17").setValue("");
			var gross = this.byId("ex18").setValue("");
			var length = this.byId("ex19").setValue("");
			var yearbuilt = this.byId("ex20").setValue("");
			var vessphone = this.byId("ex21").setValue("");
			var vessemail = this.byId("ex22").setValue("");
			//	var portcall = this.byId("ex23").setValue("");
			var captain = this.byId("ex24").setValue("");
			var others = this.byId("ex25").setValue("");
			var remarks = this.byId("ex26").setValue("");

		},

		existingcustomerid: function () {

			/* New Customer forms go to false when click  existing customer radio button */
			this.byId("existcus").setEditable(true);
			this.byId("sbtn").setVisible(false);
			var customerid = this.byId("new1").setVisible(false);
			var imo = this.byId("new2").setVisible(false);
				this.byId("ipp3").setVisible(false);
			//	var vesselname = this.byId("new3").setVisible(false);
			//	var dan = this.byId("new4").setVisible(false);
			//	var portname = this.byId("new5").setVisible(false);
			var eta = this.byId("new6").setVisible(false);
			var mmsi = this.byId("new7").setVisible(false);
			var callsign = this.byId("new8").setVisible(false);
			var flag = this.byId("new9").setVisible(false);
			var vesseltype = this.byId("new10").setVisible(false);
			var classification = this.byId("new11").setVisible(false);
			var piclub = this.byId("new12").setVisible(false);
			var vesowner = this.byId("new13").setVisible(false);
			var vesowneremail = this.byId("new14").setVisible(false);
			var vesschar = this.byId("new15").setVisible(false);
			var vesscharemail = this.byId("new16").setVisible(false);
			var summerdead = this.byId("new17").setVisible(false);
			var net = this.byId("new18").setVisible(false);
			var gross = this.byId("new19").setVisible(false);
			var length = this.byId("new20").setVisible(false);
			var yearbuilt = this.byId("new21").setVisible(false);
			var vessphone = this.byId("new22").setVisible(false);
			//	var vessemail = this.byId("new23").setVisible(false);
			var portcall = this.byId("new24").setVisible(false);
			var captain = this.byId("new25").setVisible(false);
			var others = this.byId("new26").setVisible(false);

			/* Existing Customer form comes to true when click existing customer id */

			this.byId("exist1").setVisible(true);
			this.byId("exist2").setVisible(true);
			//	var vesselname = this.byId("exist3").setVisible(true);
			//	var dan = this.byId("exist4").setVisible(true);
			//	var portname = this.byId("exist5").setVisible(true);
			var eta = this.byId("exist6").setVisible(false);
			var mmsi = this.byId("exist7").setVisible(true);
			var callsign = this.byId("exist8").setVisible(true);
			var flag = this.byId("exist9").setVisible(true);
			var vesseltype = this.byId("exist10").setVisible(true);
			var classification = this.byId("exist11").setVisible(true);
			var piclub = this.byId("exist12").setVisible(true);
			var vesowner = this.byId("exist13").setVisible(true);
			var vesowneremail = this.byId("exist14").setVisible(true);
			var vesschar = this.byId("exist15").setVisible(true);
			var vesscharemail = this.byId("exist16").setVisible(true);
			var summerdead = this.byId("exist17").setVisible(true);
			var net = this.byId("exist18").setVisible(true);
			var gross = this.byId("exist19").setVisible(true);
			var length = this.byId("exist20").setVisible(true);
			var yearbuilt = this.byId("exist21").setVisible(true);
			var vessphone = this.byId("exist22").setVisible(true);
			//	var vessemail = this.byId("exist23").setVisible(true);
			var portcall = this.byId("exist24").setVisible(true);
			var captain = this.byId("exist25").setVisible(true);
			var others = this.byId("exist26").setVisible(true);

		},

		EditVessel: function () {

			this.byId("SaveEditVessel").setVisible(true);
			this.byId("EditVessel").setVisible(false);
			//	var customerid = this.byId("ex").setEditable(true);			
			//	var imo = this.byId("ex1").setEditable(true);
			var vesselname = this.byId("ex2").setEditable(true);
			//		var dan = this.byId("ex3").setEditable(true);
			//		var portname = this.byId("ex4").setEditable(true);
			//		var eta = this.byId("ex5").setEditable(true);
			//	var mmsi = this.byId("ex6").setEditable(true);
			var callsign = this.byId("ex7").setEditable(true);
			var flag = this.byId("ex8").setEditable(true);
			var vesseltype = this.byId("ex9").setEditable(true);
			var classification = this.byId("ex10").setEditable(true);
			var piclub = this.byId("ex11").setEditable(true);
			var vesowner = this.byId("ex12").setEditable(true);
			var vesowneremail = this.byId("ex13").setEditable(true);
			var vesschar = this.byId("ex14").setEditable(true);
			var vesscharemail = this.byId("ex15").setEditable(true);
			var summerdead = this.byId("ex16").setEditable(true);
			var net = this.byId("ex17").setEditable(true);
			var gross = this.byId("ex18").setEditable(true);
			var length = this.byId("ex19").setEditable(true);
			var yearbuilt = this.byId("ex20").setEditable(true);
			var vessphone = this.byId("ex21").setEditable(true);
			var vessemail = this.byId("ex22").setEditable(true);
			//	var portcall = this.byId("ex23").setEditable(true);
			var captain = this.byId("ex24").setEditable(true);
			var others = this.byId("ex25").setEditable(true);
			var remarks = this.byId("ex26").setEditable(true);

		},
		SaveEditVessel: function () {

			var imo = this.byId("ex1").getValue();
			var vesselname = this.byId("ex2").getValue();
			var customid = this.byId("existcus").getValue();
			console.log(customid);
			//	var dan = this.byId("ex3").getValue();
			//	var portname = this.byId("ex4").getValue();
			//	var eta = this.byId("ex5").getValue();
			var mmsi = this.byId("ex6").getValue();
			var callsign = this.byId("ex7").getValue();
			var flag = this.byId("ex8").getValue();
			var vesseltype = this.byId("ex9").getValue();
			var classification = this.byId("ex10").getValue();
			var piclub = this.byId("ex11").getValue();
			var vesowner = this.byId("ex12").getValue();
			var vesowneremail = this.byId("ex13").getValue();
			var vesschar = this.byId("ex14").getValue();
			var vesscharemail = this.byId("ex15").getValue();
			var summerdead = this.byId("ex16").getValue();
			var net = this.byId("ex17").getValue();
			var gross = this.byId("ex18").getValue();
			var length = this.byId("ex19").getValue();
			var yearbuilt = this.byId("ex20").getValue();
			var vessphone = this.byId("ex21").getValue();
			var vessemail = this.byId("ex22").getValue();
			//	var portcall = this.byId("ex23").getValue();
			var captain = this.byId("ex24").getValue();
			var others = this.byId("ex25").getValue();
			var remarks = this.byId("ex26").getValue();
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var oFilterscid = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, customid)];
			var sPath = "/Customers";
			oModel.read(sPath, {
				filters: oFilterscid,
				success: function (oData, oResponse) {
					Custnameexist = oData.results[0].CUSTOMERNAME;
					console.log("Custnameexist :", Custnameexist);

				},
			});

			var ocontroller = this;
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Are you sure to edit vessel?", {
					//  icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {

						if (oAction == "YES") {

							/*	var dateformat = inputpp3.slice(0,10);
				    var timeformat = inputpp3.slice(11,19);
				
			    	var dtformat =dateformat+"T"+ timeformat;
		 	 				*/

							var postPayLoad = {
								CUSTOMERID: customeridTT,
								VESSELNAME: vesselname,
								IMO: imo,
								MMSI: mmsi,
								ASSIGNTO: asignto,
								CALLSIGN: callsign,
								FLAG: flag,
								VESSELTYPE: vesseltype,
								CLASSIFICATION: classification,
								PICLUB: piclub,
								VESSELOWNER: vesowner,
								OWNEREMAILID: vesowneremail,
								CHARTERERNAME: vesschar,
								CHARTEREREMAILID: vesscharemail,
								SWDT: summerdead,
								NRT: net,
								GRT: gross,
								LOA: length,
								YEARBUILT: yearbuilt,
								VESSELEMAILID: vessemail,
								VESSELPHONENUM: vessphone,
								CAPTAINNAME: captain,
								OTHERS: others,
								REMARKS: remarks,
								CUSTOMERNAME: Custnameexist,
								VESSELSTATUS: ves_status,
								COUNT: Countt

							};
							console.log("postPayLoad :", postPayLoad)

							var sPath = "/MyFleet(IMO='" + imo + "',CUSTOMERID='" + customeridTT + "')";

							var oModeladdvessel = ocontroller.getView().getModel();

							oModeladdvessel.update(sPath, postPayLoad, {

								success: function (oData, oResponse) {

									sap.m.MessageBox.confirm("Vessel edited successfuly", {
										icon: sap.m.MessageBox.Icon.SUCCESS,
										title: "Success",
										actions: [sap.m.MessageBox.Action.OK],
										onClose: function (oAction) {

											if (oAction == "OK") {
												var otable = ocontroller.byId("itb1");
												ocontroller.byId("panel1").setVisible(true);
												ocontroller.byId("panel2").setVisible(false);
												ocontroller.byId("panel3").setVisible(false);
												ocontroller.byId("abtn").setVisible(true);
												ocontroller.byId("cbtn").setVisible(false);
												ocontroller.byId("sbtn").setVisible(false);
												ocontroller.byId("SaveEditVessel").setVisible(false);
												ocontroller.byId("idOperationTabel1").getBinding("items").refresh();

												ocontroller.byId("ex1").setValue("");
												ocontroller.byId("ex2").setValue("");
												//		ocontroller.byId("ex3").setValue("");
												//		ocontroller.byId("ex4").setValue("");
												//		ocontroller.byId("ex5").setValue("");
												ocontroller.byId("ex6").setValue("");
												ocontroller.byId("ex7").setValue("");
												ocontroller.byId("ex8").setValue("");
												ocontroller.byId("ex9").setValue("");
												ocontroller.byId("ex10").setValue("");
												ocontroller.byId("ex11").setValue("");
												ocontroller.byId("ex12").setValue("");
												ocontroller.byId("ex13").setValue("");
												ocontroller.byId("ex14").setValue("");
												ocontroller.byId("ex15").setValue("");
												ocontroller.byId("ex16").setValue("");
												ocontroller.byId("ex17").setValue("");
												ocontroller.byId("ex18").setValue("");
												ocontroller.byId("ex19").setValue("");
												ocontroller.byId("ex20").setValue("");
												ocontroller.byId("ex21").setValue("");
												ocontroller.byId("ex22").setValue("");
												//	ocontroller.byId("ex23").setValue("");
												ocontroller.byId("ex24").setValue("");
												ocontroller.byId("ex25").setValue("");
												ocontroller.byId("ex26").setValue("");

												ocontroller.byId("ex1").setEditable(false);
												ocontroller.byId("ex2").setEditable(false);
												//	ocontroller.byId("ex3").setEditable(false);
												//	ocontroller.byId("ex4").setEditable(false);
												//	ocontroller.byId("ex5").setEditable(false);
												ocontroller.byId("ex6").setEditable(false);
												ocontroller.byId("ex7").setEditable(false);
												ocontroller.byId("ex8").setEditable(false);
												ocontroller.byId("ex9").setEditable(false);
												ocontroller.byId("ex10").setEditable(false);
												ocontroller.byId("ex11").setEditable(false);
												ocontroller.byId("ex12").setEditable(false);
												ocontroller.byId("ex13").setEditable(false);
												ocontroller.byId("ex14").setEditable(false);
												ocontroller.byId("ex15").setEditable(false);
												ocontroller.byId("ex16").setEditable(false);
												ocontroller.byId("ex17").setEditable(false);
												ocontroller.byId("ex18").setEditable(false);
												ocontroller.byId("ex19").setEditable(false);
												ocontroller.byId("ex20").setEditable(false);
												ocontroller.byId("ex21").setEditable(false);
												ocontroller.byId("ex22").setEditable(false);
												//	ocontroller.byId("ex23").setEditable(false);
												ocontroller.byId("ex24").setEditable(false);
												ocontroller.byId("ex25").setEditable(false);
												ocontroller.byId("ex26").setEditable(false);

											}
										}.bind(ocontroller)
									});

								},

								error: function (oResponse) {
									sap.m.MessageToast.show("Posting failed");

								}
							});

						}
					}
				});

		},
		SavePendingEditVessel: function () {

			var imo = this.byId("pen1").getValue();
			var vesselname = this.byId("pen2").getValue();
			//	var dan = this.byId("pen3").getValue();
			//	var portname = this.byId("pen4").getValue();
			//	var eta = this.byId("pen5").getValue();
			var mmsi = this.byId("pen6").getValue();
			var callsign = this.byId("pen7").getValue();
			var flag = this.byId("pen8").getValue();
			var vesseltype = this.byId("pen9").getValue();
			var classification = this.byId("pen10").getValue();
			var piclub = this.byId("pen11").getValue();
			var vesowner = this.byId("pen12").getValue();
			var vesowneremail = this.byId("pen13").getValue();
			var vesschar = this.byId("pen14").getValue();
			var vesscharemail = this.byId("pen15").getValue();
			var summerdead = this.byId("pen16").getValue();
			var net = this.byId("pen17").getValue();
			var gross = this.byId("pen18").getValue();
			var length = this.byId("pen19").getValue();
			var yearbuilt = this.byId("pen20").getValue();
			var vessphone = this.byId("pen21").getValue();
			var vessemail = this.byId("pen22").getValue();
			//	var portcall = this.byId("pen23").getValue();
			var captain = this.byId("pen24").getValue();
			var others = this.byId("pen25").getValue();
			var remarks = this.byId("pen26").getValue();

			var ocontroller = this;
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Are you sure to edit vessel?", {
					//  icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {

						if (oAction == "YES") {

							/*	var dateformat = inputpp3.slice(0,10);
				    var timeformat = inputpp3.slice(11,19);
				
			    	var dtformat =dateformat+"T"+ timeformat;
		 	 				*/

							var postPayLoad = {
								CUSTOMERID: CUSid,
								VESSELNAME: vesselname,
								IMO: imo,
								MMSI: mmsi,
								ASSIGNTO: "",
								CALLSIGN: callsign,
								FLAG: flag,
								VESSELTYPE: vesseltype,
								CLASSIFICATION: classification,
								PICLUB: piclub,
								VESSELOWNER: vesowner,
								OWNEREMAILID: vesowneremail,
								CHARTERERNAME: vesschar,
								CHARTEREREMAILID: vesscharemail,
								SWDT: summerdead,
								NRT: net,
								GRT: gross,
								LOA: length,
								YEARBUILT: yearbuilt,
								VESSELEMAILID: vessemail,
								VESSELPHONENUM: vessphone,
								CAPTAINNAME: captain,
								OTHERS: others,
								REMARKS: remarks,
								CUSTOMERNAME: cussnames,
								VESSELSTATUS: "Approved"

							};
							console.log("postPayLoad :", postPayLoad)

							var sPath = "/MyFleet(IMO='" + imo + "',CUSTOMERID='" + CUSid + "')";

							var oModeladdvessel = ocontroller.getView().getModel();

							oModeladdvessel.update(sPath, postPayLoad, {

								success: function (oData, oResponse) {

									sap.m.MessageBox.confirm("Vessel edited successfuly", {
										icon: sap.m.MessageBox.Icon.SUCCESS,
										title: "Success",
										actions: [sap.m.MessageBox.Action.OK],
										onClose: function (oAction) {

											if (oAction == "OK") {
												var otable = ocontroller.byId("itb1");
												ocontroller.byId("panel1").setVisible(true);
												ocontroller.byId("panel2").setVisible(false);
												ocontroller.byId("panel3").setVisible(false);
												ocontroller.byId("abtn").setVisible(true);
												ocontroller.byId("cbtn").setVisible(false);
												ocontroller.byId("sbtn").setVisible(false);
												ocontroller.byId("approvedpanel").setVisible(false);
												ocontroller.byId("pendingpanel").setVisible(false);
												ocontroller.byId("SavePendingEditVessel").setVisible(false);

												ocontroller.byId("idOperationTabel1").getBinding("items").refresh();
											}
										}.bind(ocontroller)
									});

								},

								error: function (oResponse) {
									sap.m.MessageToast.show("Posting failed");

								}
							});

						}
					}
				});
		},
		addcancelDialog: function () {

			var ocontroller = this;
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Are you sure to cancel?", {
					//  icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {

						if (oAction == "YES") {
							var otable = ocontroller.byId("itb1");
							ocontroller.byId("panel1").setVisible(true);
							ocontroller.byId("panel2").setVisible(false);
							ocontroller.byId("panel3").setVisible(false);

							ocontroller.byId("abtn").setVisible(true);
							ocontroller.byId("cbtn").setVisible(false);
							ocontroller.byId("sbtn").setVisible(false);
							ocontroller.byId("approvedpanel").setVisible(false);
							ocontroller.byId("pendingpanel").setVisible(false);
							ocontroller.byId("SavePendingEditVessel").setVisible(false);
							//	ocontroller.byId("okbtn1").setVisible(false);
							//	ocontroller.byId("cancelbtn1").setVisible(false);
							//	ocontroller.byId("savebtn1").setVisible(false);
							//	ocontroller.byId("downid").setVisible(false);
							//	ocontroller.byId("reqid").setVisible(false);
							ocontroller.byId("EditVessel").setVisible(false);
							ocontroller.byId("SaveEditVessel").setVisible(false);
							//	 ocontroller.byId("newcustomer").setValue("");
							ocontroller.byId("customerid").setValue("");
							ocontroller.byId("imonumber").setValue("");
							ocontroller.byId("op1").setValue("");
							//	ocontroller.byId("op2").setValue("");
							//	ocontroller.byId("op3").setValue("");
							//	ocontroller.byId("op4").setValue("");
							ocontroller.byId("ipp3").setValue("");
							ocontroller.byId("op6").setValue("");
							ocontroller.byId("op7").setValue("");
							ocontroller.byId("op8").setValue("");
							ocontroller.byId("op9").setValue("");
							ocontroller.byId("op9i").setValue("");
							ocontroller.byId("op10").setValue("");
							ocontroller.byId("Emailadd").setValue("");
							ocontroller.byId("charname").setValue("");
							ocontroller.byId("op10i").setValue("");
							ocontroller.byId("op11").setValue("");
							ocontroller.byId("op12").setValue("");
							ocontroller.byId("op13").setValue("");
							ocontroller.byId("op14").setValue("");
							ocontroller.byId("op15").setValue("");
							ocontroller.byId("op16").setValue("");
							ocontroller.byId("op16i").setValue("");
							//	ocontroller.byId("op17").setValue("");
							ocontroller.byId("op18").setValue("");
							ocontroller.byId("op19").setValue("");
							ocontroller.byId("op20").setValue("");
							ocontroller.byId("existcus").setValue("");

							var imo = ocontroller.byId("ex1").setValue();
							var vesselname = ocontroller.byId("ex2").setValue();
							//	var dan = ocontroller.byId("ex3").setValue();
							//	var portname = ocontroller.byId("ex4").setValue();
							//	var eta = ocontroller.byId("ex5").setValue();
							var mmsi = ocontroller.byId("ex6").setValue();
							var callsign = ocontroller.byId("ex7").setValue();
							var flag = ocontroller.byId("ex8").setValue();
							var vesseltype = ocontroller.byId("ex9").setValue();
							var classification = ocontroller.byId("ex10").setValue();
							var piclub = ocontroller.byId("ex11").setValue();
							var vesowner = ocontroller.byId("ex12").setValue();
							var vesowneremail = ocontroller.byId("ex13").setValue();
							var vesschar = ocontroller.byId("ex14").setValue();
							var vesscharemail = ocontroller.byId("ex15").setValue();
							var summerdead = ocontroller.byId("ex16").setValue();
							var net = ocontroller.byId("ex17").setValue();
							var gross = ocontroller.byId("ex18").setValue();
							var length = ocontroller.byId("ex19").setValue();
							var yearbuilt = ocontroller.byId("ex20").setValue();
							var vessphone = ocontroller.byId("ex21").setValue();
							var vessemail = ocontroller.byId("ex22").setValue();
							//	var portcall = ocontroller.byId("ex23").setValue();
							var captain = ocontroller.byId("ex24").setValue();
							var others = ocontroller.byId("ex25").setValue();
							var remarks = ocontroller.byId("ex26").setValue();

						} else {

						}

					}
				});
		},

		Backtolist: function () {

			var ocontroller = this;
			/*	jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Are you sure to cancel?", {
						//  icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {

							if (oAction == "YES") {*/
			var otable = ocontroller.byId("itb1");
			ocontroller.byId("panel1").setVisible(true);
			ocontroller.byId("panel2").setVisible(false);
			ocontroller.byId("panel3").setVisible(false);

			ocontroller.byId("abtn").setVisible(true);
			ocontroller.byId("cbtn").setVisible(false);
			ocontroller.byId("sbtn").setVisible(false);
			ocontroller.byId("approvedpanel").setVisible(false);
			ocontroller.byId("pendingpanel").setVisible(false);
			ocontroller.byId("SavePendingEditVessel").setVisible(false);
			//	ocontroller.byId("okbtn1").setVisible(false);
			//	ocontroller.byId("cancelbtn1").setVisible(false);
			//	ocontroller.byId("savebtn1").setVisible(false);
			//	ocontroller.byId("downid").setVisible(false);
			//	ocontroller.byId("reqid").setVisible(false);
			ocontroller.byId("EditVessel").setVisible(false);
			ocontroller.byId("SaveEditVessel").setVisible(false);
			//	 ocontroller.byId("newcustomer").setValue("");
			ocontroller.byId("customerid").setValue("");
			ocontroller.byId("imonumber").setValue("");
			ocontroller.byId("op1").setValue("");
			//	ocontroller.byId("op2").setValue("");
			//	ocontroller.byId("op3").setValue("");
			//	ocontroller.byId("op4").setValue("");
			ocontroller.byId("ipp3").setValue("");
			ocontroller.byId("op6").setValue("");
			ocontroller.byId("op7").setValue("");
			ocontroller.byId("op8").setValue("");
			ocontroller.byId("op9").setValue("");
			ocontroller.byId("op9i").setValue("");
			ocontroller.byId("op10").setValue("");
			ocontroller.byId("Emailadd").setValue("");
			ocontroller.byId("charname").setValue("");
			ocontroller.byId("op10i").setValue("");
			ocontroller.byId("op11").setValue("");
			ocontroller.byId("op12").setValue("");
			ocontroller.byId("op13").setValue("");
			ocontroller.byId("op14").setValue("");
			ocontroller.byId("op15").setValue("");
			ocontroller.byId("op16").setValue("");
			ocontroller.byId("op16i").setValue("");
			//		ocontroller.byId("op17").setValue("");
			ocontroller.byId("op18").setValue("");
			ocontroller.byId("op19").setValue("");
			ocontroller.byId("op20").setValue("");
			ocontroller.byId("existcus").setValue("");

			var imo = ocontroller.byId("ex1").setValue();
			var vesselname = ocontroller.byId("ex2").setValue();
			//	var dan = ocontroller.byId("ex3").setValue();
			//	var portname = ocontroller.byId("ex4").setValue();
			//	var eta = ocontroller.byId("ex5").setValue();
			var mmsi = ocontroller.byId("ex6").setValue();
			var callsign = ocontroller.byId("ex7").setValue();
			var flag = ocontroller.byId("ex8").setValue();
			var vesseltype = ocontroller.byId("ex9").setValue();
			var classification = ocontroller.byId("ex10").setValue();
			var piclub = ocontroller.byId("ex11").setValue();
			var vesowner = ocontroller.byId("ex12").setValue();
			var vesowneremail = ocontroller.byId("ex13").setValue();
			var vesschar = ocontroller.byId("ex14").setValue();
			var vesscharemail = ocontroller.byId("ex15").setValue();
			var summerdead = ocontroller.byId("ex16").setValue();
			var net = ocontroller.byId("ex17").setValue();
			var gross = ocontroller.byId("ex18").setValue();
			var length = ocontroller.byId("ex19").setValue();
			var yearbuilt = ocontroller.byId("ex20").setValue();
			var vessphone = ocontroller.byId("ex21").setValue();
			var vessemail = ocontroller.byId("ex22").setValue();
			//	var portcall = ocontroller.byId("ex23").setValue();
			var captain = ocontroller.byId("ex24").setValue();
			var others = ocontroller.byId("ex25").setValue();
			var remarks = ocontroller.byId("ex26").setValue();

			/*	} else {

						}

					}
				});*/

		},

		vesselexpensespress: function (oEvent) {
			var orderid = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERID");
			invoiceid = oEvent.getParameter("listItem").getBindingContext().getProperty("INVOICEID");
			invoicedate = oEvent.getParameter("listItem").getBindingContext().getProperty("INVOICEDATE");
			// var oCont = this;
			this.getView().byId("Customer").setValue(invoiceid);
			this.getView().byId("DP1").setValue(invoicedate);
			var oFilterscid = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid),
				new sap.ui.model.Filter("INVOICEID", sap.ui.model.FilterOperator.EQ, invoiceid)
			];
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var od_vs_table = this.byId("idOrderDetailsvsl");
			var oTemp11 = new sap.m.ColumnListItem({
				type: sap.m.ListType.Active,
				cells: [new sap.m.Text({
						text: "{ITEMNO}"
					}),
					new sap.m.Text({
						text: "{INQUIRYNUMBER}"
					}),
					new sap.m.Text({
						text: "{QTY}"
					}),
					new sap.m.ObjectNumber({
						number: "{TOTALPRICE}",
						unit: "{CURRENCY}"
					}),
				],
			});
			od_vs_table.bindAggregation("items", {
				path: "/OrderDetails",
				template: oTemp11,
				filters: oFilterscid
			});

			var sPath = "/OrderDetails";
			oModel.read(sPath, {
				filters: oFilterscid,
				success: function (oData, oResponse) {
					console.log(oData);

					/*	oCont.getView().byId("expensecustomerid").setText(CUSTOMERID);
						oCont.getView().byId("expensevesselname").setText(VESSELNAME);
						oCont.getView().byId("expenseportname").setText(PORTNAME);
						oCont.getView().byId("expensedanumber").setText(DANUMBER);
				

						if (oData.results[0].STATUS === 'Open') {
							oCont.getView().byId("expensestatus").setState('Warning');
						} else if (oData.results[0].STATUS === 'Released') {
							oCont.getView().byId("expensestatus").setState('Success');
						}
						oCont.getView().byId("expensestatus").setText(oData.results[0].STATUS);*/

				}
			});

		},

		savevessel: function () {
			//	var da_random = Math.floor(1000000 + Math.random() * 9000000);
			var customerid = this.byId("customerid").getValue();
			var imo = this.byId("imonumber").getValue();
			var vesselname = this.byId("op1").getValue();
			//	var dan = this.byId("op2").getValue();
			//	var portname = this.byId("op3").getValue();
			//	var eta = this.byId("op4").getValue();
			var mmsi = this.byId("ipp3").getValue();
			var callsign = this.byId("op6").getValue();
			var flag = this.byId("op7").getValue();
			var vesseltype = this.byId("op8").getValue();
			var classification = this.byId("op9").getValue();
			var piclub = this.byId("op9i").getValue();
			var vesowner = this.byId("op10").getValue();
			var vesowneremail = this.byId("Emailadd").getValue();
			var vesschar = this.byId("charname").getValue();
			var vesscharemail = this.byId("op10i").getValue();
			var summerdead = this.byId("op11").getValue();
			var net = this.byId("op12").getValue();
			var gross = this.byId("op13").getValue();
			var length = this.byId("op14").getValue();
			var yearbuilt = this.byId("op15").getValue();
			var vessphone = this.byId("op16").getValue();
			var vessemail = this.byId("op16i").getValue();
			//	var portcall = this.byId("op17").getValue();
			var captain = this.byId("op18").getValue();
			var others = this.byId("op19").getValue();
			var remarks = this.byId("op20").getValue();
			
			if(summerdead === "" || net === "" || gross ==="")
			{
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
				
			}
			else
			{

			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var oFilterscid = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, customerid)];
			var sPath = "/Customers";
			oModel.read(sPath, {
				filters: oFilterscid,
				success: function (oData, oResponse) {
					Custnamee = oData.results[0].CUSTOMERNAME;
					console.log("Custnamee :", Custnamee);

				},
			});

			if (imo === "") {
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {

				var ocontroller = this;
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Are you sure to add vessel?", {
						//  icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {

							if (oAction == "YES") {

								var postPayLoad = {

									IMO: imo,
									CUSTOMERID: customerid,
									CUSTOMERNAME: Custnamee,
									VESSELNAME: vesselname,
									ASSIGNTO: "",
									MMSI: mmsi,
									CALLSIGN: callsign,
									FLAG: flag,
									VESSELTYPE: vesseltype,
									CLASSIFICATION: classification,
									PICLUB: piclub,
									VESSELOWNER: vesowner,
									OWNEREMAILID: vesowneremail,
									CHARTERERNAME: vesschar,
									CHARTEREREMAILID: vesscharemail,
									SWDT: summerdead,
									NRT: net,
									GRT: gross,
									LOA: length,
									YEARBUILT: yearbuilt,
									VESSELEMAILID: vessemail,
									VESSELPHONENUM: vessphone,
									CAPTAINNAME: captain,
									OTHERS: others,
									REMARKS: remarks,
									VESSELSTATUS: "Pending"

								};

								console.log("postPayLoad :", postPayLoad)

								var sPath = "/MyFleet";

								var oModeladdvessel = ocontroller.getView().getModel();

								oModeladdvessel.create(sPath, postPayLoad, {

									success: function (oData, oResponse) {

										sap.m.MessageBox.confirm("Vessel added successfuly", {
											icon: sap.m.MessageBox.Icon.SUCCESS,
											title: "Success",
											actions: [sap.m.MessageBox.Action.OK],
											onClose: function (oAction) {

												if (oAction == "OK") {
													var otable = ocontroller.byId("itb1");
													ocontroller.byId("panel1").setVisible(true);
													ocontroller.byId("panel2").setVisible(false);
													ocontroller.byId("panel3").setVisible(false);
													ocontroller.byId("abtn").setVisible(true);
													ocontroller.byId("cbtn").setVisible(false);
													ocontroller.byId("sbtn").setVisible(false);
													ocontroller.byId("EditVessel").setVisible(false);
													ocontroller.byId("customerid").setValue("");
													ocontroller.byId("imonumber").setValue("");
													ocontroller.byId("op1").setValue("");
													//	ocontroller.byId("op2").setValue("");
													//	ocontroller.byId("op3").setValue("");
													//	ocontroller.byId("op4").setValue("");
													ocontroller.byId("ipp3").setValue("");
													ocontroller.byId("op6").setValue("");
													ocontroller.byId("op7").setValue("");
													ocontroller.byId("op8").setValue("");
													ocontroller.byId("op9").setValue("");
													ocontroller.byId("op9i").setValue("");
													ocontroller.byId("op10").setValue("");
													ocontroller.byId("Emailadd").setValue("");
													ocontroller.byId("charname").setValue("");
													ocontroller.byId("op10i").setValue("");
													ocontroller.byId("op11").setValue("");
													ocontroller.byId("op12").setValue("");
													ocontroller.byId("op13").setValue("");
													ocontroller.byId("op14").setValue("");
													ocontroller.byId("op15").setValue("");
													ocontroller.byId("op16").setValue("");
													ocontroller.byId("op16i").setValue("");
													//	ocontroller.byId("op17").setValue("");
													ocontroller.byId("op18").setValue("");
													ocontroller.byId("op19").setValue("");
													ocontroller.byId("op20").setValue("");
												}
											}.bind(ocontroller)
										});

									},

									/*	error: function (oResponse) {
												sap.m.MessageToast.show("Posting failed");

											}
										});

									},*/
									error: function (oResponse) {
										sap.m.MessageToast.show("Posting failed");
										var addvesbutton = ocontroller.byId("abtn").setVisible(true);
										var canvesbutton = ocontroller.byId("cbtn").setVisible(false);
										var savvesbutton = ocontroller.byId("sbtn").setVisible(false);
										ocontroller.byId("itb1");
										ocontroller.byId("panel3").setVisible(false);
										ocontroller.byId("panel1").setVisible(true);
										ocontroller.clearaddvessel();

									}
								});

							}
						}
					});

			}
			}
		},

		/*  Search , Refresh  & Filter of Customer - Vessel List  */

		onSearchcustomer: function (oEvt) {

			/*		var SamTbl = this.getView().byId("Search").getValue();
	
		var filters = [];
			var SamTbl = SamTbl.toLowerCase();
	
				if(SamTbl && SamTbl.length > 0)
     {
		var oFilter = [new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, SamTbl),
		new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, SamTbl),
		new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, SamTbl)];
		
	 var allFilters = new sap.ui.model.Filter(oFilter, false);
   filters.push(allFilters);
     }
this.getView().byId("idOperationTabel1").getBinding("items").filter(filters, "Application");*/
			var SamTbl = oEvt.getParameter("newValue");
			var filters = new Array();
			/* var samtblarray= new Array();
			 samtblarray.push(SamTbl.to);
			 samtblarray.push(SamTbl.toLowerCase());*/
			var SamTbl = SamTbl.toUpperCase();
			var oFilter = new sap.ui.model.Filter([
				new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.Contains, SamTbl),
				new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.Contains, SamTbl),
				new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.Contains, SamTbl)
			]);
			filters = (oFilter);
			/*var listItem = this.byId("idOperationTabel1");*/
			var listItem = this.byId("idOperationTabel1");
			var binding = listItem.getBinding("items");
			binding.filter(filters);
		},

		refreshcustomerlist: function () {
			this.byId("RB3-0u").setSelected(true);
			var oTable11 = this.byId("idOperationTabel1");
			var oTemp11 = this.byId('idOperIncrementTable1');

			oTable11.bindAggregation("items", {
				path: "/MyFleet",
				template: oTemp11
			});
		},

		customerfilterCategories: function () {

			sap.ui.core.Fragment.byId("vesselfilterfragment", "ip22");
			sap.ui.core.Fragment.byId("vesselfilterfragment", "ip21");
			sap.ui.core.Fragment.byId("vesselfilterfragment", "ip2");

			vesfilter.open();
			this.cb12functioncustomer();
		},

		cb12functioncustomer: function () {

			var cc = sap.ui.core.Fragment.byId("vesselfilterfragment", "ip21");

			var cc1 = sap.ui.core.Fragment.byId("vesselfilterfragment", "ip22");

			var cc2 = sap.ui.core.Fragment.byId("vesselfilterfragment", "ip2");

			var oItems = new sap.ui.core.ListItem({
				key: "{CUSTOMERID}",
				text: "{CUSTOMERID}"
			});

			var oSorter = new sap.ui.model.Sorter("CUSTOMERID");
			cc.bindAggregation("items", {
				path: '/VesselParticulars?$select=CUSTOMERID',
				template: oItems,
				sorters: oSorter

			});

			var oItems = new sap.ui.core.ListItem({
				key: "{VESSELNAME}",
				text: "{VESSELNAME}"
			});

			var oSorter = new sap.ui.model.Sorter("VESSELNAME");
			cc1.bindAggregation("items", {
				path: '/VesselParticulars?$select=VESSELNAME',
				template: oItems,
				sorters: oSorter

			});

			var oItems = new sap.ui.core.ListItem({
				key: "{IMO}",
				text: "{IMO}"
			});

			var oSorter = new sap.ui.model.Sorter("IMO");
			cc2.bindAggregation("items", {
				path: '/VesselParticulars?$select=IMO',
				template: oItems,
				sorters: oSorter

			});
		},

		fokdialog: function (oEvent) {
			var ve = sap.ui.core.Fragment.byId("vesselfilterfragment", "ip22").getValue();
			var da = sap.ui.core.Fragment.byId("vesselfilterfragment", "ip21").getValue();
			var port = sap.ui.core.Fragment.byId("vesselfilterfragment", "ip2").getValue();

			var oTable = this.byId("idOperationTabel1");
			var oTemp = this.byId("idOperIncrementTable1");
			if (ve !== "" && da !== "" && port !== "") {

				var ofilters = [
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, port)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da === "" && port === "") {
				oTable.bindAggregation("items", {
					path: "/VesselParticulars",
					template: oTemp
				});
			} else if (ve === "" && da === "" && port !== "") {
				var ofilters = new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, port);
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);

			} else if (ve === "" && da !== "" && port !== "") {
				var ofilters = [
					new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, port)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da !== "" && port === "") {
				var ofilters = [
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, da)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da !== "" && port === "") {
				var ofilters = [
					new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, da)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da === "" && port !== "") {
				var ofilters = [
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, port)
				];
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);

			} else if (ve !== "" && da === "" && port === "") {
				var ofilters = [
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve)
				];
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);

			} else if (ve === "" && da !== "" && port !== "") {
				var ofilters = [
					new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, port)
				];
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da === "" && port === "") {
				var ofilters = [
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve)
				];
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else {
				oTable.bindAggregation("items", {
					path: "/VesselParticulars",
					template: oTemp
				});
			}

			vesfilter.close();
			sap.ui.core.Fragment.byId("vesselfilterfragment", "ip22").setValue();
			sap.ui.core.Fragment.byId("vesselfilterfragment", "ip21").setValue();
			sap.ui.core.Fragment.byId("vesselfilterfragment", "ip2").setValue();
		},

		fcancelDialog: function () {
			vesfilter.close();
			sap.ui.core.Fragment.byId("vesselfilterfragment", "ip22").setValue();
			sap.ui.core.Fragment.byId("vesselfilterfragment", "ip21").setValue();
			sap.ui.core.Fragment.byId("vesselfilterfragment", "ip2").setValue();
		},

		sortfn: function () {
			var dialog = sap.ui.xmlfragment("vtree", "AgentPortal_Testing.AgentPortal_Testing.view.VTree", this);
			dialog.setModel(sortmodel);
			sort_dialog = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Select',
				type: 'Message',
				content: [dialog],
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						sort_dialog.close();
					}
				}),
				afterClose: function () {
					sort_dialog.destroy();
				}
			});
			sort_dialog.open();
		},

		sortmodelfn: function () {

			var aData = {
				"sortodata": [{
					"HandlingUnit": "Vesselname"
				}, {
					"HandlingUnit": "IMO"
				}]
			};
			sortmodel = new sap.ui.model.json.JSONModel();
			sortmodel.setData(aData);

		},

		handlesort: function (oEvent) {

			var requestCode = oEvent.getSource().getAggregation("attributes")[0].getBindingContext().getProperty("HandlingUnit");

			var oTable = this.byId("idOperationTabel1");
			var oBinding = oTable.getBinding("items"),
				oSorter = new sap.ui.model.Sorter(requestCode.toUpperCase(), false);

			oSorter.fnCompare = function (a, b) {
				return a === b ? 0 : (a < b ? -1 : 1);
			};
			// update sort order of binding 
			oBinding.sort(oSorter);

			sort_dialog.destroy();
		},

		/*  Search , Refresh  & Filter of Customer - Vessel History  */

		onSearch2: function (oEvt) {
			var SamTbl = oEvt.getParameter("newValue");
			var filters = new Array();
			var SamTbl = SamTbl.toUpperCase();
			var oFilter = new sap.ui.model.Filter([
				new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.Contains, SamTbl)
			]);
			filters = (oFilter);
			var listItem = this.byId("idOperationTabel1sof");
			var binding = listItem.getBinding("items");
			binding.filter(filters);
		},

		refresh2: function () {
			var oTable11 = this.byId("idOperationTabel1sof");
			var oTemp11 = this.byId('idOperIncrementTable1sof');
			oTable11.bindAggregation("items", {
				path: "/StatementofFacts",
				template: oTemp11
			});
		},

		filterCategories2: function () {
			sap.ui.core.Fragment.byId("soffilterfragment", "ip22a");
			sap.ui.core.Fragment.byId("soffilterfragment", "ip21a");
			sap.ui.core.Fragment.byId("soffilterfragment", "ip2aa");

			soffilter.open();
			this.cb123function();
		},

		cb123function: function () {

			var cc = sap.ui.core.Fragment.byId("soffilterfragment", "ip21a");

			var cc1 = sap.ui.core.Fragment.byId("soffilterfragment", "ip22a");

			var cc2 = sap.ui.core.Fragment.byId("soffilterfragment", "ip2aa");

			var oItems = new sap.ui.core.ListItem({
				key: "{CUSTOMERID}",
				text: "{CUSTOMERID}"
			});

			var oSorter = new sap.ui.model.Sorter("CUSTOMERID");
			cc.bindAggregation("items", {
				path: '/VesselParticulars?$select=CUSTOMERID',
				template: oItems,
				sorters: oSorter

			});

			var oItems = new sap.ui.core.ListItem({
				key: "{VESSELNAME}",
				text: "{VESSELNAME}"
			});

			var oSorter = new sap.ui.model.Sorter("VESSELNAME");
			cc1.bindAggregation("items", {
				path: '/VesselParticulars?$select=VESSELNAME',
				template: oItems,
				sorters: oSorter

			});

			var oItems = new sap.ui.core.ListItem({
				key: "{IMO}",
				text: "{IMO}"
			});

			var oSorter = new sap.ui.model.Sorter("IMO");
			cc2.bindAggregation("items", {
				path: '/VesselParticulars?$select=IMO',
				template: oItems,
				sorters: oSorter

			});
		},

		soffokdialog: function (oEvent) {

			var ve = sap.ui.core.Fragment.byId("soffilterfragment", "ip22a").getValue();
			var da = sap.ui.core.Fragment.byId("soffilterfragment", "ip21a").getValue();
			var port = sap.ui.core.Fragment.byId("soffilterfragment", "ip2aa").getValue();

			var oTable = this.byId("idOperationTabel1sof");
			var oTemp = this.byId('idOperIncrementTable1sof');
			if (ve !== "" && da !== "" && port !== "") {

				var ofilters = [
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, port)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da === "" && port === "") {
				oTable.bindAggregation("items", {
					path: "/VesselParticulars",
					template: oTemp
				});
			} else if (ve === "" && da === "" && port !== "") {
				var ofilters = new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, port);
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);

			} else if (ve === "" && da !== "" && port !== "") {
				var ofilters = [
					new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, port)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da !== "" && port === "") {
				var ofilters = [
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, da)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da !== "" && port === "") {
				var ofilters = [
					new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, da)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da === "" && port !== "") {
				var ofilters = [
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, port)
				];
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);

			} else if (ve !== "" && da === "" && port === "") {
				var ofilters = [
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve)
				];
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);

			} else if (ve === "" && da !== "" && port !== "") {
				var ofilters = [
					new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, port)
				];
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da === "" && port === "") {
				var ofilters = [
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve)
				];
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else {
				oTable.bindAggregation("items", {
					path: "/MyFleet",
					template: oTemp
				});
			}
			soffilter.close();
			sap.ui.core.Fragment.byId("soffilterfragment", "ip22a").setValue();
			sap.ui.core.Fragment.byId("soffilterfragment", "ip21a").setValue();
			sap.ui.core.Fragment.byId("soffilterfragment", "ip2aa").setValue();
		},

		soffcancelDialog: function () {
			soffilter.close();
			sap.ui.core.Fragment.byId("soffilterfragment", "ip22a").setValue();
			sap.ui.core.Fragment.byId("soffilterfragment", "ip21a").setValue();
			sap.ui.core.Fragment.byId("soffilterfragment", "ip2aa").setValue();
		},

		sortfn2: function () {
			var dialog = sap.ui.xmlfragment("vtree2", "AgentPortal_Testing.AgentPortal_Testing.view.VTree2", this);
			dialog.setModel(sortmodel2);
			sort_dialog2 = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Select',
				type: 'Message',
				content: [dialog],
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						sort_dialog2.close();
					}
				}),
				afterClose: function () {
					sort_dialog2.destroy();
				}
			});
			sort_dialog2.open();
		},

		sortmodelfn2: function () {

			var aData = {
				"sortodata": [{
					"HandlingUnit": "Vesselname"
				}, {
					"HandlingUnit": "IMO"
				}]
			};
			sortmodel2 = new sap.ui.model.json.JSONModel();
			sortmodel2.setData(aData);

		},

		handlesort2: function (oEvent) {

			var requestCode = oEvent.getSource().getAggregation("attributes")[0].getBindingContext().getProperty("HandlingUnit");

			var oTable = this.byId("idOperationTabel1sof"),
				oBinding = oTable.getBinding("items"),
				oSorter = new sap.ui.model.Sorter(requestCode.toUpperCase(), false);

			oSorter.fnCompare = function (a, b) {
				return a === b ? 0 : (a < b ? -1 : 1);
			};
			// update sort order of binding 
			oBinding.sort(oSorter);

			sort_dialog2.destroy();
		},

		/*  Search , Refresh  & Filter of Customer - Vessel Expense  */

		onSearch3: function (oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("VESSELNAME", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.byId("idOperationTabel3");
			var binding = list.getBinding("items");
			binding.filter(aFilters);
		},
		refresh3: function () {
			var oTable2 = this.byId("idOperationTabel3");
			var oTemp2 = this.byId('idOperIncrementTable3');

			oTable2.bindAggregation("items", {
				path: "/MyInvoiceList",
				template: oTemp2
			});
		},
		filterCategories3: function () {
			sap.ui.core.Fragment.byId("verfilterfragment", "ip22b");
			sap.ui.core.Fragment.byId("verfilterfragment", "ip21b");
			sap.ui.core.Fragment.byId("verfilterfragment", "ip2b");
			sap.ui.core.Fragment.byId("verfilterfragment", "ip3b");

			verfilter.open();
			this.cb1234function();

		},

		cb1234function: function () {

			var cc = sap.ui.core.Fragment.byId("verfilterfragment", "ip21b");

			var cc1 = sap.ui.core.Fragment.byId("verfilterfragment", "ip22b");

			var oItems = new sap.ui.core.ListItem({
				key: "{DANUMBER}",
				text: "{DANUMBER}"
			});

			var oSorter = new sap.ui.model.Sorter("DANUMBER");
			cc.bindAggregation("items", {
				path: '/VesselExpenseList?$select=DANUMBER',
				template: oItems,
				sorters: oSorter

			});

			var oItems = new sap.ui.core.ListItem({
				key: "{VESSELNAME}",
				text: "{VESSELNAME}"
			});

			var oSorter = new sap.ui.model.Sorter("VESSELNAME");
			cc1.bindAggregation("items", {
				path: '/VesselExpenseList?$select=VESSELNAME',
				template: oItems,
				sorters: oSorter

			});
		},

		verokdialog: function (oEvent) {
			var ve = sap.ui.core.Fragment.byId("verfilterfragment", "ip22b").getValue();
			var da = sap.ui.core.Fragment.byId("verfilterfragment", "ip21b").getValue();
			var port = sap.ui.core.Fragment.byId("verfilterfragment", "ip2b").getValue();
			var st = sap.ui.core.Fragment.byId("verfilterfragment", "ip3b").getValue();

			var oTable = this.byId("idOperationTabel3");
			var oTemp = this.byId('idOperIncrementTable3');
			if (ve !== "" && da !== "" && port !== "" && st !== "") {

				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, port),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da === "" && port === "" && st === "") {
				oTable.bindAggregation("items", {
					path: "/VesselExpenseList",
					template: oTemp
				});
			} else if (ve === "" && da === "" && port !== "" && st !== "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, port),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da !== "" && port !== "" && st !== "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, port),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da !== "" && port !== "" && st === "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, port)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da !== "" && port === "" && st !== "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da === "" && port !== "" && st !== "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, port),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)
				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da !== "" && port !== "" && st !== "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, port),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)

				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da === "" && port === "" && st !== "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)

				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da === "" && port !== "" && st !== "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, port),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)
				];
				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da !== "" && port !== "" && st === "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, port)

				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da === "" && port !== "" && st !== "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, port),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)

				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da === "" && port === "" && st !== "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)

				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da !== "" && port === "" && st === "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, da)

				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da === "" && port !== "" && st === "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, port)

				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da !== "" && port === "" && st === "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve),
					new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, da)

				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve === "" && da !== "" && port === "" && st !== "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, da),
					new sap.ui.model.Filter("STATUS", sap.ui.model.FilterOperator.EQ, st)

				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (ve !== "" && da === "" && port === "" && st === "") {
				var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, 'C4988382464'),
					new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ve)

				];

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else {
				oTable.bindAggregation("items", {
					path: "/VesselExpenseList",
					template: oTemp
				});
			}

			verfilter.close();
			sap.ui.core.Fragment.byId("verfilterfragment", "ip22b").setValue();
			sap.ui.core.Fragment.byId("verfilterfragment", "ip21b").setValue();
			sap.ui.core.Fragment.byId("verfilterfragment", "ip2b").setValue();
			sap.ui.core.Fragment.byId("verfilterfragment", "ip3b").setValue();

		},

		vercancelDialog: function () {
			verfilter.close();
			sap.ui.core.Fragment.byId("verfilterfragment", "ip22b").setValue();
			sap.ui.core.Fragment.byId("verfilterfragment", "ip21b").setValue();
			sap.ui.core.Fragment.byId("verfilterfragment", "ip2b").setValue();
			sap.ui.core.Fragment.byId("verfilterfragment", "ip3b").setValue();
		},

		sortfn3: function () {
			var dialog = sap.ui.xmlfragment("vtree3", "AgentPortal_Testing.AgentPortal_Testing.view.VTree3", this);
			dialog.setModel(sortmodel3);
			sort_dialog3 = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Select',
				type: 'Message',
				content: [dialog],
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						sort_dialog3.close();
					}
				}),
				afterClose: function () {
					sort_dialog3.destroy();
				}
			});
			sort_dialog3.open();
		},

		sortmodelfn3: function () {

			var aData = {
				"sortodata": [{
					"HandlingUnit": "Vesselname"
				}, {
					"HandlingUnit": "Portname"
				}, {
					"HandlingUnit": "Status"
				}]
			};
			sortmodel3 = new sap.ui.model.json.JSONModel();
			sortmodel3.setData(aData);

			var oTable = this.byId("idOperationTabel3");

			//	oTable.setSticky(sap.m.Sticky.ColumnHeaders);

		},

		handlesort3: function (oEvent) {

			var requestCode = oEvent.getSource().getAggregation("attributes")[0].getBindingContext().getProperty("HandlingUnit");

			var oTable = this.getView().byId("idOperationTabel3"),
				oBinding = oTable.getBinding("items"),
				oSorter = new sap.ui.model.Sorter(requestCode.toUpperCase(), false);

			oSorter.fnCompare = function (a, b) {
				return a === b ? 0 : (a < b ? -1 : 1);
			};
			// update sort order of binding 
			oBinding.sort(oSorter);

			sort_dialog3.destroy();
		},

		ListPress: function (oEvent) {
			var oCont = this;
			CUSTOMERID = oEvent.getParameter("listItem").getBindingContext().getProperty("CUSTOMERID");
			IMO = oEvent.getParameter("listItem").getBindingContext().getProperty("IMO");
			VESSELNAME = oEvent.getParameter("listItem").getBindingContext().getProperty("VESSELNAME");
			PORTNAME = oEvent.getParameter("listItem").getBindingContext().getProperty("PORTNAME");
			DANUMBER = oEvent.getParameter("listItem").getBindingContext().getProperty("DANUMBER");
			ETASF = oEvent.getParameter("listItem").getBindingContext().getProperty("ETA");
			ATBSF = oEvent.getParameter("listItem").getBindingContext().getProperty("ATB");
			var oModels = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var oFilters = [new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, DANUMBER)];

			oModels.read('/SOFCargo1', {
				filters: oFilters,
				success: function (oData, oResp) {
					var len = (oData.results).length;
					console.log("len :", len);
					//	var Danum = oData.results[0].DANUMBER
					//	console.log("Danum :",Danum)

					if (len == 9) {

						oCont.getView().byId("sof1f1").setVisible(true);
						oCont.getView().byId("sof2f2").setVisible(false);
					} else {
						oCont.getView().byId("sof2f2").setVisible(true);
						oCont.getView().byId("sof1f1").setVisible(false);
					}
				

				},
			});

			//this.byId("hiscustomersid").setText(CUSTOMERID);
			oCont.byId("hiscusid").setText(CUSTOMERID);
			oCont.byId("hisimo").setText(IMO);
			oCont.byId("hisves").setText(VESSELNAME);
			oCont.byId("hisport").setText(PORTNAME);

			//this.getView().byId("idOperationTabel1sof").setVisible(false);
			//this.getView().byId("soffragment").setVisible(true);
			//	this.getView().byId("sofresponsive1").setVisible(true);
			oCont.getView().byId("cancelcargo").setVisible(false);
			oCont.getView().byId("savecargo").setVisible(true);
			//	this.getView().byId("SaveEditVessel").setVisible(false);
			//	this.byId("EditVessel").setVisible(false);
			//	this.byId("SaveEditVessel").setVisible(false);

			var oCont = this;
			var oFilters = [new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, DANUMBER)]
		var t0 = oCont.getView().byId("sof1");
			var titems0 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{EVENTS}",
						wrapping: true
					}),

					new sap.m.DatePicker({
						valueFormat: "yyyy-dd-MM",
						value: "{DATE}"
					}),

					new sap.m.TimePicker({
						placeholder: "Select",
						value: "{TIME}",
						valueFormat:"HH:mm:ss"

					})

				]
			});

			t0.bindItems({

				path: '/SOFCargo1',
				template: titems0,
				filters: oFilters

			});

			var t1 = oCont.getView().byId("sofdetails");
			var titems1 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{EVENTS}",
						wrapping: true
					}),

					new sap.m.DatePicker({
						valueFormat: "yyyy-dd-MM",
						value: "{DATE}"
					}),

					new sap.m.TimePicker({
						placeholder: "Select",
						value: "{TIME}",
						valueFormat:"HH:mm:ss"

					})

				]
			});

			t1.bindItems({

				path: '/SOFCargo1',
				template: titems1,
				filters: oFilters

			});

			var t2 = oCont.getView().byId("sofdetails2");
			var titems2 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{EVENTS}"
					}),
					new sap.m.DatePicker({
						valueFormat: "yyyy-MM-dd",
						value: "{DATE}"
					}),
					new sap.m.TimePicker({
						placeholder: "Select",
						value: "{TIME}",
						valueFormat:"HH:mm:ss"
					})

				]
			});

			t2.bindItems({

				path: '/SOFCargo2',
				template: titems2,
				filters: oFilters

			});

			var t3 = oCont.getView().byId("sofdetails3");
			var titems3 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{EVENTS}"
					}),
					new sap.m.DatePicker({
						valueFormat: "yyyy-MM-dd",
						value: "{DATE}"
					}),
					new sap.m.TimePicker({
						placeholder: "Select",
						value: "{TIME}",
						valueFormat:"HH:mm:ss"
					})

				]
			});

			t3.bindItems({

				path: '/SOFCargo3',
				template: titems3,
				filters: oFilters

			});

		},

		cancelvesselhistory: function () {
			var ocontroller = this;
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Are you sure to cancel?", {
					//  icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {

						if (oAction == "YES") {
							var otable = ocontroller.byId("idOperationTabel1sof");
							//	ocontroller.byId("idOperationTabel1sof").setVisible(true);
							//ocontroller.byId("soffragment").setVisible(false);
							//		ocontroller.byId("sofresponsive1").setVisible(false);
							ocontroller.byId("cancelcargo").setVisible(false);
							ocontroller.byId("savecargo").setVisible(false);
						} else {

						}

					}
				});
		},

		savecargo: function () {

			var oCont = this;

			var Arraysof1 = [];
			var Arraysof2 = [];
			var Arraysof3 = [];
			var cargoonesend = [];

			var oTable = oCont.getView().byId("sof1");
			var totalRows = oTable.getItems().length;
			console.log("totalRows", totalRows);

			var ocontroller = this;
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Are you sure to update the Cargo Details?", {
					//  icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {
						//	var oModeladdvessel = ocontroller.getView().getModel();
						      
						if (oAction == "YES") {
							busyDialog = ocontroller.getView().byId("BusyDialog");
							busyDialog.setVisible(true);
							busyDialog.open();
							for (var j = 0; j < totalRows; j++) {

								var sofcargo1 = oTable.getItems()[j].getCells()[0].getText();
								var sofcargo2 = oTable.getItems()[j].getCells()[1].getValue();
								console.log("sofcargo2 :",sofcargo2)
								var sofcargo3 = oTable.getItems()[j].getCells()[2].getValue();
								console.log("sofcargo3 :",sofcargo3)
								Arraysof1.push(sofcargo1);
								Arraysof2.push(sofcargo2);
								console.log(Arraysof2);
								Arraysof3.push(sofcargo3);

								var cargosend = {

									"CUSTOMERID": CUSTOMERID,
									"VESSELNAME": VESSELNAME,
									"IMO": IMO,
									"DANUMBER": DANUMBER,
									"PORTNAME": PORTNAME,
									"EVENTS": Arraysof1[j],
									"DATE": Arraysof2[j],
								//	"DATE": '2019-01-29',
									"TIME": Arraysof3[j],
									"CARGOTYPE": ''

								};
								
							/*	var cargosend2 = {
									
									"CUSTOMERID": "0000100001",
"VESSELNAME": "LNG",
"IMO": "IMO258741",
"DANUMBER": "02/170288",
"PORTNAME": "",
"EVENTS": "Actual Time of Berthing(ATB)",
"DATE": "2019-01-26",
"TIME": "08:07:01",
"CARGOTYPE": ""

								};*/
								var cid = "0000100001";
									var vn = VESSELNAME;
								var vnt = encodeURIComponent(vn);
								var da = DANUMBER;
								var dat = encodeURIComponent(da);
								var imo = IMO;
								var imot = encodeURIComponent(imo);
								var ev = Arraysof1[j];
								var evt = encodeURIComponent(ev);
								
								console.log("cargosend", cargosend);
								
								var sPath = "/SOFCargo1(CUSTOMERID='" + CUSTOMERID + "',VESSELNAME='" + vnt + "',DANUMBER='" + dat +"',IMO='" + imot + "',EVENTS='"+evt+"')";
						//	var savePath = "/SOFCargo1(CUSTOMERID='"+cid+"',VESSELNAME='"+vn+"',IMO='"+imo+"',DANUMBER='"+da+"', EVENTS='"+ev+"')";
						//	var savePath = "/SOFCargo1(CUSTOMERID='0000100001',VESSELNAME='LNG',IMO='IMO258741',DANUMBER='02/170288',EVENTS='"+evt+"')";
				
						 var oModeladdvessel = ocontroller.getView().getModel();
				//	var savePath  ="/SOFCargo1";
					/*var oFilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, "0000100001"),
									new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ""),
									new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, "IMO11224"),
									new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, "02/170289"),
									new sap.ui.model.Filter("EVENTS", sap.ui.model.FilterOperator.EQ, "Vessel Sailed/Pilot Away")];*/
					//	 var oModeladdvessel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
							
								oModeladdvessel.update(sPath, cargosend, {
									
									success: function (oData, oResponse) {
										
										//	//alert("Posted");
										code1 = code1 + 1;
									
										// //alert(code1)
										if (code1 === totalRows) {
											code1=0;
											ocontroller.savecargo2();
											
										/*	sap.m.MessageBox.confirm("Cargo updated successfuly in CustomerId " + CUSTOMERID + "", {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],
												onClose: function (oAction) {

													if (oAction == "OK") {

													}
												}.bind(ocontroller)
											});*/

										}

									},
									error: function (oResponse) {
										busyDialog = ocontroller.getView().byId("BusyDialog");
							busyDialog.setVisible(true);
							busyDialog.close();
										sap.m.MessageToast.show("Posting failed");
										
									}

								});

							}

							var lastadd = ocontroller.byId("remarks").getValue();
							console.log("lastadd :", lastadd);

							/*	var ocontroller = this;
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Are you sure to add vessel?", {
						//  icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {

							if (oAction == "YES") {*/

							/*var postPayLoad = {

								"CUSTOMERID": CUSTOMERID,
								"VESSELNAME": VESSELNAME,
								"DANUMBER": DANUMBER,
								"PORTNAME": PORTNAME,
								"ETA": ETASF,
								"IMO": IMO,
								"ATB": ATBSF,
								"AGENTREMARKS": lastadd

							};
							console.log(postPayLoad)

							var sPath = "/StatementofFacts(CUSTOMERID='" + CUSTOMERID + "',VESSELNAME='" + VESSELNAME + "',DANUMBER='" + DANUMBER +
								"',IMO='" + IMO + "')";

							var oModeladdvessel = ocontroller.getView().getModel();

							oModeladdvessel.update(sPath, postPayLoad, {

								success: function (oData, oResponse) {

									console.log("oResponse :", oResponse);


								},

								error: function (oResponse) {
									sap.m.MessageToast.show("Posting failed");

								}
							});*/

							/*	}
						}
					});*/

						}
					}
				});

		},
		
		savecargo2: function () {

			var oCont = this;

			var Arraysof1 = [];
			var Arraysof2 = [];
			var Arraysof3 = [];
			var cargoonesend = [];

			var oTable = oCont.getView().byId("sofdetails2");
			var totalRows = oTable.getItems().length;
			console.log("totalRows", totalRows);

			var ocontroller = this;
			jQuery.sap.require("sap.m.MessageBox");
		/*	sap.m.MessageBox.show(
				"Are you sure to post Cargo Details2?", {
					//  icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {*/
						//	var oModeladdvessel = ocontroller.getView().getModel();
						      
					//	if (oAction == "YES") {
							for (var j = 0; j < totalRows; j++) {

								var sofcargo1 = oTable.getItems()[j].getCells()[0].getText();
								var sofcargo2 = oTable.getItems()[j].getCells()[1].getValue();
								console.log("sofcargo2 :",sofcargo2)
								var sofcargo3 = oTable.getItems()[j].getCells()[2].getValue();
								console.log("sofcargo3 :",sofcargo3)
								Arraysof1.push(sofcargo1);
								Arraysof2.push(sofcargo2);
								console.log(Arraysof2);
								Arraysof3.push(sofcargo3);

								var cargosend = {

									"CUSTOMERID": CUSTOMERID,
									"VESSELNAME": VESSELNAME,
									"IMO": IMO,
									"DANUMBER": DANUMBER,
									"PORTNAME": PORTNAME,
									"EVENTS": Arraysof1[j],
									"DATE": Arraysof2[j],
								//	"DATE": '2019-01-29',
									"TIME": Arraysof3[j],
									"CARGOTYPE": ''

								};
								
							/*	var cargosend2 = {
									
									"CUSTOMERID": "0000100001",
"VESSELNAME": "LNG",
"IMO": "IMO258741",
"DANUMBER": "02/170288",
"PORTNAME": "",
"EVENTS": "Actual Time of Berthing(ATB)",
"DATE": "2019-01-26",
"TIME": "08:07:01",
"CARGOTYPE": ""

								};*/
								var cid = "0000100001";
								var vn = VESSELNAME;
								var vnt = encodeURIComponent(vn);
								var da = DANUMBER;
								var dat = encodeURIComponent(da);
								var imo = IMO;
								var imot = encodeURIComponent(imo);
								var ev = Arraysof1[j];
								var evt = encodeURIComponent(ev);
								
								console.log("cargosend", cargosend);
								
								var sPath = "/SOFCargo2(CUSTOMERID='" + CUSTOMERID + "',VESSELNAME='" + vnt + "',DANUMBER='" + dat +"',IMO='" + imot + "',EVENTS='"+evt+"')";
						//	var savePath = "/SOFCargo1(CUSTOMERID='"+cid+"',VESSELNAME='"+vn+"',IMO='"+imo+"',DANUMBER='"+da+"', EVENTS='"+ev+"')";
						//	var savePath = "/SOFCargo1(CUSTOMERID='0000100001',VESSELNAME='LNG',IMO='IMO258741',DANUMBER='02/170288',EVENTS='"+evt+"')";
				
						 var oModeladdvessel = ocontroller.getView().getModel();
				//	var savePath  ="/SOFCargo1";
					/*var oFilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, "0000100001"),
									new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ""),
									new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, "IMO11224"),
									new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, "02/170289"),
									new sap.ui.model.Filter("EVENTS", sap.ui.model.FilterOperator.EQ, "Vessel Sailed/Pilot Away")];*/
					//	 var oModeladdvessel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
									
								oModeladdvessel.update(sPath, cargosend, {
								
									success: function (oData, oResponse) {
										//	//alert("Posted");
											
										
									code2 = code2 + 1;
										// //alert(code1)
										if (code2 === totalRows) {
											code2=0;
											ocontroller.savecargo3();
											
											/*sap.m.MessageBox.confirm("Cargo updated successfuly in CustomerId " + CUSTOMERID + "", {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],
												onClose: function (oAction) {

													if (oAction == "OK") {

													}
												}.bind(ocontroller)
											});*/

										}

									},
									error: function (oResponse) {
										busyDialog = ocontroller.getView().byId("BusyDialog");
							busyDialog.setVisible(true);
							busyDialog.close();
										sap.m.MessageToast.show("Posting failed");
									}

								});

							}

							var lastadd = ocontroller.byId("remarks").getValue();
							console.log("lastadd :", lastadd);

							/*	var ocontroller = this;
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Are you sure to add vessel?", {
						//  icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {

							if (oAction == "YES") {*/

							/*var postPayLoad = {

								"CUSTOMERID": CUSTOMERID,
								"VESSELNAME": VESSELNAME,
								"DANUMBER": DANUMBER,
								"PORTNAME": PORTNAME,
								"ETA": ETASF,
								"IMO": IMO,
								"ATB": ATBSF,
								"AGENTREMARKS": lastadd

							};
							console.log(postPayLoad)

							var sPath = "/StatementofFacts(CUSTOMERID='" + CUSTOMERID + "',VESSELNAME='" + VESSELNAME + "',DANUMBER='" + DANUMBER +
								"',IMO='" + IMO + "')";

							var oModeladdvessel = ocontroller.getView().getModel();

							oModeladdvessel.update(sPath, postPayLoad, {

								success: function (oData, oResponse) {

									console.log("oResponse :", oResponse);


								},

								error: function (oResponse) {
									sap.m.MessageToast.show("Posting failed");

								}
							});*/

							/*	}
						}
					});*/

						
				//	}
				//});

		},
		
		savecargo3: function () {

			var oCont = this;

			var Arraysof1 = [];
			var Arraysof2 = [];
			var Arraysof3 = [];
			var cargoonesend = [];

			var oTable = oCont.getView().byId("sofdetails3");
			var totalRows = oTable.getItems().length;
			console.log("totalRows", totalRows);

			var ocontroller = this;
			jQuery.sap.require("sap.m.MessageBox");
		/*	sap.m.MessageBox.show(
				"Are you sure to post Cargo Details3?", {
					//  icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {*/
						//	var oModeladdvessel = ocontroller.getView().getModel();
						      
					//	if (oAction == "YES") {
							for (var j = 0; j < totalRows; j++) {

								var sofcargo1 = oTable.getItems()[j].getCells()[0].getText();
								var sofcargo2 = oTable.getItems()[j].getCells()[1].getValue();
								console.log("sofcargo2 :",sofcargo2)
								var sofcargo3 = oTable.getItems()[j].getCells()[2].getValue();
								console.log("sofcargo3 :",sofcargo3)
								Arraysof1.push(sofcargo1);
								Arraysof2.push(sofcargo2);
								console.log(Arraysof2);
								Arraysof3.push(sofcargo3);

								var cargosend = {

									"CUSTOMERID": CUSTOMERID,
									"VESSELNAME": VESSELNAME,
									"IMO": IMO,
									"DANUMBER": DANUMBER,
									"PORTNAME": PORTNAME,
									"EVENTS": Arraysof1[j],
									"DATE": Arraysof2[j],
								//	"DATE": '2019-01-29',
									"TIME": Arraysof3[j],
									"CARGOTYPE": ''

								};
								
							/*	var cargosend2 = {
									
									"CUSTOMERID": "0000100001",
"VESSELNAME": "LNG",
"IMO": "IMO258741",
"DANUMBER": "02/170288",
"PORTNAME": "",
"EVENTS": "Actual Time of Berthing(ATB)",
"DATE": "2019-01-26",
"TIME": "08:07:01",
"CARGOTYPE": ""

								};*/
								var cid = "0000100001";
								var vn = VESSELNAME;
								var vnt = encodeURIComponent(vn);
									var da = DANUMBER;
								var dat = encodeURIComponent(da);
								var imo = IMO;
								var imot = encodeURIComponent(imo);
								var ev = Arraysof1[j];
								var evt = encodeURIComponent(ev);
								
								console.log("cargosend", cargosend);
								
								var sPath = "/SOFCargo3(CUSTOMERID='" + CUSTOMERID + "',VESSELNAME='" + vnt + "',DANUMBER='" + dat +"',IMO='" + imot + "',EVENTS='"+evt+"')";
						//	var savePath = "/SOFCargo1(CUSTOMERID='"+cid+"',VESSELNAME='"+vn+"',IMO='"+imo+"',DANUMBER='"+da+"', EVENTS='"+ev+"')";
						//	var savePath = "/SOFCargo1(CUSTOMERID='0000100001',VESSELNAME='LNG',IMO='IMO258741',DANUMBER='02/170288',EVENTS='"+evt+"')";
				
						 var oModeladdvessel = ocontroller.getView().getModel();
				//	var savePath  ="/SOFCargo1";
					/*var oFilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, "0000100001"),
									new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, ""),
									new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, "IMO11224"),
									new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, "02/170289"),
									new sap.ui.model.Filter("EVENTS", sap.ui.model.FilterOperator.EQ, "Vessel Sailed/Pilot Away")];*/
					//	 var oModeladdvessel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
							
								oModeladdvessel.update(sPath, cargosend, {
									
									success: function (oData, oResponse) {
										//	//alert("Posted");
										code3 = code3 + 1;
									
										// //alert(code1)
										if (code3 === totalRows) {
											code3=0;
											busyDialog = ocontroller.getView().byId("BusyDialog");
											busyDialog.setVisible(true);
											busyDialog.close();
											sap.m.MessageBox.confirm("Cargo updated successfuly in CustomerId " + CUSTOMERID + "", {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],
												onClose: function (oAction) {

													if (oAction == "OK") {

													}
												}.bind(ocontroller)
											});

										}

									},
									error: function (oResponse) {
										busyDialog = ocontroller.getView().byId("BusyDialog");
							busyDialog.setVisible(true);
							busyDialog.close();
										sap.m.MessageToast.show("Posting failed");
									}

								});

							}

							var lastadd = ocontroller.byId("remarks").getValue();
							console.log("lastadd :", lastadd);

							/*	var ocontroller = this;
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Are you sure to add vessel?", {
						//  icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {

							if (oAction == "YES") {*/

							/*var postPayLoad = {

								"CUSTOMERID": CUSTOMERID,
								"VESSELNAME": VESSELNAME,
								"DANUMBER": DANUMBER,
								"PORTNAME": PORTNAME,
								"ETA": ETASF,
								"IMO": IMO,
								"ATB": ATBSF,
								"AGENTREMARKS": lastadd

							};
							console.log(postPayLoad)

							var sPath = "/StatementofFacts(CUSTOMERID='" + CUSTOMERID + "',VESSELNAME='" + VESSELNAME + "',DANUMBER='" + DANUMBER +
								"',IMO='" + IMO + "')";

							var oModeladdvessel = ocontroller.getView().getModel();

							oModeladdvessel.update(sPath, postPayLoad, {

								success: function (oData, oResponse) {

									console.log("oResponse :", oResponse);


								},

								error: function (oResponse) {
									sap.m.MessageToast.show("Posting failed");

								}
							});*/

							/*	}
						}
					});*/

					//	}
					
			//	});

		},

		status: function (a) {

			if (a === 'Open') {
				return 'Warning';
			} else if (a === 'Released') {
				return 'Success';

			} else {
				return 'None';
			}

		},

		cc: function () {
			var oTable = this.getView().byId("idTable1");
			
			var Mastertable = oTable.getItems().length;
			if(Mastertable == "0"){
			this.byId("idInquiry").destroyItems();
			this.byId("idobjheader2").setText("");
			this.byId("idobjheader4").setText("");
			this.byId("idobjheader22").setText("");
			this.byId("idobjheader5").setText("");
			this.byId("idobjheader6").setText("");
			this.byId("idobjheader7").setText("");
			
			}else{
			var aItems = oTable.getItems();
			aItems[0].setSelected(true);
			var oModel = oTable.getModel();
			orderid = oTable.getItems()[0].getBindingContext().getProperty("ORDERID");
			console.log("Initialorderid :", orderid);
			var oCont = this;
			var oSorter = [new sap.ui.model.Sorter("ORDERDATE", {
					descending: 'true'
				}),
				new sap.ui.model.Sorter("ORDERTIME", {
					descending: 'false'
				})
			];
			var oFilters = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid)];
			oModel.read('/MyOrders', {
				filters: oFilters,
				sorter: oSorter,
				success: function (oData, oResp) {
					coimo = oData.results[0].IMO;
						custOrderStatus = oData.results[0].ORDERSTATUS;
					ostatus = oData.results[0].ORDERSTATUS;
						TotalAmount = oData.results[0].TOTALPRICE;
						agentcomments = oData.results[0].AGENTCOMMENTS;
					//	//alert(coimo);
					var mydate = new Date(oData.results[0].ETA);
					var formathours = ("0" + mydate.getHours()).slice(-2);
					var formatmin = ("0" + mydate.getMinutes()).slice(-2);
					var formatsec = ("0" + mydate.getSeconds()).slice(-2);

					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getMonth()];
					var coeta1 = month + ' ' + mydate.getDate() + ', ' + mydate.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
						formatsec;
					console.log(coeta1);
					var dd = mydate.getDate();
					var mm = mydate.getMonth() + 1; //January is 0!
					var yyyy = mydate.getFullYear();
					if (dd < 10) {
						dd = '0' + dd;
					}
					if (mm < 10) {
						mm = '0' + mm;
					}
					etacheck = yyyy + '-' + mm + '-' + dd;
					//	//alert(etacheck);

					var mydated = new Date(oData.results[0].ETD);
					var formathours = ("0" + mydated.getHours()).slice(-2);
					var formatmin = ("0" + mydated.getMinutes()).slice(-2);
					var formatsec = ("0" + mydated.getSeconds()).slice(-2);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydated.getMonth()];
					var coetd1 = month + ' ' + mydated.getDate() + ', ' + mydated.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
						formatsec;
					console.log(coetd1);
					var dd = mydated.getDate();
					var mm = mydated.getMonth() + 1; //January is 0!
					var yyyy = mydated.getFullYear();
					if (dd < 10) {
						dd = '0' + dd;
					}
					if (mm < 10) {
						mm = '0' + mm;
					}
					etdcheck = yyyy + '-' + mm + '-' + dd;
					//	//alert(etdcheck);
					var mydater = new Date(oData.results[0].REQUESTEDDATE);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydater.getMonth()];
					var rqst_d = month + ' ' + mydater.getDate() + ', ' + mydater.getFullYear();
					var oFilter = [new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, coimo),
						new sap.ui.model.Filter("ETA", sap.ui.model.FilterOperator.Contains, etacheck),
						new sap.ui.model.Filter("ETD", sap.ui.model.FilterOperator.Contains, etdcheck)
					];
					var ocont = this;
					oModel.read('/MyInquiryHeader', {
						filters: oFilter,
						success: function (oData, oResp) {
							console.log(oData)

							//					//alert(oData.results[0].SAPQUOTATIONID);
							//					//alert(oData.results[0].SAPORDERID);

							for (var i = 0; i < oData.results.length; i++) {
								//	//alert(i);
								if (oData.results[i].SAPQUOTATIONID === "") {
									var empty = "empty";
								} else {
									var notemp = "notempty";
									quotid = oData.results[i].SAPQUOTATIONID;
									sonum = oData.results[i].SAPORDERID;
									wbs1 = oData.results[i].WBS;
								}

							}
							if (empty === "empty" && notemp === "notempty") {
								//						//alert("has value");

								//						//alert("values" + '' + quotid + '' + sonum + '' + wbs1);
								//		ocont.saleset();

							} else {
								//						//alert("novalue");
								//		ocont.wbspost();

							}

						}

					});
					if (coeta1 === 'undefined NaN, NaN - aN:aN:aN' || coetd1 === 'undefined NaN, NaN - aN:aN:aN') {
						oCont.getView().byId("idobjheader6").setText(" ");
						oCont.getView().byId("idobjheader7").setText(" ");
					} else {
						oCont.getView().byId("idobjheader6").setText(coeta1);
						oCont.getView().byId("idobjheader7").setText(coetd1);
					}

					oCont.getView().byId("idobjheader1").setText(oData.results[0].CUSTOMERID);
					oCont.getView().byId("idobjheader3").setText(oData.results[0].INQUIRYNUMBER);

					oCont.getView().byId("ordertime").setText(oData.results[0].ORDERTIME);
					oCont.getView().byId("customername").setText(oData.results[0].CUSTOMERNAME);
					oCont.getView().byId("currency").setText(oData.results[0].CURRENCY);

					oCont.getView().byId("orderdate").setText(oData.results[0].ORDERDATE);
					oCont.getView().byId("etam").setText(oData.results[0].ETA);
					oCont.getView().byId("etdm").setText(oData.results[0].ETD);
					oCont.getView().byId("discount").setText(oData.results[0].DISCOUNT);

				},
			})
			oCont.tablebind();
			}

		},
		detailorderrender: function () {
			var tablebinding1 = this.byId("idInquiry");
			var oFirstItem1 = tablebinding1.getItems().length;
			/*for(i=0;i<oFirstItem1;i++){
			var orderdetailfor = tablebinding1.getItems()[i];	
			var inqnumord = orderdetailfor.getCells()[5].getText();
			console.log("inqnumord :",inqnumord)
			}*/
			console.log("oFirstItem1 :", oFirstItem1)
			var oFirstItem = tablebinding1.getItems()[0];
			inqnumberod = oFirstItem.getCells()[5].getText();
			sername = oFirstItem.getCells()[1].getText();
			console.log("oCell:", inqnumberod);
			/* for (var i = 0; i< oFirstItem1; i++) {
			var inqnumord = tablebinding1.getItems()[i].getCells()[5].getText();
			console.log("inqnumord :",inqnumord);
			inqnumordarray.push(inqnumord);
			    }
			  
			  console.log("inqnumordarray :",inqnumordarray);*/

			/*	var tbl = this.getView().byId("idInquiry");
				tbl.getItems().forEach(function (r) {
					var obj = r.getBindingContext().getObject();
					var status = obj.SERVICENAME;
					console.log("status :", status);
					var cb = r.$().find('.sapMCb');
					var oCb = sap.ui.getCore().byId(cb.attr('id'));
					if (status === "NAC_PORT") {
						oCb.setEnabled(false);
					} else {
						oCb.setEnabled(true);
					}
				});*/

		},

		onAfterRendering: function (oEvent) {

			oModel = this.getView().getModel();
				name2 = userModel.getProperty("/name"); //Logged in user email from userapi
			//	name2 = "pselvaraj@os.qgtc.com.qa"; 
		//	name2 = "umunagala@nakilatb2c.onmicrosoft.com";
			//	//alert(name2)
			//	name2 = "vinoth@nakilatb2c.onmicrosoft.com"; 
		//	//alert(name2)
				//pselvaraj@os.qgtc.com.qa
				//umunagala@os.qgtc.com.qa
				/******** customer inquiries *********/
			var ocont = this;
			//	var oModel = this.getView().getModel();
			//	var oModel = this.getView().getModel();
			var sPath = "/AgentRoles";
			var ofilters = [new sap.ui.model.Filter("EMAILID", sap.ui.model.FilterOperator.EQ, name2)];
			oModel.read(sPath, {
				filters: ofilters,
				async: false,
				success: function (oData, oResponse) {
					console.log(oData)
					if (oData.results.length === 0) {
		//				//alert("length 0")
					} else {
		//				//alert("else")
						r1 = oData.results[0].SERVICETYPE1;
						r2 = oData.results[0].SERVICETYPE2;
						r3 = oData.results[0].SERVICETYPE3;
						r4 = oData.results[0].SERVICETYPE4;
						r5 = oData.results[0].SERVICETYPE5;
						sa = oData.results[0].SUPERAGENT;
						console.log(sa);
						console.log(nc + " " + ncimm + " " + vsulog + " " + vasum)
						if (r1 === null || r1 === undefined) {
							r1 = "";
						}
						if (r2 === null || r1 === undefined) {
							r2 = "";
						}
						if (r3 === null || r1 === undefined) {
							r3 = "";
						}
						if (r4 === null || r1 === undefined) {
							r4 = "";
						}
						if (r5 === null || r1 === undefined) {
							r5 = "";
						}
						console.log("r1" + r1 + " " + "r2" + r2 + " " + "r3" + r3 + " " + "r4" + r4 + " " + "r5" + r5);
						/*	var afilters = [new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, "Husbandry/Vessel support services")];
	 	oModel.read("MyInquiryHeader", {
			filters: afilters,
	success: function (oData, oResponse) {
		//alert(oData.results.length);
		for(var n=0;n<oData.results.length;n++)
		{
	 nc = oData.results[n].NAC_CREW;
	 ncimm = oData.results[n].NAC_IMM;
	 vsulog = oData.results[n].VSU_LOGISTICS;
	 vasum = oData.results[n].VSU_MATERIALS;
	 
	 if(nc === null)
	 {
	 	nc = "0"
	 }
	 else
	 {
	 	nc = nc;
	 }
//	 //alert(nc);
		
		
//	 console.log(r1 + " " + r2 + " " +r3 +" " +r4 + " " + r5);

	 console.log(nc + " " + ncimm + " " +vsulog +" " +vasum)

	 	console.log(nc + " " + ncimm + " " +vsulog +" " +vasum)
		}
	}
	 	});*/
						var afilters = [new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r1),
							new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r2),
							new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r3),
							new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r4),
							new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r5)
							/*new sap.ui.model.Filter("NAC_CREW", sap.ui.model.FilterOperator.EQ, "X")*/
							/*	new sap.ui.model.Filter("NAC_IMM", sap.ui.model.FilterOperator.EQ, ""),
								new sap.ui.model.Filter("VSU_LOGISTICS", sap.ui.model.FilterOperator.EQ, "X"),
								new sap.ui.model.Filter("VSU_MATERIALS", sap.ui.model.FilterOperator.EQ, "")*/
						];
						oModel.read("/MyInquiryHeader", {
							filters: afilters,
							async: false,
							success: function (oData, oResponse) {
						//		//alert(oData.results.length);

								for (var n = 0; n < oData.results.length; n++) {
									if (oData.results[n].AGENTROLE === 'S') {
										headerbind.push(oData.results[n]);
										console.log(headerbind);
										kflag = "b";
									} else {
										headerbind1.push(oData.results[n]);
										console.log(headerbind1);
										hflag = "c";
									}
									/*nc = oData.results[n].NAC_CREW;
	 ncimm = oData.results[n].NAC_IMM;
	 vsulog = oData.results[n].VSU_LOGISTICS;
	 vasum = oData.results[n].VSU_MATERIALS;
	 
	 if(nc === null)
	 {
	 	nc = "0"
	 }
	 else
	 {
	 	nc = nc;
	 }
//	 //alert(nc);
		
		
//	 console.log(r1 + " " + r2 + " " +r3 +" " +r4 + " " + r5);

	 console.log(nc + " " + ncimm + " " +vsulog +" " +vasum)

	 	console.log(nc + " " + ncimm + " " +vsulog +" " +vasum)*/
								}

								var oType = new sap.ui.model.type.DateTime({
									source: {
										pattern: "yyyy-MM-dd"
									}
								});
								var oDateFormat = sap.ui.core.format.DateFormat.getInstance({
									pattern: "MMM dd,yyyy"
								});
								var oDateFormat1 = sap.ui.core.format.DateFormat.getInstance({
									pattern: "yyyy-MM-dd"
								});
								var oDoBTxt = new sap.m.Text({
									text: {
										path: "REQUESTEDDATE",
										type: oType,
										formatter: function (d) {

											return oDateFormat.format(new Date(d));
										}
									}
								});
								var objstat = new sap.m.ObjectStatus({
									text: "{ORDERSTATUS}",
									state: {
										path: "ORDERSTATUS",
										formatter: ocont.rstatus
									}
								});

								if (sa === "X") {

									var oTable11 = ocont.byId("RidTableMyOrders");
									//	var oTemp11 = ocont.byId('idCLMyOrders1');
									var oSorter = [new sap.ui.model.Sorter("REQUESTEDDATE", {
											descending: 'true'
										}),
										new sap.ui.model.Sorter("REQUESTEDTIME", {
											descending: 'false'
										})
									];
									var afilters = [new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r1),
										new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r2),
										new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r3),
										new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r4),
										new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r5)

									];
									var oTemp11 = new sap.m.ColumnListItem({
										cells: [
											new sap.m.Text({
												text: "{INQUIRYNUMBER}"
											}),
											new sap.m.Text({
													text: "{VESSELNAME}"
												}),
											new sap.m.Text({
												text: "{SERVICETYPE}"
											}),
											oDoBTxt,
											objstat,
											
											new sap.m.ObjectNumber({
												number: "{TOTALPRICE}",
												unit: "{CURRENCY}"
											})
										]
									});

									oTable11.bindAggregation("items", {
										path: "/MyInquiryHeader",
										template: oTemp11,
										filters: afilters,
										sorter: oSorter
									});
								} else {
								//	//alert("else")
									if (kflag == "b") {
								//		//alert("kflag")
										var oTable11 = ocont.byId("RidTableMyOrders");
										var husassigned = new sap.ui.model.json.JSONModel();
										husassigned.setData(headerbind);
										oTable11.setModel(husassigned);
										//	var oTemp11 = ocont.byId('idCLMyOrders1');
										var oSorter = [new sap.ui.model.Sorter("REQUESTEDDATE", {
												descending: 'true'
											}),
											new sap.ui.model.Sorter("REQUESTEDTIME", {
												descending: 'false'
											})
										];
										var oTemp11 = new sap.m.ColumnListItem({
											cells: [
												new sap.m.Text({
													text: "{INQUIRYNUMBER}"
												}),
												new sap.m.Text({
													text: "{VESSELNAME}"
												}),
												new sap.m.Text({
													text: "{SERVICETYPE}"
												}),
												oDoBTxt,
												objstat,
												
												new sap.m.ObjectNumber({
													number: "{TOTALPRICE}",
													unit: "{CURRENCY}"
												})
											]
										});
										oTable11.bindAggregation("items", "/", oTemp11, oSorter);
										oTable11.setModel(husassigned);

									} else if (hflag == "c") {
									//	//alert("hflag")
										var oTable11 = ocont.byId("RidTableMyOrders");
										var otherservices = new sap.ui.model.json.JSONModel();
										otherservices.setData(headerbind1);
										oTable11.setModel(otherservices);
										//	var oTemp11 = ocont.byId('idCLMyOrders1');
										var oSorter = [new sap.ui.model.Sorter("REQUESTEDDATE", {
												descending: 'true'
											}),
											new sap.ui.model.Sorter("REQUESTEDTIME", {
												descending: 'false'
											})
										];
										var oTemp11 = new sap.m.ColumnListItem({
											cells: [
												new sap.m.Text({
													text: "{INQUIRYNUMBER}"
												}),
												new sap.m.Text({
													text: "{VESSELNAME}"
												}),
												new sap.m.Text({
													text: "{SERVICETYPE}"
												}),
												oDoBTxt,
												objstat,
												
												new sap.m.ObjectNumber({
													number: "{TOTALPRICE}",
													unit: "{CURRENCY}"
												})
											]
										});
										oTable11.bindAggregation("items", "/", oTemp11, oSorter);
										oTable11.setModel(otherservices);

									} else {
									//	//alert("nothing")

									}

								}
							}
						});
					}
				},
			});

			var oDat2 = "/VesselParticulars";

			var oModela = this.getView().getModel();

			var itemlist = this.byId("itemlist");
			//	var totalcus = this.byId("totalcusName");
			//	var totalvess = this.byId("totvessel");

			oModela.read(oDat2, {

				success: function (oData30, oResponse30) {

					var tval = (oData30.results).length;

					//itemlist.setText("Items" + "(" + tval + ")");
					//	totalcus.setText(tval);
					//		totalvess.setText(tval);
				},
				error: function () {

				}

			});

			/*********** customer order *************/

			var oController = this;
			oModel = new sap.ui.model.odata.ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);
			oModel.read("/MyOrders", {

				success: function (oData, oResponse) {
					var Tcount = (oData.results).length;

					// if (Tcount != 0) {

					myOrderID = oData.results[0].ORDERID;
					console.log(myOrderID);
					oController.tablebind();
					/*	oController.getView().byId("idobjheader1").setText(_my_CustomerID);
						oController.getView().byId("idobjheader8").setText(_my_ORDERSTATUS);
		
								oController.getView().byId("idobjheader9").setText(myTOTALPRICE1);*/
					//	}

				},

				error: function (Response) {
					// //alert("error")

				}
			});
			var aData = {
				"custSomeData": [{
					"HandlingUnit": "ORDERID"
				}, {
					"HandlingUnit": "ORDERDATE"
				}]
			};
			modelCosort = new sap.ui.model.json.JSONModel();
			modelCosort.setData(aData);

			/************** customer inquiries ******************/
			var aData = {
				"custSomeData": [{
						"HandlingUnit": "InquiryNumber"
					}, {
						"HandlingUnit": "RequestedDate"
					},
					// {"HandlingUnit":"Priority"}  
				]
			};
			modeltree = new sap.ui.model.json.JSONModel();
			modeltree.setData(aData);
			oController.seaman_add1();
			oController.seaman_add2();

			/*************** customer inquiries end********/
		},
		tablebind: function () {
			////alert("ID"+myOrderID)
			oModel = new sap.ui.model.odata.ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);
			var priorityh = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid)];

			oModel.read("/OrderDetails", {
				filters: priorityh,
				success: function (oData, oResponse) {
					var Tcount = (oData.results).length;
					console.log(oData);
					oController.getView().byId("idICTF1").setText("Order Items(" + Tcount + ")");
					if (Tcount != "0") {
						t_CURRENCY = oData.results[0].CURRENCY;
						console.log("IF", t_CURRENCY);
						var totaprice = oData.results[0].TOTALPRICE;
						var firstname = oData.results[0].FIRSTNAME;
						console.log(firstname);
						var t_DANUMBER = oData.results[0].DANUMBER;
						var t_INQUIRYDATE = oData.results[0].INQUIRYDATE;
						var t_INQUIRYNUMBER = oData.results[0].INQUIRYNUMBER;
						var t_INQUIRYTIME = oData.results[0].INQUIRYTIME;
						var t_ITEMNO = oData.results[0].ITEMNO;
						var t_ITEMPRICE = oData.results[0].ITEMPRICE;
						var t_ORDERID = oData.results[0].ORDERID;
						var t_PASSPORTNUMBER = oData.results[0].PASSPORTNUMBER;
						var t_PORTNAME = oData.results[0].PORTNAME;
						var t_QTY = oData.results[0].QTY;
						var t_SEAMANBOOKNUMBER = oData.results[0].SEAMANBOOKNUMBER;
						var t_SERVICETYPE = oData.results[0].SERVICETYPE;
						var t_VENDOR = oData.results[0].VENDOR;
						var t_VESSELNAME = oData.results[0].VESSELNAME;
						var FinalPP = oData.results[0].FINALPRICE;

						oController.getView().byId("idobjheader5").setText(t_VESSELNAME);
						//	oController.getView().byId("idoh11").setText(t_INQUIRYNUMBER);
						//oController.getView().byId("idoh13").setText(t_ITEMPRICE + " " + t_CURRENCY);
						oController.getView().byId("idobjheader4").setText(t_PORTNAME);
						//	oController.getView().byId("idobjheader22").setText(totaprice);
						//	oController.getView().byId("oh1").setText(myOrderID);
						//	oController.getView().byId("idoh13").setText(totaprice + " " + t_CURRENCY);
						//	//alert(t_SERVICETYPE+"inside")
								var t1 = oController.getView().byId("idInquiry");
				if(custOrderStatus === "Approved")
				{
			var oFilters = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid),
			new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, "Approved")];
				}
				else
				{
				//	//alert("else")
				var oFilters = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid)];	
					var titems1 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{ITEMNO}"
					}),
					new sap.m.Label({

						text: "{SERVICEDESCRIPTION}"
					}),
					new sap.m.Input({
						value: "{QTY}",
						type: "Number",
						liveChange: [oController.qtychange, oController],
						enabled: "{ path: 'SERVICETYPE', formatter: 'myFormatter.formatCombobox' }",

					}),
					new sap.m.ObjectNumber({
						number: "{ITEMPRICE}",
						unit: "{CURRENCY}"
					}),
					new sap.m.ObjectNumber({
						number: "{=${QTY}*${ITEMPRICE}}",
						unit: "{CURRENCY}"

					}),
					new sap.m.Text({
						text: "{INQUIRYNUMBER}"

					}),
					new sap.m.Text({
						text: "{RESPONSIBLEPERSON}"

					}),
					new sap.m.Text({
						text: "{SERVICENAME}"

					}),
					new sap.m.Text({
						text: "{ORDERID}"
					}),
					new sap.m.Text({
						text: "{SERVICETYPE}"
					}),
					new sap.m.Text({
						text: "{VESSELNAME}"
					}),
					new sap.m.Text({
						text: "{INQUIRYDATE}"
					}),
					new sap.m.Text({
						text: "{INQUIRYTIME}"
					}),
					new sap.m.Text({
						text: "{PORTNAME}"
					}),
					new sap.m.Text({
						text: "{CURRENCY}"
					}),
					new sap.m.Text({
						text: "{CUSTOMERID}"
					}),
					new sap.m.Text({
						text: "{FIRSTNAME}"
					}),
					new sap.m.Text({
						text: "{INVOICEID}"
					})

				]
			});
			
			t1.bindItems({
				path: '/OrderDetails',
				template: titems1,
				filters: oFilters
			});
				}
		


					}

				},

				error: function (Response) {
					// //alert("error")

				}
			});

			var oController = this;
			oModel = new sap.ui.model.odata.ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);
			oModel.read("/MyOrders", {
				filters: priorityh,
				success: function (oData, oResponse) {
					var Tcount = (oData.results).length;
					console.log(oData);

					if (Tcount != "0") {

						var _my_CustomerID = oData.results[0].CUSTOMERID;
						var _my_CUSTOMERNAME = oData.results[0].CUSTOMERNAME;
						var _my_ORDERDATE = oData.results[0].ORDERDATE;
						var myOrderID = oData.results[0].ORDERID;
						var _my_ORDERSTATUS = oData.results[0].ORDERSTATUS;
						var _my_ORDERSTATUSCOUNT = oData.results[0].ORDERSTATUSCOUNT;
						var _my_ORDERTIME = oData.results[0].ORDERTIME;
						var myTOTALPRICE1 = oData.results[0].TOTALPRICE;
						var imo = oData.results[0].IMO;
						var eta = oData.results[0].ETA;
						var etd = oData.results[0].ETD;
						var finprice = oData.results[0].FINALPRICE
						var curre = oData.results[0].CURRENCY

						oController.getView().byId("idobjheader2").setText(imo);
						/*	oController.getView().byId("idobjheader6").setText(eta);
								oController.getView().byId("idobjheader7").setText(etd);*/
						oController.getView().byId("idobjheader1").setText(_my_CustomerID);
						//	oController.getView().byId("idobjheader8").setText(_my_ORDERSTATUS);

						oController.getView().byId("idobjheader22").setText(myTOTALPRICE1 + " " + curre);
						oController.getView().byId("idobjheader9").setText(finprice + " " + curre);
					}

				},

				error: function (Response) {
					// //alert("error")

				}
			});
			
			
		},

		opencomm: function (oEvent) {
			reamark = oEvent.getSource().getBindingContext().getObject().REMARKS
			var tre_mark = new sap.m.Text({})
			tre_mark.setText(reamark)
			console.log(tre_mark);

			/*	var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, "549596625"),
				new sap.ui.model.Filter("ITEMNO", sap.ui.model.FilterOperator.EQ, "1")];
			var sPath = "/MyInquiries";
			oModel.read(sPath, {
				filters:oFilters,
				success: function (oData, oResponse) {
console.log(oData.results[0].REMARKS);
console.log(oData.results[0].REMARKS);

				},
				});*/
			services_dialog1 = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Comments',
				type: 'Message',
				content: tre_mark,

				endButton: new Button({
					text: 'Close',
					press: function () {

						services_dialog1.close();
					}
				}),

				afterClose: function () {
					services_dialog1.close();
				}
			});
			services_dialog1.open();

		},

		handleIconMainTabBarSelect: function (oEvent) {

			var oCont = this;
			var icon = this.getView().byId("idIconTabBarMainnotif");

			var mkey = oEvent.getParameters().key;

			if (mkey === "Customers") {
				oCont.getView().byId("idIconTabBarnotif").setSelectedKey("informationtab1");
				oCont.getView().byId("idIconTabBarnotif").setVisible(true); //icon tab bar of My Fleet Section - "Customer" Tab bar
				oCont.getView().byId("abtn").setVisible(true);
				oCont.getView().byId("panel1").setVisible(true);
				oCont.getView().byId("customerOrder1").setVisible(false);
				oCont.getView().byId("customerorder").setVisible(false);
				// oCont.getView().byId("CustomerInquiries").setVisible(false);	
				oCont.getView().byId("Rsplitter").setVisible(false);
				oCont.getView().byId("Rsplitter12").setVisible(false);
				oCont.getView().byId("viewseamanorder").setVisible(false);
				/*	Buttons Visibility */
				//	oCont.getView().byId("abtn").setVisible(true);

				/*	Buttons Visibility - Customer Inquiries */
				oCont.getView().byId("confirmselectedinq12").setVisible(false);
				oCont.getView().byId("cancelinq12").setVisible(false);
				oCont.getView().byId("confirminq12").setVisible(false);
				//	oCont.getView().byId("pto").setVisible(false);
				oCont.getView().byId("reset1").setVisible(false);
				oCont.getView().byId("confirmselectedinq12").setVisible(false);
				oCont.getView().byId("viewdet").setVisible(false);
				oCont.byId("pendingpanel").setVisible(false);
				/*	oCont.byId("sendquotation").setVisible(false);
				oCont.byId("approveseman").setVisible(false);
				oCont.byId("approveservice").setVisible(false);
				oCont.byId("updateorder").setVisible(false);
				*/
				/*	Buttons Visibility - Customer Order */
				oCont.getView().byId("cancelapprove").setVisible(false);
				oCont.getView().byId("confirmorder").setVisible(false);
				oCont.getView().byId("cancelorder").setVisible(false);
				oCont.getView().byId("approvere").setVisible(false);
				oCont.getView().byId("approveselectre").setVisible(false);
				oCont.getView().byId("assignto").setVisible(false);

			} else if (mkey === "CustomerInquiry") {

				oCont.getView().byId("idIconTabBarnotif").setVisible(false); //icon tab bar of My Fleet Section - "Customer" Tab bar
				oCont.getView().byId("abtn").setVisible(false);
				oCont.getView().byId("panel1").setVisible(false);
				oCont.getView().byId("customerOrder1").setVisible(false);
				oCont.getView().byId("customerorder").setVisible(false);
				//	oCont.byId("CustomerInquiries").setVisible(true);	
				oCont.getView().byId("Rsplitter").setVisible(true);
				oCont.getView().byId("Rsplitter12").setVisible(false);
				oCont.getView().byId("cancelorder").setVisible(false);
				oCont.getView().byId("approvere").setVisible(false);
				oCont.getView().byId("approveselectre").setVisible(false);
				oCont.getView().byId("viewseamanorder").setVisible(false);
				oCont.getView().byId("SavePendingEditVessel").setVisible(false);

				/*	Buttons Visibility - Customer*/
				oCont.getView().byId("abtn").setVisible(false);
				oCont.getView().byId("cbtn").setVisible(false);
				oCont.getView().byId("sbtn").setVisible(false);
				oCont.getView().byId("cancelcargo").setVisible(false);
				oCont.getView().byId("savecargo").setVisible(false);
				oCont.getView().byId("cancelinvoice").setVisible(false);
				oCont.getView().byId("approveinvoice").setVisible(false);
				//		oCont.getView().byId("advsbtn").setVisible(false);

				/*	Buttons Visibility - Customer Inquiries */

				//	oCont.getView().byId("pto").setVisible(false);
				oCont.getView().byId("reset1").setVisible(false);
				oCont.getView().byId("cancelinq12").setVisible(false);
				oCont.getView().byId("confirminq12").setVisible(true);
				oCont.getView().byId("viewdet").setVisible(false);
				oCont.getView().byId("confirmselectedinq12").setVisible(false);

				/*	Buttons Visibility - Customer Order */
				oCont.getView().byId("cancelapprove").setVisible(false);
				oCont.getView().byId("confirmorder").setVisible(false);
				oCont.getView().byId("assignto").setVisible(true);
				
				var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
				var oCont = this;
				var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var sPath = "/MyInquiryHeader";
				oModel.read(sPath, {
				filters: oFilters,
				success: function (oData, oResponse) {
					console.log(oData);
					var count = (oData.results).length;
					console.log("cnttotinq:" + count)
					
					 ci_orderstatus = oData.results[0].ORDERSTATUS
				//	//alert(ci_orderstatus)
					if(ci_orderstatus == "Approved" || ci_orderstatus == "Accepted" || ci_orderstatus == "Rejected" ){
					oCont.getView().byId("assignto").setVisible(false);
					oCont.getView().byId("cancelinq12").setVisible(false);
					oCont.getView().byId("confirminq12").setVisible(false);
					oCont.getView().byId("reset1").setVisible(false);
					oCont.getView().byId("viewdet").setVisible(false);
					
					}else{
						
					}
					}
			});

			} else if (mkey === "customerorder") {

				var rq_table = oCont.getView().byId("idTable1");
				var aItems = rq_table.getItems();
				aItems[0].setSelected(true);
				var tab2 = oCont.getView().byId("idTable1");
				var tab3 = oCont.getView().byId("idInquiry");
				var oFirstItem = tab2.getItems()[0];
				var oFirstItem1 = tab3.getItems()[0];
				orderstatusinit = oFirstItem.getCells()[3].getText();
				var eETA = oFirstItem.getCells()[6].getText();
				var eETD = oFirstItem.getCells()[7].getText();
				var eFINAL = oFirstItem.getCells()[2].getNumber();
				var eAcutal = oFirstItem.getCells()[5].getText();
				var eOrderType = oFirstItem.getCells()[8].getText();
				eCurrency = oFirstItem.getCells()[9].getText();

				ordertimem = oFirstItem.getCells()[10].getText();
				customernamem = oFirstItem.getCells()[11].getText();
				currencym = oFirstItem.getCells()[12].getText();
				orderdatem = oFirstItem.getCells()[13].getText();
				etamm = oFirstItem.getCells()[14].getText();
				etdmm = oFirstItem.getCells()[15].getText();
				discount = oFirstItem.getCells()[16].getText();
				customeidm = oFirstItem.getCells()[17].getText();
				var inq = oFirstItem.getCells()[18].getText();
				var orderi = oFirstItem.getCells()[19].getText();
				var imo1 = oFirstItem.getCells()[20].getText();
				var finalp = oFirstItem.getCells()[21].getText();

				this.byId("ordertime").setText(ordertimem);
				this.byId("idobjheader2").setText(imo1);
				this.byId("customername").setText(customernamem);
				this.byId("currency").setText(currencym);
				this.byId("orderdate").setText(orderdatem);
				this.byId("etam").setText(etamm);
				this.byId("etdm").setText(etdmm);
				this.byId("discount").setText(discount);
				this.byId("cusidmm").setText(customeidm);
				this.byId("idobjheader3").setText(inq);
				this.byId("idobjheader10").setText(orderi);
				this.byId("idobjheader22").setText(eAcutal);
				this.byId("idobjheader9").setText(finalp);

				//	var	sername = oFirstItem1.getCells()[2].getText();
				console.log("orderstatusinit : ", orderstatusinit)
				console.log("eETA : ", eETA)
				console.log("eETD : ", eETD)
				var mydate = new Date(eETA);
				var formathours = ("0" + mydate.getHours()).slice(-2);
				var formatmin = ("0" + mydate.getMinutes()).slice(-2);
				var formatsec = ("0" + mydate.getSeconds()).slice(-2);

				var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getMonth()];
				var coeta = month + ' ' + mydate.getDate() + ', ' + mydate.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
					formatsec;
				var mydated = new Date(eETD);
				var formathours = ("0" + mydated.getHours()).slice(-2);
				var formatmin = ("0" + mydated.getMinutes()).slice(-2);
				var formatsec = ("0" + mydated.getSeconds()).slice(-2);

				var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydated.getMonth()];
				var coetd = month + ' ' + mydated.getDate() + ', ' + mydated.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
					formatsec;

				console.log("eFINAL : ", eFINAL + " " + eCurrency)
				console.log("eAcutal : ", eAcutal + " " + eCurrency)
				console.log("eOrderType : ", eOrderType)
				console.log("eCurrency :", eCurrency)
				if (eOrderType === "") {
					this.byId("idobjheader11").setVisible(false)
				} else {
					this.byId("idobjheader11").setVisible(true);
					this.byId("idobjheader11").setText(eOrderType);
				}
				this.byId("idobjheader6").setText(coeta);
				this.byId("idobjheader7").setText(coetd);
				this.byId("idobjheader9").setText(eFINAL + " " + eCurrency);
				this.byId("idobjheader22").setText(eAcutal + " " + eCurrency);
				if (orderstatusinit == "Approved" || orderstatusinit == "Rejected") {
					oCont.byId("assignto").setVisible(false);
					oCont.byId("viewseamanorder").setVisible(true);
					oCont.byId("approveselectre").setVisible(false);
					oCont.byId("co_radiobuttonselt").setEditable(false);
					oCont.byId("Com12").setEditable(false);

				} else {
					oCont.byId("assignto").setVisible(false);
					oCont.byId("viewseamanorder").setVisible(true);
					oCont.byId("approveselectre").setVisible(true);
				}

				oCont.getView().byId("idIconTabBarnotif").setVisible(false); //icon tab bar of My Fleet Section - "Customer" Tab bar
				oCont.getView().byId("abtn").setVisible(false);
				oCont.getView().byId("panel1").setVisible(false);
				oCont.getView().byId("customerOrder1").setVisible(true);
				oCont.getView().byId("customerorder").setVisible(true);
				// oCont.byId("CustomerInquiries").setVisible(false);	
				oCont.getView().byId("Rsplitter").setVisible(false);
				oCont.getView().byId("Rsplitter12").setVisible(false);

				/*	Buttons Visibility - Customer*/
				oCont.getView().byId("abtn").setVisible(false);
				oCont.getView().byId("cbtn").setVisible(false);
				oCont.getView().byId("sbtn").setVisible(false);
				oCont.getView().byId("cancelcargo").setVisible(false);
				oCont.getView().byId("savecargo").setVisible(false);
				oCont.getView().byId("cancelinvoice").setVisible(false);
				oCont.getView().byId("approveinvoice").setVisible(false);
				//		oCont.getView().byId("advsbtn").setVisible(false);

				/*	Buttons Visibility - CustomerInquiries */
				oCont.getView().byId("confirmselectedinq12").setVisible(false);
				oCont.getView().byId("cancelinq12").setVisible(false);
				oCont.getView().byId("confirminq12").setVisible(false);
				//	oCont.getView().byId("pto").setVisible(false);
				oCont.getView().byId("reset1").setVisible(false);
				oCont.getView().byId("viewdet").setVisible(false);
				/*	oCont.byId("backtoitem").setVisible(false);
					oCont.byId("sendquotation").setVisible(false);
					oCont.byId("approveseman").setVisible(false);
					oCont.byId("approveservice").setVisible(false);
					oCont.byId("updateorder").setVisible(false);*/

				/*	Buttons Visibility - Customer Order  */
				oCont.getView().byId("cancelorder").setVisible(false);
				oCont.getView().byId("approvere").setVisible(false);
				//	oCont.getView().byId("approveselectre").setVisible(true);
				oCont.getView().byId("cancelorder").setVisible(false);
				oCont.getView().byId("approvere").setVisible(false);
				oCont.getView().byId("SavePendingEditVessel").setVisible(false);
				//		oCont.getView().byId("approveselectre").setVisible(true);
				//	oCont.getView().byId("assignto").setVisible(true);

			}
		},

		handleIconTabBarSelect1: function (oEvent) {
			this.byId("abtn").setVisible(false);
			var icon = this.getView().byId("idIconTabBarnotif");
			var skey = oEvent.getParameters().key;

			if (skey === "informationtab1") {

				this.byId("abtn").setVisible(true);
				this.byId("panel1").setVisible(true);
				this.byId("cancelcargo").setVisible(false);
				this.byId("panel3").setVisible(false);
				this.byId("savecargo").setVisible(false);
				this.getView().byId("cancelinvoice").setVisible(false);
				this.getView().byId("approveinvoice").setVisible(false);
				this.getView().byId("SavePendingEditVessel").setVisible(false);
				this.getView().byId("pendingpanel").setVisible(false);
				this.getView().byId("approvedpanel").setVisible(false);

			} else if (skey === "informationtab2") {

				this.byId("cbtn").setVisible(false);
				this.byId("sbtn").setVisible(false);
				this.getView().byId("approvedpanel").setVisible(false);
				this.getView().byId("cancelcargo").setVisible(false);
				this.getView().byId("savecargo").setVisible(true);
				this.getView().byId("cancelinvoice").setVisible(false);
				this.getView().byId("SavePendingEditVessel").setVisible(false);
				this.getView().byId("approveinvoice").setVisible(false);
				this.getView().byId("pendingpanel").setVisible(false);

				var rq_table = this.byId("idOperationTabel1sof");
				var aItems = rq_table.getItems();
				var aItemss = aItems[0].setSelected(true);

				var oModels = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var oFilters = [new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, Danumberrender)];

				oModels.read('/SOFCargo1', {
					filters: oFilters,
					success: function (oData, oResp) {
						var len = (oData.results).length;
						console.log("len :", len);
						//	var Danum = oData.results[0].DANUMBER
						//	console.log("Danum :",Danum)

						if (len == 9) {

							oCont.getView().byId("sof1f1").setVisible(true);
							oCont.getView().byId("sof2f2").setVisible(false);
						} else {
							oCont.getView().byId("sof2f2").setVisible(true);
							oCont.getView().byId("sof1f1").setVisible(false);
						}

					},
				});
					var oCont = this;
			var oFilters = [new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, Danumberrender)]
			var t0 = oCont.getView().byId("sof1");
			var titems0 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{EVENTS}",
						wrapping: true
					}),

					new sap.m.DatePicker({
						valueFormat: "yyyy-dd-MM",
						value: "{DATE}"
					}),

					new sap.m.TimePicker({
						placeholder: "Select",
						value: "{TIME}",
						valueFormat:"HH:mm:ss"

					})

				]
			});

			t0.bindItems({

				path: '/SOFCargo1',
				template: titems0,
				filters: oFilters

			});

			var t1 = oCont.getView().byId("sofdetails");
			var titems1 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{EVENTS}",
						wrapping: true
					}),

					new sap.m.DatePicker({
						valueFormat: "yyyy-dd-MM",
						value: "{DATE}"
					}),

					new sap.m.TimePicker({
						placeholder: "Select",
						value: "{TIME}",
						valueFormat:"HH:mm:ss"

					})

				]
			});

			t1.bindItems({

				path: '/SOFCargo1',
				template: titems1,
				filters: oFilters

			});

			var t2 = oCont.getView().byId("sofdetails2");
			var titems2 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{EVENTS}"
					}),
					new sap.m.DatePicker({
						valueFormat: "yyyy-MM-dd",
						value: "{DATE}"
					}),
					new sap.m.TimePicker({
						placeholder: "Select",
						value: "{TIME}",
						valueFormat:"HH:mm:ss"
					})

				]
			});

			t2.bindItems({

				path: '/SOFCargo2',
				template: titems2,
				filters: oFilters

			});

			var t3 = oCont.getView().byId("sofdetails3");
			var titems3 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{EVENTS}"
					}),
					new sap.m.DatePicker({
						valueFormat: "yyyy-MM-dd",
						value: "{DATE}"
					}),
					new sap.m.TimePicker({
						placeholder: "Select",
						value: "{TIME}",
						valueFormat:"HH:mm:ss"
					})

				]
			});

			t3.bindItems({

				path: '/SOFCargo3',
				template: titems3,
				filters: oFilters

			});

			} else if (skey === "informationtab3") {

				this.getView().byId("cancelinvoice").setVisible(false);
				this.getView().byId("approveinvoice").setVisible(true);
				this.byId("cbtn").setVisible(false);
				this.byId("sbtn").setVisible(false);
				this.getView().byId("approvedpanel").setVisible(false);
				this.getView().byId("cancelcargo").setVisible(false);
				this.byId("abtn").setVisible(false);
				this.getView().byId("SavePendingEditVessel").setVisible(false);
				this.byId("cancelcargo").setVisible(false);
				this.byId("savecargo").setVisible(false);
				this.getView().byId("pendingpanel").setVisible(false);

			}

		},

		bindrtable: function () {
			var tabl_ord_id = this.byId("idOperationTabel3").getItems();

			var Cells2 = tabl_ord_id[0].getCells();
			// Get ID and Name 
			var orderid = Cells2[1].getText();
			invoiceid = Cells2[2].getText();
			invoicedate = Cells2[3].getText();
			this.getView().byId("Customer").setValue(invoiceid);
			this.getView().byId("DP1").setValue(invoicedate);
			// var oCont = this;
			var oFilterscid = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid),
				new sap.ui.model.Filter("INVOICEID", sap.ui.model.FilterOperator.EQ, invoiceid)
			];
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var od_vs_table = this.byId("idOrderDetailsvsl");
			var oTemp11 = new sap.m.ColumnListItem({
				type: sap.m.ListType.Active,
				cells: [new sap.m.Text({
						text: "{ITEMNO}"
					}),
					new sap.m.Text({
						text: "{INQUIRYNUMBER}"
					}),
					new sap.m.Text({
						text: "{QTY}"
					}),
					new sap.m.ObjectNumber({
						number: "{TOTALPRICE}",
						unit: "{CURRENCY}"
					}),
				],
			});
			od_vs_table.bindAggregation("items", {
				path: "/OrderDetails",
				template: oTemp11,
				filters: oFilterscid
			});
		},

		OrderSelect: function (oEvent) {
			var icon = this.getView().byId("OrderSelect");
			var orderselect = oEvent.getParameters().key;

			if (orderselect === "key1" && ostatus === "New") {
				//	//alert("New - OD")
				this.byId("cancelorder").setVisible(false);
				this.byId("approvere").setVisible(false);
				this.byId("approveselectre").setVisible(true);
				this.byId("cancelapprove").setVisible(false);
				this.byId("confirmorder").setVisible(false);
				this.byId("assignto").setVisible(false); // tab changes
				this.byId("viewseamanorder").setVisible(true);

			} else if (orderselect === "key1" && ostatus === "Approved" && ostatus === "Rejected") {
				//	//alert("Approved - OD")
				this.byId("cancelorder").setVisible(false);
				this.byId("approvere").setVisible(false);
				this.byId("approveselectre").setVisible(false);
				this.byId("cancelapprove").setVisible(false);
				this.byId("confirmorder").setVisible(false);
				this.byId("assignto").setVisible(false); // tab changes
				this.byId("viewseamanorder").setVisible(true);
				this.byId("coActualprice").setEditable(false);
				this.byId("coActualprice").setValue(TotalAmount);
				this.byId("idobjheader22").setText(TotalAmount + " " + eCurrency);
				this.byId("co_radiobuttonselt").setEditable(false);
				
					this.byId("co_radiobuttonselt").setSelectedIndex(1);
					this.byId("Com12").setEditable(false);
				this.byId("Com12").setValue(agentcomments);
				

			} else if (orderselect === "FinalPrice" && ostatus === "Approved" && ostatus === "Rejected") {
				//	//alert("Approved - Fin");
					
				var totamountt = this.byId("idobjheader22").getText().split('');
				var amnt = this.getView().byId("idobjheader22").getText().split(' ')[0]; //amnt 
				var amnt1 = this.getView().byId("idobjheader22").getText().split(' ')[1]; ///currncy
				console.log("amnt:", amnt);
				console.log("amnt1:", amnt1);
				var FinAmountt = this.byId("idobjheader9").getText().split('');
				var Famnt = this.getView().byId("idobjheader9").getText().split(' ')[0]; //amnt 
				var Famnt1 = this.getView().byId("idobjheader9").getText().split(' ')[1]; ///currncy
				console.log("Famnt:", Famnt);
				console.log("Famnt1:", Famnt1);

				this.getView().byId("coActualprice").setValue(amnt);
				this.byId("idobjheader22").setText(amnt + " " + eCurrency);
			//	//alert(amnt);
				this.getView().byId("coPrice").setValue(Famnt);

				this.byId("cancelapprove").setVisible(false);
				this.byId("confirmorder").setVisible(false);
				this.byId("cancelorder").setVisible(false);
				this.byId("approvere").setVisible(false);
				this.byId("approveselectre").setVisible(false);
				this.byId("assignto").setVisible(false);
				this.byId("viewseamanorder").setVisible(false);
				this.byId("coActualprice").setEditable(false);
			//	this.byId("coActualprice").setValue(TotalAmount);
				this.byId("co_radiobuttonselt").setEditable(false);
				this.byId("co_radiobuttonselt").setSelectedIndex(1);
				this.byId("Com12").setEditable(false);
				this.byId("Com12").setValue(agentcomments);
				
			} else if (orderselect === "FinalPrice" && ostatus === "New") {
					////alert("New - Fin");
						this.byId("co_radiobuttonselt").setEditable(true);
				this.byId("co_radiobuttonselt").setSelectedIndex(0);
				this.byId("Com12").setEditable(true);
				this.byId("Com12").setValue("");
				this.byId("coActualprice").setEditable(true);
				var totamountt = this.byId("idobjheader22").getText().split('');
				var amnt = this.getView().byId("idobjheader22").getText().split(' ')[0]; //amnt 
				var amnt1 = this.getView().byId("idobjheader22").getText().split(' ')[1]; ///currncy
				console.log("amnt:", amnt);
				console.log("amnt1:", amnt1);
				var FinAmountt = this.byId("idobjheader9").getText().split('');
				var Famnt = this.getView().byId("idobjheader9").getText().split(' ')[0]; //amnt 
				var Famnt1 = this.getView().byId("idobjheader9").getText().split(' ')[1]; ///currncy
				console.log("Famnt:", Famnt);
				console.log("Famnt1:", Famnt1);
				
				var co_table1 = this.getView().byId("idInquiry");
				var rowItems = co_table1.getSelectedItems();
				var co_tabel1len1 = co_table1.getSelectedItems().length;
				if (rowItems == "") {
					////alert("if")
				this.getView().byId("coActualprice").setValue(amnt);
				this.byId("idobjheader22").setText(amnt + " " + eCurrency);
				this.byId("coActualprice").setEditable(true);
				}else{
				var TotalAmount = 0;
				for (var i = 0; i < co_tabel1len1; i++) {
				var rows = rowItems[i];
				var Cells4 = rows.getCells();
				var Cotot = Cells4[4].getNumber();
				TotalAmount = parseInt(TotalAmount);
				TotalAmount = parseInt(TotalAmount) + parseInt(Cotot);
				console.log("TotalAmount :", TotalAmount);
				this.byId("coActualprice").setValue(TotalAmount);
				this.byId("idobjheader22").setText(TotalAmount + " " + eCurrency);
					
				}
				this.byId("coActualprice").setEditable(true);
				}
				
				this.getView().byId("coPrice").setValue(Famnt);

				this.byId("cancelapprove").setVisible(false);
				this.byId("confirmorder").setVisible(true);
				this.byId("cancelorder").setVisible(false);
				this.byId("approvere").setVisible(false);
				this.byId("approveselectre").setVisible(false);
				this.byId("assignto").setVisible(false);
				this.byId("viewseamanorder").setVisible(false);
			
			
			}
		},

		approveselectre: function () {
			// this.getView().byId("fnl_price").setVisible(true);

			/*var totamountt = this.byId("idobjheader22").getText();
		var FinAmountt = this.byId("idobjheader9").getText();
		 this.getView().byId("coActualprice").setValue(totamountt);
         this.getView().byId("coPrice").setValue(FinAmountt);*/
			var totamountt = this.byId("idobjheader22").getText().split('');
			var amnt = this.getView().byId("idobjheader22").getText().split(' ')[0]; //amnt 
			var amnt1 = this.getView().byId("idobjheader22").getText().split(' ')[1]; ///currncy
			console.log("amnt:", amnt);
			console.log("amnt1:", amnt1);
			var FinAmountt = this.byId("idobjheader9").getText().split('');
			var Famnt = this.getView().byId("idobjheader9").getText().split(' ')[0]; //amnt 
			var Famnt1 = this.getView().byId("idobjheader9").getText().split(' ')[1]; ///currncy
			console.log("Famnt:", Famnt);
			console.log("Famnt1:", Famnt1);

			//	this.getView().byId("coActualprice").setValue(amnt);
			this.getView().byId("coPrice").setValue(Famnt);
			var co_table1 = this.getView().byId("idInquiry");
			var rowItems = co_table1.getSelectedItems();
			var co_tabel1len1 = co_table1.getSelectedItems().length;

			if (rowItems == "") {
				sap.m.MessageBox.confirm("Please Select Order Items", {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Information",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {
				console.log("TableLength :", co_tabel1len1);

				var ocontroller = this;
				var TotalAmount = 0;
				for (var i = 0; i < co_tabel1len1; i++) {
				var rows = rowItems[i];
				var Cells4 = rows.getCells();
				var Cotot = Cells4[4].getNumber();
				TotalAmount = parseInt(TotalAmount);
				TotalAmount = parseInt(TotalAmount) + parseInt(Cotot);
				console.log("TotalAmount :", TotalAmount);

				}

				ocontroller.byId("coActualprice").setValue(TotalAmount);
				ocontroller.byId("idobjheader22").setText(TotalAmount + " " + eCurrency);
				var co_table1 = this.getView().byId("idInquiry");
				var rowItems = co_table1.getSelectedItems();
				console.log(rowItems);
				co_tabel1len1 = co_table1.getSelectedItems().length;
				console.log(co_tabel1len1);

				this.getView().byId("itb1123").setSelectedKey("FinalPrice");
				this.getView().byId("cancelorder").setVisible(false);
				this.getView().byId("approvere").setVisible(false);
				this.getView().byId("approveselectre").setVisible(false);
				this.getView().byId("cancelapprove").setVisible(false);
				this.getView().byId("confirmorder").setVisible(true);
				this.getView().byId("viewseamanorder").setVisible(false);
			//	this.byId("RB3-3").setSelected(true);

				Coglobal = "y";

			}
		},

		InquiriesSelect: function (oEvent) {
			var icon = this.getView().byId("InquiriesSelect");
			var orderselect = oEvent.getParameters().key;

			if (orderselect === "InquiryItem") {
				this.byId("cancelinq1").setVisible(true);
				this.byId("confirminq").setVisible(true);
				this.byId("confirmselectedinq").setVisible(true);
				this.byId("backtoitem").setVisible(false);
				this.byId("sendquotation").setVisible(false);
			} else if (orderselect === "InquiryFinal") {
				this.byId("cancelinq1").setVisible(true);
				this.byId("confirminq").setVisible(false);
				this.byId("confirmselectedinq").setVisible(false);
				this.byId("backtoitem").setVisible(true);
				this.byId("sendquotation").setVisible(true);
			}
		},

		SemanSelect: function (oEvent) {
			var icon = this.getView().byId("SemanSelect");
			var SemanSelect = oEvent.getParameters().key;

			if (SemanSelect === "semanselect1") {
				this.byId("cancelinq1").setVisible(true);
				this.byId("confirminq").setVisible(false);
				this.byId("confirmselectedinq").setVisible(false);
				this.byId("backtoitem").setVisible(false);
				this.byId("sendquotation").setVisible(false);
				this.byId("approveseman").setVisible(true);
				this.byId("approveservice").setVisible(false);
				this.byId("updateorder").setVisible(false);
			} else if (SemanSelect === "semanselect2") {
				this.byId("cancelinq1").setVisible(true);
				this.byId("confirminq").setVisible(false);
				this.byId("confirmselectedinq").setVisible(false);
				this.byId("backtoitem").setVisible(false);
				this.byId("sendquotation").setVisible(false);
				this.byId("approveseman").setVisible(false);
				this.byId("approveservice").setVisible(true);
				this.byId("updateorder").setVisible(false);
			} else if (SemanSelect === "semanselect3") {
				this.byId("cancelinq1").setVisible(true);
				this.byId("confirminq").setVisible(false);
				this.byId("confirmselectedinq").setVisible(false);
				this.byId("backtoitem").setVisible(false);
				this.byId("sendquotation").setVisible(false);
				this.byId("approveseman").setVisible(false);
				this.byId("approveservice").setVisible(false);
				this.byId("updateorder").setVisible(true);
			}
		},

		confirminq: function () {
			this.byId("Rsplitter12").setVisible(true);
			this.byId("Rsplitter").setVisible(false);
			this.byId("cancelinq1").setVisible(true);
			this.byId("approveseman").setVisible(true);
			this.byId("confirminq").setVisible(false);
			this.byId("confirmselectedinq").setVisible(false);
			this.byId("cancelinq11").setVisible(false);
			this.byId("backtoitem").setVisible(false);
			this.byId("sendquotation").setVisible(false);
			this.byId("approveservice").setVisible(false);
			this.byId("updateorder").setVisible(false);
		},

		confirmselectedinq: function () {
			this.byId("Rsplitter12").setVisible(true);
			this.byId("Rsplitter").setVisible(false);
			this.byId("cancelinq1").setVisible(true);
			this.byId("approveseman").setVisible(true);
			this.byId("confirminq").setVisible(false);
			this.byId("confirmselectedinq").setVisible(false);
			this.byId("cancelinq11").setVisible(false);
			this.byId("backtoitem").setVisible(false);
			this.byId("sendquotation").setVisible(false);
			this.byId("approveservice").setVisible(false);
			this.byId("updateorder").setVisible(false);
		},

		cancelinq1: function () {
			var ocontroller = this;
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Are you sure to cancel?", {
					//  icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {

						if (oAction == "YES") {
							ocontroller.byId("Rsplitter12").setVisible(false);
							ocontroller.byId("Rsplitter").setVisible(true);
							ocontroller.byId("confirmselectedinq").setVisible(true);
							ocontroller.byId("cancelinq1").setVisible(true);
							ocontroller.byId("confirminq").setVisible(true);
							ocontroller.byId("backtoitem").setVisible(false);
							ocontroller.byId("sendquotation").setVisible(false);
							ocontroller.byId("approveseman").setVisible(false);
						} else {

						}

					}
				});
		},
		link1: function () {
			var otable = this.byId("itb1");
			this.byId("panel1").setVisible(true);
			this.byId("panel2").setVisible(false);
			this.byId("panel3").setVisible(false);
			this.byId("abtn").setVisible(true);
			this.byId("cbtn").setVisible(false);
			this.byId("sbtn").setVisible(false);
			this.byId("editbtn1").setVisible(false);
			this.byId("okbtn1").setVisible(false);
			this.byId("cancelbtn1").setVisible(false);
			this.byId("savebtn1").setVisible(false);
			this.byId("downid").setVisible(false);
			this.byId("reqid").setVisible(false);
		},

		linkadd: function () {
			var otable = this.byId("itb1");
			this.byId("panel1").setVisible(false);
			this.byId("panel2").setVisible(false);
			this.byId("panel3").setVisible(true);

			this.byId("abtn").setVisible(false);
			this.byId("cbtn").setVisible(true);
			this.byId("sbtn").setVisible(true);
			this.byId("editbtn1").setVisible(false);
			this.byId("okbtn1").setVisible(false);
			this.byId("cancelbtn1").setVisible(false);
			this.byId("savebtn1").setVisible(false);
			this.byId("downid").setVisible(false);
			this.byId("reqid").setVisible(false);
		},

		link2: function () {

			var otable = this.byId("itb1");
			this.byId("panel1").setVisible(false);
			this.byId("panel2").setVisible(true);
			this.byId("panel3").setVisible(false);

			this.byId("abtn").setVisible(true);
			this.byId("cbtn").setVisible(false);
			this.byId("sbtn").setVisible(false);
			this.byId("editbtn1").setVisible(true);
			this.byId("okbtn1").setVisible(true);
			this.byId("cancelbtn1").setVisible(false);
			this.byId("savebtn1").setVisible(false);
			this.byId("downid").setVisible(false);
			this.byId("reqid").setVisible(false);
		},

		addveselDialog: function () {

			add_vesel_dialog = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Select',
				type: 'Message',
				content: [addvesselcal],
				beginButton: new Button({
					text: 'Submit',
					press: function () {
						this.add_vesel();
						add_vesel_dialog.close();

					}.bind(this)
				}),
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						add_vesel_dialog.close();
					}
				}),
				afterClose: function () {
					// add_vesel_dialog.destroy();
					add_vesel_dialog.close();
				}
			});
			add_vesel_dialog.open();

		},

		add_vesel: function () {

		},

		onmyfleettablePress: function (oEvent) {
			/*	var otable = this.byId("itb1");
				otable.destroyContent();
				var adf = sap.ui.xmlfragment("editvesselfragment", "AgentPortal_Customer.AgentPortal_Customer.view.editvessel", this);
				otable.addContent(adf);*/
			this.byId("itb1");
			this.byId("panel2").setVisible(true);
			this.byId("panel1").setVisible(false);
			var addvesbutton = this.byId("abtn").setVisible(false);
			var but1 = this.byId("editbtn1").setVisible(true);
			var but2 = this.byId("okbtn1").setVisible(true);
			var but3 = this.byId("cancelbtn1").setVisible(false);
			var but4 = this.byId("savebtn1").setVisible(false);

			imoval = oEvent.getSource().getBindingContext().getProperty("IMO");

			customeridval = oEvent.getSource().getBindingContext().getProperty("CUSTOMERID");
			var oDat = "/VesselParticulars(IMO='" + imoval + "')";
			var oModel = this.getView().getModel();
			var editform = this.getView().byId("FormDisplay480_12120Dual");
			oModel.read(oDat, {
				success: function (oData, oResponse) {
					var oModel8 = new sap.ui.model.json.JSONModel();
					oModel8.setData(oData);
					editform.setModel(oModel8);
				},
				error: function () {}
			});
		},

		clearaddvessel: function () {
			//	sap.ui.xmlfragment("addvesselfragment1", "AgentPortal_Customer.AgentPortal_Customer.view.addvessel", this);

			/*this.byId("opp12").setValue("");
			this.byId("opp13").setValue("");*/
			var formm = this.getView().byId("FormDisplay480_12120Dual");
			var op1 = this.getView().byId("op1").setValue("");
			//	var op2 = this.getView().byId("op2").setValue("");
			//	var op3 = this.getView().byId("op3").setValue("");
			//	var op4 = this.getView().byId("op4").setValue("");
			var op5 = this.getView().byId("op5").setValue("");
			var op6 = this.getView().byId("op6").setValue("");
			var op7 = this.getView().byId("op7").setValue("");
			var op8 = this.getView().byId("op8").setValue("");
			var op9 = this.getView().byId("op9").setValue("");
			var op9i = this.getView().byId("op9i").setValue("");
			var op10 = this.getView().byId("op10").setValue("");
			var op10i = this.getView().byId("op10i").setValue("");
			var op11 = this.getView().byId("op11").setValue("");
			var op12 = this.getView().byId("op12").setValue("");
			var op13 = this.getView().byId("op13").setValue("");
			var op14 = this.getView().byId("op14").setValue("");
			var op15 = this.getView().byId("op15").setValue("");
			var op16 = this.getView().byId("op16").setValue("");
			var op16i = this.getView().byId("op16i").setValue("");
			//	var op17 = this.getView().byId("op17").setValue("");
			var op18 = this.getView().byId("op18").setValue("");
			var op19 = this.getView().byId("op19").setValue("");
			var op20 = this.getView().byId("op20").setValue("");

		},

		addsavedialog: function () {
			//	var da_random = Math.floor(1000000 + Math.random() * 9000000);

			var vesseladd = this.byId("op1").getValue();

			//	var portadd = sap.ui.getCore().byId("opp12").getValue();
			//	var etaadd = sap.ui.getCore().byId("opp13").getValue();
			//	var imoadd = this.byId("op2").getValue();
			//	var mmsiadd = this.byId("op3").getValue();
			//	var calladd = this.byId("op4").getValue();
			var flagadd = this.byId("op5").getValue();
			var vesseltypeadd = this.byId("op6").getValue();
			var classadd = this.byId("op7").getValue();
			var piclub = this.byId("op8").getValue();
			var vesonameadd = this.byId("op9").getValue();
			var veemailadd = this.byId("op9i").getValue();

			var vecharnameadd = this.byId("op10").getValue();
			var vechemadd = this.byId("op10i").getValue();
			var sdwtadd = this.byId("op11").getValue();
			var nrtadd = this.byId("op12").getValue();
			var grtadd = this.byId("op13").getValue();
			var lenoveradd = this.byId("op14").getValue();
			var yearadd = this.byId("op15").getValue();
			var vessphadd = this.byId("op16").getValue();
			var vessemailadd = this.byId("op16i").getValue();
			//	var portcalladd = this.byId("op17").getValue();
			var captadd = this.byId("op18").getValue();
			var etdadd = this.byId("op19").getValue();
			var lastadd = this.byId("op20").getValue();

			if (imoadd === "") {
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {

				var ocontroller = this;
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Are you sure to add vessel?", {
						//  icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {

							if (oAction == "YES") {

								/*	var dateformat = etaadd.slice(0,10);
				    var timeformat = etaadd.slice(11,19);
				
			    	var dtformat =dateformat+"T"+ timeformat;*/

								//	var danum = "DA" + da_random;

								var myfleetpost = {

									IMO: imoadd,
									CUSTOMERID: "C4988382464",
									CUSTOMERNAME: "",
									VESSELNAME: vesseladd,
									ASSIGNTO: ""
								};

								var sPath11 = "/MyFleet";

								var oModelmyfleet = ocontroller.getView().getModel();

								oModelmyfleet.create(sPath11, myfleetpost, {

									success: function (oData, oResponse) {

										var postPayLoad = {

											CUSTOMERID: "C4988382464",
											VESSELNAME: vesseladd,
											IMO: imoadd,
											MMSI: mmsiadd,
											CALLSIGN: calladd,
											FLAG: flagadd,
											VESSELTYPE: vesseltypeadd,
											CLASSIFICATION: classadd,
											PICLUB: piclub,
											VESSELOWNER: vesonameadd,
											OWNEREMAILID: veemailadd,
											CHARTERERNAME: vecharnameadd,
											CHARTEREREMAILID: vechemadd,
											SWDT: sdwtadd,
											NRT: nrtadd,
											GRT: grtadd,
											LOA: lenoveradd,
											YEARBUILT: yearadd,
											VESSELEMAILID: vessemailadd,
											VESSELPHONENUM: vessphadd,
											CAPTAINNAME: portcalladd,
											OTHERS: "",
											REMARKS: "",
											CUSTOMERNAME: ""

										};

										var sPath = "/VesselParticulars";

										var oModeladdvessel = ocontroller.getView().getModel();

										oModeladdvessel.create(sPath, postPayLoad, {

											success: function (oData, oResponse) {

												sap.m.MessageBox.confirm("Vessel added successfuly", {
													icon: sap.m.MessageBox.Icon.SUCCESS,
													title: "Success",
													actions: [sap.m.MessageBox.Action.OK],
													onClose: function (oAction) {

														if (oAction == "OK") {
															ocontroller.clearaddvessel();
															var addvesbutton = ocontroller.byId("abtn").setVisible(true);
															var canvesbutton = ocontroller.byId("cbtn").setVisible(false);
															var savvesbutton = ocontroller.byId("sbtn").setVisible(false);
															ocontroller.byId("itb1");
															ocontroller.byId("panel3").setVisible(false);
															ocontroller.byId("panel1").setVisible(true);
														}
													}.bind(ocontroller)
												});

											},

											error: function (oResponse) {
												sap.m.MessageToast.show("Posting failed");

											}
										});

									},

									error: function (oResponse) {
										sap.m.MessageToast.show("Posting failed");
										var addvesbutton = ocontroller.byId("abtn").setVisible(true);
										var canvesbutton = ocontroller.byId("cbtn").setVisible(false);
										var savvesbutton = ocontroller.byId("sbtn").setVisible(false);
										ocontroller.byId("itb1");
										ocontroller.byId("panel3").setVisible(false);
										ocontroller.byId("panel1").setVisible(true);
										ocontroller.clearaddvessel();

									}
								});

							}
						}
					});

			}
		},

		editDialog: function () {

			var but1 = this.byId("editbtn1").setVisible(false);
			var but2 = this.byId("okbtn1").setVisible(false);
			var but3 = this.byId("cancelbtn1").setVisible(true);
			var but4 = this.byId("savebtn1").setVisible(true);

			var input1 = this.byId("ip1").setEditable(true);
			/*var inputpp1 = this.byId("ipp1").setEditable(false);
			var inputpp2 = this.byId("ipp2").setEditable(true);
			var inputpp3 = this.byId("ipp3").setEditable(true);*/
			var input2 = this.byId("ip2").setEditable(false);
			var input3 = this.byId("ip3").setEditable(false);
			var input4 = this.byId("ip4").setEditable(true);
			var input5 = this.byId("ip5").setEditable(true);
			var input6 = this.byId("ip6").setEditable(true);
			var input7 = this.byId("ip7").setEditable(true);
			var input8 = this.byId("ip8").setEditable(true);
			var input9 = this.byId("ip9").setEditable(true);
			var input91 = this.byId("ip91").setEditable(true);
			var input10 = this.byId("ip10").setEditable(true);
			var input101 = this.byId("ip101").setEditable(true);
			var input11 = this.byId("ip11").setEditable(true);
			var input12 = this.byId("ip12").setEditable(true);
			var input13 = this.byId("ip13").setEditable(true);
			var input14 = this.byId("ip14").setEditable(true);
			var input15 = this.byId("ip15").setEditable(true);
			var input16 = this.byId("ip16").setEditable(true);
			var input17 = this.byId("ip17").setEditable(true);
			var input18 = this.byId("ip18").setEditable(true);
			var input19 = this.byId("ip19").setEditable(true);
			var input20 = this.byId("ip20").setEditable(true);

		},

		Editsavedialog: function () {
			var input1 = this.byId("ip1").getValue();
			/*	var inputpp1 = this.byId("ipp1").getValue();
				var inputpp2 = this.byId("ipp2").getValue();
				var inputpp3 = this.byId("ipp3").getValue();*/
			var input2 = this.byId("ip2").getValue();
			var input3 = this.byId("ip3").getValue();
			var input4 = this.byId("ip4").getValue();
			var input5 = this.byId("ip5").getValue();
			var input6 = this.byId("ip6").getValue();
			var input7 = this.byId("ip7").getValue();
			var input8 = this.byId("ip8").getValue();
			var input9 = this.byId("ip9").getValue();
			var input91 = this.byId("ip91").getValue();
			var input10 = this.byId("ip10").getValue();
			var input101 = this.byId("ip101").getValue();
			var input11 = this.byId("ip11").getValue();
			var input12 = this.byId("ip12").getValue();
			var input13 = this.byId("ip13").getValue();
			var input14 = this.byId("ip14").getValue();
			var input15 = this.byId("ip15").getValue();
			var input16 = this.byId("ip16").getValue();
			var input17 = this.byId("ip17").getValue();
			var input18 = this.byId("ip18").getValue();
			var input19 = this.byId("ip19").getValue();
			var input20 = this.byId("ip20").getValue();

			var ocontroller = this;
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Are you sure to edit vessel?", {
					//  icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {

						if (oAction == "YES") {

							/*	var dateformat = inputpp3.slice(0,10);
				    var timeformat = inputpp3.slice(11,19);
				
			    	var dtformat =dateformat+"T"+ timeformat;
		 	 				*/

							var postPayLoad = {
								CUSTOMERID: customeridval,
								VESSELNAME: input1,
								IMO: input2,
								MMSI: input3,
								CALLSIGN: input4,
								FLAG: input5,
								VESSELTYPE: input6,
								CLASSIFICATION: input7,
								PICLUB: input8,
								VESSELOWNER: input9,
								OWNEREMAILID: input91,
								CHARTERERNAME: input10,
								CHARTEREREMAILID: input101,
								SWDT: input11,
								NRT: input12,
								GRT: input13,
								LOA: input14,
								YEARBUILT: input15,
								VESSELEMAILID: input16,
								VESSELPHONENUM: input17,
								CAPTAINNAME: input18,
								OTHERS: input19,
								REMARKS: input20,
								CUSTOMERNAME: ""

							};

							var sPath = "/VesselParticulars(IMO='" + input2 + "')";

							var oModeladdvessel = ocontroller.getView().getModel();

							oModeladdvessel.update(sPath, postPayLoad, {

								success: function (oData, oResponse) {

									sap.m.MessageBox.confirm("Vessel edited successfuly", {
										icon: sap.m.MessageBox.Icon.SUCCESS,
										title: "Success",
										actions: [sap.m.MessageBox.Action.OK],
										onClose: function (oAction) {

											if (oAction == "OK") {
												var addvesbutton = ocontroller.byId("abtn").setVisible(true);
												var canvesbutton = ocontroller.byId("cancelbtn1").setVisible(false);
												var savvesbutton = ocontroller.byId("savebtn1").setVisible(false);
												var otable = ocontroller.byId("itb1");
												ocontroller.byId("panel2").setVisible(false);
												ocontroller.byId("panel1").setVisible(true);

											}
										}.bind(ocontroller)
									});

								},

								error: function (oResponse) {
									sap.m.MessageToast.show("Posting failed");

								}
							});

						}
					}
				});
		},

		cancelDialog: function () {

			var ocontroller = this;
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"Are you sure to cancel?", {
					//  icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {

						if (oAction == "YES") {

							var otable = ocontroller.byId("itb1");
							ocontroller.byId("panel2").setVisible(false);
							ocontroller.byId("panel1").setVisible(true);
							var addvesbutton = ocontroller.byId("abtn").setVisible(true);
							var canvesbutton = ocontroller.byId("cancelbtn1").setVisible(false);
							var savvesbutton = ocontroller.byId("savebtn1").setVisible(false);

						} else {

						}

					}
				});
		},
		/*var otable = this.byId("itb1");
		this.byId("panel2").setVisible(false);
		this.byId("panel1").setVisible(true);
		var addvesbutton = this.byId("abtn").setVisible(true);
		var canvesbutton = this.byId("cancelbtn1").setVisible(false);
		var savvesbutton = this.byId("savebtn1").setVisible(false);*/

		/*otable.destroyContent();
		var adf = sap.ui.xmlfragment("AgentPortal_Customer.AgentPortal_Customer.view.myfleetlist", this);
		otable.addContent(adf);*/

		okDialog: function () {
			this.byId("itb1");
			this.byId("panel2").setVisible(false);
			this.byId("panel1").setVisible(true);
			var addvesbutton = this.byId("abtn").setVisible(true);
			var canvesbutton = this.byId("editbtn1").setVisible(false);
			var savvesbutton = this.byId("okbtn1").setVisible(false);

		},

		statementoffactspress: function (oEvent) {

			var obj = sap.ui.getCore().byId("obj1");
			var sofcurrentodata = sap.ui.getCore().byId("sofdetails");
			var sofcurrentodatalist = sap.ui.getCore().byId("sofdetailscolumnlist");
			var sofcargo1odata = sap.ui.getCore().byId("sofdetails2");
			var sofcargo1odatalist = sap.ui.getCore().byId("sofdetailscolumnlist2");

			var customeridvalsof = oEvent.getSource().getBindingContext().getProperty("CUSTOMERID");
			var vesselnamevalsof = oEvent.getSource().getBindingContext().getProperty("VESSELNAME");

			obj.setText(vesselnamevalsof);
			var ofilters = [new sap.ui.model.Filter("CUSTOMERID", sap.ui.model.FilterOperator.EQ, customeridvalsof),
				new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, vesselnamevalsof)

			];

			var binding = sofcurrentodata.getBinding("items");
			binding.filter(ofilters);

			var binding2 = sofcargo1odata.getBinding("items");
			binding2.filter(ofilters);

		},

		/************** Customer  Inquiries ***************/
		currentdatefunc: function () {
			var d = new Date();
			var month = '' + (d.getMonth() + 1);
			var day = '' + d.getDate();
			var year = d.getFullYear();
			var monthtxt;

			if (month.length < 2) month = '0' + month;
			if (day.length < 2) day = '0' + day;

			if (month == '01') {
				monthtxt = 'Jan';
			} else if (month == '02') {
				monthtxt = 'Feb';
			} else if (month == '03') {
				monthtxt = 'Mar';
			} else if (month == '04') {
				monthtxt = 'Apr';
			} else if (month == '05') {
				monthtxt = 'May';
			} else if (month == '06') {
				monthtxt = 'Jun';
			} else if (month == '07') {
				monthtxt = 'Jul';
			} else if (month == '08') {
				monthtxt = 'Aug';
			} else if (month == '09') {
				monthtxt = 'Sep';
			} else if (month == '10') {
				monthtxt = 'Oct';
			} else if (month == '11') {
				monthtxt = 'Nov';
			} else if (month == '12') {
				monthtxt = 'Dec';
			}
			var date_val = monthtxt + " " + day + ", " + year;
			this.getView().byId("id_ltchngd").setText(date_val);
			//	var date_val = year + "-" + month + "-" + day;
		},

		rstatus: function (a) {
			if (a === 'New') {
				return "None";
			} else if (a === 'InProcess') {
				return "Warning";
			} else if (a === 'Approved') {

				return "Success";
			} else {
				return "Error";
			}
		},
		Combosortbysts: function (event) {
			var aFilters = [];
			var ststcode = event.getParameter("selectedItem").getText();
			var filter = new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.Contains, ststcode);
			aFilters.push(filter);

			var list = this.getView().byId("RidTableMyOrders");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},

		Combosortbyserv: function (event) {
			var aFilters = [];
			var srvcode = event.getParameter("selectedItem").getText();
			var filter = new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.Contains, srvcode);
			aFilters.push(filter);

			var list = this.getView().byId("RidTableMyOrders");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},
		ram_caldate: function () {
			var s_d = new Date();
			var s_month = '' + (s_d.getMonth() + 1);
			var s_day = '' + s_d.getDate();
			var s_year = s_d.getFullYear();
			if (s_month.length < 2) s_month = '0' + s_month;
			if (s_day.length < 2) s_day = '0' + s_day;
			s_fulldt = [s_year, s_month, s_day].join('-');
			console.log(s_fulldt);

			var s_sec = '' + s_d.getSeconds();
			var s_min = '' + s_d.getMinutes();
			var s_hours = s_d.getHours();
			if (s_sec < 10) s_sec = '0' + s_sec;
			if (s_min < 10) s_min = '0' + s_min;
			s_fultime = [s_hours, s_min, s_sec].join(':');
			console.log(s_fultime);
		},
		CI_filterCategories: function () {
			var dialog = sap.ui.xmlfragment("myInqFil", "AgentPortal_Testing.AgentPortal_Testing.view.FilterMy", this);
			this.getView().addDependent(dialog);
			this.CI_filterCategoriescombo();
			services_dialog = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Filter',
				type: 'Message',
				content: [dialog],
				beginButton: new Button({
					text: 'Ok',
					press: function () {
						this.onSearch();
						services_dialog.close();

					}.bind(this)
				}),
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						services_dialog.close();
					}
				}),
				afterClose: function () {
					services_dialog.destroy();
				}
			});
			services_dialog.open();
		},

		CI_filterCategoriescombo: function () {

			var vescombo = sap.ui.core.Fragment.byId("myInqFil", "vesnamesss");
			var oItems = new sap.ui.core.ListItem({
				key: "{VESSELNAME}",
				text: "{VESSELNAME}"
			});

			var oSorter = new sap.ui.model.Sorter("VESSELNAME");
			vescombo.bindAggregation("items", {
				path: '/MyInquiryHeader?$select=VESSELNAME',
				template: oItems,
				sorters: oSorter

			});

		},

		handleIconTabBarSelect: function (oEvent) {
			var key = oEvent.getParameters().key;
			if (key == "1") {
				//	this.getRouter().navTo("view2");
			}
		},

		onSearch: function () {

			var first = sap.ui.core.Fragment.byId("myInqFil", "fInq").getValue();
			//	//alert(first)
			var second = sap.ui.core.Fragment.byId("myInqFil", "fInqDate").getValue();
			//	//alert(second)
			var third = sap.ui.core.Fragment.byId("myInqFil", "vesnamesss").getValue();
			//	//alert(third)

			console.log(first + "-" + second + "-")

			var oTable = this.byId("RidTableMyOrders");
			/*var oTemp = this.byId('idCLMyOrders1');*/

			if (first == '' && second == '' && third == '') {
				services_dialog.close();
				/*	oTable.bindAggregation("items", {
						path: "/MyInquiries",
						template: oTemp
					});*/
			} else if (first == '' && second != '' && third != '') {
				var f2 = new sap.ui.model.Filter("REQUESTEDDATE", sap.ui.model.FilterOperator.EQ, second);
				var f3 = new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, third);
				var ofilters = new sap.ui.model.Filter({
					filters: [f2, f3],
					and: true
				});

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (first != '' && second == '' && third != '') {

				var f1 = new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, first);
				var f3 = new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, third);
				var ofilters = new sap.ui.model.Filter({
					filters: [f1, f3],
					and: true
				});

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (first != '' && second != '' && third == '') {
				var f1 = new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, first);
				var f2 = new sap.ui.model.Filter("REQUESTEDDATE", sap.ui.model.FilterOperator.EQ, second);
				var ofilters = new sap.ui.model.Filter({
					filters: [f1, f2],
					and: true
				});

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);

			} else if (first != "" && second == '' && third == '') {
				//	//alert("First")

				var f1 = new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, first);

				var ofilters = new sap.ui.model.Filter({
					filters: [f1]

				});

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);

			} else if (first == '' && second !== '' && third == '') {
				var f2 = new sap.ui.model.Filter("REQUESTEDDATE", sap.ui.model.FilterOperator.EQ, second);

				var ofilters = new sap.ui.model.Filter({
					filters: [f2]
				});

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);

			} else if (first == '' && second == '' && third !== '') {
				//	//alert("Third")
				var f3 = new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, third);

				var ofilters = new sap.ui.model.Filter({
					filters: [f3]
				});

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);

			} else {
				//	//alert("Hello Else")
				var f1 = new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, first);
				var f2 = new sap.ui.model.Filter("REQUESTEDDATE", sap.ui.model.FilterOperator.EQ, second);
				var f3 = new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.EQ, third);
				var ofilters = new sap.ui.model.Filter({
					filters: [f1, f2, f3],
					and: true
				});

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			}

		},
		CI_sortCategories: function (oEvent) {
			var dialog = sap.ui.xmlfragment("tree", "AgentPortal_Testing.AgentPortal_Testing.view.Tree", this);
			dialog.setModel(modeltree);
			services_dialog = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Select',
				type: 'Message',
				content: [dialog],
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						services_dialog.close();
					}
				}),
				afterClose: function () {
					services_dialog.destroy();
				}
			});
			services_dialog.open();
		},

		handleSOSelect: function (oEvent) {

			var requestCode = oEvent.getSource().getAggregation("attributes")[0].getBindingContext().getProperty("HandlingUnit");

			var oTable = this.getView().byId("RidTableMyOrders");
			var oBinding = oTable.getBinding("items");
			var aSorter = oBinding.aSorters[0];
			var oDescending = aSorter.bDescending;
			var oSorter = new Sorter(requestCode.toUpperCase(), !oDescending);
			oBinding.sort(oSorter);

			services_dialog.destroy();
		},

		////////Breadcrumbs/////

		link1: function () {
			arr2 = [];
			arr3 = [];
			this.getView().byId("save").setVisible(false);
			this.getView().byId("reset").setVisible(false);
			this.getView().byId("cancel").setVisible(true);
			this.getView().byId("accept").setVisible(true);
			var panel = this.getView().byId("Rsplitter").setVisible(true);
			var panel = this.getView().byId("Rsplitter1").setVisible(false);
			//	var link1 = this.getView().byId("linkid1").setVisible(false);
			var link2 = this.getView().byId("linkid2").setVisible(false);
		},

		////////end ///////
		CI_Acceptall: function () {

			this.getView().byId("RidIconTabBarFiori2").setSelectedKey("FinalPrice");
			if (ci_finpri === "" || ci_finpri === "Awaiting Quote") {
				var sum = 0;
				var portadd = 0;
				portadd1 = 0;
				var otheradd = 0;

				if (servicetype === "Husbandry/Vessel support services") {
					/*this.getView().byId("cancelinq12").setVisible(false);	
					this.getView().byId("confirminq12").setVisible(false);
					this.getView().byId("confirmselectedinq12").setVisible(false);
					this.getView().byId("pto").setVisible(false);*/
					/*this.getView().byId("save").setVisible(true);*/
					//	this.getView().byId("reset1").setVisible(true);
					var table = this.getView().byId("idTableMyOrdersLine");
					var rowItems = table.getSelectedItems();
					var rowlen = table.getSelectedItems().length;
					for (var m = 0; m < rowlen; m++) {
						var item3 = rowItems[m];
						var Cells3 = item3.getCells();
						var quantad1 = Cells3[2].getValue();
						var basepri1 = Cells3[3].getValue();
						var currencyad1 = Cells3[3].getDescription();
						var discountval = Cells3[11].getValue();
						console.log(discountval);
						var priceval = basepri1 * quantad1;
						console.log(priceval);
						var discountedamt = (discountval / 100) * parseInt(priceval);
						console.log(discountedamt);
						var acprice = priceval - discountedamt;
						console.log(acprice);
						sum = parseInt(sum);
						sum += acprice;
						console.log(sum);
					}
					var porttab = this.getView().byId("idTableMyOrdersLine1");
					var portitems = porttab.getSelectedItems();
					var portlen = porttab.getSelectedItems().length;
					var addporttab = this.getView().byId("additemsport");
					var addportitems = addporttab.getSelectedItems();
					var addportlen = addporttab.getSelectedItems().length;
					for (var n = 0; n < portlen; n++) {
						var item3 = portitems[n];
						var Cells3 = item3.getCells();
						var portprice = Cells3[1].getValue();
						portadd += parseInt(portprice);
					}
					console.log(portadd);
					//	//alert(portadd);
					for (var m = 0; m < addportlen; m++) {
						var item3 = addportitems[m];
						var Cells3 = item3.getCells();
						var portprice1 = Cells3[1].getValue();
						//	//alert(portprice1);
						portadd1 += parseInt(portprice1);
					}
					//	//alert(portadd1);
					portadd = portadd + portadd1;
					//	//alert(portadd);
					console.log(portadd);

					var totpriceval = portadd + sum;
					var totpriceval = totpriceval.toFixed(3);
					this.getView().byId("ci_price").setValue(totpriceval);
					this.getView().byId("total_amt11").setText(totpriceval + " " + ci_currency);
					
					this.getView().byId("ci_fprice").setValue(totpriceval);
				} else if (servicetype === "Hub Agency Services") {
					var sum = 0;
					var table = this.getView().byId("idhub");
					var rowItems = table.getSelectedItems();
					var rowlen = table.getSelectedItems().length;
					for (var m = 0; m < rowlen; m++) {
						var item3 = rowItems[m];
						var Cells3 = item3.getCells();
						var quantad1 = Cells3[2].getValue();
						var basepri1 = Cells3[3].getValue();
						var currencyad1 = Cells3[3].getDescription();
						var priceval = basepri1 * quantad1;
						console.log(priceval);
						var discountval = Cells3[5].getValue();
						console.log(discountval);
						var discountedamt = (discountval / 100) * parseInt(priceval);
						console.log(discountedamt);
						var acprice = priceval - discountedamt;
						console.log(acprice);
						sum = parseInt(sum);
						sum += acprice;
						console.log(sum);
					}
					sum = sum.toFixed(3);
					this.getView().byId("ci_price").setValue(sum);
					this.getView().byId("total_amt11").setText(sum + " " + ci_currency);
					this.getView().byId("ci_fprice").setValue(sum);
				} else {
					var table = this.getView().byId("idOtherinq");
					var rowItems = table.getSelectedItems();
					var rowlen = table.getSelectedItems().length;
					for (var m = 0; m < rowlen; m++) {
						var item3 = rowItems[m];
						var Cells3 = item3.getCells();
						var quantad1 = Cells3[2].getValue();
						var basepri1 = Cells3[3].getValue();
						var currencyad1 = Cells3[3].getDescription();
						var priceval = basepri1 * quantad1;
						console.log(priceval);
						var discountval = Cells3[6].getValue();
						console.log(discountval);
						var discountedamt = (discountval / 100) * parseInt(priceval);
						console.log(discountedamt);
						var acprice = priceval - discountedamt;
						//otheradd +=parseInt(basepri1);
						console.log(otheradd);
						sum = parseInt(sum);
						sum += acprice;
						console.log(sum);
					}
					var porttab = this.getView().byId("idTableMyOrdersLine1");
					var portitems = porttab.getSelectedItems();
					var portlen = porttab.getSelectedItems().length;
					var addporttab = this.getView().byId("additemsport");
					var addportitems = addporttab.getSelectedItems();
					var addportlen = addporttab.getSelectedItems().length;
					for (var n = 0; n < portlen; n++) {
						var item3 = portitems[n];
						var Cells3 = item3.getCells();
						var portprice = Cells3[1].getValue();
						portadd += parseInt(portprice);
					}
					console.log(portadd);
					//	//alert(portadd);
					for (var m = 0; m < addportlen; m++) {
						var item3 = addportitems[m];
						var Cells3 = item3.getCells();
						var portprice1 = Cells3[1].getValue();
						//	//alert(portprice1);
						portadd1 += parseInt(portprice1);
					}
					//	//alert(portadd1);
					portadd = portadd + portadd1;
					//	//alert(portadd);
					console.log(portadd);
					var totpriceval = portadd + sum;
					var totpriceval = totpriceval.toFixed(3);
					this.getView().byId("ci_price").setValue(totpriceval);
					this.getView().byId("total_amt11").setText(totpriceval + " " + ci_currency);
					this.getView().byId("ci_fprice").setValue(totpriceval);

				}
				this.getView().byId("cancelinq12").setVisible(false);
				this.getView().byId("confirminq12").setVisible(false);
				this.getView().byId("confirmselectedinq12").setVisible(false);
				//this.getView().byId("pto").setVisible(true);
				/*this.getView().byId("save").setVisible(true);*/
				this.getView().byId("reset1").setVisible(true);

				ci_accallfunct = "Y";
			} else {
				this.getView().byId("ci_fprice").setValue(ci_finpri);
				this.getView().byId("ci_price").setValue(ci_finpri);
				this.getView().byId("total_amt11").setText(ci_finpri + " " + ci_currency);
				var sum = ci_finpri;
				var portadd = 0;
				var otheradd = 0;
				if (servicetype === "Husbandry/Vessel support services") {

					var table = this.getView().byId("idTableMyOrdersLine");
					var rowItems = table.getSelectedItems();
					var rowlen = table.getSelectedItems().length;
					for (var m = 0; m < rowlen; m++) {
						var item3 = rowItems[m];
						var Cells3 = item3.getCells();
						var quantad1 = Cells3[2].getValue();
						var basepri1 = Cells3[3].getValue();
						var currencyad1 = Cells3[3].getDescription();
						var discountval = Cells3[11].getValue();
						console.log(discountval);
						var priceval = basepri1 * quantad1;
						console.log(priceval);
						var discountedamt = (discountval / 100) * parseInt(priceval);
						console.log(discountedamt);
						var acprice = priceval - discountedamt;
						console.log(acprice);
						sum = parseInt(sum);
						sum += acprice;
						console.log(sum);
					}

					var totpriceval = sum;
					var totpriceval = totpriceval.toFixed(3);
					this.getView().byId("ci_price").setValue(totpriceval);
					this.getView().byId("total_amt11").setText(totpriceval+ " " + ci_currency);
				} else if (servicetype === "Hub Agency Services") {
					var sum = 0;
					var table = this.getView().byId("idhub");
					var rowItems = table.getSelectedItems();
					var rowlen = table.getSelectedItems().length;
					for (var m = 0; m < rowlen; m++) {
						var item3 = rowItems[m];
						var Cells3 = item3.getCells();
						var quantad1 = Cells3[2].getValue();
						var basepri1 = Cells3[3].getValue();
						var currencyad1 = Cells3[3].getDescription();
						var priceval = basepri1 * quantad1;
						console.log(priceval);
						var discountval = Cells3[5].getValue();
						console.log(discountval);
						var discountedamt = (discountval / 100) * parseInt(priceval);
						console.log(discountedamt);
						var acprice = priceval - discountedamt;
						console.log(acprice);
						sum = parseInt(sum);
						sum += acprice;
						console.log(sum);
					}
					var sum = sum.toFixed(3);
					this.getView().byId("ci_price").setValue(sum);
					this.getView().byId("total_amt11").setText(sum+ " " + ci_currency);
				} else {
					var table = this.getView().byId("idOtherinq");
					var rowItems = table.getSelectedItems();
					var rowlen = table.getSelectedItems().length;
					for (var m = 0; m < rowlen; m++) {
						var item3 = rowItems[m];
						var Cells3 = item3.getCells();
						var quantad1 = Cells3[2].getValue();
						var basepri1 = Cells3[3].getValue();
						var currencyad1 = Cells3[3].getDescription();
						var priceval = basepri1 * quantad1;
						console.log(priceval);
						var discountval = Cells3[6].getValue();
						console.log(discountval);
						var discountedamt = (discountval / 100) * parseInt(priceval);
						console.log(discountedamt);
						var acprice = priceval - discountedamt;
						//otheradd +=parseInt(basepri1);
						console.log(otheradd);
						sum = parseInt(sum);
						sum += acprice;
						console.log(sum);
					}

					var totpriceval = sum;
					var totpriceval = parseInt(totpriceval).toFixed(3);
					this.getView().byId("ci_price").setValue(totpriceval);
					this.getView().byId("total_amt11").setText(totpriceval+ " " + ci_currency);

				}
				this.getView().byId("cancelinq12").setVisible(false);
				this.getView().byId("confirminq12").setVisible(false);
				this.getView().byId("confirmselectedinq12").setVisible(false);
				//this.getView().byId("pto").setVisible(true);
				/*this.getView().byId("save").setVisible(true);*/
				this.getView().byId("reset1").setVisible(true);

				ci_accallfunct = "Y";
			}
		},
		Acceptall1: function () {

			/*var table = this.getView().byId("idTableMyOrdersLine");

			this.getView().byId("ser").setText(servicetype);
			var rowItems = table.getSelectedItems();*/
			var panel14 = this.getView().byId("Rsplitter").setVisible(false);
			var panel = this.getView().byId("Rsplitter1").setVisible(true);
			/*	if (rowItems == "") {
				sap.m.MessageBox.confirm("Please select the service to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {
*/
			/*for (var i = 0; i < rowItems.length; i++) {
				var item = rowItems[i];
				var Cells = item.getCells();
				// Get ID and Name
				ServiceName = Cells[0].getText();
				obj1 = {
					ServiceName1: ServiceName
				};
				arr3.push(obj1);
				arr2 = {
					"arr2": arr3
				};
				qty = Cells[1].getValue();
				if (qty === "") {
					cnt;
				} else {
					cnt = cnt + 1;
				}

			}
			var oModel = new sap.ui.model.json.JSONModel(arr2);
			var ServiceTable1 = this.getView().byId("idSelectedServ");
			ServiceTable1.setModel(oModel);
			titems2 = new sap.m.ColumnListItem({
				type: sap.m.ListType.Active,
				cells: [new sap.m.Text({
					text: "{ServiceName1}"
				}), ],
			});
			ServiceTable1.bindItems("/arr2", titems2);
			console.log(JSON.stringify(arr2))
				
			var combo2 = this.getView().byId("tab_combo");
			var temp = new sap.ui.core.ListItem({
			text:"{ServiveName1}"	
			});
				
			combo2.bindAggregation("items",{
				path: "/arr2",
				template:temp
			});
			 

			if (cnt == rowItems.length) {
				var link2 = this.getView().byId("linkid2").setVisible(true);
				var panel14 = this.getView().byId("Rsplitter").setVisible(false);
				var panel = this.getView().byId("Rsplitter1").setVisible(true);
				var link1 = this.getView().byId("linkid1").setVisible(true);
				this.getView().byId("save").setVisible(true);
				this.getView().byId("reset").setVisible(true);
				this.getView().byId("cancel").setVisible(false);
				this.getView().byId("accept").setVisible(false);
					for (var i = 0; i < rowItems.length; i++) {
						console.log(i);
				var item = rowItems[i];
				var Cells = item.getCells();
				// Get ID and Name
				ServiceName = Cells[0].getText();
				console.log(ServiceName);
				
				if (ServiceName === "Seaman Crew Change" || ServiceName === "Passenger Crew Change" || ServiceName === "Crew Shore Leave" ||
					ServiceName === "Visitor Pass" || ServiceName === "Permanent Pass" || ServiceName === "Crew Transfer" || ServiceName ===
					"Immigration Clearance" ||
					ServiceName === "Gatepass" || ServiceName === "Transportation Services" || ServiceName === "Seaman Transit Pass" || ServiceName ===
					"Passenger Transit Pass" || ServiceName === "Offshore Transit Pass" || ServiceName === "Visitor Pass" || ServiceName ===
					"Supplementary Pass" || ServiceName === "One day visit Pass") {
					if(samp === 1)
					{
					this.getView().byId("seamandetails").setVisible(true);
					this.getView().byId("servicedetails").setVisible(true);
					}
					else
					{
							this.getView().byId("seamandetails").setVisible(true);
					this.getView().byId("servicedetails").setVisible(false);
					}
					samp = 2;
				
				} 

				
				else if(ServiceName === "Cash to Master (CTM) Request")
				{
				if(samp === 2)
				{
							console.log(samp);
						this.getView().byId("seamandetails").setVisible(true);
					this.getView().byId("servicedetails").setVisible(true);
						this.getView().byId("ctm").setVisible(true);
				}
				else
				{
					this.getView().byId("seamandetails").setVisible(false);
					this.getView().byId("servicedetails").setVisible(true);
						this.getView().byId("ctm").setVisible(true);
				}
						samp = 1;
				}*/

			/*
				 else if (ServiceName === "Diving Request") {
				 	if(samp === 2)
				{
							console.log(samp);
						this.getView().byId("seamandetails").setVisible(true);
					this.getView().byId("servicedetails").setVisible(true);
						this.getView().byId("divingrqst").setVisible(true);
				}
				else
				 {
				 	this.getView().byId("seamandetails").setVisible(false);
					this.getView().byId("servicedetails").setVisible(true);
					this.getView().byId("divingrqst").setVisible(true);
				 }
				 	samp = 1;
				} 
				else if (ServiceName === "SSCEC Certification") {
						if(samp === 2)
				{
							console.log(samp);
						this.getView().byId("seamandetails").setVisible(true);
					this.getView().byId("servicedetails").setVisible(true);
						this.getView().byId("sscecp").setVisible(true);
				}
				else
				{
					this.getView().byId("seamandetails").setVisible(false);
					this.getView().byId("sscecp").setVisible(true);
					this.getView().byId("servicedetails").setVisible(true);
				}
					samp = 1;
				} 
				else if (ServiceName === "Service BOAT") {
					if(samp === 2)
				{
							console.log(samp);
						this.getView().byId("seamandetails").setVisible(true);
					this.getView().byId("servicedetails").setVisible(true);
						this.getView().byId("serviceboat").setVisible(true);
				}
				else
				{
					this.getView().byId("seamandetails").setVisible(false);
					this.getView().byId("serviceboat").setVisible(true);
					this.getView().byId("servicedetails").setVisible(true);
				}
					samp = 1;
				}
				else if (ServiceName === "Supply Fresh Water/Fuel") {
						if(samp === 2)
				{
							console.log(samp);
						this.getView().byId("seamandetails").setVisible(true);
					this.getView().byId("servicedetails").setVisible(true);
						this.getView().byId("freshwater").setVisible(true);
				}
				else
				{
					this.getView().byId("seamandetails").setVisible(false);
					this.getView().byId("freshwater").setVisible(true);
					this.getView().byId("servicedetails").setVisible(true);
				}
				samp = 1;
				}*/

			/*	else if (ServiceName === "Material Exit Pass") {
							if(samp === 2)
					{
								console.log(samp);
							this.getView().byId("seamandetails").setVisible(true);
						this.getView().byId("servicedetails").setVisible(true);
							this.getView().byId("exitpassp").setVisible(true);
					}
					else
					{
						this.getView().byId("seamandetails").setVisible(false);
						this.getView().byId("exitpassp").setVisible(true);
						this.getView().byId("servicedetails").setVisible(true);
					}
						samp = 1;
					} 
					else if (ServiceName === "Ship Spares and Provision" || ServiceName === "Ship Spares & Provision") {
							if(samp === 2)
					{
								console.log(samp);
							this.getView().byId("seamandetails").setVisible(true);
						this.getView().byId("servicedetails").setVisible(true);
							this.getView().byId("shipspares").setVisible(true);
					}
					else
					{
						this.getView().byId("seamandetails").setVisible(false);
						this.getView().byId("shipspares").setVisible(true);
						this.getView().byId("servicedetails").setVisible(true);
					}
						samp = 1;
					}
					else if (ServiceName === "Sludge Removal Request" || ServiceName === "Garbage Removal Request") {
						if(samp === 2)
					{
								console.log(samp);
							this.getView().byId("seamandetails").setVisible(true);
						this.getView().byId("servicedetails").setVisible(true);
							this.getView().byId("sludgeremoval").setVisible(true);
					}
					else
					{
						this.getView().byId("seamandetails").setVisible(false);
						this.getView().byId("sludgeremoval").setVisible(true);
						this.getView().byId("servicedetails").setVisible(true);
					}
						samp = 1;
					}

				} 
				samp = 0;
				}
				else {
					sap.m.MessageBox.confirm("Please enter quantity", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				}
				cnt = 0;
*/

			//}
		},
		onPress: function (oEvent) {
			// The source is the list item that got pressed
			this._showObject(oEvent.getSource());
		},

		onShareInJamPress: function () {
			var oViewModel = this.getModel("worklistView"),
				oShareDialog = sap.ui.getCore().createComponent({
					name: "sap.collaboration.components.fiori.sharing.dialog",
					settings: {
						object: {
							id: location.href,
							share: oViewModel.getProperty("/shareOnJamTitle")
						}
					}
				});
			oShareDialog.open();
		},

		CI_onSearch1: function (oEvent) {

		/*	var SamTbl = oEvent.getParameter("newValue");
			var filters = new Array();
			var oFilter = new sap.ui.model.Filter([
					new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.Contains, SamTbl)
				],
				false);
			filters = (oFilter);
			var listItem = this.getView().byId("RidTableMyOrders");
			var binding = listItem.getBinding("items");
			binding.filter(filters);*/
			
			var SamTbl = oEvent.getParameter("newValue");
			var filters = new Array();
			
			var SamTbl = SamTbl.toUpperCase();
			var oFilter = new sap.ui.model.Filter([
				new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.Contains, SamTbl),
				new sap.ui.model.Filter("VESSELNAME", sap.ui.model.FilterOperator.Contains, SamTbl),
				new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.Contains, SamTbl),
				new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.Contains, SamTbl)
				
			]);
			filters = (oFilter);
			
			var listItem = this.byId("RidTableMyOrders");
			var binding = listItem.getBinding("items");
			binding.filter(filters);

		},
		ci_radiobuttonselect: function (oEvent) {
			ci_oSelectedIndex = oEvent.getParameter("selectedIndex");
			// //alert("oSelectedIndex:"+oSelectedIndex)
			var oRadioButtonSrc = oEvent.getSource().getAggregation("buttons");

			var oSelRadText = oRadioButtonSrc[ci_oSelectedIndex].getText();
			if (oSelRadText == "Approved") {
				ci_radval = "Approved";
				this.getView().byId("reset1").setText("Approve Quotation");
				//	    //alert("Approved");
			} else if (oSelRadText == "Rejected") {
				ci_radval = "Rejected";
				this.getView().byId("reset1").setText("Reject Quotation");
				//    	  //alert("Rejected");
			} else if (oSelRadText == "InProcess") {
				ci_radval = "InProcess";
				this.getView().byId("reset1").setText("Update Quotation");
				this.getView().byId("ci_fprice").setValue("Awaiting Quote");
				//  		//alert("InProgress");
			}
			/*else if(oSelRadText=="New")
			    {
			    			ci_radval = "New";
			    			this.getView().byId("reset1").setText("Approve Quotation");
			  //  		//alert("InProgress");
			    	}*/
			else {
				// 	//alert("else")
				ci_radval = "Approved";
			}
		},

		LinkPress: function (oEvent) {
			busyDialog.open();
			ci_att1 = [];
			arr4 = [];
			this.getView().byId("RidIconTabBarFiori2").setSelectedKey("inqitem");
			this.getView().byId("assignto").setVisible(true);
			this.getView().byId("confirminq12").setVisible(true);
			this.getView().byId("reset1").setVisible(false);
			this.getView().byId("idTableMyOrdersLine").removeSelections(true);
			this.getView().byId("idOtherinq").removeSelections(true);
			this.getView().byId("idTableMyOrdersLine1").removeSelections(true);
			this.getView().byId("idhub").removeSelections(true);
			ci_custid = oEvent.getParameter("listItem").getBindingContext().getProperty("CUSTOMERID");
			// 	console.log("ci_custid:"+ci_custid)
			ci_disc = oEvent.getParameter("listItem").getBindingContext().getProperty("DISCOUNT");
			ci_finpri = oEvent.getParameter("listItem").getBindingContext().getProperty("FINALPRICE");
			ci_currency = oEvent.getParameter("listItem").getBindingContext().getProperty("CURRENCY");
			var ci_status = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERSTATUS");
			ci_servicetype = oEvent.getParameter("listItem").getBindingContext().getProperty("SERVICETYPE");
			ci_portname = oEvent.getParameter("listItem").getBindingContext().getProperty("PORTNAME");
			ci_vesselname = oEvent.getParameter("listItem").getBindingContext().getProperty("VESSELNAME");
			ci_ordstat = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERSTATUS");
			ci_ordstatuss = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERSTATUS");
			//alert(ci_ordstatuss);
			
			ci_astot = oEvent.getParameter("listItem").getBindingContext().getProperty("TOTALPRICE");
			var oid = oEvent.getParameter("listItem").getBindingContext().getProperty("SAPORDERID");
			ci_vesseldesc = oEvent.getParameter("listItem").getBindingContext().getProperty("VESSELTYPEDESC");
			//	//alert(ci_vesseldesc);
			////alert(oid);
			//	//alert("ci_finpri:"+ci_finpri)
			this.getView().byId("ci_discount").setValue(ci_disc);

			InqNo = oEvent.getParameter("listItem").getBindingContext().getProperty("INQUIRYNUMBER");
			var Inq_Date = oEvent.getParameter("listItem").getBindingContext().getProperty("REQUESTEDDATE");
			ServiceName = oEvent.getParameter("listItem").getBindingContext().getProperty("SERVICENAME");
			servicetype = oEvent.getParameter("listItem").getBindingContext().getProperty("SERVICETYPE");
			
			if(ci_status === "Approved" || ci_status === "Accepted")
			{
				this.getView().byId("existattach").setVisible(true);
				this.getView().byId("ci_attlist1").setVisible(false)
			}
			else
			{
				this.getView().byId("existattach").setVisible(false)
				this.getView().byId("ci_attlist1").setVisible(true)
			}
			
			var ocont = this;
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var sPath = "/MyInquiryHeader";
			var ofilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
			oModel.read(sPath, {
				filters: ofilters,
				success: function (oData, oResponse) {
					console.log(oData)
					nac_crew1 = oData.results[0].NAC_CREW;
					nac_imm1 = oData.results[0].NAC_IMM
					vsu_log = oData.results[0].VSU_LOGISTICS
					vsu_mat1 = oData.results[0].VSU_MATERIALS
					
					 agentattach1= oData.results[0].ATTACHMENT1;
					 agentattach2= oData.results[0].ATTACHMENT2;
						 agentattach3= oData.results[0].ATTACHMENT3;
						 agentattach4= oData.results[0].ATTACHMENT4;
						 agentattach5= oData.results[0].ATTACHMENT5;
				
					 filnam1= oData.results[0].FILENAME1;
						 filnam2= oData.results[0].FILENAME2;
						 filnam3= oData.results[0].FILENAME3;
						 filnam4= oData.results[0].FILENAME4;
						 filnam5= oData.results[0].FILENAME5;
					console.log(filnam1  + filnam2 + filnam3 + filnam4 + filnam5);
					
		
var agat1 = ocont.getView().byId("agat1");
var agat2 = ocont.getView().byId("agat2");
var agat3 = ocont.getView().byId("agat3");
var agat4 = ocont.getView().byId("agat4");
var agat5 = ocont.getView().byId("agat5");

  
  console.log(filnam1+" " +filnam2+" "+filnam3+" "+filnam4+" "+filnam5)
		if(filnam1 === "" || filnam1 === null){
			agat1.setVisible(false);
		}else{
			agat1.setVisible(true);
			agat1.setTitle(filnam1);
		}
		
		if(filnam2 === "" || filnam2 === null){
			agat2.setVisible(false);
		}else{
			agat2.setVisible(true);
			agat2.setTitle(filnam2);
		}
		
		if(filnam3 === "" || filnam3 === null){
			agat3.setVisible(false);
		}else{
			agat3.setVisible(true);
			agat3.setTitle(filnam3);
		}
		
		if(filnam4 === "" || filnam4 === null){
			agat4.setVisible(false);
		}else{
			agat4.setVisible(true);
			agat4.setTitle(filnam4);
		}
		
		if(filnam5 === "" || filnam5 === null){
			agat5.setVisible(false);
		}else{
			agat5.setVisible(true);
			agat5.setTitle(filnam5);
		}
		

		
	
					
						console.log(nac_crew1);
					if (nac_crew1 === null || nac_crew1 === "") {
						nac_crew1 = 0;
					} else {
						nac_crew1 = "NAC_CREW";

					}
					if (nac_imm1 === null || nac_imm1 === "") {
						nac_imm1 = 0;
					} else {
						nac_imm1 = "NAC_IMM";

					}
					if (vsu_log === null || vsu_log === "") {
						vsu_log = 0;
					} else {
						vsu_log = "VSU_Logistics";

					}
					if (vsu_mat1 === null || vsu_mat1 === "") {
						vsu_mat1 = 0;
					} else {
						vsu_mat1 = "VSU_Materials";

					}
					if(ci_ordstatuss == "InProcess" && ci_ordstatuss == "InProcess" ){
					ocont.getView().byId("assignto").setVisible(true);
					ocont.getView().byId("cancelinq12").setVisible(false);
					ocont.getView().byId("confirminq12").setVisible(true);
					ocont.getView().byId("reset1").setVisible(false);
					ocont.getView().byId("viewdet").setVisible(false);
					ocont.getView().byId("ci_fileUploader2").setVisible(true);
					ocont.getView().byId("ci_RB1").setEditable(true);
					ocont.getView().byId("ci_RB2").setEditable(true);
					ocont.getView().byId("ci_RB3").setEditable(true);
					ocont.getView().byId("ci_Commnt").setEditable(true);
					}else{
					ocont.getView().byId("assignto").setVisible(false);
					ocont.getView().byId("cancelinq12").setVisible(false);
					ocont.getView().byId("confirminq12").setVisible(false);
					ocont.getView().byId("reset1").setVisible(false);
					ocont.getView().byId("viewdet").setVisible(false);
					ocont.getView().byId("ci_fileUploader2").setVisible(false);
					ocont.getView().byId("ci_RB1").setEditable(false);
					ocont.getView().byId("ci_RB2").setEditable(false);
					ocont.getView().byId("ci_RB3").setEditable(false);
					ocont.getView().byId("ci_Commnt").setEditable(false);
					}
					ocont.tableload();
					
				}
			});
		//	ocont.postcargo();
		},

		tableload: function () {
			console.log(sa);
			console.log(nac_crew1)
			var oCont = this;

			if (servicetype === 'Husbandry Services' || servicetype === 'Husbandry/Vessel support services') {
				//	//alert("if")
				if(servicetype === "Husbandry/Vessel support services" && ci_ordstatuss === "InProcess"){
					oCont.getView().byId("assignto").setVisible(true);
					oCont.getView().byId("cancelinq12").setVisible(false);
					oCont.getView().byId("confirminq12").setVisible(true);
					oCont.getView().byId("reset1").setVisible(false);
					oCont.getView().byId("viewdet").setVisible(false);
					oCont.getView().byId("ci_fileUploader2").setVisible(true);
					oCont.getView().byId("ci_RB1").setEditable(true);
					oCont.getView().byId("ci_RB2").setEditable(true);
					oCont.getView().byId("ci_RB3").setEditable(true);
					oCont.getView().byId("ci_Commnt").setEditable(true);
				}else{
					oCont.getView().byId("assignto").setVisible(false);
					oCont.getView().byId("cancelinq12").setVisible(false);
					oCont.getView().byId("confirminq12").setVisible(false);
					oCont.getView().byId("reset1").setVisible(false);
					oCont.getView().byId("viewdet").setVisible(false);
					oCont.getView().byId("ci_fileUploader2").setVisible(false);
					oCont.getView().byId("ci_RB1").setEditable(false);
					oCont.getView().byId("ci_RB2").setEditable(false);
					oCont.getView().byId("ci_RB3").setEditable(false);
					oCont.getView().byId("ci_Commnt").setEditable(false);
				}
				this.getView().byId("id_inq_items").setVisible(true);
				this.getView().byId("id_inq_items2").setVisible(true);
				this.getView().byId("idOtherinq").setVisible(false);
				this.getView().byId("idTableMyOrdersLine").setVisible(true);
				oCont.getView().byId("idhub").setVisible(false);
				var t1 = this.getView().byId("idTableMyOrdersLine");
				var t2 = this.getView().byId("idTableMyOrdersLine1");

				console.log(nac_crew);

				console.log(InqNo);
				var oCont = this;
				// 	//alert("reading data");
				if (sa === "X") {
					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
					console.log(oFilters);
					var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
					var sPath = "/MyInquiries";
					oModel.read(sPath, {
						filters: oFilters,
						success: function (oData, oResponse) {
							////alert("success");
							console.log(oData)
							var flag = [],
								flag1 = [];
							for (var k = 0; k < (oData.results).length; k++) {
								if (oData.results[k].SERVICEFLAG === 'H') {
									flag.push(oData.results[k]);
								} else {
									flag1.push(oData.results[k]);
								}
							}
							console.log(flag)
							husaprroved = new sap.ui.model.json.JSONModel();
							husaprroved.setData(flag);
							t1.setModel(husaprroved);
							var titems1 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{ITEMNO}"
									}), new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										placeholder: "Enter",
										value: "{QTY}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"

									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.ui.core.Icon({
										src: "sap-icon://attachment",
										press: oCont.vsuattach
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Input({
										value: "",

									}),
									new sap.m.Label({
										text: "{SERVICETYPE}"
									}),
									new sap.m.Label({
										text: "{AGENTROLE}"
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									})

								]
							});
							t1.bindAggregation("items", "/", titems1);
							t1.setModel(husaprroved);
							console.log(flag1)

							var portaprroved2 = new sap.ui.model.json.JSONModel();
							portaprroved2.setData(flag1);
							t2.setModel(portaprroved2);
							var titems2 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									}),
									new sap.m.Label({
										text: "{ITEMNO}"
									}),
									new sap.m.Label({
										text: "{SERVICETYPE}"
									})
								]
							});
							t2.bindAggregation("items", "/", titems2);
							t2.setModel(portaprroved2);
						}
					});
				} else {
					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, nac_crew1),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, nac_imm1),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, vsu_log),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, vsu_mat1)
					];
					console.log(oFilters);
					var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
					var sPath = "/MyInquiries";
					oModel.read(sPath, {
						filters: oFilters,
						success: function (oData, oResponse) {
							////alert("success");
							console.log(oData)
							var flag = [],
								flag1 = [];
							for (var k = 0; k < (oData.results).length; k++) {
								if (oData.results[k].SERVICEFLAG === 'H') {
									flag.push(oData.results[k]);
								} else {
									flag1.push(oData.results[k]);
								}
							}
							console.log(flag)
							husaprroved = new sap.ui.model.json.JSONModel();
							husaprroved.setData(flag);
							t1.setModel(husaprroved);
							var titems1 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{ITEMNO}"
									}), new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										placeholder: "Enter",
										value: "{QTY}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.ui.core.Icon({
										src: "sap-icon://attachment",
										press: oCont.vsuattach
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Input({
										value: "",

									}),
									new sap.m.Label({
										text: "{SERVICETYPE}"
									}),
									new sap.m.Label({
										text: "{AGENTROLE}"
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									})

								]
							});
							t1.bindAggregation("items", "/", titems1);
							t1.setModel(husaprroved);
							console.log(flag1)

							/*	var portaprroved2 = new sap.ui.model.json.JSONModel();
								portaprroved2.setData(flag1); 
								t2.setModel(portaprroved2);
							 	var titems2 = new sap.m.ColumnListItem({
												cells: [new sap.m.Label({
														text: "{SERVICENAME}"
													}),
													new sap.m.ObjectNumber({
														number: "{ITEMPRICE}",
														unit: "{CURRENCY}"
													}),new sap.ui.core.Icon({
														src: "sap-icon://notes",
														press:oCont.opencomm
													}),
														new sap.m.Label({
														text: "{SERVICEFLAG}"
													})
												]
											});
							    t2.bindAggregation("items","/",titems2);
								t2.setModel(portaprroved2);*/
						}
					});

					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
					var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
					var sPath = "/MyInquiries";
					oModel.read(sPath, {
						filters: oFilters,
						success: function (oData, oResponse) {
							////alert("success");
							console.log(oData)
							var flag = [],
								flag1 = [];
							for (var k = 0; k < (oData.results).length; k++) {
								if (oData.results[k].SERVICEFLAG === 'H') {

								} else {
									flag1.push(oData.results[k]);
								}
							}
							var portaprroved2 = new sap.ui.model.json.JSONModel();
							portaprroved2.setData(flag1);
							t2.setModel(portaprroved2);
							var titems2 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									}),

									new sap.m.Label({
										text: "{SERVICETYPE}"
									})
								]
							});
							t2.bindAggregation("items", "/", titems2);
							t2.setModel(portaprroved2);
						}
					});
				}
				var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var sPath = "/MyInquiryHeader";
				oModel.read(sPath, {
					filters: oFilters,
					success: function (oData, oResponse) {
						console.log(oData);
						var stat1 = oData.results[0].ORDERSTATUS;
						if (stat1 === "Accepted") {
							oCont.getView().byId("viewdet").setVisible(true);
						} else {
							oCont.getView().byId("viewdet").setVisible(false);
						}
					},
				});
			} else if (servicetype === "Port Charges") {
				if(servicetype === "Port Charges" && ci_ordstatuss === "InProcess"){
					oCont.getView().byId("assignto").setVisible(false);
					oCont.getView().byId("cancelinq12").setVisible(false);
					oCont.getView().byId("confirminq12").setVisible(true);
					oCont.getView().byId("reset1").setVisible(false);
					oCont.getView().byId("viewdet").setVisible(false);	
					oCont.getView().byId("ci_fileUploader2").setVisible(true);
					oCont.getView().byId("ci_RB1").setEditable(true);
					oCont.getView().byId("ci_RB2").setEditable(true);
					oCont.getView().byId("ci_RB3").setEditable(true);
					oCont.getView().byId("ci_Commnt").setEditable(true);
				}else{
					oCont.getView().byId("assignto").setVisible(false);
					oCont.getView().byId("cancelinq12").setVisible(false);
					oCont.getView().byId("confirminq12").setVisible(false);
					oCont.getView().byId("reset1").setVisible(false);
					oCont.getView().byId("viewdet").setVisible(false);
					oCont.getView().byId("ci_fileUploader2").setVisible(false);
					oCont.getView().byId("ci_RB1").setEditable(false);
					oCont.getView().byId("ci_RB2").setEditable(false);
					oCont.getView().byId("ci_RB3").setEditable(false);
					oCont.getView().byId("ci_Commnt").setEditable(false);
				}
				oCont.getView().byId("id_inq_items2").setVisible(true);
				oCont.getView().byId("id_inq_items").setVisible(false);
				oCont.getView().byId("viewdet").setVisible(false);
				oCont.getView().byId("idhub").setVisible(false);
			//	oCont.getView().byId("assignto").setVisible(false);
				var t2 = oCont.getView().byId("idTableMyOrdersLine1");

				var oCont = this;
				var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
				var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var sPath = "/MyInquiries";
				oModel.read(sPath, {
					filters: oFilters,
					and: true,
					success: function (oData, oResponse) {
						console.log(oData)
						var flag = [],
							flag1 = [];
						for (var k = 0; k < (oData.results).length; k++) {
							if (oData.results[k].SERVICEFLAG === 'P') {
								flag1.push(oData.results[k]);
							}
						}

						var portaprroved2 = new sap.ui.model.json.JSONModel();
						portaprroved2.setData(flag1);
						t2.setModel(portaprroved2);
						var titems2 = new sap.m.ColumnListItem({
							cells: [new sap.m.Label({
									text: "{SERVICEDESCRIPTION}"
								}),
								new sap.m.Input({
									value: "{ITEMPRICE}",
									description: "{CURRENCY}"
								}), new sap.ui.core.Icon({
									src: "sap-icon://notes",
									press: oCont.opencomm
								}),
								new sap.m.Label({
									text: "{SERVICEFLAG}"
								}),
								new sap.m.Label({
									text: "{SERVICENAME}"
								}),
								new sap.m.Label({
									text: "{ITEMNO}"
								}),

								new sap.m.Label({
									text: "{SERVICETYPE}"
								})
							]
						});

						t2.bindAggregation("items", "/", titems2);
						t2.setModel(portaprroved2);
					}
				});
			} else if (servicetype === "Hub Agency Services") {
				oCont.getView().byId("id_inq_items2").setVisible(false);
				oCont.getView().byId("id_inq_items").setVisible(true);
				oCont.getView().byId("viewdet").setVisible(false);
				oCont.getView().byId("idTableMyOrdersLine").setVisible(false);
				oCont.getView().byId("idOtherinq").setVisible(false);
				oCont.getView().byId("idhub").setVisible(true);
				if (sa === "X" || sa === "" || sa === null) {
					var t1 = oCont.getView().byId("idhub");
					var titems1 = new sap.m.ColumnListItem({
						cells: [new sap.m.Label({
								text: "{ITEMNO}"
							}),
							new sap.m.Label({
								text: "{SERVICEDESCRIPTION}"
							}),
							new sap.m.Input({
								value: "{QTY}"
							}),
							new sap.m.Input({
								value: "{ITEMPRICE}",
								description: "{CURRENCY}"
							}),
							/*new sap.m.Input({
													value: "{TOTALPRICE}",
													description:"{CURRENCY}"
												}),*/
							new sap.m.Label({
								text: "{ITEMNO}",
								textAlign: "Right"
							}),
							new sap.m.Input({
								value: "",

							}),
							new sap.m.Label({
								text: "{SERVICENAME}"
							})
						]
					});
					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
					t1.bindItems({
						path: '/MyInquiries',
						template: titems1,
						filters: oFilters
					});
				} else {
					var t1 = oCont.getView().byId("idhub");
					var titems1 = new sap.m.ColumnListItem({
						cells: [new sap.m.Label({
								text: "{ITEMNO}"
							}),
							new sap.m.Label({
								text: "{SERVICEDESCRIPTION}"
							}),
							new sap.m.Input({
								value: "{QTY}"
							}),
							new sap.m.Input({
								value: "{ITEMPRICE}",
								description: "{CURRENCY}"
							}),
							/*new sap.m.Input({
													value: "{TOTALPRICE}",
													description:"{CURRENCY}"
												}),*/
							new sap.m.Label({
								text: "{ITEMNO}",
								textAlign: "Right"
							}),
							new sap.m.Input({
								value: "",

							}),
							new sap.m.Label({
								text: "{SERVICENAME}"
							}),
							new sap.m.ObjectNumber({
								number: "",
								unit: ""
							})
						]
					});
					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, nac_crew1),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, nac_imm1),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, vsu_log),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, vsu_mat1)
					];
					t1.bindItems({
						path: '/MyInquiries',
						template: titems1,
						filters: oFilters
					});

				}
			} else {
				busyDialog.open();
				oCont.getView().byId("id_inq_items2").setVisible(true);
				oCont.getView().byId("id_inq_items").setVisible(true);
				oCont.getView().byId("viewdet").setVisible(false);
				oCont.getView().byId("idTableMyOrdersLine").setVisible(false);
				oCont.getView().byId("idOtherinq").setVisible(true);
				oCont.getView().byId("idhub").setVisible(false);
				var t1 = oCont.getView().byId("idOtherinq");
				var t2 = oCont.getView().byId("idTableMyOrdersLine1");
				var oCont = this;
				if (sa === "X" || sa === "" || sa === null) {
					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
					var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
					var sPath = "/MyInquiries";
					oModel.read(sPath, {
						filters: oFilters,
						and: true,
						success: function (oData, oResponse) {
							console.log(oData)
							var flag = [],
								flag1 = [];
							for (var k = 0; k < (oData.results).length; k++) {
								if (oData.results[k].SERVICEFLAG === 'O') {
									flag.push(oData.results[k]);
								} else {
									flag1.push(oData.results[k]);
								}
							}
							console.log(flag)
							husaprroved = new sap.ui.model.json.JSONModel();
							husaprroved.setData(flag);
							t1.setModel(husaprroved);
							var titems1 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{ITEMNO}"
									}), new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										placeholder: "Enter",
										value: "{QTY}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Input({

										value: ""
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									})
								]
							});
							t1.bindAggregation("items", "/", titems1);
							t1.setModel(husaprroved);
							console.log(flag1)

							var portaprroved2 = new sap.ui.model.json.JSONModel();
							portaprroved2.setData(flag1);
							t2.setModel(portaprroved2);
							var titems2 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									}),
									new sap.m.Label({
										text: "{ITEMNO}"
									}),
									new sap.m.Label({
										text: "{SERVICETYPE}"
									})
								]
							});

							t2.bindAggregation("items", "/", titems2);
							t2.setModel(portaprroved2);
						}
					});

				} else {
					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, nac_crew1),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, nac_imm1),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, vsu_log),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, vsu_mat1)
					];
					var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
					var sPath = "/MyInquiries";
					oModel.read(sPath, {
						filters: oFilters,
						and: true,
						success: function (oData, oResponse) {
							console.log(oData)
							var flag = [],
								flag1 = [];
							for (var k = 0; k < (oData.results).length; k++) {
								if (oData.results[k].SERVICEFLAG === 'O') {
									flag.push(oData.results[k]);
								} else {
									flag1.push(oData.results[k]);
								}
							}
							console.log(flag)
							husaprroved = new sap.ui.model.json.JSONModel();
							husaprroved.setData(flag);
							t1.setModel(husaprroved);
							var titems1 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{ITEMNO}"
									}), new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										placeholder: "Enter",
										value: "{QTY}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Input({

										value: ""
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									})
								]
							});
							t1.bindAggregation("items", "/", titems1);
							t1.setModel(husaprroved);
							console.log(flag1)
						}
					});
					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
					var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
					var sPath = "/MyInquiries";
					oModel.read(sPath, {
						filters: oFilters,
						success: function (oData, oResponse) {
							////alert("success");
							console.log(oData)
							var flag = [],
								flag1 = [];
							for (var k = 0; k < (oData.results).length; k++) {
								if (oData.results[k].SERVICEFLAG === 'O') {

								} else {
									flag1.push(oData.results[k]);
								}
							}
							var portaprroved2 = new sap.ui.model.json.JSONModel();
							portaprroved2.setData(flag1);
							t2.setModel(portaprroved2);
							var titems2 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									}),
									new sap.m.Label({
										text: "{SERVICETYPE}"
									})
								]
							});
							t2.bindAggregation("items", "/", titems2);
							t2.setModel(portaprroved2);
						}
					});
				}
			}
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var sPath = "/MyInquiries";
			oModel.read(sPath, {
				filters: oFilters,
				success: function (oData, oResponse) {
					console.log(oData);
					var count1 = (oData.results).length;
					console.log(count1);
					//	oCont.getView().byId("id_inq_items").setText("Inquiry Items (" + count1 + ")");
					var totalSum = 0;
					for (var i = 0; i < count1; i++) {
						var priceval = oData.results[i].ITEMPRICE;
						totalSum += parseInt(priceval);
					}
					oCont.getView().byId("id_inq_no1").setText(InqNo);
					console.log(InqNo);
					//	oCont.getView().byId("id_actual_value").setText(parseInt(totalSum) + " " + oData.results[0].CURRENCY);

				}
			});

			var sPath = "/MyInquiryHeader";
			oModel.read(sPath, {
				filters: oFilters,
				success: function (oData, oResponse) {
					console.log(oData);

					if (oData.results[0].SERVICETYPE === 'Husbandry Services' || oData.results[0].SERVICETYPE ===
						'Husbandry/Vessel support services' || oData.results[0].SERVICETYPE === 'Other Inquiry') {
						oCont.getView().byId("id_eta").setVisible(true);
						oCont.getView().byId("id_etd").setVisible(true);
					} else {
						oCont.getView().byId("id_eta").setVisible(true);
						oCont.getView().byId("id_etd").setVisible(true);
					}
					ci_eta = oData.results[0].ETA;
					console.log(ci_eta);
					var mydate = new Date(oData.results[0].ETA);
					var formathours = ("0" + mydate.getHours()).slice(-2);
					var formatmin = ("0" + mydate.getMinutes()).slice(-2);
					var formatsec = ("0" + mydate.getSeconds()).slice(-2);

					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getMonth()];
					var eta = month + ' ' + mydate.getDate() + ', ' + mydate.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
						formatsec;
					var dd = mydate.getDate();
					var mm = mydate.getMonth() + 1; //January is 0!
					var yyyy = mydate.getFullYear();
					if (dd < 10) {
						dd = '0' + dd;
					}
					if (mm < 10) {
						mm = '0' + mm;
					}
					etacheck = yyyy + '-' + mm + '-' + dd;
					//	//alert(etacheck);

					console.log(eta);

					ci_etd = oData.results[0].ETD;
					var mydated = new Date(oData.results[0].ETD);
					var formathours = ("0" + mydated.getHours()).slice(-2);
					var formatmin = ("0" + mydated.getMinutes()).slice(-2);
					var formatsec = ("0" + mydated.getSeconds()).slice(-2);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydated.getMonth()];
					var etd = month + ' ' + mydated.getDate() + ', ' + mydated.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
						formatsec;
					var dd1 = mydated.getDate();
					var mm1 = mydated.getMonth() + 1; //January is 0!
					var yyyy1 = mydated.getFullYear();
					if (dd1 < 10) {
						dd1 = '0' + dd1;
					}
					if (mm1 < 10) {
						mm1 = '0' + mm1;
					}
					etdcheck = yyyy1 + '-' + mm1 + '-' + dd1;
					//	//alert(etdcheck);

					var mydater = new Date(oData.results[0].REQUESTEDDATE);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydater.getMonth()];
					var rqst_d = month + ' ' + mydater.getDate() + ', ' + mydater.getFullYear();

					/*	if(oData.results[0].ORDERSTATUS==='InProcess'){
							oCont.getView().byId("id_status").setState('Warning');
						}else if(oData.results[0].ORDERSTATUS==='Approved'){
							oCont.getView().byId("id_status").setState('Success');
						}else{
							oCont.getView().byId("id_status").setState('Error');
						}*/

					oCont.getView().byId("id_vessel_name").setText(oData.results[0].VESSELNAME);
					oCont.getView().byId("id_imo").setText(oData.results[0].IMO);
					oCont.getView().byId("id_imonum").setText(oData.results[0].IMO);
					oCont.getView().byId("id_eta").setText(eta);
					oCont.getView().byId("id_etd").setText(etd);
					oCont.getView().byId("id_port").setText(oData.results[0].PORTNAME);
					if (oData.results[0].CURRENCY === null || ci_finpri === "Awaiting Quote") {
						oCont.getView().byId("final").setText(ci_finpri);
					} else {
						oCont.getView().byId("final").setText(ci_finpri + " " + ci_currency);
					}

					if (oData.results[0].TOTALPRICE === "" || oData.results[0].TOTALPRICE === null) {
						oCont.getView().byId("total_amt11").setText();
						//	oCont.getView().byId("ci_price").setValue();
						oCont.getView().byId("ci_fprice").setValue();
					} else if (oData.results[0].TOTALPRICE === "0" || oData.results[0].CURRENCY === null) {
						console.log("emptycurr:" + oData.results[0].CURRENCY)
						var totprival = (oData.results[0].TOTALPRICE);
						var totpriround = parseFloat(totprival).toFixed(3);
						oCont.getView().byId("total_amt11").setText(totpriround);
						//	oCont.getView().byId("ci_price").setValue(oData.results[0].TOTALPRICE);
						//	oCont.getView().byId("ci_fprice").setValue(oData.results[0].TOTALPRICE);

					} else {
						if (ci_finpri == "" || ci_finpri == undefined || ci_finpri == "Awaiting Quote") {
							//	//alert("iftotprice:"+oData.results[0].TOTALPRICE);
							var totprival = (oData.results[0].TOTALPRICE);
							var totpriround = parseFloat(totprival).toFixed(3);
							oCont.getView().byId("total_amt11").setText(totpriround + " " + oData.results[0].CURRENCY);
							//oCont.getView().byId("ci_price").setValue(oData.results[0].TOTALPRICE);
							oCont.getView().byId("ci_fprice").setValue("");
						} else { //	//alert("elsetotprice:"+oData.results[0].TOTALPRICE);
							oCont.getView().byId("total_amt11").setText(oData.results[0].TOTALPRICE + " " + ci_currency);
							//	oCont.getView().byId("ci_price").setValue(oData.results[0].TOTALPRICE);
							oCont.getView().byId("ci_fprice").setValue(ci_finpri);
						}

					}
					busyDialog.close();

					//	oCont.getView().byId("id_finalprice").setText(oData.results[0].FINALPRICE);
					//	oCont.getView().byId("id_status").setText(oData.results[0].ORDERSTATUS);
					//	oCont.getView().byId("id_inq_date").setText(rqst_d);
				}
			});
			busyDialog.close();
		},
		add_port: function () {
			var ci_cport = this.getView().byId("id_port").getText();
			var ci_cives = this.getView().byId("id_vessel_name").getText();
			//	//alert(ci_vesseldesc + '' + ci_cport)
			var addporttab = sap.ui.core.Fragment.byId("Addportservices", "addportservices");
			////alert(addporttab)
			var ofilters = [
				new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, "NAC_PORT"), //value[3]
				new sap.ui.model.Filter("VESSELTYPEDESC", sap.ui.model.FilterOperator.EQ, ci_vesseldesc), //"LNG"
				new sap.ui.model.Filter("PORTNAME", sap.ui.model.FilterOperator.EQ, ci_cport)
			];
			////alert(ofilters);
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var spath = "/ServicePrice";
			oModel.read(spath,

				{
					filters: ofilters,
					success: function (oData, oResponse) {
						console.log(oData);
						//		//alert(oData.results.length);

						var titems2 = new sap.m.ColumnListItem({
							cells: [new sap.m.Label({
									text: "{SERVICENAME}"
								}),
								new sap.m.Input({
									value: "{BASEPRICE}",
									description: "{CURRENCY}"
								}),
								new sap.m.Label({
									text: "P"
								}),
								new sap.m.Label({
									text: "{SERVICECODE}"
								}),
								new sap.m.ObjectNumber({
									number: "",
									unit: ""
								})
							]
						});
						addporttab.bindItems({
							path: '/ServicePrice',
							template: titems2,
							filters: ofilters
						});
						Addportservices.open();
					},

				});
		},
		cancelportserv: function () {
			//	//alert("close");
			Addportservices.close();
		},
		onaddportserv: function () {
			var portitems = sap.ui.core.Fragment.byId("Addportservices", "addportservices").getSelectedItems();

			if (portitems.length === 0) {
				sap.m.MessageBox.warning("Please Select Services to Continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {}
				});
			} else {
				arr9 = [];
				arr10 = [];
				this.getView().byId("additemsport").setVisible(true);
				var tab1 = this.getView().byId("idTableMyOrdersLine1").getItems();

				for (var n = 0; n < tab1.length; n++) {
					var it = tab1[n];
					var Cells2 = it.getCells();
					// Get ID and Name
					itmlast = Cells2[5].getText();
					//	//alert(itmlast)

				}
				for (var i = 0; i < portitems.length; i++) {
					// var t_var = 
					var item = portitems[i];
					var Cells = item.getCells();
					// Get ID and Name
					var servicename1 = Cells[0].getText();
					var itmpri = Cells[1].getValue();
					var cur1 = Cells[1].getDescription();
					var fl1 = Cells[2].getText();
					var servcode = Cells[3].getText();

					item_no = parseInt(itmlast) + 1;
				
					var obj1 = {
						Item: item_no + i,
						servicename1: servicename1,
						itmpri1: itmpri,
						cur: cur1,
						servicecode: servcode
					};
					arr9.push(obj1);
					arr10 = {
						"arr10": arr9
					};

				}
				//	oContoller.getView().byId("additems").setVisible(true);
				var oModel = new sap.ui.model.json.JSONModel(arr10);
				var oContoller = this;
				var ServiceTable1 = oContoller.getView().byId("additemsport");
				ServiceTable1.setModel(oModel);
				var titems2 = new sap.m.ColumnListItem({
					type: sap.m.ListType.Active,
					cells: [
						new sap.m.Text({
							text: "{servicename1}"
						}), new sap.m.Input({
							value: "{itmpri1}",
							description: "{cur}"
						}),
						new sap.m.Text({
							text: ""
						}),

						new sap.m.Text({
							text: "P"
						}),
						new sap.m.Text({
							text: "{servicecode}"
						}), new sap.m.Text({
							text: "{Item}"
						}), new sap.m.Text({
							text: "NAC_PORT"
						})
					],

				});
				ServiceTable1.bindItems("/arr10", titems2);
				console.log(JSON.stringify(arr10));

			}
			Addportservices.close();

		},
		vsuattach: function (oEvent) {
			var oRow = this.sId;
			var arrayId = oRow.split("-");

			var tableIndex = arrayId[arrayId.length - 1]; //get the row index
			//	//alert(tableIndex)
			var ocont = this;
			attachmetvsu = oEvent.getSource().getBindingContext().getObject().CUSTMLAREFFILENAME;
			attachvsubase = oEvent.getSource().getBindingContext().getObject().CUSTMLAREFBASE64;

			var vsutabatt = new sap.m.Table({
				columns: [
					new sap.m.Column({
						header: [
							new sap.m.Label({
								text: "Download"
							})
						]
					}), new sap.m.Column({
						header: [
							new sap.m.Label({
								text: "Upload"
							})
						]
					}), new sap.m.Column({
						header: [
							new sap.m.Label({
								text: "Base64"
							})
						],
						visible: false
					})
				],
				items: [
					new sap.m.ColumnListItem({
						cells: [
							new sap.m.Link({
								text: attachmetvsu,
								press: function () {

									download("data:application/javascript;base64," + attachvsubase, attachmetvsu);

								}
							}),
							new sap.ui.unified.FileUploader({
								placeholder: "Choose",
								change: function (event) {

									var oFileuploader = vsutabatt.getItems()[0].getCells()[1];
									var sFilename = oFileuploader.getValue();
									var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

									function getBase64(file, onLoadCallback) {
										return new Promise(function (resolve, reject) {
											var reader = new FileReader();
											reader.onload = function () {
												resolve(reader.result);
											};
											reader.onerror = reject;
											reader.readAsDataURL(file);
										});
									}

									var promise = getBase64(file);
									var base64 = promise.then(function (result) {
										console.log(result);
										vsutabatt.getItems()[0].getCells()[2].setText(result);
										return result;
									}.bind(this));

								}
							}),
							new sap.m.Label({
								text: "",
								visible: false
							}),
						]
					})
				]

			});
			services_dialog2 = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Documents',
				type: 'Message',
				content: vsutabatt,
				beginButton: new Button({
					text: 'Save',
					press: function () {
						var filname = vsutabatt.getItems()[0].getCells()[1].getValue();
						var bse64 = vsutabatt.getItems()[0].getCells()[2].getText();
						//	//alert(filname+" - "+bse64);
						console.log(oTableat)
							//oTableat.getItems()[0].getCells()[8].setText(filname);
						oTableat.getItems()[tableIndex].getCells()[7].setText(bse64);
						oTableat.getItems()[tableIndex].getCells()[8].setText(filname);
						oTableat.getItems()[tableIndex].getCells()[9].setText(attachvsubase);
						oTableat.getItems()[tableIndex].getCells()[10].setText(attachmetvsu);
						sap.m.MessageBox.success("Saved Successfully", {
							icon: sap.m.MessageBox.Icon.SUCCESS,
							title: "Success",
							actions: [sap.m.MessageBox.Action.OK],
							onClose: function (oAction) {
								if (oAction == "OK") {

								}
							}.bind(ocont)
						});

						services_dialog2.close();
					}.bind(this)
				}),
				endButton: new Button({
					text: 'Close',
					press: function () {

						services_dialog2.close();
					}
				}),

				afterClose: function () {
					services_dialog2.close();
				}
			});
			services_dialog2.open();

		},

		handlefinalprice: function (oEvent) {
			var skeyf = oEvent.getParameters().key;

			if (skeyf == "FinalPrice") {
		if(ci_orderstatus == "InProcess" || ci_ordstatuss == "InProcess" ){
					
					//alert("inprocess-finalprice");
					this.getView().byId("assignto").setVisible(false);
					this.getView().byId("cancelinq12").setVisible(false);
					this.getView().byId("confirminq12").setVisible(false);
					this.getView().byId("reset1").setVisible(true);
					this.getView().byId("viewdet").setVisible(false);
					this.getView().byId("ci_fileUploader2").setVisible(true);
					this.getView().byId("ci_RB1").setEditable(true);
					this.getView().byId("ci_RB2").setEditable(true);
					this.getView().byId("ci_RB3").setEditable(true);
					this.getView().byId("ci_Commnt").setEditable(true);
					
					}else{
				
					//alert("approved-finalprice");
					this.getView().byId("assignto").setVisible(false);
					this.getView().byId("cancelinq12").setVisible(false);
					this.getView().byId("confirminq12").setVisible(false);
					this.getView().byId("reset1").setVisible(false);
					this.getView().byId("viewdet").setVisible(false);
					this.getView().byId("ci_fileUploader2").setVisible(false);
					this.getView().byId("ci_RB1").setEditable(false);
					this.getView().byId("ci_RB2").setEditable(false);
					this.getView().byId("ci_RB3").setEditable(false);
					this.getView().byId("ci_Commnt").setEditable(false);
					
					
			          
					
					
					
			}
				this.getView().byId("RidIconTabBarFiori2").setSelectedKey("FinalPrice");
				
				if (ci_finpri === "" || ci_finpri === "Awaiting Quote") {
					var sum = 0;
					var portadd = 0;
					portadd1 = 0;
					var otheradd = 0;

					if (servicetype === "Husbandry/Vessel support services") {
						
						var table = this.getView().byId("idTableMyOrdersLine");
						var rowItems = table.getSelectedItems();
						var rowlen = table.getSelectedItems().length;
						for (var m = 0; m < rowlen; m++) {
							var item3 = rowItems[m];
							var Cells3 = item3.getCells();
							var quantad1 = Cells3[2].getValue();
							var basepri1 = Cells3[3].getValue();
							var currencyad1 = Cells3[3].getDescription();
							var discountval = Cells3[11].getValue();
							console.log(discountval);
							var priceval = basepri1 * quantad1;
							console.log(priceval);
							var discountedamt = (discountval / 100) * parseInt(priceval);
							console.log(discountedamt);
							var acprice = priceval - discountedamt;
							console.log(acprice);
							sum = parseInt(sum);
							sum += acprice;
							console.log(sum);
						}
						var porttab = this.getView().byId("idTableMyOrdersLine1");
						var portitems = porttab.getSelectedItems();
						var portlen = porttab.getSelectedItems().length;
						var addporttab = this.getView().byId("additemsport");
						var addportitems = addporttab.getSelectedItems();
						var addportlen = addporttab.getSelectedItems().length;
						for (var n = 0; n < portlen; n++) {
							var item3 = portitems[n];
							var Cells3 = item3.getCells();
							var portprice = Cells3[1].getValue();
							////alert(portprice);
							portadd += parseFloat(portprice);
						}
						console.log(portadd);
						//	//alert(portadd);
						for (var m = 0; m < addportlen; m++) {
							var item3 = addportitems[m];
							var Cells3 = item3.getCells();
							var portprice1 = Cells3[1].getValue();
							//	//alert(portprice1);
							portadd1 += parseInt(portprice1);
						}
						////alert(portadd1);
						portadd = portadd + portadd1;
						//	//alert(portadd);
						console.log(portadd);
						var totpriceval = parseFloat(portadd) + parseFloat(sum);
						var totpriceval = totpriceval.toFixed(3);
						this.getView().byId("ci_price").setValue(totpriceval);
						this.getView().byId("total_amt11").setText(totpriceval+ " " + ci_currency);
						this.getView().byId("ci_fprice").setValue(totpriceval);
					} else if (servicetype === "Hub Agency Services") {
						var sum = 0;
						var table = this.getView().byId("idhub");
						var rowItems = table.getSelectedItems();
						var rowlen = table.getSelectedItems().length;
						for (var m = 0; m < rowlen; m++) {
							var item3 = rowItems[m];
							var Cells3 = item3.getCells();
							var quantad1 = Cells3[2].getValue();
							var basepri1 = Cells3[3].getValue();
							var currencyad1 = Cells3[3].getDescription();
							var priceval = basepri1 * quantad1;
							console.log(priceval);
							var discountval = Cells3[5].getValue();
							console.log(discountval);
							var discountedamt = (discountval / 100) * parseInt(priceval);
							console.log(discountedamt);
							var acprice = priceval - discountedamt;
							console.log(acprice);
							sum = parseInt(sum);
							sum += acprice;
							console.log(sum);
						}
						var sum = sum.toFixed(3);
						this.getView().byId("ci_price").setValue(sum);
						this.getView().byId("total_amt11").setText(sum+ " " + ci_currency);
						this.getView().byId("ci_fprice").setValue(sum);
					} else {
						var table = this.getView().byId("idOtherinq");
						var rowItems = table.getSelectedItems();
						var rowlen = table.getSelectedItems().length;
						for (var m = 0; m < rowlen; m++) {
							var item3 = rowItems[m];
							var Cells3 = item3.getCells();
							var quantad1 = Cells3[2].getValue();
							var basepri1 = Cells3[3].getValue();
							var currencyad1 = Cells3[3].getDescription();
							var priceval = basepri1 * quantad1;
							console.log(priceval);
							var discountval = Cells3[6].getValue();
							console.log(discountval);
							var discountedamt = (discountval / 100) * parseInt(priceval);
							console.log(discountedamt);
							var acprice = priceval - discountedamt;
							//otheradd +=parseInt(basepri1);
							console.log(otheradd);
							sum = parseInt(sum);
							sum += acprice;
							console.log(sum);
						}
						var porttab = this.getView().byId("idTableMyOrdersLine1");
						var portitems = porttab.getSelectedItems();
						var portlen = porttab.getSelectedItems().length;
						var addporttab = this.getView().byId("additemsport");
						var addportitems = addporttab.getSelectedItems();
						var addportlen = addporttab.getSelectedItems().length;

						for (var n = 0; n < portlen; n++) {
							var item3 = portitems[n];
							var Cells3 = item3.getCells();
							var portprice = Cells3[1].getValue();
							portadd += parseInt(portprice);
						}
						//	//alert(portadd);
						for (var m = 0; m < addportlen; m++) {
							var item3 = addportitems[m];
							var Cells3 = item3.getCells();
							var portprice1 = Cells3[1].getValue();
						//	//alert(portprice1);
							portadd1 += parseInt(portprice1);
						}
						//	//alert(portadd1);
						portadd = portadd + portadd1;
						//	//alert(portadd);
						console.log(portadd);
						var totpriceval = portadd + sum;
						var totpriceval = totpriceval.toFixed(3);
						this.getView().byId("ci_price").setValue(totpriceval);
							this.getView().byId("total_amt11").setText(totpriceval+ " " + ci_currency);
						this.getView().byId("ci_fprice").setValue(totpriceval);

					}
					/*this.getView().byId("cancelinq12").setVisible(false);
					this.getView().byId("confirminq12").setVisible(false);
					this.getView().byId("confirmselectedinq12").setVisible(false);*/
					//	this.getView().byId("pto").setVisible(true);
					/*this.getView().byId("save").setVisible(true);*/
				/*	this.getView().byId("reset1").setVisible(true);*/

					ci_accallfunct = "Y";
				} else {
					this.getView().byId("ci_fprice").setValue(ci_finpri);
					this.getView().byId("ci_price").setValue(ci_finpri);
					this.getView().byId("total_amt11").setText(ci_finpri+ " " + ci_currency);
					var sum = ci_finpri;
					var portadd = 0;
					var otheradd = 0;
					if (servicetype === "Husbandry/Vessel support services") {

						var table = this.getView().byId("idTableMyOrdersLine");
						var rowItems = table.getSelectedItems();
						var rowlen = table.getSelectedItems().length;
						for (var m = 0; m < rowlen; m++) {
							var item3 = rowItems[m];
							var Cells3 = item3.getCells();
							var quantad1 = Cells3[2].getValue();
							var basepri1 = Cells3[3].getValue();
							var currencyad1 = Cells3[3].getDescription();
							var discountval = Cells3[11].getValue();
							console.log(discountval);
							var priceval = basepri1 * quantad1;
							console.log(priceval);
							var discountedamt = (discountval / 100) * parseInt(priceval);
							console.log(discountedamt);
							var acprice = priceval - discountedamt;
							console.log(acprice);
							sum = parseInt(sum);
							sum += acprice;
							console.log(sum);
						}

						var totpriceval = sum;
						var totpriceval = totpriceval.toFixed(3);
						this.getView().byId("ci_price").setValue(totpriceval);
						this.getView().byId("total_amt11").setText(totpriceval+ " " + ci_currency);
					} else if (servicetype === "Hub Agency Services") {
						var sum = 0;
						var table = this.getView().byId("idhub");
						var rowItems = table.getSelectedItems();
						var rowlen = table.getSelectedItems().length;
						for (var m = 0; m < rowlen; m++) {
							var item3 = rowItems[m];
							var Cells3 = item3.getCells();
							var quantad1 = Cells3[2].getValue();
							var basepri1 = Cells3[3].getValue();
							var currencyad1 = Cells3[3].getDescription();
							var priceval = basepri1 * quantad1;
							console.log(priceval);
							var discountval = Cells3[5].getValue();
							console.log(discountval);
							var discountedamt = (discountval / 100) * parseInt(priceval);
							console.log(discountedamt);
							var acprice = priceval - discountedamt;
							console.log(acprice);
							sum = parseInt(sum);
							sum += acprice;
							console.log(sum);
						}
						sum = sum.toFixed(3);
						this.getView().byId("ci_price").setValue(sum);
						this.getView().byId("total_amt11").setText(sum+ " " + ci_currency);
					} else {
						var table = this.getView().byId("idOtherinq");
						var rowItems = table.getSelectedItems();
						var rowlen = table.getSelectedItems().length;
						for (var m = 0; m < rowlen; m++) {
							var item3 = rowItems[m];
							var Cells3 = item3.getCells();
							var quantad1 = Cells3[2].getValue();
							var basepri1 = Cells3[3].getValue();
							var currencyad1 = Cells3[3].getDescription();
							var priceval = basepri1 * quantad1;
							console.log(priceval);
							var discountval = Cells3[6].getValue();
							console.log(discountval);
							var discountedamt = (discountval / 100) * parseInt(priceval);
							console.log(discountedamt);
							var acprice = priceval - discountedamt;
							//otheradd +=parseInt(basepri1);
							console.log(otheradd);
							sum = parseInt(sum);
							sum += acprice;
							console.log(sum);
						}

						var totpriceval = sum;
						//	//alert(totpriceval);
						totpriceval = parseInt(totpriceval).toFixed(3);

						this.getView().byId("ci_price").setValue(totpriceval);
						this.getView().byId("total_amt11").setText(totpriceval+ " " + ci_currency);

					}
					/*this.getView().byId("cancelinq12").setVisible(false);
					this.getView().byId("confirminq12").setVisible(false);
					this.getView().byId("confirmselectedinq12").setVisible(false);
					this.getView().byId("reset1").setVisible(true);*/
					

					ci_accallfunct = "Y";
				}

			} else if (skeyf == "portserv") {
			//	this.getView().byId("assignto").setVisible(false);
				
				if(ci_orderstatus == "InProcess" || ci_ordstatuss == "InProcess" ){
				
					//alert("inprocess-port");
					this.getView().byId("assignto").setVisible(false);
					this.getView().byId("cancelinq12").setVisible(false);
					this.getView().byId("confirminq12").setVisible(true);
					this.getView().byId("reset1").setVisible(false);
					this.getView().byId("viewdet").setVisible(false);
					this.getView().byId("ci_fileUploader2").setVisible(true);
					this.getView().byId("ci_RB1").setEditable(true);
					this.getView().byId("ci_RB2").setEditable(true);
					this.getView().byId("ci_RB3").setEditable(true);
					this.getView().byId("ci_Commnt").setEditable(true);
					
					
					}else{
					//alert("approved-port");	
					this.getView().byId("assignto").setVisible(false);
					this.getView().byId("cancelinq12").setVisible(false);
					this.getView().byId("confirminq12").setVisible(false);
					this.getView().byId("reset1").setVisible(false);
					this.getView().byId("viewdet").setVisible(false);
					this.getView().byId("ci_fileUploader2").setVisible(false);
					this.getView().byId("ci_RB1").setEditable(false);
					this.getView().byId("ci_RB2").setEditable(false);
					this.getView().byId("ci_RB3").setEditable(false);
					this.getView().byId("ci_Commnt").setEditable(false);
					
			}
			} else {
				
			if(ci_orderstatus == "InProcess" || ci_ordstatuss == "InProcess" ){
				
					//alert("inprocess-inqitems");
					this.getView().byId("assignto").setVisible(true);
					this.getView().byId("cancelinq12").setVisible(false);
					this.getView().byId("confirminq12").setVisible(true);
					this.getView().byId("reset1").setVisible(false);
					this.getView().byId("viewdet").setVisible(false);
					this.getView().byId("ci_fileUploader2").setVisible(true);
					this.getView().byId("ci_RB1").setEditable(true);
					this.getView().byId("ci_RB2").setEditable(true);
					this.getView().byId("ci_RB3").setEditable(true);
					this.getView().byId("ci_Commnt").setEditable(true);
					
					}else{
					//alert("approved-inqitems");	
					this.getView().byId("assignto").setVisible(false);
					this.getView().byId("cancelinq12").setVisible(false);
					this.getView().byId("confirminq12").setVisible(false);
					this.getView().byId("reset1").setVisible(false);
					this.getView().byId("viewdet").setVisible(false);
					this.getView().byId("ci_fileUploader2").setVisible(false);
					this.getView().byId("ci_RB1").setEditable(false);
					this.getView().byId("ci_RB2").setEditable(false);
					this.getView().byId("ci_RB3").setEditable(false);
					this.getView().byId("ci_Commnt").setEditable(false);
					
			}
			}

		},

		CI_refresh: function () {
			//	this.onAfterRendering();
			var ocont = this;
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var sPath = "/AgentRoles";
			var ofilters = [new sap.ui.model.Filter("EMAILID", sap.ui.model.FilterOperator.EQ, name2)];
			oModel.read(sPath, {
				filters: ofilters,
				success: function (oData, oResponse) {
					console.log(oData)
					if (oData.results.length === 0) {

					} else {
						r1 = oData.results[0].SERVICETYPE1;
						r2 = oData.results[0].SERVICETYPE2;
						r3 = oData.results[0].SERVICETYPE3;
						r4 = oData.results[0].SERVICETYPE4;
						r5 = oData.results[0].SERVICETYPE5;
						sa = oData.results[0].SUPERAGENT;
						console.log(sa);
						console.log(nc + " " + ncimm + " " + vsulog + " " + vasum)
						if (r1 === null || r1 === undefined) {
							r1 = "";
						}
						if (r2 === null || r1 === undefined) {
							r2 = "";
						}
						if (r3 === null || r1 === undefined) {
							r3 = "";
						}
						if (r4 === null || r1 === undefined) {
							r4 = "";
						}
						if (r5 === null || r1 === undefined) {
							r5 = "";
						}
						console.log("r1" + r1 + " " + "r2" + r2 + " " + "r3" + r3 + " " + "r4" + r4 + " " + "r5" + r5);
						/*	var afilters = [new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, "Husbandry/Vessel support services")];
	 	oModel.read("MyInquiryHeader", {
			filters: afilters,
	success: function (oData, oResponse) {
		//alert(oData.results.length);
		for(var n=0;n<oData.results.length;n++)
		{
	 nc = oData.results[n].NAC_CREW;
	 ncimm = oData.results[n].NAC_IMM;
	 vsulog = oData.results[n].VSU_LOGISTICS;
	 vasum = oData.results[n].VSU_MATERIALS;
	 
	 if(nc === null)
	 {
	 	nc = "0"
	 }
	 else
	 {
	 	nc = nc;
	 }
//	 //alert(nc);
		
		
//	 console.log(r1 + " " + r2 + " " +r3 +" " +r4 + " " + r5);

	 console.log(nc + " " + ncimm + " " +vsulog +" " +vasum)

	 	console.log(nc + " " + ncimm + " " +vsulog +" " +vasum)
		}
	}
	 	});*/
						var afilters = [new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r1),
							new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r2),
							new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r3),
							new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r4),
							new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, r5)
							/*new sap.ui.model.Filter("NAC_CREW", sap.ui.model.FilterOperator.EQ, "X")*/
							/*	new sap.ui.model.Filter("NAC_IMM", sap.ui.model.FilterOperator.EQ, ""),
								new sap.ui.model.Filter("VSU_LOGISTICS", sap.ui.model.FilterOperator.EQ, "X"),
								new sap.ui.model.Filter("VSU_MATERIALS", sap.ui.model.FilterOperator.EQ, "")*/
						];
						var oType = new sap.ui.model.type.DateTime({
							source: {
								pattern: "yyyy-MM-dd"
							}
						});
						var oDateFormat = sap.ui.core.format.DateFormat.getInstance({
							pattern: "MMM dd,yyyy"
						});
						var oDateFormat1 = sap.ui.core.format.DateFormat.getInstance({
							pattern: "yyyy-MM-dd"
						});
						var oDoBTxt = new sap.m.Text({
							text: {
								path: "REQUESTEDDATE",
								type: oType,
								formatter: function (d) {

									return oDateFormat.format(new Date(d));
								}
							}
						});
						var objstat = new sap.m.ObjectStatus({
							text: "{ORDERSTATUS}",
							state: {
								path: "ORDERSTATUS",
								formatter: ocont.rstatus
							}
						});

						var oTable11 = ocont.byId("RidTableMyOrders");
						//	var oTemp11 = ocont.byId('idCLMyOrders1');
						var oSorter = [new sap.ui.model.Sorter("REQUESTEDDATE", {
								descending: 'true'
							}),
							new sap.ui.model.Sorter("REQUESTEDTIME", {
								descending: 'false'
							})
						];
						var oTemp11 = new sap.m.ColumnListItem({
							cells: [
								new sap.m.Text({
									text: "{INQUIRYNUMBER}"
								}),
								new sap.m.Text({
									text: "{VESSELNAME}"
								}),
								new sap.m.Text({
									text: "{SERVICETYPE}"
								}),
								oDoBTxt,
								objstat,
								
								new sap.m.ObjectNumber({
									number: "{TOTALPRICE}",
									unit: "{CURRENCY}"
								})
							]
						});

						oTable11.bindAggregation("items", {
							path: "/MyInquiryHeader",
							template: oTemp11,
							filters: afilters,
							sorter: oSorter
						});
					}
				},
			});

			/*			this.getView().byId("Search_id").setValue();
						var oTable1 = this.byId("RidTableMyOrders");
						var oTemp1 = this.byId('idCLMyOrders1');

						oTable1.bindAggregation("items", {
							path: "/MyInquiryHeader",
							template: oTemp1
						});*/
		},
		CI_sorttable: function () {
			var oSorter = new sap.ui.model.Sorter("ITEMNO");
			var oTable = this.getView().byId("idTableMyOrdersLine");
			var oBinding = oTable.getBinding("items");
			oBinding.sort(oSorter);
		},
		CI_tablebind: function () {

			var oModel = new sap.ui.model.json.JSONModel(arr2);
			var ServiceTable1 = this.getView().byId("idSelectedServ");
			ServiceTable1.setModel(oModel);
			titems2 = new sap.m.ColumnListItem({
				type: sap.m.ListType.Active,
				cells: [new sap.m.Text({
					text: "{ServiceName1}"
				}), ],
			});
			ServiceTable1.bindItems("/arr2", titems2);

			cc_aData = [{
				ID: "1",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: ""
			}];
			var cc_aData1 = arr4;
			var cc_oTable = this.getView().byId("idsup_protab").setVisibleRowCount(1);
			oModelcc = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc.setData({ // Set the data to the model using the JSON object defined already  
				seamandata: cc_aData,
				seamandata1: cc_aData1
			});
			cc_oTable.setModel(oModelcc);

			//----------------Diving Request---------------//
			cc_aData1 = [{
				ID: "1",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: ""
			}];
			var cc_oTable1 = this.getView().byId("divingreq").setVisibleRowCount(1);
			oModelcc1 = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc1.setData({ // Set the data to the model using the JSON object defined already  
				divingrequest: cc_aData1
			});
			cc_oTable1.setModel(oModelcc1);

			//----------------SSCEC Certification---------------//
			cc_aData2 = [{
				ID: "1",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: ""
			}];
			var cc_oTable2 = this.getView().byId("sscec").setVisibleRowCount(1);
			oModelcc2 = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc2.setData({ // Set the data to the model using the JSON object defined already  
				sscecrequest: cc_aData2
			});
			cc_oTable2.setModel(oModelcc2);

			//----------------Service Boat---------------//
			cc_aData3 = [{
				ID: "1",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: ""
			}];
			var cc_oTable3 = this.getView().byId("sb").setVisibleRowCount(1);
			oModelcc3 = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc3.setData({ // Set the data to the model using the JSON object defined already  
				sbrequest: cc_aData3
			});
			cc_oTable3.setModel(oModelcc3);

			//----------------Supply Fresh Water/Fuel---------------//
			cc_aData4 = [{
				ID: "1",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: ""
			}];
			var cc_oTable4 = this.getView().byId("wf").setVisibleRowCount(1);
			oModelcc4 = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc4.setData({ // Set the data to the model using the JSON object defined already  
				wfrequest: cc_aData4
			});
			cc_oTable4.setModel(oModelcc4);

			//----------------Cash to Master---------------//
			cc_aData5 = [{
				ID: "1",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: ""
			}];
			var cc_oTable5 = this.getView().byId("ctom").setVisibleRowCount(1);
			oModelcc5 = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc5.setData({ // Set the data to the model using the JSON object defined already  
				ctomrequest: cc_aData5
			});
			cc_oTable5.setModel(oModelcc5);

			//---------------- Material Exit Pass---------------//

			cc_aData6 = [{
				ID: "1",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: ""
			}];
			var cc_oTable6 = this.getView().byId("exitpass").setVisibleRowCount(1);
			oModelcc6 = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc6.setData({ // Set the data to the model using the JSON object defined already  
				exitpassrequest: cc_aData6
			});
			cc_oTable6.setModel(oModelcc6);

			//---------------- Garbage/Sludge Removal Request---------------//

			cc_aData7 = [{
				ID: "1",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: ""
			}];
			var cc_oTable7 = this.getView().byId("garbage").setVisibleRowCount(1);
			oModelcc7 = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc7.setData({ // Set the data to the model using the JSON object defined already  
				garbagerequest: cc_aData7
			});
			cc_oTable7.setModel(oModelcc7);

			//---------------- Ship Spares and Provision---------------//

			cc_aData8 = [{
				ID: "1",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: ""
			}];
			var cc_oTable8 = this.getView().byId("shipspare").setVisibleRowCount(1);
			oModelcc8 = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc8.setData({ // Set the data to the model using the JSON object defined already  
				shipsparerequest: cc_aData8
			});
			cc_oTable8.setModel(oModelcc8);

		},
		btnpress: function () {

			sap.m.MessageBox.confirm("Removed from the Inquiry Item", {
				icon: sap.m.MessageBox.Icon.WARNING,
				title: "Warning",
				actions: [sap.m.MessageBox.Action.OK],
				onClose: function (oAction) {
					if (oAction === "OK") {}
				}.bind(this)
			});
		},

		//----------------Seaman Request---------------//
		seaman_add: function () {

			var oTable = this.byId("idsup_protab");
			var j = oTable.getRows().length - 1;

			var r_seaman_cell1 = oTable.getRows()[j].getCells()[1].getValue();
			var r_seaman_cell2 = oTable.getRows()[j].getCells()[2].getValue();
			var r_seaman_cell3 = oTable.getRows()[j].getCells()[3].getValue();
			var r_seaman_cell4 = oTable.getRows()[j].getCells()[4].getValue();

			/*      if(r_seaman_cell1 === "" || r_seaman_cell2 === "" || r_seaman_cell3 === "" || r_seaman_cell4 === "" )
							  	    		 {
							  	    	sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
								  	              icon: sap.m.MessageBox.Icon.WARNING,
								  	 	    	      title: "Warning",
								  	 	    	      actions: [sap.m.MessageBox.Action.OK],
								  	 	    	      onClose: function(oAction) {
								  	 	    	          if (oAction === "OK") {}
								  	 	    	      }.bind(this)
								  	     	        	  });
								    	 }*/
			/*	 else
				 {*/

			var seamandata = oModelcc.getData();
			var rowCountcc = seamandata.seamandata.length;
			rowCountcc = rowCountcc + 1;
			cc_aData.push({
				ID: rowCountcc
			}); // Push data to Model
			oModelcc.setData({
				seamandata: cc_aData
			}); // Set Model
			this.getView().byId("idsup_protab").setVisibleRowCount(rowCountcc);
			this.getView().byId("idsup_protab").setModel(oModelcc);

			// }
		},
		//----------------Diving Request---------------//

		Diving_add: function () {

			var DivingTable = this.byId("divingreq");
			var j = DivingTable.getRows().length - 1;

			var r_diving_cell1 = DivingTable.getRows()[j].getCells()[1].getValue();
			var r_diving_cell2 = DivingTable.getRows()[j].getCells()[2].getValue();

			if (r_diving_cell1 === "" || r_diving_cell2 === "") {
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {

				var divingrequest = oModelcc1.getData();
				var rowCountcc1 = divingrequest.divingrequest.length;
				rowCountcc1 = rowCountcc1 + 1;
				cc_aData1.push({
					ID: rowCountcc1
				}); // Push data to Model
				oModelcc1.setData({
					divingrequest: cc_aData1
				}); // Set Model
				this.getView().byId("divingreq").setVisibleRowCount(rowCountcc1);
				this.getView().byId("divingreq").setModel(oModelcc1);

			}
		},
		//----------------sscec Request---------------//
		sscec_add: function () {

			var sscecTable = this.byId("sscec");
			var j = sscecTable.getRows().length - 1;

			var r_sscec_cell1 = sscecTable.getRows()[j].getCells()[1].getValue();
			var r_sscec_cell2 = sscecTable.getRows()[j].getCells()[2].getValue();
			/* var r_seaman_cell3 = sscecTable.getRows()[j].getCells()[3].getValue();
			 var r_seaman_cell4 = sscecTable.getRows()[j].getCells()[4].getValue();*/

			if (r_sscec_cell1 === "" || r_sscec_cell2 === "") {
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {

				var sscecrequest = oModelcc2.getData();
				var rowCountcc2 = sscecrequest.sscecrequest.length;
				rowCountcc2 = rowCountcc2 + 1;
				cc_aData2.push({
					ID: rowCountcc2
				}); // Push data to Model
				oModelcc2.setData({
					sscecrequest: cc_aData2
				}); // Set Model
				this.getView().byId("sscec").setVisibleRowCount(rowCountcc2);
				this.getView().byId("sscec").setModel(oModelcc2);

			}
		},

		//----------------Services Boat---------------//
		sb_add: function () {

			var sbTable = this.byId("sb");
			var j = sbTable.getRows().length - 1;

			var r_sb_cell1 = sbTable.getRows()[j].getCells()[1].getValue();
			var r_sb_cell2 = sbTable.getRows()[j].getCells()[2].getValue();

			if (r_sb_cell1 === "" || r_sb_cell2 === "") {
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {

				var sbrequest = oModelcc3.getData();
				var rowCountcc3 = sbrequest.sbrequest.length;
				rowCountcc3 = rowCountcc3 + 1;
				cc_aData3.push({
					ID: rowCountcc3
				}); // Push data to Model
				oModelcc3.setData({
					sbrequest: cc_aData3
				}); // Set Model
				this.getView().byId("sb").setVisibleRowCount(rowCountcc3);
				this.getView().byId("sb").setModel(oModelcc3);

			}
		},
		//----------------Supply Fresh Water/Fuel---------------//
		wf_add: function () {

			var wfTable = this.byId("wf");
			var j = wfTable.getRows().length - 1;

			var r_wf_cell1 = wfTable.getRows()[j].getCells()[1].getValue();
			var r_wf_cell2 = wfTable.getRows()[j].getCells()[2].getValue();
			var r_wf_cell3 = wfTable.getRows()[j].getCells()[3].getValue();
			var r_wf_cell4 = wfTable.getRows()[j].getCells()[4].getValue();

			if (r_wf_cell1 === "" || r_wf_cell2 === "" || r_wf_cell3 === "" || r_wf_cell4 === "") {
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {

				var wfrequest = oModelcc4.getData();
				var rowCountcc4 = wfrequest.wfrequest.length;
				rowCountcc4 = rowCountcc4 + 1;
				cc_aData4.push({
					ID: rowCountcc4
				}); // Push data to Model
				oModelcc4.setData({
					wfrequest: cc_aData4
				}); // Set Model
				this.getView().byId("wf").setVisibleRowCount(rowCountcc4);
				this.getView().byId("wf").setModel(oModelcc4);

			}
		},
		//----------------Cash to Master---------------//

		ctom_add: function () {

			var ctomTable = this.byId("ctom");
			var j = ctomTable.getRows().length - 1;

			var r_ctom_cell1 = ctomTable.getRows()[j].getCells()[1].getValue();
			var r_ctom_cell2 = ctomTable.getRows()[j].getCells()[2].getValue();
			var r_ctom_cell3 = ctomTable.getRows()[j].getCells()[3].getValue();

			if (r_ctom_cell1 === "" || r_ctom_cell2 === "" || r_ctom_cell3 === "") {
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {

				var ctomrequest = oModelcc5.getData();
				var rowCountcc5 = ctomrequest.ctomrequest.length;
				rowCountcc5 = rowCountcc5 + 1;
				cc_aData5.push({
					ID: rowCountcc5
				}); // Push data to Model
				oModelcc5.setData({
					ctomrequest: cc_aData5
				}); // Set Model
				this.getView().byId("ctom").setVisibleRowCount(rowCountcc5);
				this.getView().byId("ctom").setModel(oModelcc5);

			}
		},

		//----------------Material Exit Pass---------------//

		exitpass_add: function () {

			var exitpassTable = this.byId("exitpass");
			var j = exitpassTable.getRows().length - 1;

			var r_exitpass_cell1 = exitpassTable.getRows()[j].getCells()[1].getValue();
			var r_exitpass_cell2 = exitpassTable.getRows()[j].getCells()[2].getValue();
			var r_exitpass_cell3 = exitpassTable.getRows()[j].getCells()[3].getValue();
			var r_exitpass_cell4 = exitpassTable.getRows()[j].getCells()[4].getValue();
			var r_exitpass_cell5 = exitpassTable.getRows()[j].getCells()[4].getValue();

			if (r_exitpass_cell1 === "" || r_exitpass_cell2 === "" || r_exitpass_cell3 === "" || r_exitpass_cell4 === "" || r_exitpass_cell5 ===
				"") {
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {

				var exitpassrequest = oModelcc6.getData();
				var rowCountcc6 = exitpassrequest.exitpassrequest.length;
				rowCountcc6 = rowCountcc6 + 1;
				cc_aData6.push({
					ID: rowCountcc6
				}); // Push data to Model
				oModelcc6.setData({
					exitpassrequest: cc_aData6
				}); // Set Model
				this.getView().byId("exitpass").setVisibleRowCount(rowCountcc6);
				this.getView().byId("exitpass").setModel(oModelcc6);

			}
		},

		//----------------Garbage/Sludge Removal Request---------------//

		garbage_add: function () {

			var garbageTable = this.byId("garbage");
			var j = garbageTable.getRows().length - 1;

			var r_garbage_cell1 = garbageTable.getRows()[j].getCells()[1].getValue();
			var r_garbage_cell2 = garbageTable.getRows()[j].getCells()[2].getValue();
			var r_garbage_cell3 = garbageTable.getRows()[j].getCells()[3].getValue();
			var r_garbage_cell4 = garbageTable.getRows()[j].getCells()[4].getValue();
			var r_garbage_cell5 = garbageTable.getRows()[j].getCells()[4].getValue();

			if (r_garbage_cell1 === "" || r_garbage_cell2 === "" || r_garbage_cell3 === "" || r_garbage_cell4 === "" || r_garbage_cell5 === "") {
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {

				var garbagerequest = oModelcc7.getData();
				var rowCountcc7 = garbagerequest.garbagerequest.length;
				rowCountcc7 = rowCountcc7 + 1;
				cc_aData7.push({
					ID: rowCountcc7
				}); // Push data to Model
				oModelcc7.setData({
					garbagerequest: cc_aData7
				}); // Set Model
				this.getView().byId("garbage").setVisibleRowCount(rowCountcc7);
				this.getView().byId("garbage").setModel(oModelcc7);

			}
		},

		//----------------Ship Spares and Provision---------------//

		shipspare_add: function () {

			var shipspareTable = this.byId("shipspare");
			var j = shipspareTable.getRows().length - 1;

			var r_shipspare_cell1 = shipspareTable.getRows()[j].getCells()[1].getValue();
			var r_shipspare_cell2 = shipspareTable.getRows()[j].getCells()[2].getValue();

			if (r_shipspare_cell1 === "" || r_shipspare_cell2 === "") {
				sap.m.MessageBox.confirm("Please fill the mandatory fields to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {

				var shipsparerequest = oModelcc8.getData();
				var rowCountcc8 = shipsparerequest.shipsparerequest.length;
				rowCountcc8 = rowCountcc8 + 1;
				cc_aData8.push({
					ID: rowCountcc8
				}); // Push data to Model
				oModelcc8.setData({
					shipsparerequest: cc_aData8
				}); // Set Model
				this.getView().byId("shipspare").setVisibleRowCount(rowCountcc8);
				this.getView().byId("shipspare").setModel(oModelcc8);

			}
		},
		ci_render: function () {
			//	//alert("render1");
		
			busyDialog = this.getView().byId("BusyDialog");
			busyDialog.setVisible(true);
			//busyDialog.open();
			this.getView().byId("assignto").setVisible(false);
			var oTable = this.getView().byId("RidTableMyOrders");
			this.getView().byId("RidIconTabBarFiori2").setSelectedKey("inqitem");
			/*	var tab2 = this.getView().byId("idtablemyordersline1");
				tab2._getSelectAllCheckbox().setVisible(false);*/
			var oModel = oTable.getModel();
			var tablent = oTable.getItems().length;
			if (tablent === 0) {
			//	busyDialog.close();
			}

			InqNo = oTable.getItems()[0].getBindingContext().getProperty("INQUIRYNUMBER");
			console.log("Inqqnum : ",InqNo);

			servtype = oTable.getItems()[0].getBindingContext().getProperty("SERVICETYPE");
			if (servtype === "Port Charges") {
				this.getView().byId("assignto").setVisible(false);

			} else {
				this.getView().byId("assignto").setVisible(true);
			}
			var aItems = oTable.getItems();
			aItems[0].setSelected(true);
			var len = this.byId("RidTableMyOrders").getItems().length;
			this.getView().byId("id_inq").setText("Inquiry History (" + len + ")");
			var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
			var oCont = this;
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var sPath = "/MyInquiryHeader";
			oModel.read(sPath, {
				filters: oFilters,
				success: function (oData, oResponse) {
					console.log(oData);
					var count = (oData.results).length;
					console.log("cnttotinq:" + count)
						//		oCont.getView().byId("id_inq").setText("Inquiry History (" + count + ")");
						//	oCont.getView().byId("id_actual_value").setText(count);
					ci_custid = oData.results[0].CUSTOMERID;
					ci_disc = oData.results[0].DISCOUNT;
					ci_finpri = oData.results[0].FINALPRICE;
					ci_currency = oData.results[0].CURRENCY;
					ci_servicetype = oData.results[0].SERVICETYPE;
					ci_portname = oData.results[0].PORTNAME;
					ci_vesselname = oData.results[0].VESSELNAME;
					ci_ordstat = oData.results[0].ORDERSTATUS
					ci_astot = oData.results[0].TOTALPRICE;
					ci_vesseldesc = oData.results[0].VESSELTYPEDESC;
					oCont.getView().byId("ci_discount").setValue(ci_disc);
					if (ci_finpri == "" || ci_finpri == undefined) {
						oCont.getView().byId("ci_fprice").setValue("");
					} else {
						oCont.getView().byId("ci_fprice").setValue(ci_finpri);
					}
					
					/*if(ci_ordstat == "Approved" || ci_ordstat == "Accepted" || ci_ordstat == "Rejected" ){
					oCont.getView().byId("assignto").setVisible(false);
					oCont.getView().byId("cancelinq12").setVisible(false);
					oCont.getView().byId("confirminq12").setVisible(false);
					oCont.getView().byId("reset1").setVisible(false);
					oCont.getView().byId("viewdet").setVisible(false);
					
					}else{
						
					}
*/
					console.log("ci_custid:" + ci_custid)
					InqNo = oData.results[0].INQUIRYNUMBER;
					servicetype = oData.results[0].SERVICETYPE;
					console.log(servicetype);
					oCont.getView().byId("id_inq_no1").setText(InqNo);
					oCont.ci_render2();
				}
			});

		},
		ci_render2: function () {
			////alert(InqNo);
			//	//alert(servtype);
			//	//alert("render2");
			this.getView().byId("assignto").setVisible(false);
			
			var oCont = this;
			console.log(servtype);
			var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var sPath = "/MyInquiryHeader";
			oModel.read(sPath, {
				filters: oFilters,
				success: function (oData, oResponse) {
					console.log(oData);
					var count1 = (oData.results).length;
					var totalSum = 0;

					/*	if(oData.results[0].ITEMPRICE==='' || oData.results[0].ITEMPRICE===undefined){
							 totalSum;
						}else{
							for (var i = 0; i < count1; i++) {
							var priceval = oData.results[i].ITEMPRICE;
							totalSum += parseInt(priceval);
						}
						}*/
						var ci_status = oData.results[0].ORDERSTATUS;
								if(ci_status === "Approved" || ci_status === "Accepted")
			{
				oCont.getView().byId("existattach").setVisible(true);
				oCont.getView().byId("ci_attlist1").setVisible(false)
			}
			else
			{
				oCont.getView().byId("existattach").setVisible(false)
				oCont.getView().byId("ci_attlist1").setVisible(true)
			}
						 agentattach1= oData.results[0].ATTACHMENT1;
					 agentattach2= oData.results[0].ATTACHMENT2;
						 agentattach3= oData.results[0].ATTACHMENT3;
						 agentattach4= oData.results[0].ATTACHMENT4;
						 agentattach5= oData.results[0].ATTACHMENT5;
				
					 filnam1= oData.results[0].FILENAME1;
						 filnam2= oData.results[0].FILENAME2;
						 filnam3= oData.results[0].FILENAME3;
						 filnam4= oData.results[0].FILENAME4;
						 filnam5= oData.results[0].FILENAME5;
					console.log(filnam1  + filnam2 + filnam3 + filnam4 + filnam5);
					
		
var agat1 = oCont.getView().byId("agat1");
var agat2 = oCont.getView().byId("agat2");
var agat3 = oCont.getView().byId("agat3");
var agat4 = oCont.getView().byId("agat4");
var agat5 = oCont.getView().byId("agat5");

  
  console.log(filnam1+" " +filnam2+" "+filnam3+" "+filnam4+" "+filnam5)
		if(filnam1 === "" || filnam1 === null){
			agat1.setVisible(false);
		}else{
			agat1.setVisible(true);
			agat1.setTitle(filnam1);
		}
		
		if(filnam2 === "" || filnam2 === null){
			agat2.setVisible(false);
		}else{
			agat2.setVisible(true);
			agat2.setTitle(filnam2);
		}
		
		if(filnam3 === "" || filnam3 === null){
			agat3.setVisible(false);
		}else{
			agat3.setVisible(true);
			agat3.setTitle(filnam3);
		}
		
		if(filnam4 === "" || filnam4 === null){
			agat4.setVisible(false);
		}else{
			agat4.setVisible(true);
			agat4.setTitle(filnam4);
		}
		
		if(filnam5 === "" || filnam5 === null){
			agat5.setVisible(false);
		}else{
			agat5.setVisible(true);
			agat5.setTitle(filnam5);
		}
					oCont.getView().byId("id_inq_no1").setText(InqNo);
					if (oData.results[0].TOTALPRICE === "" || oData.results[0].TOTALPRICE === null) {
						oCont.getView().byId("total_amt11").setText();
						//		oCont.getView().byId("ci_price").setValue();	
					} else if (oData.results[0].TOTALPRICE === "0" || oData.results[0].CURRENCY === null) {
						console.log("emptycurr:" + oData.results[0].CURRENCY)
						var totprival = (oData.results[0].TOTALPRICE);
						var totpriround = parseFloat(totprival).toFixed(3);
						oCont.getView().byId("total_amt11").setText(totpriround);
						//	oCont.getView().byId("ci_price").setValue(oData.results[0].TOTALPRICE);
					} else {
						var totprival = (oData.results[0].TOTALPRICE);
						var totpriround = parseFloat(totprival).toFixed(3);
						oCont.getView().byId("total_amt11").setText(totpriround + " " + oData.results[0].CURRENCY);
						//		oCont.getView().byId("ci_price").setValue(oData.results[0].TOTALPRICE);
					}
					if (oData.results[0].CURRENCY === null || ci_finpri === "Awaiting Quote") {
						oCont.getView().byId("final").setText(ci_finpri);
					} else {
						oCont.getView().byId("final").setText(ci_finpri + " " + oData.results[0].CURRENCY);
					}
					//		 id_actual_value
				}
			});

			/*	var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
				var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var sPath = "/MyInquiries";
				oModel.read(sPath, {
					filters: oFilters,
					success: function (oData, oResponse) {
						console.log(oData);
						var count1 = (oData.results).length; 
				 	 	oCont.getView().byId("id_inq_items").setText("Inquiry Items (" + count1 + ")");
					 	oCont.getView().byId("id_inq_items2").setText("Inquiry Items (" + count1 + ")");
					}
				});*/

			var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
			var sPath = "/MyInquiryHeader";
			oModel.read(sPath, {
				filters: oFilters,
				success: function (oData, oResponse) {
					console.log(oData);
					imo_post = oData.results[0].IMO;
					inq_dat = oData.results[0].ETA;
					inq_etd = oData.results[0].ETD;
					servicetype = oData.results[0].SERVICETYPE;
					if (oData.results[0].SERVICETYPE === 'Husbandry Services' || oData.results[0].SERVICETYPE ===
						"Husbandry/Vessel support services" || oData.results[0].SERVICETYPE === 'Other Inquiry') {
						oCont.getView().byId("id_eta").setVisible(true);
						oCont.getView().byId("id_etd").setVisible(true);
					} else {
						oCont.getView().byId("id_eta").setVisible(true);
						oCont.getView().byId("id_etd").setVisible(true);
					}
					ci_eta = oData.results[0].ETA;
					var mydate = new Date(oData.results[0].ETA);
					var formathours = ("0" + mydate.getHours()).slice(-2);
					var formatmin = ("0" + mydate.getMinutes()).slice(-2);
					var formatsec = ("0" + mydate.getSeconds()).slice(-2);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getMonth()];
					var eta = month + ' ' + mydate.getDate() + ', ' + mydate.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
						formatsec;
					console.log(eta);
					var dd = mydate.getDate();
					var mm = mydate.getMonth() + 1; //January is 0!
					var yyyy = mydate.getFullYear();
					if (dd < 10) {
						dd = '0' + dd;
					}
					if (mm < 10) {
						mm = '0' + mm;
					}
					etacheck = yyyy + '-' + mm + '-' + dd;
					////alert(etacheck)

					var mydated = new Date(oData.results[0].ETD);
					var formathours = ("0" + mydated.getHours()).slice(-2);
					var formatmin = ("0" + mydated.getMinutes()).slice(-2);
					var formatsec = ("0" + mydated.getSeconds()).slice(-2);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydated.getMonth()];
					var etd = month + ' ' + mydated.getDate() + ', ' + mydated.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
						formatsec;
					ci_etd = oData.results[0].ETD;
					var dd1 = mydated.getDate();
					var mm1 = mydated.getMonth() + 1; //January is 0!
					var yyyy1 = mydated.getFullYear();
					if (dd1 < 10) {
						dd1 = '0' + dd1;
					}
					if (mm1 < 10) {
						mm1 = '0' + mm1;
					}
					etdcheck = yyyy1 + '-' + mm1 + '-' + dd1;
					////alert(etdcheck);

					var mydater = new Date(oData.results[0].REQUESTEDDATE);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydater.getMonth()];
					var rqst_d = month + ' ' + mydater.getDate() + ', ' + mydater.getFullYear();

					oCont.getView().byId("id_vessel_name").setText(oData.results[0].VESSELNAME);
					oCont.getView().byId("id_imo").setText(oData.results[0].IMO);
					oCont.getView().byId("id_imonum").setText(oData.results[0].IMO);
					oCont.getView().byId("id_eta").setText(eta);
					oCont.getView().byId("id_etd").setText(etd);
					oCont.getView().byId("id_port").setText(oData.results[0].PORTNAME);

					//	oCont.getView().byId("id_finalprice").setText(oData.results[0].FINALPRICE);
					//	oCont.getView().byId("id_status").setText(oData.results[0].ORDERSTATUS);
					//	oCont.getView().byId("id_inq_date").setText(rqst_d);
				}
			});
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var sPath = "/MyInquiryHeader";
			var ofilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
			oModel.read(sPath, {
				filters: ofilters,
				success: function (oData, oResponse) {
					console.log(oData)
					nac_crew1 = oData.results[0].NAC_CREW;
					nac_imm1 = oData.results[0].NAC_IMM
					vsu_log = oData.results[0].VSU_LOGISTICS
					vsu_mat1 = oData.results[0].VSU_MATERIALS
					console.log(nac_crew1);

					if (nac_crew1 === null || nac_crew1 === "") {
						nac_crew1 = 0;
					} else {
						nac_crew1 = "NAC_CREW";

					}
					if (nac_imm1 === null || nac_imm1 === "") {
						nac_imm1 = 0;
					} else {
						nac_imm1 = "NAC_IMM";

					}
					if (vsu_log === null || vsu_log === "") {
						vsu_log = 0;
					} else {
						vsu_log = "VSU_Logistics";

					}
					if (vsu_mat1 === null || vsu_mat1 === "") {
						vsu_mat1 = 0;
					} else {
						vsu_mat1 = "VSU_Materials";

					}

					oCont.tableload1();

				}
			});
		},
		tableload1: function () {
			var oCont = this;
			if (servtype === 'Husbandry Services' || servtype === 'Husbandry/Vessel support services') {
				//	//alert("if")
				oCont.getView().byId("id_inq_items").setVisible(true);
				oCont.getView().byId("id_inq_items2").setVisible(true);
				oCont.getView().byId("idOtherinq").setVisible(false);
				oCont.getView().byId("idTableMyOrdersLine").setVisible(true);
				var t1 = oCont.getView().byId("idTableMyOrdersLine");
				var t2 = oCont.getView().byId("idTableMyOrdersLine1");

				console.log(InqNo);
				var oCont = this;
				// 	//alert("reading data");
				if (sa === "X") {
					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
					console.log(oFilters);
					var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
					var sPath = "/MyInquiries";
					oModel.read(sPath, {
						filters: oFilters,
						success: function (oData, oResponse) {
							////alert("success");
							console.log(oData)
							var flag = [],
								flag1 = [];
							for (var k = 0; k < (oData.results).length; k++) {
								if (oData.results[k].SERVICEFLAG === 'H') {
									flag.push(oData.results[k]);
								} else {
									flag1.push(oData.results[k]);
								}
							}
							console.log(flag)
							husaprroved = new sap.ui.model.json.JSONModel();
							husaprroved.setData(flag);
							t1.setModel(husaprroved);
							var titems1 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{ITEMNO}"
									}), new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										placeholder: "Enter",
										value: "{QTY}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.ui.core.Icon({
										src: "sap-icon://attachment",
										press: oCont.vsuattach
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Input({
										value: "",

									}),
									new sap.m.Label({
										text: "{SERVICETYPE}"
									}),
									new sap.m.Label({
										text: "{AGENTROLE}"
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									})

								]
							});
							t1.bindAggregation("items", "/", titems1);
							t1.setModel(husaprroved);
							console.log(flag1)

							var portaprroved2 = new sap.ui.model.json.JSONModel();
							portaprroved2.setData(flag1);
							t2.setModel(portaprroved2);
							var titems2 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									}),
									new sap.m.Label({
										text: "{ITEMNO}"
									}),
									new sap.m.Label({
										text: "{SERVICETYPE}"
									})
								]
							});
							t2.bindAggregation("items", "/", titems2);
							t2.setModel(portaprroved2);
						}
					});
				} else {
					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, nac_crew1),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, nac_imm1),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, vsu_log),
						new sap.ui.model.Filter("AGENTROLE", sap.ui.model.FilterOperator.EQ, vsu_mat1)
					];
					console.log(oFilters);
					var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
					var sPath = "/MyInquiries";
					oModel.read(sPath, {
						filters: oFilters,
						success: function (oData, oResponse) {
							////alert("success");
							console.log(oData)
							var flag = [],
								flag1 = [];
							for (var k = 0; k < (oData.results).length; k++) {
								if (oData.results[k].SERVICEFLAG === 'H') {
									flag.push(oData.results[k]);
								} else {
									flag1.push(oData.results[k]);
								}
							}
							console.log(flag)
							husaprroved = new sap.ui.model.json.JSONModel();
							husaprroved.setData(flag);
							t1.setModel(husaprroved);
							var titems1 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{ITEMNO}"
									}),
									new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										placeholder: "Enter",
										value: "{QTY}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.ui.core.Icon({
										src: "sap-icon://attachment",
										press: oCont.vsuattach
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Label({
										text: ""
									}),
									new sap.m.Input({
										value: "",

									}),
									new sap.m.Label({
										text: "{SERVICETYPE}"
									}),
									new sap.m.Label({
										text: "{AGENTROLE}"
									}), new sap.m.Label({
										text: "{SERVICENAME}"
									})

								]
							});
							t1.bindAggregation("items", "/", titems1);
							t1.setModel(husaprroved);
							console.log(flag1)

							/*	var portaprroved2 = new sap.ui.model.json.JSONModel();
								portaprroved2.setData(flag1); 
								t2.setModel(portaprroved2);
							 	var titems2 = new sap.m.ColumnListItem({
												cells: [new sap.m.Label({
														text: "{SERVICENAME}"
													}),
													new sap.m.ObjectNumber({
														number: "{ITEMPRICE}",
														unit: "{CURRENCY}"
													}),new sap.ui.core.Icon({
														src: "sap-icon://notes",
														press:oCont.opencomm
													}),
														new sap.m.Label({
														text: "{SERVICEFLAG}"
													})
												]
											});
							    t2.bindAggregation("items","/",titems2);
								t2.setModel(portaprroved2);*/
						}
					});

					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
					var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
					var sPath = "/MyInquiries";
					oModel.read(sPath, {
						filters: oFilters,
						success: function (oData, oResponse) {
							////alert("success");
							console.log(oData)
							var flag = [],
								flag1 = [];
							for (var k = 0; k < (oData.results).length; k++) {
								if (oData.results[k].SERVICEFLAG === 'H') {

								} else {
									flag1.push(oData.results[k]);
								}
							}
							var portaprroved2 = new sap.ui.model.json.JSONModel();
							portaprroved2.setData(flag1);
							t2.setModel(portaprroved2);
							var titems2 = new sap.m.ColumnListItem({
								cells: [new sap.m.Label({
										text: "{SERVICEDESCRIPTION}"
									}),
									new sap.m.Input({
										value: "{ITEMPRICE}",
										description: "{CURRENCY}"
									}), new sap.ui.core.Icon({
										src: "sap-icon://notes",
										press: oCont.opencomm
									}),
									new sap.m.Label({
										text: "{SERVICEFLAG}"
									}),
									new sap.m.Label({
										text: "{SERVICENAME}"
									}), new sap.m.Label({
										text: "{ITEMNO}"
									}),
									new sap.m.Label({
										text: "{SERVICETYPE}"
									})
								]
							});
							t2.bindAggregation("items", "/", titems2);
							t2.setModel(portaprroved2);
						}
					});
				}
				var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var sPath = "/MyInquiryHeader";
				oModel.read(sPath, {
					filters: oFilters,
					success: function (oData, oResponse) {
						console.log(oData);
						var stat1 = oData.results[0].ORDERSTATUS;
						if (stat1 === "Accepted") {
							oCont.getView().byId("viewdet").setVisible(true);
						} else {
							oCont.getView().byId("viewdet").setVisible(false);
						}
					},
				});
			} else if (servtype === "Port Charges") {
				//	//alert("port")
				oCont.getView().byId("id_inq_items2").setVisible(true);
				oCont.getView().byId("id_inq_items").setVisible(false);
				oCont.getView().byId("viewdet").setVisible(false);
				oCont.getView().byId("assignto").setVisible(false);
				var t1 = oCont.getView().byId("idTableMyOrdersLine1");
				var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
				var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var sPath = "/MyInquiries";
				oModel.read(sPath, {
					filters: oFilters,
					success: function (oData, oResponse) {
						////alert("success");
						console.log(oData)
						var flag = [],
							flag1 = [];
						for (var k = 0; k < (oData.results).length; k++) {

							flag1.push(oData.results[k]);

						}
						var portaprroved2 = new sap.ui.model.json.JSONModel();
						portaprroved2.setData(flag1);
						t1.setModel(portaprroved2);
						var titems2 = new sap.m.ColumnListItem({
							cells: [new sap.m.Label({
									text: "{SERVICEDESCRIPTION}"
								}),
								new sap.m.Input({
									value: "{ITEMPRICE}",
									description: "{CURRENCY}"
								}), new sap.ui.core.Icon({
									src: "sap-icon://notes",
									press: oCont.opencomm
								}),
								new sap.m.Label({
									text: "{SERVICEFLAG}"
								}),
								new sap.m.Label({
									text: "{SERVICENAME}"
								}), new sap.m.Label({
									text: "{ITEMNO}"
								}),
								new sap.m.Label({
									text: "{SERVICETYPE}"
								})
							]
						});
						t1.bindAggregation("items", "/", titems2);
						t1.setModel(portaprroved2);
					}
				});
				/*	var titems1 = new sap.m.ColumnListItem({
						cells: [new sap.m.Label({
								text: "{SERVICEDESCRIPTION}"
							}),
							new sap.m.Input({
								value: "{ITEMPRICE}",
								description: "{CURRENCY}"
							}), new sap.ui.core.Icon({
								src: "sap-icon://notes",
								press: oCont.opencomm
							}),
							new sap.m.Label({
								text: "{SERVICEFLAG}"
							}),
							new sap.m.Label({
								text: "{SERVICENAME}"
							}),
							new sap.m.Label({
								text: "{ITEMNO}"
							}),
							new sap.m.Label({
								text: "{SERVICETYPE}"
							})
						]
					});
					//alert(InqNo);
					console.log(titems1);
					var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
					t1.bindAggregation("items",{
						path: '/MyInquiries',
						template: titems1,
						filters: oFilters
					});*/

			} else if (servtype === "Hub Agency Services") {
				oCont.getView().byId("id_inq_items2").setVisible(false);
				oCont.getView().byId("id_inq_items").setVisible(true);
				oCont.getView().byId("viewdet").setVisible(false);
				oCont.getView().byId("idTableMyOrdersLine").setVisible(false);
				oCont.getView().byId("idOtherinq").setVisible(false);
				oCont.getView().byId("idhub").setVisible(true);
				var t1 = oCont.getView().byId("idhub");
				var titems1 = new sap.m.ColumnListItem({
					cells: [new sap.m.Label({
							text: "{ITEMNO}"
						}),
						new sap.m.Label({
							text: "{SERVICEDESCRIPTION}"
						}),
						new sap.m.Input({
							value: "{QTY}"
						}),
						new sap.m.Input({
							value: "{ITEMPRICE}",
							description: "{CURRENCY}"
						}),
						/*	new sap.m.Input({
													value: "{TOTALPRICE}",
													description:"{CURRENCY}"
												}),*/
						new sap.m.Label({
							text: "{ITEMNO}",
							textAlign: "Right"
						}),
						new sap.m.Input({
							value: "",

						}),
						new sap.m.Label({
							text: "{SERVICENAME}"
						})
					]
				});
				var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
				t1.bindItems({
					path: '/MyInquiries',
					template: titems1,
					filters: oFilters
				});
			} else {
				oCont.getView().byId("id_inq_items2").setVisible(true);
				oCont.getView().byId("id_inq_items").setVisible(true);
				oCont.getView().byId("viewdet").setVisible(false);
				oCont.getView().byId("idTableMyOrdersLine").setVisible(false);
				oCont.getView().byId("idOtherinq").setVisible(true);
				var t1 = oCont.getView().byId("idOtherinq");
				var t2 = oCont.getView().byId("idTableMyOrdersLine1");
				var oCont = this;
				var oFilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
				var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
				var sPath = "/MyInquiries";
				oModel.read(sPath, {
					filters: oFilters,
					and: true,
					success: function (oData, oResponse) {
						console.log(oData)
						var flag = [],
							flag1 = [];
						for (var k = 0; k < (oData.results).length; k++) {
							if (oData.results[k].SERVICEFLAG === 'O') {
								flag.push(oData.results[k]);
							} else {
								flag1.push(oData.results[k]);
							}
						}
						console.log(flag)
						husaprroved = new sap.ui.model.json.JSONModel();
						husaprroved.setData(flag);
						t1.setModel(husaprroved);
						var titems1 = new sap.m.ColumnListItem({
							cells: [new sap.m.Label({
									text: "{ITEMNO}"
								}), new sap.m.Label({
									text: "{SERVICEDESCRIPTION}"
								}),
								new sap.m.Input({
									placeholder: "Enter",
									value: "{QTY}"
								}),
								new sap.m.Input({
									value: "{ITEMPRICE}",
									description: "{CURRENCY}"
								}), new sap.ui.core.Icon({
									src: "sap-icon://notes",
									press: oCont.opencomm
								}),
								new sap.m.Label({
									text: "{SERVICEFLAG}"
								}),
								new sap.m.Input({

									value: ""
								}),
								new sap.m.Label({
									text: "{SERVICENAME}"
								})
							]
						});
						t1.bindAggregation("items", "/", titems1);
						t1.setModel(husaprroved);
						console.log(flag1)

						var portaprroved2 = new sap.ui.model.json.JSONModel();
						portaprroved2.setData(flag1);
						t2.setModel(portaprroved2);
						var titems2 = new sap.m.ColumnListItem({
							cells: [new sap.m.Label({
									text: "{SERVICEDESCRIPTION}"
								}),
								new sap.m.Input({
									value: "{ITEMPRICE}",
									description: "{CURRENCY}"
								}), new sap.ui.core.Icon({
									src: "sap-icon://notes",
									press: oCont.opencomm
								}),
								new sap.m.Label({
									text: "{SERVICEFLAG}"
								}),
								new sap.m.Label({
									text: "{SERVICENAME}"
								}),
								new sap.m.Label({
									text: "{ITEMNO}"
								}),
								new sap.m.Label({
									text: "{SERVICETYPE}"
								})
							]
						});

						t2.bindAggregation("items", "/", titems2);
						t2.setModel(portaprroved2);
					}
				});

			}
			this.CI_tablebind();

		},
			downloads:function(){
	 	download("data:application/javascript;base64," + agentattach1 , filnam1);
 	},
		downloads1:function(){
	 	download("data:application/javascript;base64," + agentattach2 , filnam2);
	 },
		downloads2:function(){
	 	download("data:application/javascript;base64," + agentattach3 , filnam3);
	 },
		downloads3:function(){
	 	download("data:application/javascript;base64," + agentattach4 , filnam4);
	 },
		downloads4:function(){
	 	download("data:application/javascript;base64," + agentattach5 , filnam5);
	 },

		//---- pric calc -- //
		CI_reset1: function () {

			this.getView().byId("id_serbysts").setValue();
			this.getView().byId("id_serbysts").setSelectedKey();
			this.getView().byId("id_servcombo").setValue();
			this.getView().byId("id_servcombo").setSelectedKey();
		},
		CI_reset2: function () {

		},

		/*	CI_confirmsel:function(){
					var ci_table1=this.getView().byId("idTableMyOrdersLine");
					var rowItems = ci_table1.getSelectedItems();
				var ci_tabel1len=ci_table1.getSelectedItems().length;
				
			 if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} 
				else {
				     this.getView().byId("RidIconTabBarFiori2").setSelectedKey("FinalPrice");
				    	this.getView().byId("cancelinq12").setVisible(false);	
				this.getView().byId("confirminq12").setVisible(false);
				this.getView().byId("confirmselectedinq12").setVisible(false);
				this.getView().byId("pto").setVisible(true);
				/*this.getView().byId("save").setVisible(true);*/
		/*this.getView().byId("reset1").setVisible(true);
			}
		},*/

		CI_attachment: function (event) {

			jQuery.sap.require("sap.m.MessageBox");

			sap.m.MessageBox.confirm("Are you sure to upload the file?", {
				icon: sap.m.MessageBox.Icon.MARK,
				title: "Confirmation Message",
				actions: [sap.m.MessageBox.Action.OK,sap.m.MessageBox.Action.CANCEL],
				onClose: function (oAction) {
					if (oAction == "OK") {

						this.attachpost();

					}

				}.bind(this)
			});
		},

		seamanattach: function (oEvent) {
			var oRow = oEvent.getSource().getParent();
			var oTable = oRow.getParent();
			var i = oTable.indexOfItem(oRow);
			////alert(i);
			sap.m.MessageBox.confirm("Are you sure to replace the file", {
				icon: sap.m.MessageBox.Icon.INFORMATION,
				title: "Information",
				actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
				onClose: function (oAction) {
					if (oAction === "YES") {

						var cc_oTable = sap.ui.core.Fragment.byId("viewseamanorder", "idseamanorder");
						var oFileuploader = cc_oTable.getItems()[i].getCells()[14];
						sFilename = oFileuploader.getValue();
						console.log("sFilename :", sFilename);
						var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

						function getBase64(file, onLoadCallback) {
							return new Promise(function (resolve, reject) {
								var reader = new FileReader();
								reader.onload = function () {
									resolve(reader.result);
								};
								reader.onerror = reject;
								reader.readAsDataURL(file);
							});
						}

						var promise = getBase64(file);
						var base64 = promise.then(function (result) {
							console.log(result);
							cc_oTable.getItems()[i].getCells()[13].setValue(result);
							cc_oTable.getItems()[i].getCells()[11].setText(sFilename);
							return result;
						}.bind(this));
					} else {

					}
				}.bind(this)
			});
		},
		downListPress:function(oEvent){
			var file= oEvent.mParameters.listItem.mProperties.title;
			var filenew = file.split(".");
			var filename = filenew[0];
			var print = ci_att1.length;
			for(var i=0;i<print;i++){
				
				if(filename===ci_att1[i].Name){
					//Download Function
				//	//alert("file Downloaded : "+file);
				//	download( + agentattach1, filnam1);
				  download(ci_att1[i].Base64,file );
				}
				
			}
		},

		attachpost: function () {
			console.log("ci_att1.length:" + ci_att1.length)
			if (ci_att1.length >= 5) {
				sap.m.MessageBox.warning("Only 5 attachments can be uploaded", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {
				var oFileuploader = this.byId("ci_fileUploader1");
				ci_attach1 = this.byId("ci_attlist1");
				var sFilename = oFileuploader.getValue();
				//	baseval = [" "," "," "," "," "];
				var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

				var base64_marker = 'data:' + file.type + ';base64,';

				var filename = sFilename.replace(/(\.[^/.]+)+$/, "") // File Name
				console.log("filename : " + filename);
				var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2) // File Extension
				console.log("fileext : " + fileext);
				var sfileext = fileext.substring(0, 3);
				console.log("sfileext : " + sfileext);
				var tsfileext = sfileext.toUpperCase();
				console.log("tsfileext : " + tsfileext);
				if (file) {
					var reader = new FileReader();

					reader.onload = function (readerEvt) {
						var binaryString = readerEvt.target.result;
						var base64 = btoa(binaryString);
						console.log("base64 : " + base64);

						oFileuploader.setValue();
						baseval.push(base64);
						console.log(baseval);
						ci_obj1 = {
							Name: filename,
							Ext: tsfileext,
							Base64: base64
						};
						ci_att1.push(ci_obj1);
						console.log(ci_att1.length);
						var oModel = new sap.ui.model.json.JSONModel(ci_att1);
						console.log(ci_att1);
						console.log(ci_att1[0].Base64);
						ci_attach1.setModel(oModel);
						var oItems = new sap.m.ObjectListItem({
							icon: {
								path: "Ext",
								formatter: function (subject) {
									var lv = subject;
									if (lv === 'TXT') {
										return "sap-icon://document-text";
									} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
										return "sap-icon://attachment-photo";
									} else if (lv === 'PDF') {
										return "sap-icon://pdf-attachment";
									} else if (lv === 'DOC') {
										return "sap-icon://doc-attachment";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'MP3') {
										return "sap-icon://attachment-audio";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'PPT') {
										return "sap-icon://ppt-attachment";
									} else {
										return "sap-icon://document";
									}

								}
							},
							title: "{Name}.{Ext}",
							type: "Active",
						});
						ci_attach1.bindItems("/", oItems);

					}

				};

				reader.readAsBinaryString(file);
			}
		},

		ci_handleDelete: function (oEvent) {
			var path = oEvent.getParameter('listItem').getBindingContext().getPath();
			var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
			var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

			var Data = list_ID.getModel();

			var d = Data.getData();
			d.splice(idx, 1);
			Data.setData(d);
		},
		ci_dislivechg: function (oEvent) {

			var discval = oEvent.getParameter("newValue");
			var ci_price = this.getView().byId("ci_price").getValue();
			if (!(ci_price == "") || !(ci_price == "NaN") || !(ci_price == undefined)) {
				var discamt = (discval / 100) * ci_price;
				var finprice = ci_price - discamt;
				var finpriceround = finprice.toFixed(3);
				this.getView().byId("ci_fprice").setValue(finpriceround);
				this.getView().byId("final").setText(finpriceround);
			}

		},
		seaman_add1: function () {
			cc_aData12 = [{
				ID: "",
				Empty: "",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: "",
				Empty12: "",
				Empty13: ""
			}];
			var cc_aData1 = arr4;
			cc_aDa = passarray;
			var cc_oTable = sap.ui.core.Fragment.byId("viewseaman", "idseaman");
			oModelcc = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc.setData({ // Set the data to the model using the JSON object defined already  
				seamandata: cc_aData12,
				seamandata2: cc_aDa
			});
			cc_oTable.setModel(oModelcc);
		},

		seaman_add2: function () {
			cc_aData122 = [{
				ID: "",
				Empty: "",
				Empty1: "",
				Empty2: "",
				Empty3: "",
				Empty4: "",
				Empty5: "",
				Empty6: "",
				Empty7: "",
				Empty8: "",
				Empty9: "",
				Empty10: "",
				Empty11: "",
				Empty12: "",
				Empty13: ""
			}];
			var cc_aData1 = arr4;
			cc_aDa = passarray;
			var cc_oTable = sap.ui.core.Fragment.byId("viewseamanorder", "idseamanorder");
			oModelcc = new sap.ui.model.json.JSONModel(); // created a JSON model        
			oModelcc.setData({ // Set the data to the model using the JSON object defined already  
				seamandata: cc_aData122,
				seamandata2: cc_aDa
			});
			cc_oTable.setModel(oModelcc);
		},
		onview: function () {

			services_dialog_open = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Seaman Details',
				type: 'Message',
				content: [viewseaman],
				beginButton: new Button({
					text: 'Update Seaman Details',
					press: function () {
						var oTable = sap.ui.core.Fragment.byId("viewseaman", "idseaman");

						var seamantable = oTable.getItems();

						for (var i = 0; i < seamantable.length; i++) {

							var item = seamantable[i];
							var Cells = item.getCells();
							// Get ID and Name

							var r_seaman_cell1 = Cells[0].getValue(); //sname
							var r_seaman_cell2 = Cells[1].getValue(); //name
							var r_seaman_cell3 = Cells[2].getValue(); //pasportnum
							var r_seaman_cell4 = Cells[3].getValue(); //nation
							var r_seaman_cell5 = Cells[4].getValue(); //dateofissue
							var r_seaman_cell6 = Cells[5].getValue(); //placeofissue
							var r_seaman_cell7 = Cells[6].getValue(); //passexpdate
							var r_seaman_cell8 = Cells[7].getValue(); //seamanbook
							var r_seaman_cell9 = Cells[8].getValue(); //gender
							var r_seaman_cell10 = Cells[9].getValue(); //hotel
							var r_seaman_cell11 = Cells[10].getValue(); //jiner
							var r_seaman_cell12 = Cells[13].getValue(); //comm
							var r_seaman_cell13 = Cells[12].getValue(); //filename
							var r_seaman_cell14 = Cells[16].getValue(); //base64

							////alert(r_seaman_cell1+"r_seaman_cell1");

							/*	var r_seaman_cell12id = Cells[11].getId();

								var r_seaman_cell15;

								if (r_seaman_cell14 === "") {
									var sFilename = r_seaman_cell12;
									var file = jQuery.sap.domById(r_seaman_cell12id + "-fu").files[0];

									function getBase64(file, onLoadCallback) {
										return new Promise(function (resolve, reject) {
											var reader = new FileReader();
											reader.onload = function () {
												resolve(reader.result);
											};
											reader.onerror = reject;
											reader.readAsDataURL(file);
										});
									}

									var promise = getBase64(file);
									var base64 = promise.then(function (result) {
										console.log(result);
										r_seaman_cell15 = Cells[13].setValue(result);
										return result;
									}.bind(this));

								} else {
									r_seaman_cell15 = r_seaman_cell14;
								}

								console.log(r_seaman_cell15);*/

							var payload = {
								"INQUIRYNUMBER": InqNo,
								"ITEMNO": (i + 1).toString(),
								"SERVICETYPE": ci_servicetype,
								"SERVICENAME": r_seaman_cell1,
								"VESSELNAME": ci_vesselname,
								"INQUIRYDATE": " ",
								"INQUIRYTIME": " ",
								"PORTNAME": ci_portname,
								"DANUMBER": " ",
								"PASSPORTNUMBER": r_seaman_cell3,
								"VENDOR": " ",
								"CURRENCY": " ",
								"SEAMANBOOKNUMBER": r_seaman_cell8,
								"ITEMPRICE": "",
								"CHANGEORDER": " ",
								"CUSTOMERID": ci_custid,
								"FIRSTNAME": r_seaman_cell2,
								"LASTNAME": " ",
								"NATIONALITY": r_seaman_cell4,
								"DATEOFISSUE": r_seaman_cell5,
								"PLACEOFISSUE": r_seaman_cell6,
								"PASSPORTEXPIRY": r_seaman_cell7,
								"GENDER": r_seaman_cell9,
								"HOTELREQUIRED": r_seaman_cell10,
								"JOINEROFFSIGNER": r_seaman_cell11,
								"MATERIALDESC": "  ",
								"ATTACHMENT": " ",
								"PARAMETER1": " ",
								"VALUE1": " ",
								"PARAMETER2": " ",
								"VALUE2": " ",
								"PARAMETER3": " ",
								"VALUE3": " ",
								"PARAMETER4": " ",
								"VALUE4": " ",
								"PARAMETER5": " ",
								"VALUE5": " ",
								"REORDER": "",
								"FILENAME": r_seaman_cell13,
								"BASE64": r_seaman_cell14,
								"TOTALPRICE": "",
								"SEAMANDETAILS": "X",
								"COMMENTS": r_seaman_cell12
							};

							console.log(payload);
							inqre.push(payload);
							console.log(inqre);
							var datavalue = JSON.stringify(inqre);
						}

						var jurl1 = 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/InqReorderUpdate.xsjs';
						var oCont = this;
						sap.m.MessageBox.confirm("Are you sure to update the Seaman details?", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Information",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								if (oAction === "YES") {

									jQuery.ajax({
										url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/InqReorderUpdate.xsjs',
										data: datavalue,
										method: 'POST',
										/*username: "S0019363960",
										password: "Ud@y2007",
										xhrFields: {
											withCredentials: true
										},*/
										success: function (data, response) {
											console.log(data);
											console.log(JSON.stringify(data));
											console.log(JSON.stringify(datavalue));
											console.log("response:" + response);
											sap.m.MessageBox.success("Posted Successfully", {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],
												onClose: function (oAction) {
													if (oAction == "OK") {
														//	oCont.getView().byId("idTMOD").removeSelections(true);
														//	oCont.link1();
														services_dialog_open.close();
													}
												}.bind(this)
											});

										},
										error: function (xhr, ajaxOptions, throwError) {
											// //alert("error")
											sap.m.MessageToast.show(throwError);
										},
									});
								}
							}
						});
					}.bind(this)

				}),
				endButton: new Button({
					text: 'Close',
					press: function () {

						services_dialog_open.close();
					}
				}),
			});
			services_dialog_open.open();

		},

		onvieworder: function () {

			services_dialog_open = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Seaman Details',
				type: 'Message',
				content: [viewseamanorder],
				beginButton: new Button({
					text: 'Update Seaman Details',
					press: function () {
						var oTable = sap.ui.core.Fragment.byId("viewseamanorder", "idseamanorder");

						var seamantable = oTable.getItems();

						for (var i = 0; i < seamantable.length; i++) {

							var item = seamantable[i];
							var Cells = item.getCells();
							// Get ID and Name

							var r_seaman_cell1 = Cells[0].getValue(); //sname
							var r_seaman_cell2 = Cells[1].getValue(); //name
							var r_seaman_cell3 = Cells[2].getValue(); //pasportnum
							var r_seaman_cell4 = Cells[3].getValue(); //nation
							var r_seaman_cell5 = Cells[4].getValue(); //dateofissue
							var r_seaman_cell6 = Cells[5].getValue(); //placeofissue
							var r_seaman_cell7 = Cells[6].getValue(); //passexpdate
							var r_seaman_cell8 = Cells[7].getValue(); //seamanbook
							var r_seaman_cell9 = Cells[8].getValue(); //gender
							var r_seaman_cell10 = Cells[9].getValue(); //hotel
							var r_seaman_cell11 = Cells[10].getValue(); //jiner
							var r_seaman_cell12 = Cells[11].getText(); //filename
							var r_seaman_cell13 = Cells[12].getValue(); //comme
							var r_seaman_cell14 = Cells[13].getValue(); //base64
							var ci_servicetype = Cells[16].getValue();
							var ci_vesselname = Cells[17].getValue();
							var ci_portname = Cells[18].getValue();
							var ci_custid = Cells[19].getValue();
							var ci_sercode = Cells[20].getValue();

							////alert(r_seaman_cell1+"r_seaman_cell1");

							/*	var r_seaman_cell12id = Cells[11].getId();

								var r_seaman_cell15;

								if (r_seaman_cell14 === "") {
									var sFilename = r_seaman_cell12;
									var file = jQuery.sap.domById(r_seaman_cell12id + "-fu").files[0];

									function getBase64(file, onLoadCallback) {
										return new Promise(function (resolve, reject) {
											var reader = new FileReader();
											reader.onload = function () {
												resolve(reader.result);
											};
											reader.onerror = reject;
											reader.readAsDataURL(file);
										});
									}

									var promise = getBase64(file);
									var base64 = promise.then(function (result) {
										console.log(result);
										r_seaman_cell15 = Cells[13].setValue(result);
										return result;
									}.bind(this));

								} else {
									r_seaman_cell15 = r_seaman_cell14;
								}

								console.log(r_seaman_cell15);*/

							var payload = {
								"INQUIRYNUMBER": inqnumberod,
								"ITEMNO": (i + 1).toString(),
								"SERVICETYPE": ci_servicetype,
								"SERVICENAME": ci_sercode,
								"VESSELNAME": ci_vesselname,
								"INQUIRYDATE": " ",
								"INQUIRYTIME": " ",
								"PORTNAME": ci_portname,
								"DANUMBER": " ",
								"PASSPORTNUMBER": r_seaman_cell3,
								"VENDOR": " ",
								"CURRENCY": " ",
								"SEAMANBOOKNUMBER": r_seaman_cell8,
								"ITEMPRICE": "",
								"CHANGEORDER": " ",
								"CUSTOMERID": ci_custid,
								"FIRSTNAME": r_seaman_cell2,
								"LASTNAME": " ",
								"NATIONALITY": r_seaman_cell4,
								"DATEOFISSUE": r_seaman_cell5,
								"PLACEOFISSUE": r_seaman_cell6,
								"PASSPORTEXPIRY": r_seaman_cell7,
								"GENDER": r_seaman_cell9,
								"HOTELREQUIRED": r_seaman_cell10,
								"JOINEROFFSIGNER": r_seaman_cell11,
								"MATERIALDESC": "  ",
								"ATTACHMENT": "",
								"PARAMETER1": " ",
								"VALUE1": " ",
								"PARAMETER2": " ",
								"VALUE2": " ",
								"PARAMETER3": " ",
								"VALUE3": " ",
								"PARAMETER4": " ",
								"VALUE4": " ",
								"PARAMETER5": " ",
								"VALUE5": " ",
								"REORDER": "",
								"FILENAME": r_seaman_cell12,
								"BASE64": r_seaman_cell14,
								"TOTALPRICE": "",
								"SEAMANDETAILS": "X",
								"COMMENTS": r_seaman_cell13,
								"SERVICEDESCRIPTION": r_seaman_cell1

							};

							console.log(payload);
							inqre.push(payload);
							console.log(inqre);
							var datavalue = JSON.stringify(inqre);
						}

						var jurl1 = 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/InqReorderUpdate.xsjs';
						var oCont = this;
						sap.m.MessageBox.confirm("Are you sure to update the Seaman details?", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Information",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								if (oAction === "YES") {

									jQuery.ajax({
										url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/InqReorderUpdate.xsjs',
										data: datavalue,
										method: 'POST',
										/*username: "S0019363960",
										password: "Ud@y2007",
										xhrFields: {
											withCredentials: true
										},*/
										success: function (data, response) {
											console.log(data);
											console.log(JSON.stringify(data));
											console.log(JSON.stringify(datavalue));
											console.log("response:" + response);
											sap.m.MessageBox.success("Posted Successfully", {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],
												onClose: function (oAction) {
													if (oAction == "OK") {
														//	oCont.getView().byId("idTMOD").removeSelections(true);
														//	oCont.link1();
														services_dialog_open.close();
													}
												}.bind(this)
											});

										},
										error: function (xhr, ajaxOptions, throwError) {
											// //alert("error")
											sap.m.MessageToast.show(throwError);
										},
									});
								}
							}
						});
					}.bind(this)

				}),
				endButton: new Button({
					text: 'Close',
					press: function () {

						services_dialog_open.close();
					}
				}),
			});
			services_dialog_open.open();

		},
		attachdownloadinq: function (oEvent) {
			var cc_oTable1 = sap.ui.core.Fragment.byId("viewseaman", "idseaman");

			var oRow = oEvent.getSource().getParent();
			var oTable = oRow.getParent();
			var i = oTable.indexOfItem(oRow);
			////alert(i);

			var agentattach1 = cc_oTable1.getItems()[i].getCells()[15].getValue();
			console.log("agentattach1 :", agentattach1)
			var filnam1 = cc_oTable1.getItems()[i].getCells()[11].getText();
			console.log("filnam1 :", filnam1)

			download("data:application/javascript;base64," + agentattach1, filnam1);

		},
		seamanattachinq: function (oEvent) {
			//	//alert("attach")
			var oRow = oEvent.getSource().getParent();
			var oTable = oRow.getParent();
			var i = oTable.indexOfItem(oRow);
			////alert(i);
			sap.m.MessageBox.confirm("Are you sure to replace the file", {
				icon: sap.m.MessageBox.Icon.INFORMATION,
				title: "Information",
				actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
				onClose: function (oAction) {
					if (oAction === "YES") {

						var cc_oTable = sap.ui.core.Fragment.byId("viewseaman", "idseaman");
						var oFileuploader = cc_oTable.getItems()[i].getCells()[12];
						sFilename = oFileuploader.getValue();
						console.log("sFilename :", sFilename);
						var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

						function getBase64(file, onLoadCallback) {
							////alert("base64")
							return new Promise(function (resolve, reject) {
								var reader = new FileReader();
								reader.onload = function () {
									resolve(reader.result);
								};
								reader.onerror = reject;
								reader.readAsDataURL(file);
							});
						}

						var promise = getBase64(file);
						var base64 = promise.then(function (result) {
							console.log(result);
							cc_oTable.getItems()[i].getCells()[16].setValue(result);

							cc_oTable.getItems()[i].getCells()[14].setValue(sFilename);
							return result;
						}.bind(this));
					} else {

					}
				}.bind(this)
			});
		},

		seamanview: function () {
			//	//alert("hi");
			var oCont = this;
			cc_arr1 = [];
			console.log(cc_arr1);
			var cc_oTable = sap.ui.core.Fragment.byId("viewseaman", "idseaman");

			console.log(cc_oTable.getItems().length);
			var omod = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);

			omod.read("/InqReorder", {
				filters: [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo),
					new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, 'Husbandry/Vessel support services')
				],
				success: function (oData, oResp) {
					var oCont = this;
					console.log("viewseaman", oData);
					console.log((oData.results).length);
					//	var count = ((oData.results).length)+i;
					var viewseam = [];

					for (var i = 0; i < (oData.results).length; i++) {
						cc_aData12 = {

							Empty1: oData.results[i].SERVICENAME,
							Empty2: oData.results[i].FIRSTNAME,
							Empty3: oData.results[i].PASSPORTNUMBER,
							Empty4: oData.results[i].NATIONALITY,
							Empty5: oData.results[i].DATEOFISSUE,
							Empty6: oData.results[i].PLACEOFISSUE,
							Empty7: oData.results[i].PASSPORTEXPIRY,
							Empty8: oData.results[i].SEAMANBOOKNUMBER,
							Empty9: oData.results[i].GENDER,
							Empty10: oData.results[i].HOTELREQUIRED,
							Empty11: oData.results[i].JOINEROFFSIGNER,
							Empty12: "",
							Empty13: oData.results[i].COMMENTS,
							Empty14: "",
							Empty15: oData.results[i].FILENAME,
							Empty16: oData.results[i].BASE64,
							Empty17: ""

						};

						cc_arr1.push(cc_aData12);

						aData12 = {
							"aData12": cc_arr1
						};

					}

					oModelcc = new sap.ui.model.json.JSONModel();
					oModelcc.setData(aData12);
					cc_oTable.setModel(oModelcc);
				},
			});
			oCont.onview();
		},
		seamanvieworder: function () {
			//	//alert("hi");
			var oCont = this;
			cc_arr1 = [];
			console.log(cc_arr1);
			var cc_oTable = sap.ui.core.Fragment.byId("viewseamanorder", "idseamanorder");

			console.log(cc_oTable.getItems().length);
			var omod = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);

			omod.read("/InqReorder", {
				filters: [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, inqnumberod),
					new sap.ui.model.Filter("SERVICETYPE", sap.ui.model.FilterOperator.EQ, 'Husbandry/Vessel support services')
				],
				success: function (oData, oResp) {
					var oCont = this;
					console.log("viewseaman", oData);
					console.log((oData.results).length);
					//	var count = ((oData.results).length)+i;
					var viewseam = [];

					for (var i = 0; i < (oData.results).length; i++) {
						cc_aData12 = {

							Empty1: oData.results[i].SERVICEDESCRIPTION,
							Empty2: oData.results[i].FIRSTNAME,
							Empty3: oData.results[i].PASSPORTNUMBER,
							Empty4: oData.results[i].NATIONALITY,
							Empty5: oData.results[i].DATEOFISSUE,
							Empty6: oData.results[i].PLACEOFISSUE,
							Empty7: oData.results[i].PASSPORTEXPIRY,
							Empty8: oData.results[i].SEAMANBOOKNUMBER,
							Empty9: oData.results[i].GENDER,
							Empty10: oData.results[i].HOTELREQUIRED,
							Empty11: oData.results[i].JOINEROFFSIGNER,
							Empty12: oData.results[i].FILENAME,
							Empty13: oData.results[i].COMMENTS,
							Empty14: oData.results[i].BASE64,
							Empty15: "",
							Empty16: "",
							Empty17: oData.results[i].SERVICETYPE,
							Empty18: oData.results[i].VESSELNAME,
							Empty19: oData.results[i].PORTNAME,
							Empty20: oData.results[i].CUSTOMERID,
							Empty21: oData.results[i].SERVICENAME

						};

						cc_arr1.push(cc_aData12);

						aData12 = {
							"CustomerOrderSeaman": cc_arr1
						};

					}

					oModelcc = new sap.ui.model.json.JSONModel();
					oModelcc.setData(aData12);
					cc_oTable.setModel(oModelcc);
				},
			});
			oCont.onvieworder();
		},
		LinkValue: function (oEvent) {
			//	//alert(ci_currency);
			var oTablec = sap.ui.core.Fragment.byId("Addportservices", "addportservices");
			var oSelectedItem = oEvent.getParameter("listItem");
			var oTable = oEvent.getSource();
			var index = oTable.indexOfItem(oSelectedItem);
			var inputval = oTablec.getItems()[index].getCells()[1].getValue();
			//	 //alert(inputval)
			var inputvalcurr = oTablec.getItems()[index].getCells()[1].getDescription();
			//	//alert(inputvalcurr);
			//	var qtyval =  oTablec.getItems()[index].getCells()[1].getValue();

			if (inputvalcurr === ci_currency) {

				oTablec.getItems()[index].getCells()[4].setNumber(inputval);
				oTablec.getItems()[index].getCells()[4].setUnit(inputvalcurr);

			} else {
				//	//alert("else");
				var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);
				oModel.read("/Pricing(FROMCURRENCY='" + inputvalcurr + "',TOCURRENCY='" + ci_currency + "')", {
					success: function (oData, oResponse) {
						excgrt1 = oData.EXCHANGERATE;
						//	  	//alert(excgrt1);
						//	console.log("excgrt1",excgrt1)
						oTablec.getItems()[index].getCells()[4].setNumber(inputval * excgrt1);
						oTablec.getItems()[index].getCells()[4].setUnit(ci_currency);
					},

				});
				//debugger;	
			}
		},

		CI_sendquot: function () {
			var ocont = this;
			var oModel = new ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata');
			var sPath = "/MyInquiryHeader";
			var ofilters = [new sap.ui.model.Filter("INQUIRYNUMBER", sap.ui.model.FilterOperator.EQ, InqNo)];
			oModel.read(sPath, {
				filters: ofilters,
				success: function (oData, oResponse) {
					console.log(oData)
					postnac_crew = oData.results[0].NAC_CREW;
					postnac_imm = oData.results[0].NAC_IMM;
					postvsu_logis = oData.results[0].VSU_LOGISTICS
					postvsu_mat = oData.results[0].VSU_MATERIALS;

					if (postnac_crew === null) {
						postnac_crew = ""
					} else {
						postnac_crew = postnac_crew;
					}
					if (postnac_imm === null) {
						postnac_imm = ""
					} else {
						postnac_imm = postnac_imm;
					}
					if (postvsu_logis === null) {
						postvsu_logis = ""
					} else {
						postvsu_logis = postvsu_logis;
					}
					if (postvsu_mat === null) {
						postvsu_mat = ""
					} else {
						postvsu_mat = postvsu_mat;
					}
					ocont.CI_sendquot1();

				}
			});
		},

		CI_sendquot1: function () {
			////alert(ci_vesseldesc);
			 ci_imo1 = this.getView().byId("id_imo").getText();
			var ci_inq1 = this.getView().byId("id_inq_no1").getText();
			//	var ci_cusid = this.getView().byId("id_cid").getText();
			 ci_cport = this.getView().byId("id_port").getText();
			 ci_cives = this.getView().byId("id_vessel_name").getText();
			var ci_comments = this.getView().byId("ci_Commnt").getValue();

			var ci_table1 = this.getView().byId("idTableMyOrdersLine");
			var rowItems = ci_table1.getSelectedItems();
			var ci_tabel1len = ci_table1.getSelectedItems().length;

			var ci_price = this.getView().byId("ci_price").getValue();
			var ci_discount = this.getView().byId("ci_discount").getValue();
			//	//alert(ci_discount);
			var ci_finalpri = this.getView().byId("ci_fprice").getValue();
			var ci_attach = this.getView().byId("ci_fileUploader1").getValue();
			var ci_commnt = this.getView().byId("ci_Commnt").getValue();

			if (ci_discount === "" || ci_discount === null) {
				ci_discount = "0";
			} else {
				ci_discount = ci_discount;
			}
			if (ci_vesseldesc === null || ci_vesseldesc === undefined) {
				ci_vesseldesc = ""

			} else {
				ci_vesseldesc = ci_vesseldesc
			}
			if (ci_att1.length === 1) {
				att1 = ci_att1[0].Base64;
				file1 = ci_att1[0].Name + "." + ci_att1[0].Ext;
			} else if (ci_att1.length === 2) {
				att1 = ci_att1[0].Base64;
				att2 = ci_att1[1].Base64;
				file1 = ci_att1[0].Name + "." + ci_att1[0].Ext;
				file2 = ci_att1[1].Name + "." + ci_att1[1].Ext;
			} else if (ci_att1.length === 3) {
				att1 = ci_att1[0].Base64;
				att2 = ci_att1[1].Base64;
				att3 = ci_att1[2].Base64;
				file1 = ci_att1[0].Name + "." + ci_att1[0].Ext;
				file2 = ci_att1[1].Name + "." + ci_att1[1].Ext;
				file3 = ci_att1[2].Name + "." + ci_att1[2].Ext;
			} else if (ci_att1.length === 4) {
				att1 = ci_att1[0].Base64;
				att2 = ci_att1[1].Base64;
				att3 = ci_att1[2].Base64;
				att4 = ci_att1[3].Base64;
				file1 = ci_att1[0].Name + "." + ci_att1[0].Ext;
				file2 = ci_att1[1].Name + "." + ci_att1[1].Ext;
				file3 = ci_att1[2].Name + "." + ci_att1[2].Ext;
				file4 = ci_att1[3].Name + "." + ci_att1[3].Ext;
			} else if (ci_att1.length === 5) {
				att1 = ci_att1[0].Base64;
				att2 = ci_att1[1].Base64;
				att3 = ci_att1[2].Base64;
				att4 = ci_att1[3].Base64;
				att5 = ci_att1[4].Base64;
				file1 = ci_att1[0].Name + "." + ci_att1[0].Ext;
				file2 = ci_att1[1].Name + "." + ci_att1[1].Ext;
				file3 = ci_att1[2].Name + "." + ci_att1[2].Ext;
				file4 = ci_att1[3].Name + "." + ci_att1[3].Ext;
				file5 = ci_att1[4].Name + "." + ci_att1[4].Ext;
			} else {
				att1 = '', att2 = '', att3 = '', att4 = '', att5 = '', file1 = '', file2 = '', file3 = '', file4 = '', file5 = '';
			}

			/*if (ci_discount === "" || ci_finalpri === "" ) {

				sap.m.MessageBox.warning(
					"Please enter all mandatory fields", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function(oAction) {
							/ * do something * /
						}
					});

			} */
			/*if(ci_radval === "New")
			{
					sap.m.MessageBox.confirm("Please Change the Status to Continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
				
			}
		else
		{*/
			if (servicetype === "Husbandry/Vessel support services") {

				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {

					var ciArray2 = [];

					var ocontroller = this;
					var ci_table1 = ocontroller.getView().byId("idTableMyOrdersLine");
					var ci_porttable = ocontroller.getView().byId("idTableMyOrdersLine1");
					var portrows = ci_porttable.getSelectedItems();
					var rowItems = ci_table1.getSelectedItems();
					var ci_tabel1len = ci_table1.getSelectedItems().length;
					var porttablelen = ci_porttable.getSelectedItems().length;
					var addport = ocontroller.getView().byId("additemsport").getSelectedItems();
					var addportlen = addport.length;
					ocontroller.ram_caldate();
					for (var i = 0; i < ci_tabel1len; i++) {

						var item3 = rowItems[i];
						var Cells3 = item3.getCells();
						// Get ID and Name
						var rowid = Cells3[0].getText();
						var servnam = Cells3[1].getText();
						var quant = Cells3[2].getValue();
						var itmprice1 = Cells3[3].getValue();
						var curr = Cells3[3].getDescription();
						var tot = (itmprice1 * quant).toString();
						var flag = Cells3[6].getText();
						var baseval1 = Cells3[7].getText();
						var fname1 = Cells3[8].getText();
						var cusbase = Cells3[9].getText();
						var cusfil = Cells3[10].getText();
						var servtyp1 = Cells3[12].getText();
						var roles12 = Cells3[13].getText();
						var servicecodehus = Cells3[14].getText();
						var MyInquiriespay = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": servtyp1,
							"QTY": quant,
							"TOTALPRICE": tot,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": ci_currency,
							"ORDERSTATUS": ci_radval,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": rowid,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodehus,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": cusbase,
							"CUSTMLAREFFILENAME": cusfil,
							"AGENTMLAFREBASE64": baseval1,
							"AGENTMLAREFFILENAME": fname1,
							"SERVICEFLAG": flag,
							"SAPQUOTATIONID": quotid,
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": roles12
						};
						ciArray2.push(MyInquiriespay);
						// console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalue = JSON.stringify(ciArray2);
						console.log("Myinqdatavalue:" + Myinqdatavalue);
					};
					for (var i = 0; i < porttablelen; i++) {
						//	//alert("for");

						var rows = portrows[i];
						var Cells3 = rows.getCells();

						var servnam = Cells3[0].getText();

						var itmprice1 = Cells3[1].getValue();
						var curr = Cells3[1].getDescription();
						var portflag = Cells3[3].getText();
						var servicecodeport = Cells3[4].getText();
						var itemno = Cells3[5].getText();
						var servicetypeport = Cells3[6].getText();
						//	var tot = (itmprice1*quant).toString();

						var MyInquiriespayport = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": "NAC_PORT",
							"QTY": "1",
							"TOTALPRICE": itmprice1,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": ci_currency,
							"ORDERSTATUS": ci_radval,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": itemno,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodeport,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": "",
							"CUSTMLAREFFILENAME": "",
							"AGENTMLAFREBASE64": "",
							"AGENTMLAREFFILENAME": "",
							"SAPQUOTATIONID": quotid,
							"SERVICEFLAG": portflag,
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": ""
						};
						ciArrayport.push(MyInquiriespayport);
						//console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalueport = JSON.stringify(ciArrayport);
						console.log("Myinqdatavalueport:" + Myinqdatavalueport);
					};
					if (addportlen === 0) {

					} else {
						for (var i = 0; i < addportlen; i++) {
							//	//alert("for");

							var rows = addport[i];
							var Cells3 = rows.getCells();

							var servnam = Cells3[0].getText();

							var itmprice1 = Cells3[1].getValue();
							var curr = Cells3[1].getDescription();
							var portflag = Cells3[3].getText();
							var servicecodeport = Cells3[4].getText();
							var itemno = Cells3[5].getText();
							var servicetypeport = Cells3[6].getText();
							//	var tot = (itmprice1*quant).toString();

							var MyInquiriespayport = {
								"REQUESTEDDATE": s_fulldt,
								"REQUESTEDTIME": s_fultime,
								"SERVICETYPE": "NAC_PORT",
								"QTY": "1",
								"TOTALPRICE": itmprice1,
								"ITEMPRICE": itmprice1,
								"DURATIONOFPASS": " ",
								"PRIORITY": priority_ci,
								"LOADINGAREA": " ",
								"CURRENCY": ci_currency,
								"ORDERSTATUS": ci_radval,
								"ORDERSTATUSCOUNT": "1",
								"RATE": "",
								"AGENTAPPROVAL": "X",
								"CUSTOMERID": ci_custid,
								"ITEMNO": itemno,
								"INQUIRYNUMBER": ci_inq1,
								"SERVICEDESCRIPTION": servnam,
								"SERVICENAME": servicecodeport,
								"CATALOG_FLAG": "",
								"REMARKS": "",
								"IMPA": "",
								"CUSTMLAREFBASE64": "",
								"CUSTMLAREFFILENAME": "",
								"AGENTMLAFREBASE64": "",
								"AGENTMLAREFFILENAME": "",
								"SAPQUOTATIONID": "",
								"SERVICEFLAG": portflag,
								"CUSTOMERCOMMENTS": "",
								"AGENTCOMMENTS": ci_comments,
								"AGENTROLE": ""
							};
							ciArrayport2.push(MyInquiriespayport);
							//console.log("postPayLoad:" + JSON.stringify(postPayLoad));
							var Myinqdatavalueport2 = JSON.stringify(ciArrayport2);

							console.log("Arrayval" + ciArrayport2);
							console.log("Myinqdatavalueport2:" + Myinqdatavalueport2);
						};
					}
					var MyInquiriesheader = [{
						REQUESTEDDATE: s_fulldt, //s_fulldt
						REQUESTEDTIME: s_fultime, //s_fultime
						SERVICETYPE: servicetype,
						TOTALPRICE: ci_price,
						FINALPRICE: ci_finalpri,
						VESSELNAME: ci_cives,
						IMO: ci_imo1,
						ETA: ci_eta,
						ETD: ci_etd,
						PORTNAME: ci_cport,
						CURRENCY: ci_currency,
						ORDERSTATUS: ci_radval,
						ORDERSTATUSCOUNT: "1",
						DISCOUNT: ci_discount,
						ATTACHMENT1: att1, //ci_att1.Base64[0]
						ATTACHMENT2: att2,
						ATTACHMENT3: att3,
						ATTACHMENT4: att4,
						ATTACHMENT5: att5,
						QUOTATIONTYPE: "UpdatedQuotation",
						CUSTOMERID: ci_custid,
						INQUIRYNUMBER: ci_inq1,
						SAPQUOTATIONID: quotid,
						SAPORDERID: sonum,
						WBS: wbs1,
						CUSTOMERCOMMENTS: "",
						AGENTCOMMENTS: ci_comments,
						FILENAME1: file1,
						FILENAME2: file2,
						FILENAME3: file3,
						FILENAME4: file4,
						FILENAME5: file5,
						CURRENTSTATUS: "",
						AGENTROLE: "",
						COUNTRY: "",
						NAC_CREW: postnac_crew,
						NAC_IMM: postnac_imm,
						VSU_LOGISTICS: postvsu_logis,
						VSU_MATERIALS: postvsu_mat,
						VESSELTYPEDESC: ci_vesseldesc

					}];

					var Myinqdataheader = JSON.stringify(MyInquiriesheader);
					console.log("Myinqdataheader:" + Myinqdataheader);
					var msgtext = this.getView().byId("reset1").getText();
					var ocontroller = this;
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
						"Are you sure to " + msgtext + " ?", {
							//  icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Confirmation",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								if (oAction == "YES") {
									busyDialog.open();
									/////********my inquiries header posting******//////////////
									jQuery.ajax({
										url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiryHeaderUpdate.xsjs',
										data: Myinqdataheader,
										method: 'POST',
										success: function (data, response) {
											// 	//alert("success")
											console.log(data);
											console.log("headerdata:" + JSON.stringify(data));
											console.log("response:" + response);
											/////********my inquiries multiple posting******//////////////
											jQuery.ajax({
												url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
												data: Myinqdatavalue,
												method: 'POST',
												success: function (data, response) {
													console.log(data);
													console.log("inqdata:" + JSON.stringify(data));
													console.log("response:" + response);
													jQuery.ajax({
														url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
														//   type: 'POST' ,
														data: Myinqdatavalueport,
														method: 'POST',
														success: function (data, response) {
															console.log(data);
															console.log("inqdata:" + JSON.stringify(data));
															console.log("response:" + response);
															jQuery.ajax({

																url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesMultiple.xsjs',
																data: Myinqdatavalueport2,
																method: 'POST',

																success: function (data, response) {
																	// 	//alert("success")
																	console.log("inqdata:" + JSON.stringify(data));
																	console.log("response:" + response);
																	ocontroller.postcargoval();
																	busyDialog.close();
																	sap.m.MessageBox.success("Inquiry has been " + ci_radval + " by Agent", {
																		icon: sap.m.MessageBox.Icon.SUCCESS,
																		title: "Success",
																		actions: [sap.m.MessageBox.Action.OK],
																		onClose: function (oAction) {
																			if (oAction == "OK") {
																				Array2.length = 0;
																				Array2 = [];
																				arr9 = [];
																				arr10 = [];
																				ocontroller.sendquo_clear();
																				ocontroller.getView().byId("additemsport").destroyItems();
																				ocontroller.getView().byId("additemsport").setVisible(false);
																			}
																		}.bind(ocontroller)
																	});

																},
																error: function (xhr, ajaxOptions, throwError) {
																	sap.m.MessageToast.show(throwError);
																	busyDialog.close();
																	Array2.length = 0;
																	Array2 = [];
																	ocontroller.sendquo_clear();
																},
															});
															/*sap.m.MessageBox.success("Quotation has been approved by Agent", {
																icon: sap.m.MessageBox.Icon.SUCCESS,
																title: "Success",
																actions: [sap.m.MessageBox.Action.OK],
																onClose: function (oAction) {
																	if (oAction == "OK") {
																		Array2.length = 0;
																		Array2 = [];
																		ocontroller.sendquo_clear();
																	}
																}.bind(ocontroller)
															});*/

														},
														error: function (xhr, ajaxOptions, throwError) {
															sap.m.MessageToast.show(throwError);
															busyDialog.close();
															Array2.length = 0;
															Array2 = [];
															ocontroller.sendquo_clear();
														},
													});

												},
												error: function (xhr, ajaxOptions, throwError) {
													sap.m.MessageToast.show(throwError);
													busyDialog.close();
													Array2.length = 0;
													Array2 = [];
													ocontroller.sendquo_clear();
												},
											});
										},
										error: function (xhr, ajaxOptions, throwError) {
											sap.m.MessageToast.show(throwError);
											busyDialog.close();
											Array2.length = 0;
											Array2 = [];
											ocontroller.sendquo_clear();
										},
									});
								}
							}
						});
				}
			} else if (servicetype === "Hub Agency Services") {
				var ocontroller = this;
				var ci_table1 = ocontroller.getView().byId("idhub");
				var rowItems = ci_table1.getSelectedItems();
				var rolsetab = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable");
				var rolsetablen = sap.ui.core.Fragment.byId("assigntofragment", "idAssignTable").getItems().length;
				for (var k = 0; k < rolsetablen; k++) {
					var item1 = rolsetablen[i];
					var Cells1 = item1.getCells();
					var role = Cells3[1].getSelectedKey();
					rolearr.push(role);
				}
				console.log(rolearr);

				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {

					var ciArray2 = [];
					////alert("else");
					var ocontroller = this;
					var ci_table1 = ocontroller.getView().byId("idhub");
					var rowItems = ci_table1.getSelectedItems();
					var ci_tabel1len = ci_table1.getSelectedItems().length;

					ocontroller.ram_caldate();
					for (var i = 0; i < ci_tabel1len; i++) {
						////alert("for");
						var item3 = rowItems[i];
						var Cells3 = item3.getCells();
						// Get ID and Name
						var rowid = Cells3[0].getText();
						var servnam = Cells3[1].getText();
						var quant = Cells3[2].getValue();
						var itmprice1 = Cells3[3].getValue();
						var curr = Cells3[3].getDescription();
						var tot = (itmprice1 * quant).toString();
						var servicecodehub = Cells3[6].getText();

						var MyInquiriespay = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": servicetype,
							"QTY": quant,
							"TOTALPRICE": tot,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": ci_currency,
							"ORDERSTATUS": ci_radval,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": rowid,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodehub,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": "",
							"CUSTMLAREFFILENAME": "",
							"AGENTMLAFREBASE64": "",
							"AGENTMLAREFFILENAME": "",
							"SERVICEFLAG": flag,
							"SAPQUOTATIONID": "",
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": ""
						};
						ciArray2.push(MyInquiriespay);
						// console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalue = JSON.stringify(ciArray2);
						console.log("Myinqdatavalue:" + Myinqdatavalue);
					};

					var MyInquiriesheader = [{
						REQUESTEDDATE: s_fulldt, //s_fulldt
						REQUESTEDTIME: s_fultime, //s_fultime
						SERVICETYPE: servicetype,
						TOTALPRICE: ci_price,
						FINALPRICE: ci_finalpri,
						VESSELNAME: ci_cives,
						IMO: ci_imo1,
						ETA: ci_eta,
						ETD: ci_etd,
						PORTNAME: ci_cport,
						CURRENCY: ci_currency,
						ORDERSTATUS: ci_radval,
						ORDERSTATUSCOUNT: "1",
						DISCOUNT: ci_discount,
						ATTACHMENT1: att1, //ci_att1.Base64[0]
						ATTACHMENT2: att2,
						ATTACHMENT3: att3,
						ATTACHMENT4: att4,
						ATTACHMENT5: att5,
						QUOTATIONTYPE: "UpdatedQuotation",
						CUSTOMERID: ci_custid,
						INQUIRYNUMBER: ci_inq1,
						SAPQUOTATIONID: "",
						SAPORDERID: "",
						WBS: "",
						CUSTOMERCOMMENTS: "",
						AGENTCOMMENTS: ci_comments,
						FILENAME1: file1,
						FILENAME2: file2,
						FILENAME3: file3,
						FILENAME4: file4,
						FILENAME5: file5,
						CURRENTSTATUS: "",
						AGENTROLE: "",
						COUNTRY: "",
						NAC_CREW: nac_crew,
						NAC_IMM: nac_imm,
						VSU_LOGISTICS: vsu_logis,
						VSU_MATERIALS: vsu_mat,
						VESSELTYPEDESC: ci_vesseldesc

					}];
					var Myinqdataheader = JSON.stringify(MyInquiriesheader);
					console.log("Myinqdataheader:" + Myinqdataheader);
					var msgtext = this.getView().byId("reset1").getText();
					var ocontroller = this;
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
						"Are you sure to " + msgtext + " ?", {
							//  icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Confirmation",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								if (oAction == "YES") {
									//	//alert("yes");
									busyDialog.open();
									/////********my inquiries header posting******//////////////
									jQuery.ajax({
										url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiryHeaderUpdate.xsjs',
										//   type: 'POST' ,
										data: Myinqdataheader,
										method: 'POST',
										//   dataType: 'json',
										//contentType:'application/json',
										/*username: "S0019363960",
										password: "Ud@y2007",
										xhrFields: {
											withCredentials: true
										},*/
										success: function (data, response) {
											// 	//alert("success")
											console.log(data);
											console.log("headerdata:" + JSON.stringify(data));
											console.log("response:" + response);

											/////********my inquiries multiple posting******//////////////
											jQuery.ajax({
												url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
												//   type: 'POST' ,
												data: Myinqdatavalue,
												method: 'POST',
												//   dataType: 'json',
												//contentType:'application/json',
												/*	username: "S0019363960",
													password: "Ud@y2007",
													xhrFields: {
														withCredentials: true
													},*/
												success: function (data, response) {
													// 	//alert("success")
													console.log(data);
													console.log("inqdata:" + JSON.stringify(data));
													console.log("response:" + response);
												//	ocontroller.postcargoval();
													busyDialog.close();
													sap.m.MessageBox.success("Inquiry has been " + ci_radval + " by Agent", {
														icon: sap.m.MessageBox.Icon.SUCCESS,
														title: "Success",
														actions: [sap.m.MessageBox.Action.OK],
														onClose: function (oAction) {
															if (oAction == "OK") {
																Array2.length = 0;
																Array2 = [];
																ocontroller.sendquo_clear();
															}
														}.bind(ocontroller)
													});

												},
												error: function (xhr, ajaxOptions, throwError) {
													sap.m.MessageToast.show(throwError);
													busyDialog.close();
													Array2.length = 0;
													Array2 = [];
													ocontroller.sendquo_clear();
												},
											});
										},
										error: function (xhr, ajaxOptions, throwError) {
											sap.m.MessageToast.show(throwError);
											busyDialog.close();
											Array2.length = 0;
											Array2 = [];
											ocontroller.sendquo_clear();
										},
									});
								}
							}
						});
				}
			} else if (servicetype === "Port Charges") {

				/*	//alert("port");*/
				var ciArray2 = [];
				/* //alert("else if")*/
				var ocontroller = this;

				var ci_table1 = ocontroller.getView().byId("idTableMyOrdersLine1");
				var rowItems = ci_table1.getSelectedItems();
				var ci_tabel1len = ci_table1.getSelectedItems().length;
				var addport = ocontroller.getView().byId("additemsport").getSelectedItems();
				var addportlen = addport.length;
				console.log(ci_tabel1len);
				ocontroller.ram_caldate();
				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {
					for (var i = 0; i < ci_tabel1len; i++) {
						//	//alert("for");

						var rows = rowItems[i];
						var Cells3 = rows.getCells();

						var servnam = Cells3[0].getText();

						var itmprice1 = Cells3[1].getValue();
						var curr = Cells3[1].getDescription();
						var portflag = Cells3[3].getText();
						var servicecodeport = Cells3[4].getText();
						var itemno = Cells3[5].getText();
						var servicetypeport = Cells3[6].getText();
						//	var tot = (itmprice1*quant).toString();

						var MyInquiriespay = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": servicetypeport,
							"QTY": "1",
							"TOTALPRICE": itmprice1,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": ci_currency,
							"ORDERSTATUS": ci_radval,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": itemno,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodeport,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": "",
							"CUSTMLAREFFILENAME": "",
							"AGENTMLAFREBASE64": "",
							"AGENTMLAREFFILENAME": "",
							"SAPQUOTATIONID": "",
							"SERVICEFLAG": portflag,
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": ""
						};
						ciArray2.push(MyInquiriespay);
						//console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalue = JSON.stringify(ciArray2);
						console.log("Myinqdatavalue:" + Myinqdatavalue);
					};
					if (addportlen === 0) {

					} else {
						for (var i = 0; i < addportlen; i++) {
							//	//alert("for");

							var rows = addport[i];
							var Cells3 = rows.getCells();

							var servnam = Cells3[0].getText();

							var itmprice1 = Cells3[1].getValue();
							var curr = Cells3[1].getDescription();
							var portflag = Cells3[3].getText();
							var servicecodeport = Cells3[4].getText();
							var itemno = Cells3[5].getText();
							var servicetypeport = Cells3[6].getText();
							//	var tot = (itmprice1*quant).toString();

							var MyInquiriespayport = {
								"REQUESTEDDATE": s_fulldt,
								"REQUESTEDTIME": s_fultime,
								"SERVICETYPE": "NAC_PORT",
								"QTY": "1",
								"TOTALPRICE": itmprice1,
								"ITEMPRICE": itmprice1,
								"DURATIONOFPASS": " ",
								"PRIORITY": priority_ci,
								"LOADINGAREA": " ",
								"CURRENCY": ci_currency,
								"ORDERSTATUS": ci_radval,
								"ORDERSTATUSCOUNT": "1",
								"RATE": "",
								"AGENTAPPROVAL": "X",
								"CUSTOMERID": ci_custid,
								"ITEMNO": itemno,
								"INQUIRYNUMBER": ci_inq1,
								"SERVICEDESCRIPTION": servnam,
								"SERVICENAME": servicecodeport,
								"CATALOG_FLAG": "",
								"REMARKS": "",
								"IMPA": "",
								"CUSTMLAREFBASE64": "",
								"CUSTMLAREFFILENAME": "",
								"AGENTMLAFREBASE64": "",
								"AGENTMLAREFFILENAME": "",
								"SAPQUOTATIONID": "",
								"SERVICEFLAG": portflag,
								"CUSTOMERCOMMENTS": "",
								"AGENTCOMMENTS": ci_comments,
								"AGENTROLE": ""
							};
							ciArrayport2.push(MyInquiriespayport);
							//console.log("postPayLoad:" + JSON.stringify(postPayLoad));
							var Myinqdatavalueport2 = JSON.stringify(ciArrayport2);

							console.log("Arrayval" + ciArrayport2);
							console.log("Myinqdatavalueport2:" + Myinqdatavalueport2);
						};
					}

					var MyInquiriesheader = [{
						REQUESTEDDATE: s_fulldt, //s_fulldt
						REQUESTEDTIME: s_fultime, //s_fultime
						SERVICETYPE: servicetype,
						TOTALPRICE: ci_price,
						FINALPRICE: ci_finalpri,
						VESSELNAME: ci_cives,
						IMO: ci_imo1,
						ETA: ci_eta,
						ETD: ci_etd,
						PORTNAME: ci_cport,
						CURRENCY: ci_currency,
						ORDERSTATUS: ci_radval,
						ORDERSTATUSCOUNT: "1",
						DISCOUNT: ci_discount,
						ATTACHMENT1: att1, //ci_att1.Base64[0]
						ATTACHMENT2: att2,
						ATTACHMENT3: "",
						ATTACHMENT4: " ",
						ATTACHMENT5: " ",
						QUOTATIONTYPE: "UpdatedQuotation",
						CUSTOMERID: ci_custid,
						INQUIRYNUMBER: ci_inq1,
						SAPQUOTATIONID: quotid,
						SAPORDERID: sonum,
						WBS: wbs1,
						CUSTOMERCOMMENTS: "",
						AGENTCOMMENTS: ci_comments,
						FILENAME1: file1,
						FILENAME2: file2,
						FILENAME3: file3,
						FILENAME4: file4,
						FILENAME5: file5,
						CURRENTSTATUS: "",
						AGENTROLE: "",
						COUNTRY: "",
						NAC_CREW: nac_crew,
						NAC_IMM: nac_imm,
						VSU_LOGISTICS: vsu_logis,
						VSU_MATERIALS: vsu_mat,
						VESSELTYPEDESC: ci_vesseldesc

					}];
					var Myinqdataheader = JSON.stringify(MyInquiriesheader);
					console.log("Myinqdataheader:" + Myinqdataheader);

					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
						"Are you sure to proceed with the quotation?", {
							//  icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Confirmation",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								if (oAction == "YES") {
									busyDialog.open();
									/////********my inquiries header posting******//////////////
									jQuery.ajax({
										url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiryHeaderUpdate.xsjs',
										data: Myinqdataheader,
										method: 'POST',
										success: function (data, response) {
											// 	//alert("success")
											console.log("headerdata:" + JSON.stringify(data));
											console.log("response:" + response);
											/////********my inquiries multiple posting******//////////////
											jQuery.ajax({
												url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
												data: Myinqdatavalue,
												method: 'POST',

												success: function (data, response) {
													// 	//alert("success")
													console.log("inqdata:" + JSON.stringify(data));
													console.log("response:" + response);
													jQuery.ajax({
														url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesMultiple.xsjs',
														data: Myinqdatavalueport2,
														method: 'POST',

														success: function (data, response) {
															// 	//alert("success")
															console.log("inqdata:" + JSON.stringify(data));
															console.log("response:" + response);
															ocontroller.postcargoval();
															busyDialog.close();
															sap.m.MessageBox.success("Inquiry has been " + ci_radval + " by Agent", {
																icon: sap.m.MessageBox.Icon.SUCCESS,
																title: "Success",
																actions: [sap.m.MessageBox.Action.OK],
																onClose: function (oAction) {
																	if (oAction == "OK") {
																		Array2.length = 0;
																		Array2 = [];
																		arr9 = [];
																		arr10 = [];
																		ocontroller.sendquo_clear();
																		ocontroller.getView().byId("additemsport").destroyItems();
																		ocontroller.getView().byId("additemsport").setVisible(false);
																	}
																}.bind(ocontroller)
															});

														},
														error: function (xhr, ajaxOptions, throwError) {
															sap.m.MessageToast.show(throwError);
															busyDialog.close();
															Array2.length = 0;
															Array2 = [];
															ocontroller.sendquo_clear();
														},
													});
													/*sap.m.MessageBox.success("Quotation has been approved by Agent", {
														icon: sap.m.MessageBox.Icon.SUCCESS,
														title: "Success",
														actions: [sap.m.MessageBox.Action.OK],
														onClose: function (oAction) {
															if (oAction == "OK") {
																Array2.length = 0;
																Array2 = [];
																ocontroller.sendquo_clear();
															}
														}.bind(ocontroller)
													});*/

												},
												error: function (xhr, ajaxOptions, throwError) {
													sap.m.MessageToast.show(throwError);
													busyDialog.close();
													Array2.length = 0;
													Array2 = [];
													ocontroller.sendquo_clear();
												},
											});
										},
										error: function (xhr, ajaxOptions, throwError) {
											sap.m.MessageToast.show(throwError);
											busyDialog.close();
											Array2.length = 0;
											Array2 = [];
											ocontroller.sendquo_clear();
										},
									});
								}
							}
						});
				}
			} else {
				var ocontroller = this;
				var ci_table1 = ocontroller.getView().byId("idOtherinq");
				var rowItems = ci_table1.getSelectedItems();

				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {

					var ciArray2 = [];
					////alert("else");
					var ocontroller = this;
					var ci_table1 = ocontroller.getView().byId("idOtherinq");
					var ci_porttable = ocontroller.getView().byId("idTableMyOrdersLine1");
					var portrows = ci_porttable.getSelectedItems();
					var rowItems = ci_table1.getSelectedItems();
					var ci_tabel1len = ci_table1.getSelectedItems().length;
					var porttablelen = ci_porttable.getSelectedItems().length;
					var addport = ocontroller.getView().byId("additemsport").getSelectedItems();
					var addportlen = addport.length;
					//				//alert(ci_tabel1len);
					ocontroller.ram_caldate();
					for (var i = 0; i < ci_tabel1len; i++) {
						////alert("for");
						var item3 = rowItems[i];
						var Cells3 = item3.getCells();
						// Get ID and Name
						var rowid = Cells3[0].getText();
						var servnam = Cells3[1].getText();
						var qty = Cells3[2].getValue();
						var itmprice1 = Cells3[3].getValue();
						var curr = Cells3[3].getDescription();
						var flag = Cells3[5].getText();
						var tot = (itmprice1 * qty).toString();
						var servicecodeother = Cells3[7].getText();

						var MyInquiriespay = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": servicetype,
							"QTY": qty,
							"TOTALPRICE": tot,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": curr,
							"ORDERSTATUS": ci_radval,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": rowid,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodeother,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": "",
							"CUSTMLAREFFILENAME": "",
							"AGENTMLAFREBASE64": "",
							"AGENTMLAREFFILENAME": "",
							"SERVICEFLAG": flag,
							"SAPQUOTATIONID": "",
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": ""
						};
						ciArray2.push(MyInquiriespay);
						// console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalue = JSON.stringify(ciArray2);
						console.log("Myinqdatavalue:" + Myinqdatavalue);
					};
					for (var i = 0; i < porttablelen; i++) {
						//	//alert("for");

						var rows = portrows[i];
						var Cells3 = rows.getCells();

						var servnam = Cells3[0].getText();

						var itmprice1 = Cells3[1].getValue();
						var curr = Cells3[1].getDescription();
						var portflag = Cells3[3].getText();
						//	var tot = (itmprice1*quant).toString();
						var servicecodeport = Cells3[4].getText();
						var itemno = Cells3[5].getText();
						var MyInquiriespayport = {
							"REQUESTEDDATE": s_fulldt,
							"REQUESTEDTIME": s_fultime,
							"SERVICETYPE": servicetype,
							"QTY": "1",
							"TOTALPRICE": itmprice1,
							"ITEMPRICE": itmprice1,
							"DURATIONOFPASS": " ",
							"PRIORITY": priority_ci,
							"LOADINGAREA": " ",
							"CURRENCY": ci_currency,
							"ORDERSTATUS": ci_radval,
							"ORDERSTATUSCOUNT": "1",
							"RATE": "",
							"AGENTAPPROVAL": "X",
							"CUSTOMERID": ci_custid,
							"ITEMNO": itemno,
							"INQUIRYNUMBER": ci_inq1,
							"SERVICEDESCRIPTION": servnam,
							"SERVICENAME": servicecodeport,
							"CATALOG_FLAG": "",
							"REMARKS": "",
							"IMPA": "",
							"CUSTMLAREFBASE64": "",
							"CUSTMLAREFFILENAME": "",
							"AGENTMLAFREBASE64": "",
							"AGENTMLAREFFILENAME": "",
							"SAPQUOTATIONID": "",
							"SERVICEFLAG": portflag,
							"CUSTOMERCOMMENTS": "",
							"AGENTCOMMENTS": ci_comments,
							"AGENTROLE": ""
						};
						ciArrayport.push(MyInquiriespayport);
						//console.log("postPayLoad:" + JSON.stringify(postPayLoad));
						var Myinqdatavalueport = JSON.stringify(ciArrayport);
						console.log("Myinqdatavalueport:" + Myinqdatavalueport);
					};
					if (addportlen === 0) {

					} else {
						for (var i = 0; i < addportlen; i++) {
							//	//alert("for");

							var rows = addport[i];
							var Cells3 = rows.getCells();

							var servnam = Cells3[0].getText();

							var itmprice1 = Cells3[1].getValue();
							var curr = Cells3[1].getDescription();
							var portflag = Cells3[3].getText();
							var servicecodeport = Cells3[4].getText();
							var itemno = Cells3[5].getText();
							var servicetypeport = Cells3[6].getText();
							//	var tot = (itmprice1*quant).toString();

							var MyInquiriespayport = {
								"REQUESTEDDATE": s_fulldt,
								"REQUESTEDTIME": s_fultime,
								"SERVICETYPE": "NAC_PORT",
								"QTY": "1",
								"TOTALPRICE": itmprice1,
								"ITEMPRICE": itmprice1,
								"DURATIONOFPASS": " ",
								"PRIORITY": priority_ci,
								"LOADINGAREA": " ",
								"CURRENCY": ci_currency,
								"ORDERSTATUS": ci_radval,
								"ORDERSTATUSCOUNT": "1",
								"RATE": "",
								"AGENTAPPROVAL": "X",
								"CUSTOMERID": ci_custid,
								"ITEMNO": itemno,
								"INQUIRYNUMBER": ci_inq1,
								"SERVICEDESCRIPTION": servnam,
								"SERVICENAME": servicecodeport,
								"CATALOG_FLAG": "",
								"REMARKS": "",
								"IMPA": "",
								"CUSTMLAREFBASE64": "",
								"CUSTMLAREFFILENAME": "",
								"AGENTMLAFREBASE64": "",
								"AGENTMLAREFFILENAME": "",
								"SAPQUOTATIONID": "",
								"SERVICEFLAG": portflag,
								"CUSTOMERCOMMENTS": "",
								"AGENTCOMMENTS": ci_comments,
								"AGENTROLE": ""
							};
							ciArrayport2.push(MyInquiriespayport);
							//console.log("postPayLoad:" + JSON.stringify(postPayLoad));
							var Myinqdatavalueport2 = JSON.stringify(ciArrayport2);

							console.log("Arrayval" + ciArrayport2);
							console.log("Myinqdatavalueport2:" + Myinqdatavalueport2);
						};
					}
					var MyInquiriesheader = [{
						REQUESTEDDATE: s_fulldt, //s_fulldt
						REQUESTEDTIME: s_fultime, //s_fultime
						SERVICETYPE: servicetype,
						TOTALPRICE: ci_price,
						FINALPRICE: ci_finalpri,
						VESSELNAME: ci_cives,
						IMO: ci_imo1,
						ETA: ci_eta,
						ETD: ci_etd,
						PORTNAME: ci_cport,
						CURRENCY: ci_currency,
						ORDERSTATUS: ci_radval,
						ORDERSTATUSCOUNT: "1",
						DISCOUNT: ci_discount,
						ATTACHMENT1: att1, //ci_att1.Base64[0]
						ATTACHMENT2: att2,
						ATTACHMENT3: att3,
						ATTACHMENT4: att4,
						ATTACHMENT5: att5,
						QUOTATIONTYPE: "UpdatedQuotation",
						CUSTOMERID: ci_custid,
						INQUIRYNUMBER: ci_inq1,
						SAPQUOTATIONID: "",
						CUSTOMERCOMMENTS: "",
						AGENTCOMMENTS: ci_comments,
						FILENAME1: file1,
						FILENAME2: file2,
						FILENAME3: file3,
						FILENAME4: file4,
						FILENAME5: file5,
						CURRENTSTATUS: "",
						AGENTROLE: "",
						COUNTRY: "",
						NAC_CREW: nac_crew,
						NAC_IMM: nac_imm,
						VSU_LOGISTICS: vsu_logis,
						VSU_MATERIALS: vsu_mat,
						VESSELTYPEDESC: ci_vesseldesc

					}];
					var Myinqdataheader = JSON.stringify(MyInquiriesheader);
					console.log("Myinqdataheader:" + Myinqdataheader);
					var msgtext = this.getView().byId("reset1").getText();
					var ocontroller = this;
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show(
						"Are you sure to " + msgtext + " ?", {
							//  icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Confirmation",
							actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
							onClose: function (oAction) {
								if (oAction == "YES") {
									//	//alert("yes");
									busyDialog.open();
									/////********my inquiries header posting******//////////////
									jQuery.ajax({
										url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiryHeaderUpdate.xsjs',
										//   type: 'POST' ,
										data: Myinqdataheader,
										method: 'POST',
										//   dataType: 'json',
										//contentType:'application/json',
										/*username: "S0019363960",
										password: "Ud@y2007",
										xhrFields: {
											withCredentials: true
										},*/
										success: function (data, response) {
											// 	//alert("success")
											console.log(data);
											console.log("headerdata:" + JSON.stringify(data));
											console.log("response:" + response);
											/////********m1y inquiries multiple posting******//////////////
											jQuery.ajax({
												url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
												//   type: 'POST' ,
												data: Myinqdatavalue,
												method: 'POST',
												//   dataType: 'json',
												//contentType:'application/json',
												/*	username: "S0019363960",
													password: "Ud@y2007",
													xhrFields: {
														withCredentials: true
													},*/
												success: function (data, response) {
													// 	//alert("success")
													console.log(data);
													console.log("inqdata:" + JSON.stringify(data));
													console.log("response:" + response);
													jQuery.ajax({
														url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesUpdate.xsjs',
														//   type: 'POST' ,
														data: Myinqdatavalueport,
														method: 'POST',
														//   dataType: 'json',
														//contentType:'application/json',
														/*	username: "S0019363960",
															password: "Ud@y2007",
															xhrFields: {
																withCredentials: true
															},*/
														success: function (data, response) {
															// 	//alert("success")
															console.log(data);
															console.log("inqdata:" + JSON.stringify(data));
															console.log("response:" + response);
															jQuery.ajax({

																url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyInquiriesMultiple.xsjs',
																data: Myinqdatavalueport2,
																method: 'POST',

																success: function (data, response) {
																	// 	//alert("success")
																	console.log("inqdata:" + JSON.stringify(data));
																	console.log("response:" + response);
																	busyDialog.close();
																	sap.m.MessageBox.success("Inquiry has been " + ci_radval + " by Agent", {
																		icon: sap.m.MessageBox.Icon.SUCCESS,
																		title: "Success",
																		actions: [sap.m.MessageBox.Action.OK],
																		onClose: function (oAction) {
																			if (oAction == "OK") {
																				Array2.length = 0;
																				Array2 = [];
																				arr9 = [];
																				arr10 = [];
																				ocontroller.sendquo_clear();
																				ocontroller.getView().byId("additemsport").destroyItems();
																				ocontroller.getView().byId("additemsport").setVisible(false);
																			}
																		}.bind(ocontroller)
																	});

																},
																error: function (xhr, ajaxOptions, throwError) {
																	sap.m.MessageToast.show(throwError);
																	busyDialog.close();
																	Array2.length = 0;
																	Array2 = [];
																	ocontroller.sendquo_clear();
																},
															});

															//	this.wbsinq();

															/*	sap.m.MessageBox.success("Quotation has been approved by Agent", {
																	icon: sap.m.MessageBox.Icon.SUCCESS,
																	title: "Success",
																	actions: [sap.m.MessageBox.Action.OK],
																	onClose: function (oAction) {
																		if (oAction == "OK") {
																			Array2.length = 0;
																			Array2 = [];
																			ocontroller.sendquo_clear();
																		}
																	}.bind(ocontroller)
																});*/

														},
														error: function (xhr, ajaxOptions, throwError) {
															sap.m.MessageToast.show(throwError);
															busyDialog.close();
															Array2.length = 0;
															Array2 = [];
															ocontroller.sendquo_clear();
														},
													});

												},
												error: function (xhr, ajaxOptions, throwError) {
													sap.m.MessageToast.show(throwError);
													busyDialog.close();
													Array2.length = 0;
													Array2 = [];
													ocontroller.sendquo_clear();
												},
											});
										},
										error: function (xhr, ajaxOptions, throwError) {
											sap.m.MessageToast.show(throwError);
											busyDialog.close();
											Array2.length = 0;
											Array2 = [];
											ocontroller.sendquo_clear();
										},
									});
								}
							}
						});
				}

			}
			busyDialog.close();
			//}
		},
		postcargoval:function()
		{
				var ocontroller = this;
				var oModeladdvessel = new sap.ui.model.odata.ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);
			var oFilters = [new sap.ui.model.Filter("DANUMBER", sap.ui.model.FilterOperator.EQ, wbs1)];
				oModeladdvessel.read("/StatementofFacts", {
					filters:oFilters,
				async:false,
				success: function (oData, oResp) {
					console.log(oData.results.length);
				if(oData.results.length == 0)
				{
					ocontroller.postcargo()
					
				}
				else
				{
					
				}
				}
			});
			
		},
		
		postcargo:function()
		{
			this.sofpost();	
			var Arraysof2 = [];
			var Arraysof3 = [];
			var cargoonesend = [];
			var ci_imo1 = this.getView().byId("id_imo").getText();
		var ci_cives = this.getView().byId("id_vessel_name").getText();
		ci_cport = this.getView().byId("id_port").getText();	
			var omodel1 = this.getView().getModel();
			var ocontroller = this;
			omodel1.read('/CargoEvents', {
				async:false,
				success: function (oData, oResp) {
					console.log(oData.results.length);
					for(var i = 0;i<oData.results.length;i++)
					{
						Arraysof1.push(oData.results[i].EVENTNAME);
						console.log(Arraysof1);
					}
					ocontroller.postingcargo(Arraysof1);
				}
			});
		},
			postingcargo:function(Arraysof1)
			{
			
				
				var ocontroller = this;
					var ci_imo1 = ocontroller.getView().byId("id_imo").getText();
var ci_cives = ocontroller.getView().byId("id_vessel_name").getText();
		ci_cport = ocontroller.getView().byId("id_port").getText();
     var totalRows = Arraysof1.length;
     console.log(totalRows);
			// //alert(totalRows);
				var sPath = "/SOFCargo1";
									var sPath1 = "/SOFCargo2";
									var sPath2 = "/SOFCargo3";
									code1 = 0;
									code2 = 0;
									code3 = 0;
				var oModeladdvessel = new sap.ui.model.odata.ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);
			//	var oModeladdvessel = ocontroller.getView().getModel();					
						
							for (var j = 0; j < 9; j++) {
							//	console.log(Arraysof1[j]);
								
							var cargosend = {
									"CUSTOMERID": ci_custid,
									"VESSELNAME": ci_cives,
									"IMO": ci_imo1,
									"DANUMBER":wbs1,
									"PORTNAME": ci_cport,
									"EVENTS": Arraysof1[j],
									"DATE": "",
									"TIME": "",
									"CARGOTYPE": ""						
					
								}
								
							//	console.log("sof1 "+ JSON.stringify(cargosend));
									
								//cargosend = JSON.stringify(cargosend);
								oModeladdvessel.create(sPath, cargosend, {
									async:false,
									success: function (oData, oResponse) {
									//	console.log("sofcargo "+JSON.stringify(oData));
									//	gflag = false;
									
									
									//	console.log(code1);
										//debugger;
										// //alert(code1)
									
										//	//alert("posted")
										//	ocontroller.sofpost();	
/*											sap.m.MessageBox.confirm("Cargo added successfuly in CustomerId " + CUSTOMERID + "", {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],
												onClose: function (oAction) {

													if (oAction == "OK") {

													}
												}.bind(ocontroller)
											});*/

										

									},
									error: function (oResponse) {
										sap.m.MessageToast.show("cargo1 Posting failed");
									}

								});
							}
							
							for (var l = 0; l < 9; l++) {
								
									var cargosend1 = {
									"CUSTOMERID": ci_custid,
									"VESSELNAME": ci_cives,
									"IMO": ci_imo1,
									"DANUMBER":wbs1,
									"PORTNAME": ci_cport,
									"EVENTS": Arraysof1[l],
									"DATE": "",
									"TIME": "",
									"CARGOTYPE": ""						
					
								}
							//	console.log("sof2 "+ JSON.stringify(cargosend1));
						

								oModeladdvessel.create(sPath1, cargosend1, {

									success: function (oData, oResponse) {
										console.log("sofcargo1 "+oData);
									
								//		code2 = code2 + 1;
										// //alert(code1)
										/*if (code2 === 9) {
										//	ocontroller.sofpost();	
											sap.m.MessageBox.confirm("Cargo added successfuly in CustomerId " + CUSTOMERID + "", {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],
												onClose: function (oAction) {

													if (oAction == "OK") {

													}
												}.bind(ocontroller)
											});

										}
*/
									},
									error: function (oResponse) {
										sap.m.MessageToast.show("cargo1 Posting failed");
									}

								});
							}
					//		console.log(cargosend1)
								for (var k = 0; k < 9; k++) {
								
									var cargosend2 = {
									"CUSTOMERID": ci_custid,
									"VESSELNAME": ci_cives,
									"IMO": ci_imo1,
									"DANUMBER":wbs1,
									"PORTNAME": ci_cport,
									"EVENTS": Arraysof1[k],
									"DATE": "",
									"TIME": "",
									"CARGOTYPE": ""						
					
								}
							//	console.log("sof3 "+ JSON.stringify(cargosend2));
							
							//	console.log(cargosend2);
								
								//	ocontroller.sofpost();

							

								oModeladdvessel.create(sPath2, cargosend2, {

									success: function (oData, oResponse) {
										console.log("sofcargo2 "+oData);
									
										code3 = code3 + 1;
										// //alert(code1)
										if (code3 === 9) {
											//ocontroller.sofpost();	
										/*	sap.m.MessageBox.confirm("Cargo added successfuly in CustomerId " + ci_custid + "", {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],
												onClose: function (oAction) {

													if (oAction == "OK") {
														

													}
												}.bind(ocontroller)
											});
*/
										}

									},
									error: function (oResponse) {
										sap.m.MessageToast.show("cargo1 Posting failed");
									}

								});
							}

			
			

						
		},
		sofpost:function()
		{
		//	//alert("sof")
				var ci_imo1 = this.getView().byId("id_imo").getText();
		var ci_cives = this.getView().byId("id_vessel_name").getText();
		ci_cport = this.getView().byId("id_port").getText();
		var ocontroller= this;
			var postPayLoad = {

								"CUSTOMERID": ci_custid,
								"VESSELNAME": ci_cives,
								"DANUMBER": wbs1,
								"PORTNAME": ci_cport,
								"ETA": ci_eta,
								"IMO": ci_imo1,
								"ATB": "",
								"AGENTREMARKS": ""

							};
							console.log(postPayLoad)

							var sPath = "/StatementofFacts";

						var oModeladdvessel = new sap.ui.model.odata.ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);

							oModeladdvessel.create(sPath, postPayLoad, {

								success: function (oData, oResponse) {
 
									console.log("oResponse :", oResponse);
								

								},

								error: function (oResponse) {
									sap.m.MessageToast.show("sof Posting failed");

								}
							});	
		},
		sendquo_clear: function () {
			ci_radval = "";
			this.getView().byId("ci_discount").setValue();
			this.getView().byId("ci_fprice").setValue();
			this.getView().byId("ci_fileUploader1").setValue();
			this.getView().byId("ci_Commnt").setValue();
			this.onAfterRendering();
			this.getView().byId("ci_rbgrp").setSelectedIndex(0);
			ci_obj1.length = 0;
			ci_att1.length = 0;
		},
		/*************** Customer inquiries End********************/

		/*************** Customer Orders Start ********************/

		ComboboxChange: function (event) {
			var aFilters = [];
			var officeCode = event.getParameter("selectedItem").getText();
			var filter = new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.Contains, officeCode);
			aFilters.push(filter);

			var list = this.getView().byId("idTable1");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},

		ComboboxChange1: function (event) {
			var aFilters = [];
			var officeCode1 = event.getParameter("selectedItem").getText();
			var filter = new sap.ui.model.Filter("ORDERTYPE", sap.ui.model.FilterOperator.Contains, officeCode1);
			aFilters.push(filter);

			var list = this.getView().byId("idTable1");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},

		vstatus: function (a) {

			if (a === 'New' || a === '' || a === null) {

				return "Error";

			} else if (a === 'InProcess') {

				return "Warning";
			} else if (a === 'Approved') {

				return "Success";
			}
			else
			{
					return "Error";
			}

		},

		vstatus1: function (a) {
			if (a === 'New' || a === '' || a === null) {

				return "Error";

			} else if (a === 'Completed') {
				return "Success";

			} else if (a === 'InProcess') {
				return "warning"
			}
		},

		onSearch1: function (oEvent) {

		/*	var SamTbl = oEvent.getParameter("newValue");
			var filters = new Array();
			var oFilter = new sap.ui.model.Filter([
					new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.Contains, SamTbl)
				],
				false);
			filters = (oFilter);
			var listItem = this.getView().byId("idTable1");
			var binding = listItem.getBinding("items");
			binding.filter(filters);*/
			
				var SamTbl = oEvent.getParameter("newValue");
			var filters = new Array();
			
			var SamTbl = SamTbl.toUpperCase();
			var oFilter = new sap.ui.model.Filter([
				
				new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.Contains, SamTbl),
				new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.Contains, SamTbl),
				new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.Contains, SamTbl)
			]);
			filters = (oFilter);
			
			var listItem = this.byId("idTable1");
			var binding = listItem.getBinding("items");
			binding.filter(filters);

		},

		orderrefresh: function () {

			/*	var oTable11 = this.byId("idTable1");
					var oTemp11 = this.byId('idCLMyOrderss');
	
					var oSorter = [new sap.ui.model.Sorter("ORDERDATE", {
							descending: 'true'
						}),
						new sap.ui.model.Sorter("ORDERTIME", {
							descending: 'false'
						})
					];
					oTable11.bindAggregation("items", {
						path: "/MyOrders",
						template: oTemp11,
					
						sorter: oSorter
					});*/
			var oTable11 = this.byId("idTable1");
			var oTemp11 = this.byId('idCLMyOrderss');
			var oSorter = [new sap.ui.model.Sorter("ORDERDATE", {
					descending: 'true'
				}),
				new sap.ui.model.Sorter("ORDERTIME", {
					descending: 'false'
				})
			];
			oTable11.bindAggregation("items", {
				path: "/MyOrders",
				template: oTemp11,
				sorter: oSorter
			});
		},

		CofilterCategories: function () {
			var dialog = sap.ui.xmlfragment("myorders", "AgentPortal_Testing.AgentPortal_Testing.view.CoFilter", this);
			services_dialogco = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Filter',
				type: 'Message',
				content: [dialog],
				beginButton: new Button({
					text: 'Ok',
					press: function () {
						this.onSearcho();
						services_dialogco.close();

					}.bind(this)
				}),
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						services_dialogco.close();
					}
				}),
				afterClose: function () {
					services_dialogco.destroy();
				}
			});
			services_dialogco.open();
		},
		onSearcho: function () {

			var first = sap.ui.core.Fragment.byId("myorders", "CofInq").getValue();
			var second = sap.ui.core.Fragment.byId("myorders", "CofInqDate").getValue();
			//	var third = sap.ui.core.Fragment.byId("myorders", "fInqPriority").getValue();

			console.log(first + "-" + second + "-")

			var oTable = this.byId("idTable1");
			var oTemp = this.byId('idCLMyOrderss');

			if (first == '' && second == '') {

				oTable.bindAggregation("items", {
					path: "/MyOrders",
					template: oTemp
				});
			} else if (first == '') {
				var f2 = new sap.ui.model.Filter("ORDERDATE", sap.ui.model.FilterOperator.EQ, second);
				var ofilters = new sap.ui.model.Filter({
					filters: [f2]
				});

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else if (second == '') {

				var f1 = new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, first);
				var ofilters = new sap.ui.model.Filter({
					filters: [f1]
				});

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			} else {
				var f1 = new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, first);
				var f2 = new sap.ui.model.Filter("ORDERDATE", sap.ui.model.FilterOperator.EQ, second);
				var ofilters = new sap.ui.model.Filter({
					filters: [f1, f2],
					and: true
				});

				var binding = oTable.getBinding("items");
				binding.filter(ofilters);
			}

		},

		CosortCategories: function (oEvent) {
			var dialog = sap.ui.xmlfragment("Cosort", "AgentPortal_Testing.AgentPortal_Testing.view.Cosort", this);
			dialog.setModel(modelCosort);
			services_dialogco = new Dialog({
				icon: "sap-icon://MARK",
				title: 'Select',
				type: 'Message',
				content: [dialog],
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						services_dialogco.close();
					}
				}),
				afterClose: function () {
					services_dialogco.destroy();
				}
			});
			services_dialogco.open();
		},
		handleSOSelectco: function (oEvent) {

			var requestCode = oEvent.getSource().getAggregation("attributes")[0].getBindingContext().getProperty("HandlingUnit");

			var oTable = this.getView().byId("idTable1");
			var oBinding = oTable.getBinding("items");
			var aSorter = oBinding.aSorters[0];
			var oDescending = aSorter.bDescending;
			var oSorter = new Sorter(requestCode.toUpperCase(), !oDescending);
			oBinding.sort(oSorter);

			services_dialogco.destroy();
		},

		/*-- Item List table start---*/
		onTableListPress: function (oEvent) {
			this.getView().byId("itb1123").setSelectedKey('key1');
			this.byId("cancelorder").setVisible(false);
			this.byId("approvere").setVisible(false);
			this.byId("approveselectre").setVisible(true);
			this.byId("cancelapprove").setVisible(false);
			this.byId("confirmorder").setVisible(false);
			var oController = this; //consume odata from services
			var CustomerID = oEvent.getParameter("listItem").getBindingContext().getProperty("CUSTOMERID"); //Myorder body
			var Cotime = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERTIME"); //Myorder body
			var Corderid = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERID"); //Myorder body
			 TotalAmount = oEvent.getParameter("listItem").getBindingContext().getProperty("TOTALPRICE"); //Myorder body
			var Cocusname = oEvent.getParameter("listItem").getBindingContext().getProperty("CUSTOMERNAME");
			console.log("coname :", coname) //Myorder body
			var Cocurncy = oEvent.getParameter("listItem").getBindingContext().getProperty("CURRENCY"); //Myorder body
			var OrderStatus = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERSTATUS"); //Myorder body
			var Coordcount = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERSTATUSCOUNT"); //Myorder body
			var ordate = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERDATE"); //Myorder body
			var InquiryNumber = oEvent.getParameter("listItem").getBindingContext().getProperty("INQUIRYNUMBER"); //Myorder body
			var imo = oEvent.getParameter("listItem").getBindingContext().getProperty("IMO"); //Myorder body
			var eta = oEvent.getParameter("listItem").getBindingContext().getProperty("ETA"); //Myorder body
			var etd = oEvent.getParameter("listItem").getBindingContext().getProperty("ETD"); //Myorder body
			var Cotype = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERTYPE");
			dis = oEvent.getParameter("listItem").getBindingContext().getProperty("DISCOUNT");
			custOrderStatus = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERSTATUS"); //Myorder body
agentcomments = oEvent.getParameter("listItem").getBindingContext().getProperty("AGENTCOMMENTS");
			if (Cotype === "") {
				this.byId("idobjheader11").setVisible(false);
			} else {
				this.byId("idobjheader11").setVisible(true);
				this.byId("idobjheader11").setText(Cotype);
			}
			//	F_ORDERID = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERID");//Myorder body

			var Cservicesname = oEvent.getParameter("listItem").getBindingContext().getProperty("SERVICENAME");

			//consume odata from services are stored in variable
			custid = oEvent.getParameter("listItem").getBindingContext().getProperty("CUSTOMERID");
			otime = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERTIME");
			orderid = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERID");
			tamount = oEvent.getParameter("listItem").getBindingContext().getProperty("TOTALPRICE");
			coname = oEvent.getParameter("listItem").getBindingContext().getProperty("CUSTOMERNAME");
			console.log("coname :", coname)
			cocurncy = oEvent.getParameter("listItem").getBindingContext().getProperty("CURRENCY");
			ostatus = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERSTATUS");
			finprice = oEvent.getParameter("listItem").getBindingContext().getProperty("FINALPRICE");

			this.byId("ordertime").setText(otime);
			this.byId("customername").setText(coname);
			this.byId("currency").setText(cocurncy);
			this.byId("orderdate").setText(ordate);
			this.byId("etam").setText(eta);
			this.byId("etdm").setText(etd);
			this.byId("discount").setText(dis);
			this.byId("cusidmm").setText(custid);
			this.byId("idobjheader3").setText(InquiryNumber);
			this.byId("idobjheader10").setText(orderid);

			if (ostatus == "Approved" || ostatus == "Rejected") {
				this.byId("assignto").setVisible(false);
				this.byId("viewseamanorder").setVisible(true);
				this.byId("approveselectre").setVisible(false);
				this.byId("confirmorder").setVisible(false);
				this.byId("co_radiobuttonselt").setEditable(false);
				this.byId("Com12").setEditable(false);

			} else {
				this.byId("assignto").setVisible(false);
				this.byId("viewseamanorder").setVisible(true);
				this.byId("approveselectre").setVisible(true);
			}
			coordcount = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERSTATUSCOUNT");
			codate = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERDATE");
			inqno = oEvent.getParameter("listItem").getBindingContext().getProperty("INQUIRYNUMBER");
			coimo = oEvent.getParameter("listItem").getBindingContext().getProperty("IMO");
			coeta = oEvent.getParameter("listItem").getBindingContext().getProperty("ETA");
			coedt = oEvent.getParameter("listItem").getBindingContext().getProperty("ETD");
			otype = oEvent.getParameter("listItem").getBindingContext().getProperty("ORDERTYPE"); ////// myorder body 

			oservicename = oEvent.getParameter("listItem").getBindingContext().getProperty("SERVICENAME");

			// stored in variable are assign in id
			this.getView().byId("idobjheader11").setText(otype);
			this.getView().byId("idobjheader1").setText(custid);
			this.getView().byId("idobjheader3").setText(inqno);
			// this.getView().byId("idobjheader8").setText(ostatus);

			this.getView().byId("coActualprice").setValue(tamount);
			this.byId("idobjheader22").setText(tamount + " " + eCurrency);
			this.getView().byId("coPrice").setValue(tamount);
			this.getView().byId("idobjheader10").setText(orderid);
			//	 this.getView().byId("confirmorder").setText(otype);
			this.getView().byId("idobjheader22").setText(TotalAmount + " " + cocurncy);
			this.getView().byId("idobjheader9").setText(finprice + " " + cocurncy);
			/* 
			 */

			this.getView().byId("idobjheader2").setText(coimo);
			/*				  this.getView().byId("idobjheader6").setText(coedt);
							  this.getView().byId("idobjheader7").setText(coedt);*/

			//this.getView().byId("idoa").setText(tamount); 

			var oCont = this;
			var oFilters = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid)];
			oModel.read('/MyOrders', {
				filters: oFilters,
				success: function (oData, oResp) {
					co_eta = oData.results[0].ETA;
					console.log(co_eta);
					var mydate = new Date(oData.results[0].ETA);
					var formathours = ("0" + mydate.getHours()).slice(-2);
					var formatmin = ("0" + mydate.getMinutes()).slice(-2);
					var formatsec = ("0" + mydate.getSeconds()).slice(-2);

					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getMonth()];
					var coeta = month + ' ' + mydate.getDate() + ', ' + mydate.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
						formatsec;
					console.log(eta);
					var dd = mydate.getDate();
					var mm = mydate.getMonth() + 1; //January is 0!
					var yyyy = mydate.getFullYear();
					if (dd < 10) {
						dd = '0' + dd;
					}
					if (mm < 10) {
						mm = '0' + mm;
					}
					etacheck = yyyy + '-' + mm + '-' + dd;
					//	//alert(etacheck);

					co_etd = oData.results[0].ETD;
					var mydated = new Date(oData.results[0].ETD);
					var formathours = ("0" + mydated.getHours()).slice(-2);
					var formatmin = ("0" + mydated.getMinutes()).slice(-2);
					var formatsec = ("0" + mydated.getSeconds()).slice(-2);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydated.getMonth()];
					var coetd = month + ' ' + mydated.getDate() + ', ' + mydated.getFullYear() + ' - ' + formathours + ':' + formatmin + ':' +
						formatsec;
					var dd = mydated.getDate();
					var mm = mydated.getMonth() + 1; //January is 0!
					var yyyy = mydated.getFullYear();
					if (dd < 10) {
						dd = '0' + dd;
					}
					if (mm < 10) {
						mm = '0' + mm;
					}
					etdcheck = yyyy + '-' + mm + '-' + dd;
					//	//alert(etdcheck);

					var mydater = new Date(oData.results[0].REQUESTEDDATE);
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydater.getMonth()];
					var rqst_d = month + ' ' + mydater.getDate() + ', ' + mydater.getFullYear();

					/*** Getting SAP Order id ***/
					//		 //alert(etacheck + " " + etdcheck)
					//var co_imo1 = this.getView().byId("idobjheader2").getText();
					//	//alert(coimo);
					var oFilter = [new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, coimo),
						new sap.ui.model.Filter("ETA", sap.ui.model.FilterOperator.Contains, etacheck),
						new sap.ui.model.Filter("ETD", sap.ui.model.FilterOperator.Contains, etdcheck)
					];
					var ocont = this;
					oModel.read('/MyInquiryHeader', {
						filters: oFilter,
						success: function (oData, oResp) {
							console.log(oData)

							//					//alert(oData.results[0].SAPQUOTATIONID);
							//					//alert(oData.results[0].SAPORDERID);

							for (var i = 0; i < oData.results.length; i++) {
								//	//alert(i);
								if (oData.results[i].SAPQUOTATIONID === "") {
									var empty = "empty";
								} else {
									var notemp = "notempty";
									quotid = oData.results[i].SAPQUOTATIONID;
									sonum = oData.results[i].SAPORDERID;
									wbs1 = oData.results[i].WBS;
								}

							}
							if (empty === "empty" && notemp === "notempty") {
								//						//alert("has value");

								//						//alert("values" + '' + quotid + '' + sonum + '' + wbs1);
								//		ocont.saleset();

							} else {
								//						//alert("novalue");
								//		ocont.wbspost();

							}

						}

					});

					if (coeta === 'undefined NaN, NaN - aN:aN:aN') {
						oCont.getView().byId("idobjheader6").setText(" ");

						//  oCont.getView().byId("idobjheader7").setText(" ");
					} else {
						oCont.getView().byId("idobjheader6").setText(coeta);
						//	oCont.getView().byId("idobjheader7").setText(coetd);
					}
					if (coetd === 'undefined NaN, NaN - aN:aN:aN') {
						//oCont.getView().byId("idobjheader6").setText(" ");
						oCont.getView().byId("idobjheader7").setText(" ");

					} else {
						//	oCont.getView().byId("idobjheader6").setText(coeta);
						oCont.getView().byId("idobjheader7").setText(coetd);
					}

					oCont.getView().byId("idobjheader1").setText(oData.results[0].CUSTOMERID);
					oCont.getView().byId("idobjheader3").setText(oData.results[0].INQUIRYNUMBER);
					// oCont.getView().byId("idobjheader9").setText(oData.results[0].FINALPRICE);
					// oCont.getView().byId("coActualprice").setValue(oData.results[0].TOTALPRICE);
					// oCont.getView().byId("coPrice").setValue(oData.results[0].TOTALPRICE);
					oCont.getView().byId("idobjheader10").setText(oData.results[0].ORDERID);

					oCont.getView().byId("idobjheader2").setText(oData.results[0].IMO);
					/* oCont.getView().byId("idobjheader6").setText(oData.results[0].ETD);
					  oCont.getView().byId("idobjheader7").setText(oData.results[0].ETD);*/

					/* oCont.getView().byId("idobjheader6").setText(coeta);*/
					/* oCont.getView().byId("idobjheader7").setText(coetd);*/
				},
			});

			/* if(ostatus==='InProcess')
            {
  	            this.getView().byId("idobjheader8").setState("Error");
  	        }
  	       else if(ostatus==='Completed')
  	        {
  	          this.getView().byId("idobjheader8").setState("Success");
  	        }
  	       else if(ostatus==='New')
  	        {
  	          this.getView().byId("idobjheader8").setState("Warning");
  	        }*/
			/*-----Inquiry Items Table------*/
			oModel = new sap.ui.model.odata.ODataModel('/Customer_Portal/NAC/AgentPortal.xsodata', true);
			var priorityh = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid)];

			var oController = this;

			oModel.read("/OrderDetails", {
				filters: priorityh,
				success: function (oData, oResponse) {
					var Tcount = (oData.results).length;
					console.log(oData);
					oController.getView().byId("idICTF1").setText("Order Items(" + Tcount + ")");
					if (Tcount != "0") {

						/*	console.log("IF", t_CURRENCY);*/
						t_ORDERID = oData.results[0].ORDERID;
						t_ITEMNO = oData.results[0].ITEMNO;
						t_INQUIRYNUMBER = oData.results[0].INQUIRYNUMBER;
						t_SERVICETYPE = oData.results[0].SERVICETYPE;
						t_VESSELNAME = oData.results[0].VESSELNAME;
						t_QTY = oData.results[0].QTY;
						t_INQUIRYDATE = oData.results[0].INQUIRYDATE;
						t_INQUIRYTIME = oData.results[0].INQUIRYTIME;
						t_PORTNAME = oData.results[0].PORTNAME;
						t_DANUMBER = oData.results[0].DANUMBER;
						t_PASSPORTNUMBER = oData.results[0].PASSPORTNUMBER;
						t_VENDOR = oData.results[0].VENDOR;
						t_CURRENCY = oData.results[0].CURRENCY;
						t_SEAMANBOOKNUMBER = oData.results[0].SEAMANBOOKNUMBER;
						t_ITEMPRICE = oData.results[0].ITEMPRICE;
						t_SERVICENAME = oData.results[0].SERVICENAME;
						t_CHANGEORDER = oData.results[0].CHANGEORDER;
						t_CUSTOMERID = oData.results[0].CUSTOMERID;
						t_FIRSTNAME = oData.results[0].FIRSTNAME;
						t_LASTNAME = oData.results[0].LASTNAME;
						t_NATIONALITY = oData.results[0].NATIONALITY;
						t_DATEOFISSUE = oData.results[0].DATEOFISSUE;
						t_PLACEOFISSUE = oData.results[0].PLACEOFISSUE;
						t_PASSPORTEXPIRY = oData.results[0].PASSPORTEXPIRY;
						t_GENDER = oData.results[0].GENDER;
						t_HOTELREQUIRED = oData.results[0].HOTELREQUIRED;
						t_JOINEROFFSIGNER = oData.results[0].JOINEROFFSIGNER;
						t_MATERIALDESC = oData.results[0].MATERIALDESC;
						t_ATTACHMENT = oData.results[0].ATTACHMENT;
						t_PARAMETER1 = oData.results[0].PARAMETER1;
						t_VALUE1 = oData.results[0].VALUE1;
						t_PARAMETER2 = oData.results[0].PARAMETER2;
						t_VALUE2 = oData.results[0].VALUE2;
						t_PARAMETER3 = oData.results[0].PARAMETER3;
						t_VALUE3 = oData.results[0].VALUE3;
						t_PARAMETER4 = oData.results[0].PARAMETER4;
						t_VALUE4 = oData.results[0].VALUE4;
						t_PARAMETER5 = oData.results[0].PARAMETER5;
						t_VALUE5 = oData.results[0].VALUE5;
						t_REORDER = oData.results[0].REORDER;
						t_FILENAME = oData.results[0].FILENAME;
						t_BASE64 = oData.results[0].BASE64;
						t_TOTALPRICE = oData.results[0].TOTALPRICE;
						t_ORDERSTATUS = oData.results[0].ORDERSTATUS; // order details fields

						oController.getView().byId("idobjheader5").setText(t_VESSELNAME);
						//	oController.getView().byId("idoh11").setText(t_INQUIRYNUMBER);
						//	oController.getView().byId("idoh13").setText(totaprice + " " + t_CURRENCY);
						oController.getView().byId("idobjheader4").setText(t_PORTNAME);
					}
				},
				error: function (Response) {
					// //alert("error")

				}
			});
		/*	var t1 = this.getView().byId("idInquiry");
			var titems1 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{ITEMNO}"
					}),
					new sap.m.Label({

						text: "{SERVICEDESCRIPTION}"
					}),
					new sap.m.Input({
						value: "{QTY}",
						type: "Number",
						liveChange: [oController.qtychange, oController],
						enabled: "{ path: 'SERVICETYPE', formatter: 'myFormatter.formatCombobox' }",

					}),
					new sap.m.ObjectNumber({
						number: "{ITEMPRICE}",
						unit: "{CURRENCY}"
					}),
					new sap.m.ObjectNumber({
						number: "{=${QTY}*${ITEMPRICE}}",
						unit: "{CURRENCY}"

					}),
					new sap.m.Text({
						text: "{INQUIRYNUMBER}"

					}),
					new sap.m.Text({
						text: "{RESPONSIBLEPERSON}"

					}),
					new sap.m.Text({
						text: "{SERVICENAME}"

					}),
					new sap.m.Text({
						text: "{ORDERID}"
					}),
					new sap.m.Text({
						text: "{SERVICETYPE}"
					}),
					new sap.m.Text({
						text: "{VESSELNAME}"
					}),
					new sap.m.Text({
						text: "{INQUIRYDATE}"
					}),
					new sap.m.Text({
						text: "{INQUIRYTIME}"
					}),
					new sap.m.Text({
						text: "{PORTNAME}"
					}),
					new sap.m.Text({
						text: "{CURRENCY}"
					}),
					new sap.m.Text({
						text: "{CUSTOMERID}"
					}),
					new sap.m.Text({
						text: "{FIRSTNAME}"
					}),
					new sap.m.Text({
						text: "{INVOICEID}"
					})

				]
			});
			var oFilters = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid)];
			t1.bindItems({
				path: '/OrderDetails',
				template: titems1,
				filters: oFilters
			});*/
					var t1 = this.getView().byId("idInquiry");
				if(custOrderStatus === "Approved")
				{
			var oFilters = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid),
			new sap.ui.model.Filter("ORDERSTATUS", sap.ui.model.FilterOperator.EQ, "Approved")];
				}
				else
				{
				//	//alert("else")
				var oFilters = [new sap.ui.model.Filter("ORDERID", sap.ui.model.FilterOperator.EQ, orderid)];	
				}
			var titems1 = new sap.m.ColumnListItem({
				cells: [new sap.m.Label({
						text: "{ITEMNO}"
					}),
					new sap.m.Label({

						text: "{SERVICEDESCRIPTION}"
					}),
					new sap.m.Input({
						value: "{QTY}",
						type: "Number",
						liveChange: [oController.qtychange, oController],
						enabled: "{ path: 'SERVICETYPE', formatter: 'myFormatter.formatCombobox' }",

					}),
					new sap.m.ObjectNumber({
						number: "{ITEMPRICE}",
						unit: "{CURRENCY}"
					}),
					new sap.m.ObjectNumber({
						number: "{=${QTY}*${ITEMPRICE}}",
						unit: "{CURRENCY}"

					}),
					new sap.m.Text({
						text: "{INQUIRYNUMBER}"

					}),
					new sap.m.Text({
						text: "{RESPONSIBLEPERSON}"

					}),
					new sap.m.Text({
						text: "{SERVICENAME}"

					}),
					new sap.m.Text({
						text: "{ORDERID}"
					}),
					new sap.m.Text({
						text: "{SERVICETYPE}"
					}),
					new sap.m.Text({
						text: "{VESSELNAME}"
					}),
					new sap.m.Text({
						text: "{INQUIRYDATE}"
					}),
					new sap.m.Text({
						text: "{INQUIRYTIME}"
					}),
					new sap.m.Text({
						text: "{PORTNAME}"
					}),
					new sap.m.Text({
						text: "{CURRENCY}"
					}),
					new sap.m.Text({
						text: "{CUSTOMERID}"
					}),
					new sap.m.Text({
						text: "{FIRSTNAME}"
					}),
					new sap.m.Text({
						text: "{INVOICEID}"
					})

				]
			});
			
			t1.bindItems({
				path: '/OrderDetails',
				template: titems1,
				filters: oFilters
			});

		},

		co_radiobuttonselect: function (oEvent) {
			co_oSelectedIndex = oEvent.getParameter("selectedIndex");
			// //alert("oSelectedIndex:"+oSelectedIndex)
			var oRadioButton = oEvent.getSource().getAggregation("buttons");

			var Coradio = oRadioButton[co_oSelectedIndex].getText();
			if (Coradio == "New") {
				co_radval = "New";
				/* //alert("New");*/
			} else if (Coradio == "InProcess") {
				co_radval = "InProcess";
				this.getView().byId("confirmorder").setText("Update Order");

			} else if (Coradio == "Approved") {
				co_radval = "Approved";
				this.getView().byId("confirmorder").setText("Approve Order");

			} else if (Coradio == "Rejected") {
				co_radval = "Rejected";
				this.getView().byId("confirmorder").setText("Reject Order");
			} else {

				co_radval = "New";
			}
		},

		/*	confirmorder:function(){
				
			var Aprice = this.getView().byId("coActualprice").getValue();
			var Cdiscount =	  this.getView().byId("coDiscount").getValue();
			var Cprice	 =  this.getView().byId("coPrice").getValue();
		// this.getView().byId("cofileUploadersss").getSelectedValue();
			//var pstatus =	this.getView().getValue(Coradio);
				   
				 	var CoPostpayload = [{
				
									CUSTOMERID: custid,
									ORDERTIME: otime,
									ORDERID: orderid,
									ORDERDATE: codate,
									ORDERSTATUS: co_radval
				}];
				var jurl1 = 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyOrdersUpdate.xsjs';
				sap.m.MessageBox.confirm("Are you sure want to Confirm Order?", {
				icon: sap.m.MessageBox.Icon.INFORMATION,
				title: "Information",
				actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
				onClose: function (oAction) {
				if (oAction === "YES") {
				jQuery.ajax({
				url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyOrdersUpdate.xsjs',
				data: JSON.stringify(CoPostpayload),
				method: 'POST',
				
				success: function (data, response) {
				//	//alert("success")
				console.log(data);
				console.log(JSON.stringify(data));
				console.log(JSON.stringify(CoPostpayload));
				console.log("response:" + response);
					sap.m.MessageBox.success("Posted Successfully", {
				icon: sap.m.MessageBox.Icon.SUCCESS,
				title: "Success",
				actions: [sap.m.MessageBox.Action.OK],
				onClose: function (oAction) {
				if (oAction == "OK") {
				
				}
				}.bind(this)
				});
				
				},
				error: function (xhr, ajaxOptions, throwError) {
				// //alert("error")
				sap.m.MessageToast.show(throwError);
				},
				});

				  
			}
			
				}
					
				});
					
			},*/
		cancelapprove: function () {

			sap.m.MessageBox.confirm("Are you sure want to Cancel? ", {
				icon: sap.m.MessageBox.Icon.WARNING,
				title: "Warning",
				actions: [sap.m.MessageBox.Action.OK],
				onClose: function (oAction) {
					if (oAction === "OK") {}
				}.bind(this)
			});

		},
		Co_attachment: function (event) {

			jQuery.sap.require("sap.m.MessageBox");

			sap.m.MessageBox.confirm("Are you sure to upload the file?", {
				icon: sap.m.MessageBox.Icon.MARK,
				title: "Confirmation Message",
				actions: [sap.m.MessageBox.Action.CANCEL, sap.m.MessageBox.Action.OK],
				onClose: function (oAction) {
					if (oAction == "OK") {

						this.Co_attachpost();

					}

				}.bind(this)
			});
		},

		Co_attachpost: function () {
			console.log("co_att1.length:" + co_att1.length)
			if (co_att1.length >= 5) {
				sap.m.MessageBox.warning("Only 5 attachments can be uploaded", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {
				var oFileuploader = this.byId("cofileUploader");
				co_attach = this.byId("co_attlist1");
				var sFilename = oFileuploader.getValue();

				var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

				var base64_marker = 'data:' + file.type + ';base64,';

				var filename = sFilename.replace(/(\.[^/.]+)+$/, "") // File Name
				console.log("filename : " + filename);
				var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2) // File Extension
				console.log("fileext : " + fileext);
				var sfileext = fileext.substring(0, 3);
				console.log("sfileext : " + sfileext);
				var tsfileext = sfileext.toUpperCase();
				console.log("tsfileext : " + tsfileext);
				if (file) {
					var reader = new FileReader();

					reader.onload = function (readerEvt) {
						var binaryString = readerEvt.target.result;
						BASE64FINAL = btoa(binaryString);
						console.log("Cobase64 : " + BASE64FINAL);

						oFileuploader.setValue();

						co_obj1 = {
							Name: filename,
							Ext: tsfileext,
							Base64: base64
						};
						co_att1.push(co_obj1);
						var oModel = new sap.ui.model.json.JSONModel(co_att1);

						co_attach.setModel(oModel);
						var oItems = new sap.m.ObjectListItem({
							icon: {
								path: "Ext",
								formatter: function (subject) {
									var Co = subject;
									if (Co === 'TXT') {
										return "sap-icon://document-text";
									} else if (Co === 'JPG' || Co === 'PNG' || Co === 'BMP') {
										return "sap-icon://attachment-photo";
									} else if (Co === 'PDF') {
										return "sap-icon://pdf-attachment";
									} else if (Co === 'DOC') {
										return "sap-icon://doc-attachment";
									} else if (Co === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (Co === 'MP3') {
										return "sap-icon://attachment-audio";
									} else if (Co === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (Co === 'PPT') {
										return "sap-icon://ppt-attachment";
									} else {
										return "sap-icon://document";
									}

								}
							},
							title: "{Name}.{Ext}",
							type: "Active",
						});
						co_attach.bindItems("/", oItems);

					}

				};
				reader.readAsBinaryString(file);
			}
		},

		co_handleDelete: function (oEvent) {
			var path = oEvent.getParameter('listItem').getBindingContext().getPath();
			var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
			var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

			var Data = list_ID.getModel();

			var d = Data.getData();
			d.splice(idx, 1);
			Data.setData(d);
		},

		Co_Discount: function (oEvent) {

			var discval = oEvent.getParameter("newValue");
			var coActualprice = this.getView().byId("coActualprice").getValue();
			if (!(coActualprice == "") || !(coActualprice == "NaN") || !(coActualprice == undefined)) {
				var discamt = (discval / 100) * coActualprice;
				var coPrice = coActualprice - discamt;
				this.getView().byId("coPrice").setValue(coPrice);
			}

		},

		qtychange: function (oEvent) {

			//	//alert("live change working");
			var newValue = oEvent.getParameter("value");
			var oTable = this.byId("idInquiry");

			var oRow = oEvent.getSource().getParent(); //Get Row
			var oTable = oRow.getParent(); // Get Table
			var i = oTable.indexOfItem(oRow); //Get Row index

			var r_seaman_cell2 = oTable.getItems()[i].getCells()[3].getNumber();
			var totprice = newValue * parseFloat(r_seaman_cell2);

			var act_valu = this.byId("idobjheader22").getText();
			console.log("act_valu :", act_valu);
			var totamountt = this.byId("idobjheader22").getText().split('');
			var Currencyf = this.getView().byId("idobjheader22").getText().split(' ')[1]; ///currncy
			console.log("Currencyf:", Currencyf);
			var final_valu = this.byId("idobjheader9").getText();
			console.log("final_valu :", final_valu);

			//	var ge_act = act_valu.split(" ");
			var su_act = oTable.getItems()[i].getCells()[4].getNumber();
			var su_act1 = oTable.getItems()[i].getCells()[4].getNumber();

			var total_act_val = parseInt(act_valu) + (parseFloat(totprice) - parseInt(su_act));
			var final_valu_val = parseInt(final_valu) + (parseFloat(totprice) - parseInt(su_act1));
			console.log("total_act_val :", total_act_val);
			console.log("final_valu_val :", final_valu_val);
			//	oCont.getView().byId("final").setText(ci_finpri +" "+ cocurncy);

			this.getView().byId("idobjheader22").setText(total_act_val + " " + Currencyf);
			this.getView().byId("idobjheader9").setText(final_valu_val + " " + Currencyf);

			oTable.getItems()[i].getCells()[4].setNumber(totprice);

			/* var hedfinalvalue = this.getView().byId("idobjheader9").getText();
			 console.log(hedfinalvalue);
			 this.getView().byId("coPrice").setValue(hedfinalvalue);
			 var hedActualvalue = this.getView().byId("idobjheader22").getText();
			 console.log(hedfinalvalue);
			 this.getView().byId("coActualprice").setValue(hedActualvalue);*/

		},

		/*************** Customer Orders End ********************/
		ConfirmSelected: function () {
			// this.getView().byId("fnl_price").setVisible(true);
			var co_table1 = this.getView().byId("idInquiry");
			var rowItems = co_table1.getSelectedItems();
			co_tabel1len = co_table1.getSelectedItems().length;
			console.log(co_tabel1len);
			if (rowItems == "") {
				sap.m.MessageBox.confirm("Please select the Items to continue", {
					icon: sap.m.MessageBox.Icon.WARNING,
					title: "Warning",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {
				this.getView().byId("itb1123").setSelectedKey("FinalPrice");
				this.getView().byId("cancelorder").setVisible(false);
				this.getView().byId("approvere").setVisible(false);
				this.getView().byId("approveselectre").setVisible(false);
				this.getView().byId("cancelapprove").setVisible(false);
				this.getView().byId("confirmorder").setVisible(true);
				Coglobal = "X";
			}

		},
		attachdownload: function (oEvent) {
			var cc_oTable1 = sap.ui.core.Fragment.byId("viewseamanorder", "idseamanorder");

			var oRow = oEvent.getSource().getParent();
			var oTable = oRow.getParent();
			var i = oTable.indexOfItem(oRow);

			var agentattach1 = cc_oTable1.getItems()[i].getCells()[13].getValue();
			console.log("agentattach1 :", agentattach1)
			var filnam1 = cc_oTable1.getItems()[i].getCells()[11].getText();
			console.log("filnam1 :", filnam1)

			download("data:application/javascript;base64," + agentattach1, filnam1);

		},
		confirmorder: function () {
			
			var Textbox = this.byId("Com12").getValue();
			if(co_radval == "Rejected" && Textbox ==""){
			sap.m.MessageBox.confirm("Please enter the reason in comments", {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Information",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
		}else if(co_radval == "InProcess"){
			sap.m.MessageBox.confirm("Please change the status", {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Information",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
		}else{
			var Cobase64 = this.getView().byId("coDiscount").setValue(Cobase64);
			
		//	//alert(co_radval);
			
			
							 ordertimex = this.byId("ordertime").getText();
							 cusnamex = this.byId("customername").getText();
							 currencyx = this.byId("currency").getText();
							 orderdatex = this.byId("orderdate").getText();
							 etax = this.byId("etam").getText();
							 etdx = this.byId("etdm").getText();
							 discountx = this.byId("discount").getText();
							 cusidx = this.byId("cusidmm").getText();
							 orderidx = this.byId("idobjheader10").getText();
							 inqnumx = this.byId("idobjheader3").getText();
							 imox = this.byId("idobjheader2").getText();
							 agentcom = this.getView().byId("Com12").getValue()

			finaltotamountt = this.byId("coPrice").getValue();
			actualtotamountt = this.byId("coActualprice").getValue();
			var co_table1 = this.getView().byId("idInquiry");
			var rowItems = co_table1.getSelectedItems();
			var co_tabel1len1 = co_table1.getSelectedItems().length;
			if (rowItems == "") {
				sap.m.MessageBox.confirm("Please Select Order Items", {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Information",
					actions: [sap.m.MessageBox.Action.OK],
					onClose: function (oAction) {
						if (oAction === "OK") {}
					}.bind(this)
				});
			} else {
			
						

							//	//alert(co_tabel1len1);

							var coArray2 = [];
							var coArray3 = [];
							var arrcoitem = [];
							var arrCoservnam = [];
							var arrCoquant = [];
							var arrCoprice = [];
							var arrCotot = [];
							var arrCoinqn = [];
							var arrResperson = [];
							var arrservicename = [];
							var orderidarray = [];
							var servicetypearray = [];
							var vesselnamearray = [];
							var inquirydatearray = [];
							var inquirytimearray = [];
							var portnamearray = [];
							var currencyarray = [];
							var customeridarray = [];
							var cusnamearray = [];
							var invoiceidarray = [];

							var ocontroller = this;
							var TotalAmount = 0;
							for (var i = 0; i < co_tabel1len1; i++) {

								var rows = rowItems[i];
								var Cells4 = rows.getCells();

								var Coitmno = Cells4[0].getText();
								var Coservnam = Cells4[1].getText();
								var Coquant = Cells4[2].getValue();
								var Coprice = Cells4[3].getNumber();
								var Cotot = Cells4[4].getNumber();
								var Coinqn = Cells4[5].getText();
								var Corespperson = Cells4[6].getText();
								var Coservicename = Cells4[7].getText();
								var orderid = Cells4[8].getText();
								var servicetype = Cells4[9].getText();
								var vesselname = Cells4[10].getText();
								var inquirydate = Cells4[11].getText();
								var inquirytime = Cells4[12].getText();
								var portname = Cells4[13].getText();
								var currency = Cells4[14].getText();
								var customerid = Cells4[15].getText();
								var customername = Cells4[16].getText();
								var invoiceid = Cells4[17].getText();

								/*TotalAmount = parseInt(TotalAmount);
								TotalAmount = parseInt(TotalAmount) + parseInt(Cotot);
								console.log("TotalAmount :", TotalAmount);
								ocontroller.byId("coActualprice").setValue(TotalAmount);*/

								arrcoitem.push(Coitmno); //itm no
								arrCoservnam.push(Coservnam); //servs name
								arrCoquant.push(Coquant); //qty
								arrCoprice.push(Coprice); // itmpric
								arrCotot.push(Cotot);
								arrCoinqn.push(Coinqn); //currncy
								arrResperson.push(Corespperson);
								arrservicename.push(Coservicename);

								orderidarray.push(orderid);
								servicetypearray.push(servicetype);
								vesselnamearray.push(vesselname);
								inquirydatearray.push(inquirydate);
								inquirytimearray.push(inquirytime);
								portnamearray.push(portname);
								currencyarray.push(currency);
								customeridarray.push(customerid);
								cusnamearray.push(customername);
								invoiceidarray.push(invoiceid);

								var COorderitempost = {

									"ORDERID": orderidarray[i],
									"ITEMNO": arrcoitem[i],
									"INQUIRYNUMBER": arrCoinqn[i],
									"SERVICETYPE": servicetypearray[i],
									"VESSELNAME": vesselnamearray[i],
									"QTY": arrCoquant[i],
									"INQUIRYDATE": inquirydatearray[i],
									"INQUIRYTIME": inquirytimearray[i],
									"PORTNAME": portnamearray[i],
									"DANUMBER": "",
									"PASSPORTNUMBER": "",
									"VENDOR": "",
									"CURRENCY": currencyarray[i],
									"SEAMANBOOKNUMBER": "",
									"ITEMPRICE": arrCoprice[i], //Coprice,                  
									"SERVICENAME": arrservicename[i],
									"CHANGEORDER": "X",
									"CUSTOMERID": customeridarray[i],
									"FIRSTNAME": cusnamearray[i],
									"LASTNAME": "",
									"NATIONALITY": "",
									"DATEOFISSUE": "",
									"PLACEOFISSUE": "",
									"PASSPORTEXPIRY": "",
									"GENDER": "",
									"HOTELREQUIRED": "",
									"JOINEROFFSIGNER": "",
									"MATERIALDESC": "",
									"ATTACHMENT": "", //t_ATTACHMENT,
									"PARAMETER1": "",
									"VALUE1": "",
									"PARAMETER2": "",
									"VALUE2": "",
									"PARAMETER3": "",
									"VALUE3": "",
									"PARAMETER4": "",
									"VALUE4": "",
									"PARAMETER5": "",
									"VALUE5": "",
									"REORDER": "",
									"FILENAME": "",
									"BASE64": "", //base64
									"TOTALPRICE": arrCotot[i],
									"ORDERSTATUS": co_radval,
									"INVOICEID": invoiceidarray[i],
									"SAPORDERID": sonum,
									"SERVICEDESCRIPTION": arrCoservnam[i],
									"RESPONSIBLEPERSON": arrResperson[i]

								};
								console.log("COorderitempost :", COorderitempost)
								coArray2.push(COorderitempost);
								// console.log("postPayLoad:" + JSON.stringify(postPayLoad));
								var Codatavalue = JSON.stringify(coArray2);
								console.log("Codatavalue:" + Codatavalue);
							};
								jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("Are you sure want to Confirm Order?", {
					title: "Confirmation",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function (oAction) {
						if (oAction == "YES") {
							jQuery.ajax({

								url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/OrderDetailsUpdate.xsjs',

								data: Codatavalue,
								method: 'POST',

								success: function (data, response) {

									console.log("COorderitempost :", COorderitempost)
									console.log("Codatavalue:" + JSON.stringify(data));
									console.log(JSON.stringify(COorderitempost));
									console.log("response:" + response);
								},
								error: function (xhr, ajaxOptions, throwError) {
									sap.m.MessageToast.show(throwError);
									Co_Array2.length = 0;
									Co_Array2 = [];

								}
							});

							
							var CoPostpayload = {

								"CUSTOMERID": cusidx,
								"ORDERTIME": ordertimex,
								"ORDERID": orderidx,
								"TOTALPRICE": actualtotamountt,
								"CUSTOMERNAME": cusnamex,
								"CURRENCY": currencyx,
								"ORDERSTATUS": co_radval, //updateing in myorder its global variaable
								"ORDERSTATUSCOUNT": "1",
								"INQUIRYNUMBER": inqnumx,
								"ORDERDATE": orderdatex,
								"IMO": imox,
								"ETA": etax,
								"ETD": etdx,
								"ORDERTYPE": "",
								"ATTACHMENT1": "",
								"ATTACHMENT2": "",
								"ATTACHMENT3": "",
								"ATTACHMENT4": "",
								"ATTACHMENT5": "",
								"COMMENTS": "",
								"DISCOUNT": discountx,
								"FINALPRICE": finaltotamountt,
								"SAPORDERID": sonum,
								"CUSTOMERCOMMENTS": "",
								"AGENTCOMMENTS": agentcom

							};
							var coArray23 = [];
							console.log(CoPostpayload);
							coArray23.push(CoPostpayload);
							// console.log("postPayLoad:" + JSON.stringify(postPayLoad));
							var CoPostpayload1 = JSON.stringify(coArray23);
							console.log("CoPostpayload1:" + CoPostpayload1);

							jQuery.ajax({
								url: 'https://fzva5b937d99.hana.ondemand.com/Customer_Portal/NAC/MyOrdersUpdate.xsjs',
								data: CoPostpayload1,
								method: 'POST',

								success: function (data, response) {
									console.log(data);
									console.log(JSON.stringify(data));
									console.log(JSON.stringify(CoPostpayload));
								
									sap.m.MessageBox.success("Changed Order Successfully", {
										icon: sap.m.MessageBox.Icon.SUCCESS,
										title: "Success",
										actions: [sap.m.MessageBox.Action.OK],
										onClose: function (oAction) {
											if (oAction == "OK") {
												if (co_radval === 'Approved') {
													ocontroller.wbsorder();
												} else {
													
													ocontroller.saledel();
														ocontroller.sendquo_clear1();
												}
											
											}
										}.bind(ocontroller)
									});

								},
								error: function (xhr, ajaxOptions, throwError) {
									sap.m.MessageToast.show(throwError);
									ocontroller.sendquo_clear1();

								},
							});

						};
					}

				});

			}
		}

		},
		sendquo_clear1: function () {
			var ocontroller = this;
			ocontroller.getView().byId("coActualprice").setValue();
			ocontroller.getView().byId("coPrice").setValue();
			ocontroller.getView().byId("coDiscount").setValue();
			ocontroller.getView().byId("co_radiobuttonselt").setSelectedIndex(0);
			// this.getView().byId("idInquiry").removeSelections();
			ocontroller.getView().byId("itb1123").setSelectedKey("key1");
			ocontroller.getView().byId("idInquiry").removeSelections(true);
			ocontroller.orderrefresh();
			this.onAfterRendering();
			ocontroller.tablebind();
			ocontroller.detailorderrender();
		},
		/*************** Customer Orders End ********************/

		validations: function () {
			if (servicetype === "Husbandry/Vessel support services") {
				var ci_table1 = this.getView().byId("idTableMyOrdersLine");
				var rowItems = ci_table1.getSelectedItems();
				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {
					this.wbsinq();
				}
			} else if (servicetype === "Hub Agency Services") {
				var ocontroller = this;
				var ci_table1 = ocontroller.getView().byId("idhub");
				var rowItems = ci_table1.getSelectedItems();
				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {
					ocontroller.wbsinq();
				}
			} else if (servicetype === "Port Charges") {
				var ocontroller = this;
				var ci_table1 = ocontroller.getView().byId("idTableMyOrdersLine1");
				var rowItems = ci_table1.getSelectedItems();

				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {
					ocontroller.wbsinq();
				}
			} else {
				var ocontroller = this;
				var ci_table1 = ocontroller.getView().byId("idOtherinq");
				var rowItems = ci_table1.getSelectedItems();

				if (rowItems == "") {
					sap.m.MessageBox.confirm("Please select the service to continue", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Warning",
						actions: [sap.m.MessageBox.Action.OK],
						onClose: function (oAction) {
							if (oAction === "OK") {}
						}.bind(this)
					});
				} else {
					ocontroller.wbsinq();
				}
			}

		},
		wbsinq: function () {
			busyDialog.open();
			var ci_Commnt = this.getView().byId("ci_Commnt").getValue();
			
			//	//alert("function1")
			if (servicetype === "Husbandry/Vessel support services" || servicetype === "Port Charges") {
				if (ci_radval === "Rejected") {
					if (ci_Commnt == "") {
						sap.m.MessageBox.warning("Please Enter Comments", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Information",
							actions: [sap.m.MessageBox.Action.OK],
							onClose: function (oAction) {
								if (oAction === "OK") {
									busyDialog.close();
								}
							}.bind(this)
						});

					} else {
						this.CI_sendquot();
					}

				} 
				
				else if(ci_radval === "InProcess"){
					sap.m.MessageBox.warning("Please Change the status to either Approved or Rejected", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Information",
							actions: [sap.m.MessageBox.Action.OK],
							onClose: function (oAction) {
								if (oAction === "OK") {
									busyDialog.close();
								}
							}.bind(this)
						});	
					}else {

					var ci_imo1 = this.getView().byId("id_imo").getText();
					//	//alert(ci_imo1);
					var ci_eta = this.getView().byId("id_eta").getText().split("-");
					var ci_etd = this.getView().byId("id_etd").getText().split("-");

					var mydate_eta = new Date(ci_eta[0]);
					var formatdt = ("0" + mydate_eta.getDate()).slice(-2);
					var formatmt = ("0" + (mydate_eta.getMonth() + 1)).slice(-2);
					var formatyr = mydate_eta.getFullYear();

					var mydate_etd = new Date(ci_etd[0]);
					var formatdtd = ("0" + mydate_etd.getDate()).slice(-2);
					var formatmtd = ("0" + (mydate_etd.getMonth() + 1)).slice(-2);
					var formatyrd = mydate_etd.getFullYear();

					ci_id_eta = formatyr + formatmt + formatdt;
					ci_id_etd = formatyrd + formatmtd + formatdtd;
					//		 //alert(ci_id_eta + " " + ci_id_etd)
					var ocont = this;
					var oFilter = [new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, ci_imo1)];
					oModel.read('/MyFleet', {
						filters: oFilter,
						async: true,
						success: function (oData, oResp) {
							console.log(oData);
							var len = oData.results.length;
							if (len === 0) {
								sap.m.MessageBox.confirm("IMO not available", {
									icon: sap.m.MessageBox.Icon.INFORMATION,
									title: "Information",
									actions: [sap.m.MessageBox.Action.OK],
									onClose: function (oAction) {
										if (oAction === "OK") {
											busyDialog.close();
										}
									}.bind(this)
								});
							} else {
								imoval = oData.results[0];
								console.log(imoval)
								ocont.valquot();
							}
						}
					})
				}
			} else {
				if (ci_radval === "Rejected") {
					if (ci_Commnt == "") {
						sap.m.MessageBox.warning("Please Enter Comments", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Information",
							actions: [sap.m.MessageBox.Action.OK],
							onClose: function (oAction) {
								if (oAction === "OK") {
									busyDialog.close();
								}
							}.bind(this)
						});

					} else {
						this.CI_sendquot();
					}

				}
				else if(ci_radval === "InProcess"){
					sap.m.MessageBox.warning("Please Change the status to either Approved or Rejected", {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Information",
							actions: [sap.m.MessageBox.Action.OK],
							onClose: function (oAction) {
								if (oAction === "OK") {
									busyDialog.close();
								}
							}.bind(this)
						});	
					} 
				
				else {

					var ocont = this;
					ocont.CI_sendquot();
				}
			}

		},

		valquot: function () {

			var id_inq_noval = this.getView().byId("id_inq_no1").getText();
			//	//alert(id_inq_noval)
			//		 //alert(etacheck + " " + etdcheck)
			var ci_imo1 = this.getView().byId("id_imo").getText();
			var oFilter = [new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, ci_imo1),
				new sap.ui.model.Filter("ETA", sap.ui.model.FilterOperator.GE, ci_eta),
				new sap.ui.model.Filter("ETA", sap.ui.model.FilterOperator.LE, ci_etd),
				new sap.ui.model.Filter("ETD", sap.ui.model.FilterOperator.GE, ci_eta),
				new sap.ui.model.Filter("ETD", sap.ui.model.FilterOperator.LE, ci_etd)
			];
			var ocont = this;
			oModel.read('/MyInquiryHeader', {
				filters: oFilter,
				urlParameters: {
"$orderby": "ETA desc"
},
				success: function (oData, oResp) {
					console.log(oData)

					//		//alert(oData.results[0].SAPQUOTATIONID);
					//		//alert(oData.results[0].SAPORDERID);

					for (var i = 0; i < oData.results.length; i++) {
						//	//alert(i);
						if (oData.results[i].SAPQUOTATIONID === "") {
							var empty = "empty";
						} else {
							var notemp = "notempty";
							console.log(notemp);
							quotid = oData.results[i].SAPQUOTATIONID;
							sonum = oData.results[i].SAPORDERID;
							wbs1 = oData.results[i].WBS;
							console.log(quotid + ' '+sonum + ' '+wbs1)
						}

					}
					if (empty === "empty" && notemp === "notempty") {
						//	//alert("has value");

						//	//alert("values" + '' + quotid + '' + sonum + '' + wbs1);
						ocont.saleset();

					} else {
						//	//alert("novalue");
						ocont.wbspost();

					}
					/*	if(oData.results[i].SAPQUOTATIONID !=="")
						{
							//alert("if");
									  quotid = oData.results[i].SAPQUOTATIONID;
									  var inqnum = oData.results[i].INQUIRYNUMBER;
									  //alert(inqnum);
						   sonum = oData.results[i].SAPORDERID;
						   wbs1 = oData.results[i].WBS;
						 //alert("values"+''+quotid + ''+sonum+''+wbs1);
					//	ocont.wbspost();	
						}else{
						//	//alert("else");
						  quotid = oData.results[i].SAPQUOTATIONID;
						   sonum = oData.results[i].SAPORDERID;
						   wbs1 = oData.results[i].WBS;
						 //alert("values"+''+quotid + ''+sonum+''+wbs1);
					//	ocont.saleset();
						}*/

				}

			});

		},

		wbspost: function () {
			//		//alert(imoval.IMO);
			var postload = {
				ProjectDefinition: '00000409',
				Description: "test",
				IMO: imoval.IMO,
				Customer: imoval.CUSTOMERID,
				ForecastStartDate: ci_id_eta,
				ForrecastFinishDate: ci_id_etd,
				ProjectType: "SP",
				// FlagRegistry:imoval.FLAG,
				FlagRegistry: "Qatar",
				ArrivedFrom: "",
				SailedTo: "",
				Grt: imoval.GRT,
				Nrt: imoval.NRT,
				Loa: imoval.LOA,
				Dwt: imoval.SWDT,
				CustomerPONumber: "",
				PreviousIMOWBS: ""
			};
			var ocont = this; //
			console.log(JSON.stringify(postload));
			var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/nak/SD_NAC_V2_SRV/", false);
			oModel3.create('/WBSSet', postload, {
				success: function (oData, oResponse) {

					console.log(oData)
					var msg = oData.Message;
					ms = msg.split(" ");
					// //alert(ms);
					console.log(ms);
					////alert(ms[7]+" -  "+ms[12]);
					if (isNaN(ms[7])) {
						sap.m.MessageBox.confirm(msg, {
							icon: sap.m.MessageBox.Icon.INFORMATION,
							title: "Information",
							actions: [sap.m.MessageBox.Action.OK],
							onClose: function (oAction) {
								if (oAction === "OK") {
									busyDialog.close();
								}
							}.bind(this)
						});
					} else {
						/**/
						quotid = ms[7];
						wbs1 = ms[2];
						sonum = ms[12];
						//	//alert(quotid + " " + wbs1 + " " + sonum);
						ocont.saleset();
					}
					console.log(oResponse)
				},
				error: function (oResponse) {
					console.log(oResponse);
					busyDialog.close();
				},
			});

		},

		saleset: function () {

			if (servicetype === "Husbandry/Vessel support services") {
				////alert(quotid);
				var arrayci = [];
				var vsuflag1 = 0;
				var co_table1 = this.getView().byId("idTableMyOrdersLine");
				var rowItems = co_table1.getSelectedItems();
				var co_tabel1len = co_table1.getSelectedItems().length;
				var co_table2 = this.getView().byId("idTableMyOrdersLine1");
				var rowItems2 = co_table2.getSelectedItems();
				var co_tabel2len = co_table2.getSelectedItems().length;

				console.log("TableLength :", co_tabel1len);
				console.log("TableLength :", co_tabel2len);
				var cnt = 0;
				var ocont = this;

				for (var i = 0; i < co_tabel1len; i++) {
					var rows = rowItems[i];
					var Cells4 = rows.getCells();

					var Coitmno = Cells4[0].getText();
					var Coinqn = Cells4[14].getText();
					var servnam = Cells4[1].getText();
					var quant = Cells4[2].getValue();
					var itmprice1 = Cells4[3].getValue();
					var curr = Cells4[3].getDescription();
					var servtyp1 = Cells4[12].getText();
					
					if(servtyp1 === "VSU_Materials" || servtyp1 === "VSU_MATERIALS")
					{
						Coinqn = "";
						servnam = servnam;
							/*var vsuflag1 = vsuflag1 + 1;
							if(vsuflag1 === co_tabel1len)
							{
								ocont.CI_sendquot();
							}
							else
							{
								var vsuf = "flag";
							}*/
							
					}
					else
					{
					 Coinqn = Coinqn;
					 servnam = ""
					}

					var postdata = {
						// VBELN:"0020005064",
						VBELN: quotid,
						POSNR: Coitmno,
						MATNR: Coinqn,
						BANFN: "",
						BNFPO: "",
						TXZ01: servnam,
						LIFNR: "",
						PREIS: itmprice1,
						WAERS: curr,
						PASSPORTNO: "209079070",
						SEAMAN: "",
						LAND1: "",
						NATIO50: "",
						STATUS: ci_radval,
						DistributionChannel: "",
						Division: "",
						Customer: "",
						Identifier: "",
						WBS: "",
						Vessel: "",
						PSTRT: "",
						PENDE: "",
						Post1: "20181008-20181010",
						NETWR: "",
						CURR1: "",
						NetValue: "",
						CustomerAdvance: "X"
					};
					console.log(JSON.stringify(postdata)); //
					arrayci.push(JSON.stringify(postdata));
					var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/nak/SD_NAC_V2_SRV/", false);
					oModel3.create('/Sales_ItemSet', postdata, {
						success: function (oData, oResponse) {
							console.log(oData)
							cnt++;
							if (cnt === co_tabel1len) {
								ocont.saleset2();
							} else {

								var msg = oData.TXZ01;
								sap.m.MessageBox.confirm(msg, {
									icon: sap.m.MessageBox.Icon.INFORMATION,
									title: "Information",
									actions: [sap.m.MessageBox.Action.OK],
									onClose: function (oAction) {
										if (oAction === "OK") {
											busyDialog.close();
										}
									}.bind(this)
								});
							}

							console.log(oResponse)
						},
						error: function (oResponse) {
							console.log(oResponse)
							busyDialog.close();
						},
					});
					}
				
			} else if (servicetype === "Port Charges") {
				var ocont = this;
				ocont.saleset2();
			} else {

			}
		},
		saleset2: function () {
			//	//alert(quotid);
			var arrayci = [];
			var co_table2 = this.getView().byId("idTableMyOrdersLine1");
			var rowItems2 = co_table2.getSelectedItems();
			var co_tabel2len = co_table2.getSelectedItems().length;
			var cnt = 0;
			var ocont = this;

			for (var i = 0; i < co_tabel2len; i++) {
				var rows = rowItems2[i];
				var Cells4 = rows.getCells();
				var Coitmno = Cells4[5].getText();
				var Coinqn = Cells4[4].getText();
				//	var servnam = Cells4[1].getText();
				var itmprice1 = Cells4[1].getValue();
				var curr = Cells4[1].getDescription();

				var postdata = {
					// VBELN:"0020005064",
					VBELN: quotid,
					POSNR: Coitmno,
					MATNR: Coinqn,
					BANFN: "",
					BNFPO: "",
					TXZ01: "",
					LIFNR: "",
					PREIS: itmprice1,
					WAERS: curr,
					PASSPORTNO: "209079070",
					SEAMAN: "",
					LAND1: "",
					NATIO50: "",
					STATUS: ci_radval,
					DistributionChannel: "",
					Division: "",
					Customer: "",
					Identifier: "",
					WBS: "",
					Vessel: "",
					PSTRT: "",
					PENDE: "",
					Post1: "20181008-20181010",
					NETWR: "",
					CURR1: "",
					NetValue: "",
					CustomerAdvance: "X"
				};

				console.log(JSON.stringify(postdata)); //

				var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/nak/SD_NAC_V2_SRV/", false);
				oModel3.create('/Sales_ItemSet', postdata, {
					success: function (oData, oResponse) {
						console.log(oData)
						cnt++;
						if (cnt === co_tabel2len) {
							ocont.CI_sendquot();
						} else {

							var msg = oData.TXZ01;
							if (msg !== '') {
								sap.m.MessageBox.confirm(msg, {
									icon: sap.m.MessageBox.Icon.INFORMATION,
									title: "Information",
									actions: [sap.m.MessageBox.Action.OK],
									onClose: function (oAction) {
										if (oAction === "OK") {

										}
									}.bind(this)
								});
							}
						}

						console.log(oResponse)
					},
					error: function (oResponse) {
						console.log(oResponse)
					},
				});
			}

		},

		wbsorder: function () {
		//	//alert("order")
			busyDialog.open();
			//		//alert("saporder");
			//	//alert(ms[7]);

			//		//alert(quotid);
			//		//alert(sonum);
			//		//alert(wbs1);
			/*	var ci_imo1 = this.getView().byId("id_imo").getText();
				var oFilter = [new sap.ui.model.Filter("IMO", sap.ui.model.FilterOperator.EQ, ci_imo1),
					new sap.ui.model.Filter("ETA", sap.ui.model.FilterOperator.Contains, etacheck),
					new sap.ui.model.Filter("ETD", sap.ui.model.FilterOperator.Contains, etdcheck)
				];
				var ocont = this;
				oModel.read('/MyInquiryHeader', {
					filters: oFilter,
					success: function (oData, oResp) {
						console.log(oData)

						//alert(oData.results[0].SAPQUOTATIONID);
						//alert(oData.results[0].SAPORDERID);
					},
				});*/
			var co_table1 = this.getView().byId("idInquiry");
			var rowItems = co_table1.getSelectedItems();
			var co_tabel1len = co_table1.getSelectedItems().length;
			console.log("TableLength :", co_tabel1len);
			var cnt = 0;
			var ocontroller = this;

			for (var i = 0; i < co_tabel1len; i++) {

				var rows = rowItems[i];
				var Cells4 = rows.getCells();

				var Coitmno = Cells4[0].getText();
				var Coservnam = Cells4[7].getText();
				var Coquant = Cells4[2].getValue();
				var Coprice = Cells4[3].getNumber();
				var Cotot = Cells4[4].getNumber();
				//	var cototcur = Cells4[4].getNumberUnit();
				var Coinqn = Cells4[5].getText();
				var currency = Cells4[14].getText();
				//			//alert(Coservnam);

				var postdata = {
					VBELN: sonum, // orderid
					POSNR: Coitmno, //itemno
					MATNR: Coservnam, //service code
					BANFN: "",
					BNFPO: "",
					TXZ01: "",
					LIFNR: "",
					PREIS: Cotot, //tot price of each itemm
					WAERS: currency, //cur
					PASSPORTNO: "209079070",
					SEAMAN: "",
					LAND1: "",
					NATIO50: "",
					STATUS: co_radval, //status
					DistributionChannel: "",
					Division: "",
					Customer: "",
					Identifier: "",
					WBS: wbs1, //wbs
					Vessel: "",
					PSTRT: "",
					PENDE: "",
					Post1: "20181008-20181010",
					NETWR: "",
					CURR1: "",
					NetValue: "",
					CustomerAdvance: "X"
				};

				console.log(JSON.stringify(postdata)); //
				var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/nak/SD_NAC_V2_SRV/", false);
				oModel3.create('/Sales_ItemSet', postdata, {
					success: function (oData, oResponse) {
						console.log(oData)
						cnt++;
						if (cnt === co_tabel1len) {
						//	//alert("if")
							var msg = oData.TXZ01;
							sap.m.MessageBox.confirm(msg, {
								icon: sap.m.MessageBox.Icon.INFORMATION,
								title: "Information",
								actions: [sap.m.MessageBox.Action.OK],
								onClose: function (oAction) {
									if (oAction === "OK") {

									}
								}.bind(this)
							});
							busyDialog.close();
							//ocontroller.CI_sendquot();
						} else {
							////alert("else")
							var msg = oData.TXZ01;
							if (cnt === co_tabel1len) {
								sap.m.MessageBox.confirm(msg, {
									icon: sap.m.MessageBox.Icon.INFORMATION,
									title: "Information",
									actions: [sap.m.MessageBox.Action.OK],
									onClose: function (oAction) {
										if (oAction === "OK") {

										}
									}.bind(this)
								});
							}
						}

						console.log(oResponse)
					},
					error: function (oResponse) {
						console.log(oResponse)
						busyDialog.close();
					},
				});
			}
				ocontroller.sendquo_clear1();

		},

		saledel: function () {
			//alert("del")
			var co_table1 = this.getView().byId("idInquiry");
			var rowItems = co_table1.getItems();
			var co_tabel1len = co_table1.getItems().length;
			console.log("TableLength :", co_tabel1len);

			var ocontroller = this;

			for (var i = 0; i < co_tabel1len; i++) {

				var rows = rowItems[i];
				var Cells4 = rows.getCells();

				var Coitmno = Cells4[0].getText();
				var Coservnam = Cells4[1].getText();
				var Coquant = Cells4[2].getValue();
				var Coprice = Cells4[3].getNumber();
				var Cotot = Cells4[4].getNumber();
				var Coinqn = Cells4[5].getText();
					var currency = Cells4[14].getText();
				console.log(sonum);
				console.log(Coitmno);
				var postdata = {
					VBELN: sonum, //"0030007035",
					POSNR: Coitmno, //"00010",
					PASSPORTNO: "",
					TXZ01: "",
					BANFN: "",
					LIFNR: "",
					WAERS:currency,
					STATUS:co_radval,
					PREIS: Cotot,
					Customer: "",
					Identifier: "DELE",
				};
				console.log(postdata);

			//	var sPath = "/Sales_ItemSet(VBELN='0030007112',POSNR='00010')";
			 var sPath = "/Sales_ItemSet(VBELN='" + sonum + "',POSNR='" + Coitmno + "')";
				var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/nak/SD_NAC_V2_SRV/", false);
				oModel3.update(sPath, postdata, {
					success: function (oData, oResponse) {
						busyDialog.close();
						console.log(oData)
						var msg = oData.TXZ01;
						if (msg !== '') {
							sap.m.MessageBox.confirm(msg, {
								icon: sap.m.MessageBox.Icon.INFORMATION,
								title: "Information",
								actions: [sap.m.MessageBox.Action.OK],
								onClose: function (oAction) {
									if (oAction === "OK") {

									}
								}.bind(this)
							});
						}

						console.log(oResponse)
					},
					error: function (oResponse) {
						console.log(oResponse)
						busyDialog.close();
					},
				});
			}

		}

	});
});