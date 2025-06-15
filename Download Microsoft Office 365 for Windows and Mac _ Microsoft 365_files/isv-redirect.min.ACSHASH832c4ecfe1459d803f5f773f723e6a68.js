/**
 * @license
 * Copyright Microsoft All Rights Reserved.
 *
 *PC Accounts Generic Library to open a new URL for account
**/

class PartnerCenterClientData {
  createdBy = "";
  modifiedBy = "";
  requestId = "";
  discoveryAction = "";
  propertyBag = {}
  constructor(createdBy, modifiedBy, requestId, discoveryAction, propertyBag) {
      this.discoveryAction = discoveryAction;
      this.modifiedBy = modifiedBy;
      this.createdBy = createdBy;
      this.propertyBag = propertyBag;
      this.requestId = requestId;
  }
}

function InitializeEnrollment(referenceInformation, locale, environment) {
  var url = environment == "Prod" ?
      "https://partner.microsoft.com/" + locale + "/account/exp/enrollment/welcome/redirect" :
      "https://partner.microsoft-ppe.com/" + locale + "/account/exp/enrollment/welcome/redirect";
  //convert the propertyBag into base64
  var propertyBagInforamtionBase64 = btoa(JSON.stringify(referenceInformation));
  window.open(url + "?X-Redirect_Shared_Context=" + propertyBagInforamtionBase64);
};
(function (document) {
  "use strict";

  $(document).ready(() => {
    $("#oc-isvsuccessdirect-custom-action").on("click", window.openPartnerCenter);
  });

  const randomNumber = (min = 0, max) => {
    return Math.ceil(Math.random() * (max - min + 1)) + min;
  };

  const uuidTracking = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  };

   const openPartnerCenter = () => {
    const isvId = sessionStorage.getItem("isvId");
    const requestId = uuidTracking();
    let locale = LocaleUtil?.getPageLocale();

    InitializeEnrollment(
      new PartnerCenterClientData(
        "isv_hub",
        "isv_hub",
        requestId,
        "CMPEnrollment",
        {"VisitorISVId": `${isvId}`}
      ),
      locale,
      "Prod"
    );
  };
  window.openPartnerCenter = openPartnerCenter;
})(document);

