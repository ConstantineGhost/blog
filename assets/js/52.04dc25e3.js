(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{371:function(e,t,r){"use strict";r.r(t);var a=r(10),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Today we're happy to announce the release of the BTCPay Server v 1.0.5.6.\nThe highlight of this version is the long-awaited Shopify support, along with other new features, improvements and bug-fixes.")]),e._v(" "),t("h2",{attrs:{id:"whats-new-in-1056-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#whats-new-in-1056-"}},[e._v("#")]),e._v(" What's new in 1.0.5.6? 🆕")]),e._v(" "),t("h3",{attrs:{id:"shopify-support-️"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shopify-support-️"}},[e._v("#")]),e._v(" Shopify Support 🛍️")]),e._v(" "),t("p",[e._v("On the 18th of January 2018, a user named "),t("strong",[e._v("sysout")]),e._v(' opened a notorious feature request titled "'),t("em",[e._v("Any idea about Shopify integration")]),e._v('? The "Wen Shopify" issue '),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues/36",target:"_blank",rel:"noopener noreferrer"}},[e._v("#36"),t("OutboundLink")],1),e._v(" has been haunting us ever since.")]),e._v(" "),t("p",[e._v("As a self-hosted software solution, it wasn't easy for us to get the integration working. Luckily, our friend "),t("a",{attrs:{href:"https://github.com/ruigomeseu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rui Gomes"),t("OutboundLink")],1),e._v(" from "),t("a",{attrs:{href:"https://www.opennode.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenNode"),t("OutboundLink")],1),e._v(", pinpointed a work-around that was later implemented by community member "),t("a",{attrs:{href:"https://github.com/djseeds",target:"_blank",rel:"noopener noreferrer"}},[e._v("DJSeeds"),t("OutboundLink")],1),e._v(", who on-boarded quite a few merchants, including "),t("a",{attrs:{href:"https://tftc.io/merch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFTC"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("It took us a bit of time to brainstorm an ideal solution that could be built on top of the original idea, but at the same time also provide easier UX and improved functionality. This challenging task was manhandled by our two wizards, "),t("a",{attrs:{href:"https://github.com/rockstardev",target:"_blank",rel:"noopener noreferrer"}},[e._v("r0ckstardev"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/Kukks",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kukks"),t("OutboundLink")],1),e._v(" and the end-result of their coding wizardry was, as always, pure magic.")]),e._v(" "),t("p",[e._v("As you may have guessed by now, starting with v1.0.5.6 you can now finally accept Bitcoin payments in your Shopify store via BTCPay Server!")]),e._v(" "),t("p",[e._v("If you own a Shopify store and would like to use BTCPay Server to accept payments, follow our official "),t("a",{attrs:{href:"http://docs.btcpayserver.org/Shopify/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shopify Integration Guide."),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("The video below showcases the workflow step by step.")]),e._v(" "),t("p",[e._v("https://youtu.be/0Z8vraKab64")]),e._v(" "),t("h3",{attrs:{id:"simple-point-of-sale-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-point-of-sale-"}},[e._v("#")]),e._v(" Simple Point Of Sale 🛒")]),e._v(" "),t("p",[e._v("It's been a while since our good ol' "),t("a",{attrs:{href:"https://github.com/mariodian",target:"_blank",rel:"noopener noreferrer"}},[e._v("mariodian"),t("OutboundLink")],1),e._v(" appeared on the release-notes. For those of you who don't know, he implemented the "),t("a",{attrs:{href:"https://blog.btcpayserver.org/bitcoin-pos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cool, advanced point of sale cart app"),t("OutboundLink")],1),e._v(" into the BTCPay Server. Mario re-appearing meant only one thing - the PoS app now has a new feature - the light view.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPaySimplePoS-1024x486.png",alt:""}})]),e._v(" "),t("p",[e._v("The light-view option in the pos app allows you to have a minimal-looking keypad point of sale system enabling quick invoice creation on the go.")]),e._v(" "),t("h3",{attrs:{id:"partial-invoice-refund-🧾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#partial-invoice-refund-🧾"}},[e._v("#")]),e._v(" Partial Invoice Refund 🧾")]),e._v(" "),t("p",[e._v("In "),t("a",{attrs:{href:"https://blog.btcpayserver.org/btcpay-server-1-0-5-0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.0.5.0"),t("OutboundLink")],1),e._v(" we introduced invoice refunds, for easier payment management. Sometimes, a merchant needs to issue a refund for a portion of the order. Starting with this release, you will be able to issue partial refunds with a custom amount and currency of your choice.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/Screenshot-2020-09-30-at-10.49.34-1024x457.png",alt:""}})]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/Screenshot-2020-09-30-at-10.49.51-1024x580.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"new-labels-for-payment-requests-apps-and-payouts-️"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-labels-for-payment-requests-apps-and-payouts-️"}},[e._v("#")]),e._v(" New labels for payment requests, apps and payouts 🏷️")]),e._v(" "),t("p",[e._v("As a part of our ongoing efforts of improving users privacy by providing better UTXO management, we now have new automatic labels for apps and payment requests.\nThis allows you to use the coin control feature with more clarity on the transaction origins and without having to label them manually.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/Screenshot-2020-09-30-at-10.54.00-1024x470.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"fiat-entry-in-wallet-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fiat-entry-in-wallet-"}},[e._v("#")]),e._v(" Fiat entry in wallet 💲")]),e._v(" "),t("p",[e._v("Quite a few of our community members requested to have a fiat denomination entry in the wallet so they can send funds to family and friends more easily. An additional field has been added in Wallet > Send tab to cater to that need.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/Screenshot-2020-09-30-at-10.57.03-1024x579.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"invoice-log-severity-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invoice-log-severity-"}},[e._v("#")]),e._v(" Invoice log severity 🚨")]),e._v(" "),t("p",[e._v("When you're dealing with payments, you probably want to have a clear look on the invoice log in case something goes wrong. Our invoice log section has been re-wrapped and now adds a clearer warning message in case of an error so that you can pinpoint the problem in no time.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/eyMO9M3-1024x361.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"invoice-api-🧑‍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invoice-api-🧑‍"}},[e._v("#")]),e._v(" Invoice API 🧑‍💻")]),e._v(" "),t("p",[e._v("We're very proud of the new API improvements. Today we're bringing you the new invoice API. Bear in mind it's still not fully complete and that we will finalize it in the next release. The current BitPay compatible invoice API will stay fully functional and will not be going away.")]),e._v(" "),t("h2",{attrs:{id:"improvements-and-bug-fixes-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improvements-and-bug-fixes-"}},[e._v("#")]),e._v(" Improvements and bug fixes 🐛")]),e._v(" "),t("p",[e._v("Besides the fresh features, this release brings in quite a lot of improvements")]),e._v(" "),t("ul",[t("li",[e._v("Update PSBT and PSBT sent to Hardware wallet will include "),t("code",[e._v("non_witness_utxo")]),e._v(" by default, when possible, to match Bitcoin Core 0.20.1 behavior.")]),e._v(" "),t("li",[e._v("Adjust invoice badge styling")]),e._v(" "),t("li",[e._v("Invoice notification email improvements")]),e._v(" "),t("li",[e._v("Improvement of the UX flow for requesting an API Key of a BTCPay Server user")]),e._v(" "),t("li",[e._v("Don't send notification email for expired invoices")]),e._v(" "),t("li",[e._v("Greenfield API: Add "),t("code",[e._v("Roles")]),e._v(" property to the user data.")]),e._v(" "),t("li",[e._v("Remove Changelly integration")]),e._v(" "),t("li",[e._v("Better wording in transaction list page")]),e._v(" "),t("li",[e._v("Fix alerts text break.")]),e._v(" "),t("li",[e._v("Remove Tor link from navbar")]),e._v(" "),t("li",[e._v("Improve invoices list view")]),e._v(" "),t("li",[e._v("Improve sync progress dialog")]),e._v(" "),t("li",[e._v("Show index of payment address for on-chain payments")])]),e._v(" "),t("p",[e._v("We've fixed several bugs in this release. You can take a look at which bugs have been squashed below.")]),e._v(" "),t("ul",[t("li",[e._v("When an invoice is partially paid on-chain and allow off-chain, a new lightning network invoice should be created for the remainder of the payment.")]),e._v(" "),t("li",[e._v("Changing the inventory of a PoS item was not working properly")]),e._v(" "),t("li",[e._v("Greenfield API: The internal lightning API was returning error 403, even when used as an administrator")]),e._v(" "),t("li",[e._v("Using lightning charge as lightning network invoice provider over HTTP was not working properly")]),e._v(" "),t("li",[e._v("Fix: If the hot wallet failed to sign a PSBT, should not show a blank page crash")]),e._v(" "),t("li",[e._v("Fix bug: The wallet was sending only round amount of sat per byte")]),e._v(" "),t("li",[e._v('"Attempt MySql Fix"')]),e._v(" "),t("li",[e._v("Fix HitBTC rate provider")])]),e._v(" "),t("p",[e._v("For more details on the changes, please check our full changelog "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/Changelog.md#1056",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"how-to-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-update"}},[e._v("#")]),e._v(" How to update?")]),e._v(" "),t("p",[e._v("To "),t("a",{attrs:{href:"https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("update"),t("OutboundLink")],1),e._v(" to the latest version, go to your BTCPay Server > Server Settings > Maintenance > "),t("em",[t("strong",[e._v("Update")])]),e._v(". If you prefer CLI, you can update with "),t("code",[e._v("btcpay-update.sh")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"thank-you-to-our-contributors-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thank-you-to-our-contributors-"}},[e._v("#")]),e._v(" Thank you to our contributors!")]),e._v(" "),t("p",[e._v("Huge thanks to all of you who’ve helped in making of the "),t("strong",[e._v("v1.0.5.6")]),e._v("! We appreciate every single contribution and support.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/apotdevin",target:"_blank",rel:"noopener noreferrer"}},[e._v("apotdevin"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/astupidmoose",target:"_blank",rel:"noopener noreferrer"}},[e._v("astupidmoose"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/bolatovumar",target:"_blank",rel:"noopener noreferrer"}},[e._v("bolatovumar"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/britttttk",target:"_blank",rel:"noopener noreferrer"}},[e._v("britttttk"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/dennisreimann",target:"_blank",rel:"noopener noreferrer"}},[e._v("dennisreimann"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/dspicher",target:"_blank",rel:"noopener noreferrer"}},[e._v("dspicher"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/dstrukt",target:"_blank",rel:"noopener noreferrer"}},[e._v("dstrukt"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/eskyee/",target:"_blank",rel:"noopener noreferrer"}},[e._v("eskyee"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/kukks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kukks"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/l33d4n/",target:"_blank",rel:"noopener noreferrer"}},[e._v("l33d4n"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/maltokyo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("maltokyo"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/mariodian/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mariodian"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/mlkui/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mlkui"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/nicolasdorier/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nicolasdorier"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/pageman/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pageman"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/pavlenex/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pavlenex"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/rockstardev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rockstardev"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/sotblad/",target:"_blank",rel:"noopener noreferrer"}},[e._v("sotblad"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/xpayserver/",target:"_blank",rel:"noopener noreferrer"}},[e._v("xpayserver"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/zaxounette/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zaxounette"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("As always, if you face any issues or notice a bug, please join our "),t("a",{attrs:{href:"http://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community chat"),t("OutboundLink")],1),e._v(" and let us know. 💚")])])}),[],!1,null,null,null);t.default=n.exports}}]);