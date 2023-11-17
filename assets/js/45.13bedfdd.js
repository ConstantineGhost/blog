(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{365:function(e,t,a){"use strict";a.r(t);var o=a(10),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("The new major release of BTCPay Server is here - 1.7.0!")]),e._v(" "),a("p",[e._v("If we were to name it, its name would be \"TookUs2yearsToListenToYourFeedback\". We're introducing a new opt-in checkout page, store branding, server's white-labelling, and the ability to collect buyers' shipping information alongside many other improvements.")]),e._v(" "),a("p",[e._v("No contributors got hurt in the making of the release, but a few bugs got squashed. Check out detailed release notes "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/releases/tag/v1.7.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Let's check what's new in 1.7.0!")]),e._v(" "),a("h2",{attrs:{id:"-new-checkout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-new-checkout"}},[e._v("#")]),e._v(" 🛒 New checkout")]),e._v(" "),a("p",[e._v("We've been listening to your feedback for over two years now. We heard all the typical problems customers face when interacting with the checkout. Our design team returned to the drawing board and created a bunch of explorations and prototypes. Seriously, thank you d11n and Dstruk_ for these past months!")]),e._v(" "),a("figure",[a("img",{attrs:{src:"/images/1.7.0-V2Checkout.png",alt:""}})]),e._v(" "),a("p",[e._v("The new checkout page, for now, is an opt-in feature that completely abstracts the complexities and is focused only on you getting paid.")]),e._v(" "),a("figure",[a("img",{attrs:{src:"/images/1.7.0-CheckoutV2expandede-details.png",alt:""}})]),e._v(" "),a("p",[e._v("Besides the cleaner design, we’ve made several critical improvements:")]),e._v(" "),a("ul",[a("li",[e._v("Removing the invoice timer (We show the timer if less than 10% of the total time remains)")]),e._v(" "),a("li",[e._v("Removed address copy (Tap on QR to copy the payment link)")]),e._v(" "),a("li",[e._v("Unified scan and copy tabs")]),e._v(" "),a("li",[e._v("We’ve hidden all non-critical information under details accordion")])]),e._v(" "),a("p",[e._v("While checkout v2 aims to become the default, for now, we have it as an option. We’d love to invite you to test it out and let us know how we can further improve it, before we roll it out to everyone in one of the following major releases.")]),e._v(" "),a("p",[e._v("Enable Checkout v2 by going to Store Settings > Checkout appearance and flip the switch!")]),e._v(" "),a("h2",{attrs:{id:"🧾-unified-qr-code-for-on-chain-and-lightning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🧾-unified-qr-code-for-on-chain-and-lightning"}},[e._v("#")]),e._v(" 🧾 Unified QR code for on-chain and lightning")]),e._v(" "),a("p",[e._v("Lightning is bitcoin—end of the story. The end user should never consider the differentiation between the payment methods. Wallets should call the shots and do the calculations on which payment method to pick. We’ve had a unified QR code in BTCPay as an optional feature for two years, but the new checkout v2 pushes this one further by eliminating the tabs.")]),e._v(" "),a("figure",[a("img",{attrs:{src:"/images/1.7.0-UnifiedQRvsRerular.png",alt:""}})]),e._v(" "),a("p",[e._v("All your customer sees is a QR code. If they have an on-chain wallet, it will pay on-chain. If they have a lightning wallet, it should default to lightning. If a wallet is both on-chain and lightning, it should prompt the user how they want to pay or make a decision for the user.")]),e._v(" "),a("p",[e._v("CashApp recently introduced a unified QR code as a default, and we feel more confident recommending it. If you aim to abstract all the complexities for your customer, you can enable this option, and a single QR will show - BAM. Just like with the v2 checkout page, the unified QR is experimental.")]),e._v(" "),a("p",[e._v("We’d love to hear how it works, especially if you encounter any problems with wallets. Unified QR can be activated as an option within the new V2 checkout, under Store Settings > Checkout Appearance.")]),e._v(" "),a("h2",{attrs:{id:"-store-and-server-branding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-store-and-server-branding"}},[e._v("#")]),e._v(" 🎨 Store and server branding")]),e._v(" "),a("p",[e._v("During the BTCPay Day in Riga this year, a lot of third-party hosts approached us and requested a better way of white-labeling their servers.")]),e._v(" "),a("p",[e._v("In this release, we’re making a first step towards easier server customizations. You can select a server logo that will replace our logo on the public pages. We intend to add more options towards white labeling in the next release.")]),e._v(" "),a("figure",[a("img",{attrs:{src:"/images/1.7.0-CheckoutBrandingStore.png",alt:""}})]),e._v(" "),a("p",[e._v("Additionally, we’re rolling out the ability to customize your store logo and brand color, which in 1.7.0 will be reflected through a checkout page and the logo in the sidebar. Right now, the logo and branding of the store will immediately reflect the new checkout page.")]),e._v(" "),a("figure",[a("img",{attrs:{src:"/images/1.7.0-CheckoutBranding.png",alt:""}})]),e._v(" "),a("p",[e._v("Color and branding functionality will be extended to all public pages on a store level, such as payment requests, receipts, and refunds.")]),e._v(" "),a("h2",{attrs:{id:"-form-builder-request-shipping-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-form-builder-request-shipping-address"}},[e._v("#")]),e._v(" 🚚 Form Builder (request shipping address)")]),e._v(" "),a("p",[e._v("Ok, you can now stop asking us “How can I collect buyer shipping information through BTCPay”?. In this release, we’ve added the ability to have a shipping address request form built into the point of sale app and payment requests.")]),e._v(" "),a("p",[e._v("The magic behind the scenes that allows this is something we named - the form builder. In the future, we intend to add more customization options allowing you to build your own form fields, but we’d like to hear your feedback on what kind of forms you’d find useful.")]),e._v(" "),a("p",[e._v("Note that any data you collect through forms is your own. To make things quite clear, BTCPay as a project never collects any data.")]),e._v(" "),a("figure",[a("img",{attrs:{src:"/images/1.7.0-Formbuilder.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"-opencart-ecommerce-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-opencart-ecommerce-integration"}},[e._v("#")]),e._v(" 🏪 OpenCart ecommerce integration")]),e._v(" "),a("p",[e._v("If you're a merchant using OpenCart as your e-commerce platform, we now have a full fledged integration with this CMS. Check our documentation "),a("a",{attrs:{href:"https://docs.btcpayserver.org/OpenCart/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(", and connect your BTCPay to your OpenCart in no-time!")]),e._v(" "),a("h2",{attrs:{id:"greenfield-api-‍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#greenfield-api-‍"}},[e._v("#")]),e._v(" Greenfield API 👩‍💻")]),e._v(" "),a("p",[e._v("In this release we added a few new functionalities to our "),a("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Greenfield API"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Store Rates Config")]),e._v(" "),a("li",[e._v("Get Lightning invoices")]),e._v(" "),a("li",[e._v("Create payment request invoices")]),e._v(" "),a("li",[e._v("Allow marking payout status and payment proofs")]),e._v(" "),a("li",[e._v("Wallet Objects")]),e._v(" "),a("li",[e._v("Add crowdfund app create endpoint")])]),e._v(" "),a("p",[e._v("We're noticing an uptrend in people building on top of BTCPay Server. If you're building something with our Greenfield API, we're always looking to get more feedback on how to improve it and we love to see what you've made!")]),e._v(" "),a("h2",{attrs:{id:"🫶-donate-via-opensats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🫶-donate-via-opensats"}},[e._v("#")]),e._v(" 🫶 Donate via OpenSats")]),e._v(" "),a("p",[e._v("We're grateful that OpenSats partnered with us to help individuals donate to the BTCPay Server projects. If you ever wondered how you can support BTCPay contributors without being a company, "),a("a",{attrs:{href:"https://opensats.org/projects/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("head on to OpenSats"),a("OutboundLink")],1),e._v(" and feel free to throw a donation.")]),e._v(" "),a("p",[e._v("As OpenSats is a US Based public charity registered as a 501(c)(3), you can apply for a tax deduction on these donations. This wasn't previously possible, as BTCPay Server Foundation works differently. With the opportunity given by OpenSats, it's now possible to donate to BTCPay Server as an individual!")]),e._v(" "),a("h2",{attrs:{id:"thank-you-"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thank-you-"}},[e._v("#")]),e._v(" Thank you 💚")]),e._v(" "),a("p",[e._v("As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our "),a("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community chat"),a("OutboundLink")],1),e._v(". We hope you enjoy what this update has to offer.")]),e._v(" "),a("p",[e._v("As always, thank you to our invaluable contributors, who directly participated in making 1.7.0 possible.")]),e._v(" "),a("p",[e._v("Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making and more!")]),e._v(" "),a("p",[e._v("BTCPay Server could never rapidly progress without your help!")]),e._v(" "),a("p",[e._v("The BTCPay Server team 💚")])])}),[],!1,null,null,null);t.default=r.exports}}]);