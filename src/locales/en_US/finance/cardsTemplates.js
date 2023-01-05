module.exports = [
  {
    name: "VISA",
    card_number_templates: ["4###############"],
    cvv_template: "###",
    sort_number_template: "######",
    account_number_template: "########",
  },
  {
    name: "Visa Electron",
    card_number_templates: ["4026#############", "417500###########", "4405#############", "4508#############", "4844#############", "4913#############", "4917#############"],
    cvv_template: "###",
    sort_number_template: "######",
    account_number_template: "########",
  },
  {
    name: "American Express",
    card_number_templates: ["34#############", "37#############"],
    cvv_template: "####",
    sort_number_template: "######",
    account_number_template: "######"
  },
  {
    name: "Mastercard",
    card_number_templates: ["51##############", "52##############", "53##############", "54##############", "55##############"],
    cvv_template: "###",
    sort_number_template: "######",
    account_number_template: "########",
  },
  {
    name: "Discover",
    card_number_templates: ["6011############", "65##############", "644#############", "645#############", "622126##########", "649#############"],
    cvv_template: "###",
    sort_number_template: "######",
    account_number_template: "6011############",
  },
];