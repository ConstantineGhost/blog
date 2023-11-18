(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{375:function(e,t,r){"use strict";r.r(t);var a=r(10),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"btcpay-server-release-1100"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-release-1100"}},[e._v("#")]),e._v(" BTCPay Server release 1.10.0")]),e._v(" "),t("p",[e._v("We are introducing the highly anticipated major release of BTCPay Server: version 1.10.0! After weeks of dedicated effort, we are thrilled to unveil a host of exciting enhancements and improvements.")]),e._v(" "),t("p",[e._v("Our team has been working to address any outstanding issues, resulting in enhancements and bug fixes but also an array of new features -  the new store role management system and the introduction of the hide sensitive information button, which allows you to effortlessly hide private information from prying eyes. Most notably, we are thrilled to present the fully refined user interface of the form builder!")]),e._v(" "),t("h2",{attrs:{id:"🧾-new-form-builder-drag-and-drop-ui-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🧾-new-form-builder-drag-and-drop-ui-"}},[e._v("#")]),e._v(" 🧾 New Form Builder Drag and Drop UI!")]),e._v(" "),t("p",[e._v("Ever since we’ve "),t("a",{attrs:{href:"https://blog.btcpayserver.org/btcpay-server-1-8-0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("introduced"),t("OutboundLink")],1),e._v(" custom forms, which allow you to collect various customer information during the checkout so you can process orders in a more personalized manner, we’ve been hearing your feedback around the complexity of using them.")]),e._v(" "),t("p",[e._v("In this release, we’re introducing a drag-and-drop form builder UI, enabling you to design customizable forms to your liking.")]),e._v(" "),t("p",[e._v("Why tell you about the drag-and-drop form builder when we can show it?\nIn this custom form, let’s use the restaurant use case as an example again. In Store Settings -> Forms -> Click on “Create a new form.” When creating a new form, we always start with a default blank field. Set the field values on the right side of the form builder. Once you’ve set it, we can click “Add new element” at the bottom of your first, for the second field, and so on.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPayServerForms.gif",alt:"BTCPay Server custom forms example"}})]),e._v(" "),t("p",[e._v("Did you get to play around with forms already? Please share your experience with us on "),t("a",{attrs:{href:"https://twitter.com/BtcpayServer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://snort.social/p/npub155m2k8ml8sqn8w4dhh689vdv0t2twa8dgvkpnzfggxf4wfughjsq2cdcvg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nostr"),t("OutboundLink")],1),e._v(" or come join "),t("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("our Mattermost chat"),t("OutboundLink")],1),e._v("! We’d love to hear from you! For more details on form builder, check our "),t("a",{attrs:{href:"https://docs.btcpayserver.org/Forms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"-custom-role-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-custom-role-system"}},[e._v("#")]),e._v(" 🔒 Custom role system")]),e._v(" "),t("p",[e._v("Are you currently operating a store with a team of employees? If the existing guest and admin roles haven't quite met your requirements, we have some exciting news for you. v1.10.0 ships with a brand-new Custom Role management system.")]),e._v(" "),t("p",[e._v("This upgrade empowers you to tailor roles to your exact needs, granting your staff access to specific permissions within your store. Whether you need roles for cashiers, administrative personnel, or order pickers in your warehouse, you can now effortlessly create as many custom roles as necessary, streamlining and optimising your store's operations.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPayServerRoles.gif",alt:"BTCPay Server custom roles"}})]),e._v(" "),t("h2",{attrs:{id:"🥷-hide-sensitive-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🥷-hide-sensitive-information"}},[e._v("#")]),e._v(" 🥷 Hide sensitive information")]),e._v(" "),t("p",[e._v("If you ever opened your BTCPay in a coffee shop or a coworking space we’re sure you were nervous to not accidentally reveal your wallet balance or invoice amounts. The new privacy-enhancing feature within your Account Settings will allow you to conveniently hide such information from prying eyes.")]),e._v(" "),t("p",[e._v('To try it out, click on your Account in the sidebar’s bottom left > Toggle "Hide Sensitive Information" to ON, all value fields will be hidden. From Dashboard to every field in an invoice, none are displayed with value; all are masked.')]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPayServerHide.gif",alt:"BTCPay Server Hide sensitive info"}})]),e._v(" "),t("h2",{attrs:{id:"-improved-invoice-filtering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-improved-invoice-filtering"}},[e._v("#")]),e._v(" 📝 Improved Invoice filtering.")]),e._v(" "),t("p",[e._v("Does your invoice page look daunting? We recognize that it’s hard to do proper filtering on your invoices. While we made big changes to adding custom tags, we still left behind the improvements on the filtering, no longer tho! In this release, we rehauled the invoice filtering, now you can set proper filters and find those invoices you specifically were looking for.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPayServerInvoiceFilter.gif",alt:"BTCPay Server Hide invoice filter"}})]),e._v(" "),t("h2",{attrs:{id:"-plugin-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-plugin-updates"}},[e._v("#")]),e._v(" 📒 Plugin updates")]),e._v(" "),t("p",[e._v("Every Major release comes with many improvements and upgrades on Plugins. As the plugin system is being built out longer and crazier every time, this release cycle saw great improvements in LNBank, Nostr, and even a new one in Auto-forward payments.")]),e._v(" "),t("h3",{attrs:{id:"lnbank"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lnbank"}},[e._v("#")]),e._v(" LNbank")]),e._v(" "),t("p",[e._v("Together with the new BTCPay Server version, "),t("a",{attrs:{href:"https://github.com/dennisreimann/btcpayserver-plugin-lnbank/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("LNbank v1.6"),t("OutboundLink")],1),e._v(' releases which incorporates the new "Hide Sensitive Info" setting and adds wallet balance graphs. A better admin overview of LNbank Wallets, what’s the current balance of those who use LNbank on your BTCPay Server instance. Users will now be warned when LNbank liabilities exceed the Lightning Node’s balance, API Access to LNbank wallets and LNURL Withdraw support has been added, which allows configurable LNURL withdrawal access per wallet.')]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPayServerHiden.gif",alt:"BTCPay Server Hide sensitive info"}})]),e._v(" "),t("h3",{attrs:{id:"nostr-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nostr-plugin"}},[e._v("#")]),e._v(" Nostr plugin")]),e._v(" "),t("p",[e._v("Some extra purple love this release, Nostr plugin has gotten an update along with v1.10.0. If you've installed the Nostr plugin, from now on, all created LNaddresses on BTCPay Server will allow for Nostr use with no extra configuration! Furthermore, the plugin has been optimized for performance enhancement and stability.")]),e._v(" "),t("h3",{attrs:{id:"auto-forward-payments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-forward-payments"}},[e._v("#")]),e._v(" Auto-forward Payments")]),e._v(" "),t("p",[e._v("Auto-forward Payments are meant to redirect payments to another address automatically. When a new invoice is settled, a payout will be automatically created for it, and when using the Payout processor, these will automatically complete the created payouts. A dashboard view is available to check the status of any redirected payment. Only BTC OnChain payments are currently supported! For further details on the plugin, please check the help section within the plugin!")]),e._v(" "),t("h2",{attrs:{id:"-general-quality-of-life-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-general-quality-of-life-improvements"}},[e._v("#")]),e._v(" 📚 General quality of life improvements")]),e._v(" "),t("h3",{attrs:{id:"point-of-sale-and-crowdfund-settings-move-from-yaml-to-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#point-of-sale-and-crowdfund-settings-move-from-yaml-to-json"}},[e._v("#")]),e._v(" Point of Sale and Crowdfund settings move from YAML to JSON")]),e._v(" "),t("p",[e._v("A bunch of smaller but impactful quality-of-life improvements in this release. Let’s start with a change to the Point of Sale and Crowdfund app settings; these used to be saved in YAML format; this release ports these over to JSON format. Have you saved your Point of Sale items list by code? Copy the code from your BTCPay Server again and make a new backup!")]),e._v(" "),t("h3",{attrs:{id:"creating-your-first-store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-first-store"}},[e._v("#")]),e._v(" Creating your first store")]),e._v(" "),t("p",[e._v("Before, we used to have a fairly unclean look to our initial server setup. We’ve touched this up by directly opening up with the first store creation wizard.")]),e._v(" "),t("h3",{attrs:{id:"improved-refund-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improved-refund-flow"}},[e._v("#")]),e._v(" Improved refund flow")]),e._v(" "),t("p",[e._v("We’ve gone back once more to the refund flow. There was feedback regarding overpaid invoices. From release 1.10.0, selecting overpaid in the refund flow is possible. This will generate a refund based on only the overpaid amount.")]),e._v(" "),t("h2",{attrs:{id:"🪲-bugs-squashing-spree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🪲-bugs-squashing-spree"}},[e._v("#")]),e._v(" 🪲 Bugs squashing spree")]),e._v(" "),t("p",[e._v("Bugs, not to be eaten but to be squashed. As usual, we’ve hit a ton of bug fixes between 1.9.0 and 1.10.0; we’ve also included a small list of fixes in this major release. Let’s sum them up.")]),e._v(" "),t("ul",[t("li",[e._v("When using LNbank, payments would sometimes not be detected by BTCPay Server.")]),e._v(" "),t("li",[e._v("When the store’s default currency is SATS, the display on the Dashboard was broken.")])]),e._v(" "),t("h2",{attrs:{id:"-beware-of-scammers-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-beware-of-scammers-"}},[e._v("#")]),e._v(" 🚨 Beware of scammers!")]),e._v(" "),t("p",[e._v("We posted a "),t("a",{attrs:{href:"https://blog.btcpayserver.org/bitcoin-bonus-scam/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog last month"),t("OutboundLink")],1),e._v(" about an ongoing scam that abuses our brand and software. Please be aware our team will only reach out to you through our official channels. Here our team is clearly marked as contribs. We will never email you! We will never start a Telegram DM! Verify who you are talking to!")]),e._v(" "),t("p",[e._v("To be sure you're talking to our team members, ALWAYS join our "),t("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official mattermost chat"),t("OutboundLink")],1),e._v(" and verify if things are as they get proposed through other ways.")]),e._v(" "),t("h2",{attrs:{id:"🫶-donate-via-opensats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🫶-donate-via-opensats"}},[e._v("#")]),e._v(" 🫶 Donate via OpenSats")]),e._v(" "),t("p",[e._v("We're grateful that OpenSats partnered with us to help individuals donate to the BTCPay Server project. If you ever wondered how you could support BTCPay Server contributors without being a company, head on to "),t("a",{attrs:{href:"https://opensats.org/projects/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenSats"),t("OutboundLink")],1),e._v(" and feel free to throw a donation.")]),e._v(" "),t("p",[e._v("As OpenSats is a US-based public charity registered as a 501(c)(3), you can apply for a tax deduction on these donations. This wasn't previously possible, as BTCPay Server Foundation works differently. With the opportunity given by OpenSats, it's now possible to "),t("a",{attrs:{href:"https://opensats.org/projects/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("donate"),t("OutboundLink")],1),e._v(" to BTCPay Server as an individual!")]),e._v(" "),t("h2",{attrs:{id:"-thank-you"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-thank-you"}},[e._v("#")]),e._v(" 💚 Thank you")]),e._v(" "),t("p",[e._v("As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our "),t("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community chat"),t("OutboundLink")],1),e._v(". We hope you enjoy what this update has to offer. As always, thank you to our invaluable contributors, who directly participated in making 1.10.0 possible.")]),e._v(" "),t("p",[e._v("Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making and more! BTCPay Server could never rapidly progress without your help!")]),e._v(" "),t("p",[e._v("The BTCPay Server team 💚")])])}),[],!1,null,null,null);t.default=o.exports}}]);