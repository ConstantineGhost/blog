(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{376:function(e,t,r){"use strict";r.r(t);var a=r(10),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("It's been a while since the last BTCPay Server major update and the team has been hard at work pushing through a number of efforts in that time, ranging from migrating our front-end UI framework to increasing the Greenfield API capabilities, setting up the foundation for our plugin system and crushing numerous bugs!")]),e._v(" "),t("p",[t("strong",[e._v("BTCPay Server 1.2.0")]),e._v(" is a major update that includes more than forty items. We won't cover them all in this release post, but as usual, the high-time preference crowd can view the "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("full changelog"),t("OutboundLink")],1),e._v(" directly.")]),e._v(" "),t("p",[e._v("To update, simply navigate to your "),t("strong",[e._v("Server Settings > Maintenance")]),e._v(" tab and click "),t("strong",[e._v("Update")]),e._v(" or use the command "),t("em",[e._v("btcpay-update.sh")]),e._v(" in the command line.")]),e._v(" "),t("h2",{attrs:{id:"continuation-of-our-ui-updates-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#continuation-of-our-ui-updates-"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Continuation of our UI updates")]),e._v(" 🎨")]),e._v(" "),t("p",[e._v("Since the beginning of 2021, our design contributors have improved a number of pages in the interface. This release includes a number of these updated pages and the migration from Bootstrap 3 to Bootstrap 5. This framework migration enables us to create and implement more modern-looking pages and provide a better experience.")]),e._v(" "),t("h3",{attrs:{id:"wallet-signing-wizard-🧙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wallet-signing-wizard-🧙"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Wallet Signing Wizard")]),e._v(" 🧙")]),e._v(" "),t("p",[e._v("BTCPay Server wallet allows you to receive and spend transactions. If you're self-hosting a server, it's a wallet relying on your full node. With hardware wallet support and an abundance of privacy-enhancing features, we've seen an increasing amount of wallet usage. The community feedback was that signing options could be improved.")]),e._v(" "),t("p",[e._v("That's why the 1.2.0 now offers a signing wizard, which should simplify and, in some cases, automate choices that you may face when signing a transaction. If you're using a hot wallet, the wallet now signs instantly.")]),e._v(" "),t("p",[e._v("Another change relating to the hot wallet, is that from now on, your hot wallet enables "),t("em",[e._v("PayJoin")]),e._v(" by default.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPay1.0.2WalletSign.gif",alt:"BTCPay 1.2.0 Crowdfund view"}})]),e._v(" "),t("h3",{attrs:{id:"apps-ui-improved-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apps-ui-improved-"}},[e._v("#")]),e._v(" Apps UI Improved 💻")]),e._v(" "),t("p",[e._v("The "),t("em",[e._v("Crowdfund")]),e._v(" and "),t("em",[e._v("Point-Of-Sale")]),e._v(" app creation pages have been updated - making navigation and creation of your favorite apps smoother.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/crowdfunding-ui-improvements.gif",alt:"BTCPay 1.2.0 Crowdfund view"}})]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/pos-ui-improvements.gif",alt:"BTCPay 1.2.0 POS view"}})]),e._v(" "),t("p",[e._v("A number of UI improvements and fixes also made it into this release, namely relating to the following pages:")]),e._v(" "),t("ul",[t("li",[e._v("The server settings")]),e._v(" "),t("li",[e._v("The payment request")]),e._v(" "),t("li",[e._v("The notifications")])]),e._v(" "),t("h3",{attrs:{id:"btcpay-vault-notification-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-vault-notification-"}},[e._v("#")]),e._v(" "),t("strong",[e._v("BTCPay Vault notification")]),e._v(" 🔐")]),e._v(" "),t("p",[e._v("BTCPay Vault is an application which allows you to plug your hardware wallet and use it within your BTCPay Server - thanks to the "),t("a",{attrs:{href:"https://github.com/bitcoin-core/HWI",target:"_blank",rel:"noopener noreferrer"}},[e._v("HWI"),t("OutboundLink")],1),e._v(" (Hardware Wallet Integration).\nDue to changes in "),t("a",{attrs:{href:"https://github.com/bitcoin-core/HWI/releases/tag/2.0.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("HWI 2.0.1"),t("OutboundLink")],1),e._v(", BTCPay Server will now detect the version of the Vault application and notify you to update in case you're using an older version.")]),e._v(" "),t("p",[e._v("For the full list, check out the "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("changelog"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"top-up-invoices-🧾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#top-up-invoices-🧾"}},[e._v("#")]),e._v(" Top-up invoices 🧾")]),e._v(" "),t("p",[e._v("Lots of our community members use BTCPay Server to accept donations. Unlike our regular invoice, where a fixed price and rate are needed, the donations don't have that requirement.")]),e._v(" "),t("p",[e._v("Another interesting use-case is topping up the account. Certain merchants wanted to have the ability to accept whatever the amount is paid since they're crediting it to the customer's account. So whatever customer sends them, that's what they'll credit to their account.")]),e._v(" "),t("p",[t("em",[e._v("Top-up invoice")]),e._v(" is a new type of invoice, which doesn't require an amount. This invoice is considered paid as soon as payment is detected.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/topupinvoice.png",alt:"BTCPay 1.2.0 Crowdfund view"}})]),e._v(" "),t("p",[e._v("For now, the top-up invoice is available in the "),t("a",{attrs:{href:"https://docs.btcpayserver.org/FAQ/FAQ-Apps/#what-is-a-payment-button",target:"_blank",rel:"noopener noreferrer"}},[e._v("pay button"),t("OutboundLink")],1),e._v(". Depending on the community feedback, we intend to gradually roll it out to other apps. You can also generate a top-up invoice manually from "),t("code",[e._v("Invoices > Create a new invoice")]),e._v(".")]),e._v(" "),t("p",[e._v("If you're using our "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Greenfield API"),t("OutboundLink")],1),e._v(", you can set the "),t("code",[e._v("amount")]),e._v(" to "),t("code",[e._v("null")]),e._v(" or "),t("code",[e._v("undefined")]),e._v(" to start using the feature.")]),e._v(" "),t("p",[e._v("Top-up invoice can potentially improve the privacy of the payee, since they can spend an entire UTXO topping their account and avoiding the change.")]),e._v(" "),t("h2",{attrs:{id:"btcpay-plugins-paving-the-road-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-plugins-paving-the-road-"}},[e._v("#")]),e._v(" "),t("strong",[e._v("BTCPay Plugins - Paving the road")]),e._v(" 🔌")]),e._v(" "),t("p",[e._v("In this release, we also introduced the Greenfield API to the internal codebase.\nThis allows plugins to gain access to the many internal features they will require in the future.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPay1.0.2-plugins.png",alt:"BTCPay 1.2.0 Plugins view"}})]),e._v(" "),t("p",[e._v("This addition is paving the road towards having a plugin system in BTCPay that adds infinite functionality and customization on top of the core feature available.")]),e._v(" "),t("p",[e._v("The plugin system should allow developers to build easier on top of BTCPay without relying on the core team to develop, agree, or review the changes. These plugins can be maintained separately and activated by users on demand. This introduces a whole new vision for BTCPay, a payment platform or as we like to call it, the WordPress of Bitcoin.")]),e._v(" "),t("p",[e._v("Some behind-the-scenes improvements are being made, making sure a proper foundation for the plugin system is set up. We're one step closer to extracting certain functionalities from the core system and shipping them as independent plugins (For example, Shopify).")]),e._v(" "),t("p",[e._v("In the next major release, you can expect more progress on the plugins - stay tuned!")]),e._v(" "),t("h2",{attrs:{id:"greenfield-api-️"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#greenfield-api-️"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Greenfield API")]),e._v(" 🏗️")]),e._v(" "),t("p",[e._v("The Greenfield is still being perfected and additions are being made to it in every update.")]),e._v(" "),t("p",[e._v("Today, here's what's "),t("strong",[e._v("new and improved in Greenfield")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Add Delete User")]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("CanModifyInvoices")]),e._v(" permission")]),e._v(" "),t("li",[e._v("Add text search terms to an invoice with "),t("code",[e._v("additionalSearchTerms")])]),e._v(" "),t("li",[e._v("Add Get store Payment methods")]),e._v(" "),t("li",[e._v("Add Generate Store OnChain Wallet")]),e._v(" "),t("li",[e._v("Add StoreId to Invoice model")]),e._v(" "),t("li",[e._v("Change "),t("code",[e._v("enabledOnly")]),e._v(" filter to "),t("code",[e._v("enabled")])])]),e._v(" "),t("p",[e._v("Some "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API documentation"),t("OutboundLink")],1),e._v(" was also corrected to reflect what actually happens when using the endpoints.")]),e._v(" "),t("h2",{attrs:{id:"nbxplorer-specifics-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nbxplorer-specifics-"}},[e._v("#")]),e._v(" "),t("strong",[e._v("NBXplorer specifics")]),e._v(" 🔍")]),e._v(" "),t("p",[e._v("This release also includes NBXplorer 2.1.58.\nDocker deployments are updated to this version automatically. Other deployment methods need to update manually.")]),e._v(" "),t("p",[e._v("NBXplorer 2.1.58 fixes a number of bugs and enables "),t("strong",[e._v("sending to Taproot")]),e._v(" formatted addresses.")]),e._v(" "),t("h2",{attrs:{id:"lightning-network-implementation-bumps-⚡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightning-network-implementation-bumps-⚡"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Lightning Network implementation bumps")]),e._v(" ⚡")]),e._v(" "),t("p",[e._v("We've updated the following Lightning Network implementations in our Docker deployment:")]),e._v(" "),t("ul",[t("li",[e._v("LND: 0.13.1")]),e._v(" "),t("li",[e._v("c-lightning: 0.10.1")])]),e._v(" "),t("h2",{attrs:{id:"translations-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#translations-"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Translations")]),e._v(" 🌐")]),e._v(" "),t("p",[e._v("Last but not least, BTCPay Server 1.2.0 sees improvements and error corrections in multiple translations for the checkout page in:")]),e._v(" "),t("ul",[t("li",[e._v("Bulgarian")]),e._v(" "),t("li",[e._v("Dutch")]),e._v(" "),t("li",[e._v("Finnish")]),e._v(" "),t("li",[e._v("Hebrew")]),e._v(" "),t("li",[e._v("Kazath")]),e._v(" "),t("li",[e._v("Korean")]),e._v(" "),t("li",[e._v("Portuguese")])]),e._v(" "),t("p",[e._v("Related to translations, the checkout page can automatically detect customer's prefered language. You can enable the "),t("code",[e._v("Auto-detect language on checkout")]),e._v(" option in the Store Settings > Checkout Experience > Appearance.")]),e._v(" "),t("h2",{attrs:{id:"new-blog-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-blog-"}},[e._v("#")]),e._v(" New Blog 📝")]),e._v(" "),t("p",[e._v("BTCPay Server is a team of collaborators around the internet. As an open-source project, we tend to do everything in the "),t("em",[e._v("open")]),e._v(". The open-organization approach means that not only our code is free and opened, but our entire infrastructure. The way we "),t("a",{attrs:{href:"https://chat.btcpayserver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("communicate"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/orgs/btcpayserver/projects/9",target:"_blank",rel:"noopener noreferrer"}},[e._v("plan"),t("OutboundLink")],1),e._v(" and execute are all in the eyes of the public.")]),e._v(" "),t("p",[e._v("In case you haven't noticed, the blog post you're reading right now is on our brand-new blog. The blog was our last piece of a puzzle to open-source our entire infrastructure on GitHub.\nEarlier, we used WordPress, but thanks to our new contributor "),t("a",{attrs:{href:"https://github.com/activefog",target:"_blank",rel:"noopener noreferrer"}},[e._v("@activefog"),t("OutboundLink")],1),e._v(" and our wizard "),t("a",{attrs:{href:"https://github.com/dennisreimann",target:"_blank",rel:"noopener noreferrer"}},[e._v("@dennisreimann"),t("OutboundLink")],1),e._v(" we've switched to the same stack that's used for our documentation - VuePress. This not only means better transparency but also the unification of our design guidelines as well.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("That's going to be all for highlights of this BTCPay Server 1.2.0 release!")]),e._v(" "),t("p",[e._v("As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our "),t("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community chat"),t("OutboundLink")],1),e._v(". We hope you enjoy what this update has to offer.")]),e._v(" "),t("p",[e._v("As always, thank you to our invaluable contributors, we love you:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/activefog",target:"_blank",rel:"noopener noreferrer"}},[e._v("@activefog"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://twitter.com/andhans_jail",target:"_blank",rel:"noopener noreferrer"}},[e._v("@andhans"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/britttttk",target:"_blank",rel:"noopener noreferrer"}},[e._v("@britttttk"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/cypherbeerus",target:"_blank",rel:"noopener noreferrer"}},[e._v("@cypherbeerus"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/dennisreimann",target:"_blank",rel:"noopener noreferrer"}},[e._v("@dennisreimann"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/dstrukt",target:"_blank",rel:"noopener noreferrer"}},[e._v("@dstrukt"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/jkljajic",target:"_blank",rel:"noopener noreferrer"}},[e._v("@jkljajic"),t("OutboundLink")],1),t("a",{attrs:{href:"https://github.com/johanf85",target:"_blank",rel:"noopener noreferrer"}},[e._v("johanf85"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/jonathanalevi",target:"_blank",rel:"noopener noreferrer"}},[e._v("@jonathanalevi"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/JimiHFord/",target:"_blank",rel:"noopener noreferrer"}},[e._v("@JimiHFord"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/kukks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Kukks"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/nicolasdorier/",target:"_blank",rel:"noopener noreferrer"}},[e._v("@NicolasDorier"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/pavlenex/",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Pavlenex"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/rockstardev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("@rockstardev"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/sageprogrammer",target:"_blank",rel:"noopener noreferrer"}},[e._v("@sageprogrammer"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/bolatovumar",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ubolator"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/woutersamaey",target:"_blank",rel:"noopener noreferrer"}},[e._v("@woutersamaey"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/zaxounette",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Zaxounette"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("The BTCPay Server team 💚.")])])}),[],!1,null,null,null);t.default=n.exports}}]);