(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{369:function(e,t,r){"use strict";r.r(t);var a=r(10),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("We've been silent for a while, but with good reason. Today, we're releasing a big update to BTCPay Server, a brand-new release v 1.0.3.95.")]),e._v(" "),t("p",[e._v("Version 1.0.3.95 includes lots of new features, bug fixes and user-experience improvements.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/Screen-Shot-2019-05-07-at-11.20.22.png",alt:""}})]),e._v(" "),t("p",[e._v("BTCPay Server version 1.0.3.95 includes lots of new features,improvements and bug fixes.")]),e._v(" "),t("h2",{attrs:{id:"invoice-list-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invoice-list-updates"}},[e._v("#")]),e._v(" Invoice list updates")]),e._v(" "),t("p",[e._v("During the "),t("a",{attrs:{href:"http://weareallhodlonaut.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WeAreAllhodlonaut crowdfunding,"),t("OutboundLink")],1),e._v(" we identified several UX/UI problems with our invoices page. This release includes notable changes which should help users with invoice management and interaction. The following changes should help users, especially those with a large volume of invoices in real time to manage their incoming invoices\neasier and identify those that require further action.")]),e._v(" "),t("ul",[t("li",[e._v("Responsive status change")]),e._v(" "),t("li",[e._v("Color labeling invoice stat")]),e._v(" "),t("li",[e._v("Quickly expandable invoice details")]),e._v(" "),t("li",[e._v("Filtering by date")])]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPay-Invoices-1024x552.gif",alt:""}})]),e._v(" "),t("p",[e._v("Updates on the invoice page were coded by "),t("a",{attrs:{href:"https://twitter.com/r0ckstardev",target:"_blank",rel:"noopener noreferrer"}},[e._v("@r0ckstardev."),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"u2f-support-added"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#u2f-support-added"}},[e._v("#")]),e._v(" U2F Support added")]),e._v(" "),t("p",[e._v("One of the oldest "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues/53",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),t("OutboundLink")],1),e._v(" we had on our GitHub, is now closed thanks to our contributor "),t("a",{attrs:{href:"https://twitter.com/MrKukks",target:"_blank",rel:"noopener noreferrer"}},[e._v("@MrKukks"),t("OutboundLink")],1),e._v(". You can now enhance the security of your account by enabling "),t("strong",[e._v("Universal 2nd Factor (U2F).")])]),e._v(" "),t("p",[e._v("U2F allows users to further enhance the security of their accounts by physically confirming the authentication via a U2F compatible device.")]),e._v(" "),t("p",[e._v("Please understand that U2F protocol is not supported by all browsers. We've "),t("a",{attrs:{href:"https://twitter.com/pavlenex/status/1121475933817528320",target:"_blank",rel:"noopener noreferrer"}},[e._v("conducted tests"),t("OutboundLink")],1),e._v(" with several well-known U2F devices and compatible hardware wallets in Chrome, Firefox, and Opera.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/btcpay-U2F-testing-1024x741.jpg",alt:""}})]),e._v(" "),t("p",[e._v("BTCPay U2F should work with any device that supports U2F. We stress-tested it on plenty of devices before releasing the feature.")]),e._v(" "),t("p",[e._v("To enable U2F on your BTCPay account, go to your account page and then the U2F tab, plug in your U2F device or a hardware wallet and press the appropriate button on your device when prompted. Ledger hardware wallet users need to "),t("a",{attrs:{href:"https://support.ledger.com/hc/en-us/articles/115005198545-FIDO-U2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("install U2F app"),t("OutboundLink")],1),e._v(" and make sure to open it to enable U2F.")]),e._v(" "),t("p",[e._v("Since U2F protocol is still hard for mobile devices, if you often access your BTCPay Server via a mobile device, we recommend that you have both 2FA and U2F enabled, so that you can log in with the most suitable option and avoid getting locked-out.")]),e._v(" "),t("h2",{attrs:{id:"external-storage-service-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-storage-service-support"}},[e._v("#")]),e._v(" External storage service support")]),e._v(" "),t("p",[e._v("We've listened to the feedback and implemented a storage services in BTCPay. You no longer have to add your images and files to imgur and other websites to show them in BTCPay.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/Screen-Shot-2019-05-07-at-12.02.37-1024x573.png",alt:""}})]),e._v(" "),t("p",[e._v("You can also set up the temporary expirable links for files, which we plan to merge into our apps, so that content creators can sell music, images, and videos through BTCPay, without having to use a CMS like WordPress.")]),e._v(" "),t("p",[e._v("The most important future use-case for external storage service will be Lightning Network static channel backups and the backup of the entire BTCPay Server.")]),e._v(" "),t("h2",{attrs:{id:"internal-wallet-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#internal-wallet-improvements"}},[e._v("#")]),e._v(" Internal Wallet improvements")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://twitter.com/NicolasDorier",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nicolas Dorier"),t("OutboundLink")],1),e._v(" continues to improve and refactor the "),t("a",{attrs:{href:"https://docs.btcpayserver.org/features/wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("internal BTCPay wallet"),t("OutboundLink")],1),e._v(", which allows users to use hardware wallets with their full nodes for maximum privacy and security. Some of the changes are preparation for the Partially Signed Bitcoin Transaction ("),t("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/blob/master/doc/psbt.md#psbt-howto-for-bitcoin-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("PSBT"),t("OutboundLink")],1),e._v(") support that's coming very soon to BTCPay.")]),e._v(" "),t("p",[e._v("Changes to the wallet include:")]),e._v(" "),t("ul",[t("li",[e._v("Full Node P2P support - Allows you to connect wallets that support new bitcoin-p2p links (Blockstream's "),t("a",{attrs:{href:"https://blockstream.com/2019/03/19/en-the-all-new-blockstream-green-wallet/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Green Wallet)"),t("OutboundLink")],1),e._v(" to your full BTCPay node if you're using Tor Hidden Service and avoid leaking information to third-party servers. To connect, enable Tor and scan the QR code from a supported mobile wallet.")]),e._v(" "),t("li",[e._v("Wallet rescan: Remove limitation reserved for SegWit only (PSBT will come to rescue)")]),e._v(" "),t("li",[e._v("Wallet transaction list: Can show either relative date or absolute date of transactions")])]),e._v(" "),t("h2",{attrs:{id:"various-bug-fixes-and-ux-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#various-bug-fixes-and-ux-improvements"}},[e._v("#")]),e._v(" Various bug fixes and UX improvements")]),e._v(" "),t("ul",[t("li",[e._v("Header menu: Use icons for profile / sign in and sign out instead of text. @NicolasDorier")]),e._v(" "),t("li",[e._v("Fix: Coinswitch exchange with altcoins popup not showing bug fix @amitasaurus")]),e._v(" "),t("li",[e._v("Fix: Store Email Password not saving @MrKukks")]),e._v(" "),t("li",[e._v("Show warning on apps if emails settings are not complete @MrKukks")]),e._v(" "),t("li",[e._v("Fix date time issues on crowdfund/payment requests @MrKukks")]),e._v(" "),t("li",[e._v("Various grammar fixes @bitcoinbrisbane")])]),e._v(" "),t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),t("ul",[t("li",[e._v("Ledger Wallet not working on chrome. The fix is coming in the next Ledger App update soon.")])]),e._v(" "),t("h2",{attrs:{id:"thank-you-to-our-contributors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thank-you-to-our-contributors"}},[e._v("#")]),e._v(" Thank you to our contributors")]),e._v(" "),t("p",[e._v("As always, we would like to thank to all of our contributors. The following people contributed to the either by coding, testing, documenting or providing useful feedback.")]),e._v(" "),t("p",[e._v("In alphabetical order:")]),e._v(" "),t("ul",[t("li",[e._v("amitasaurus")]),e._v(" "),t("li",[e._v("bitcoinbrisbane")]),e._v(" "),t("li",[e._v("boblechinois")]),e._v(" "),t("li",[e._v("britttttk")]),e._v(" "),t("li",[e._v("MrKukks")]),e._v(" "),t("li",[e._v("NicolasDorier")]),e._v(" "),t("li",[e._v("Pavlenex")]),e._v(" "),t("li",[e._v("r0ckstardev")])]),e._v(" "),t("p",[e._v("We would like to thank all translators who continuously make BTCPay available worldwide by translating the software and content. Also, check the improvements on our new website made by "),t("a",{attrs:{href:"https://twitter.com/vswee",target:"_blank",rel:"noopener noreferrer"}},[e._v("vswee"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Update your BTCPay to 1.0.3.95")]),e._v(" "),t("p",[e._v("To "),t("a",{attrs:{href:"https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("update"),t("OutboundLink")],1),e._v(" to the latest version, go to your BTCPay > Server Settings > Maintenance > "),t("em",[t("strong",[e._v("Update")])]),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);