(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{405:function(e,t,r){"use strict";r.r(t);var a=r(10),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("I regularly pay freelancers with bitcoin. When we agree on the price in fiat, due to volatility, the numbers never add up. I have to pay again, or they have to refund me. If we agree on the amount a few days in advance, someone is always at financial or time loss. Making sure they don’t re-use the address is a story for another day, but you feel the pain. (GitHub #"),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues/314",target:"_blank",rel:"noopener noreferrer"}},[e._v("314"),t("OutboundLink")],1),e._v(" )")])]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/j6CvwDPvfzQ/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=j6CvwDPvfzQ","data-id":"j6CvwDPvfzQ"}},[t("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/j6CvwDPvfzQ?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("p",[e._v("BTCPay is free and open-source cryptocurrency payment processor. In this article we would like to share how we addressed the above problem for our users.")]),e._v(" "),t("h3",{attrs:{id:"the-problem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-problem"}},[e._v("#")]),e._v(" The Problem")]),e._v(" "),t("p",[e._v("Our good old client Satoshi wants to pay us for a logo we designed.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BitcoinPayLink.png",alt:""}})]),e._v(" "),t("ul",[t("li",[e._v("Satoshi needs to ask for the exact "),t("strong",[e._v("amount")]),e._v(".")]),e._v(" "),t("li",[e._v("Satoshi needs our "),t("strong",[e._v("address")])]),e._v(" "),t("li",[e._v("Satoshi needs to make sure there is "),t("strong",[e._v("no address re-use")]),e._v(", since that’s a huge privacy issue")]),e._v(" "),t("li",[e._v("Satoshi’s "),t("strong",[e._v("ISP may")]),e._v(" "),t("a",{attrs:{href:"https://old.reddit.com/r/Bitcoin/comments/agru8z/email_provider_blocking_messages_with_bitcoin_word/",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("block")]),t("OutboundLink")],1),e._v(" the email if he mentions Bitcoin.")]),e._v(" "),t("li",[e._v("Satoshi does not have enough BTC, he needs "),t("strong",[e._v("repeat")]),e._v(" the same process")]),e._v(" "),t("li",[e._v("All this time the "),t("strong",[e._v("rates change")])]),e._v(" "),t("li",[e._v("Satoshi has "),t("strong",[e._v("no invoice confirmation")]),e._v(" to print for his accountant")])]),e._v(" "),t("h3",{attrs:{id:"the-solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-solution"}},[e._v("#")]),e._v(" The Solution")]),e._v(" "),t("p",[e._v("Introducing - "),t("strong",[e._v("Payment Requests")]),e._v(", a new type of time-sensitive invoice pages built into BTCPay that allow you to get paid in cryptocurrency just by sharing a simple URL.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BitcoinPayLink2.png",alt:""}})]),e._v(" "),t("ul",[t("li",[e._v("Seller creates an invoice, adds expiration date, customizes it and shares as a regular link.")]),e._v(" "),t("li",[e._v("Buyer can pay invoice whenever preferred. The exchange rates update accordingly.")]),e._v(" "),t("li",[e._v("Buyer can pay right away or later, on-chain or via the Lightning Network. The invoice can even be paid partially with LN and partially on-chain, or even with multiple coins.")]),e._v(" "),t("li",[e._v("The exchange rate is determined when buyer tries to pay the invoice.")]),e._v(" "),t("li",[e._v("Buyer can print the paid invoice.")]),e._v(" "),t("li",[e._v("Seller can export all the relevant data as CSV later and send it to accountant.")]),e._v(" "),t("li",[e._v("Since they’re using BTCPay, money goes directly from one wallet to another, no custodians, no fees.")])]),e._v(" "),t("p",[t("strong",[t("img",{attrs:{src:"/images/BTCPay-payment-Requests-1.gif",alt:""}})])]),e._v(" "),t("h3",{attrs:{id:"how-it-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works?")]),e._v(" "),t("ol",[t("li",[e._v("Create a payment request (enter the amount, the expiration time, and description)")]),e._v(" "),t("li",[e._v("Customize the design (optional)")]),e._v(" "),t("li",[e._v("Share the URL.")])]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Creating a payment request in BTCPay:")])])]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPay-payment-Requests.gif",alt:""}})]),e._v(" "),t("p",[e._v("We’ve added lots of flexibility, so you can use custom CSS, or add a ready-made BootStrap theme.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPayRequestDesign.gif",alt:""}})]),e._v(" "),t("p",[e._v("You can save the invoice for later and preview it, or publish it right away and send it to your customers.")]),e._v(" "),t("h3",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),t("ul",[t("li",[e._v("Set the expiration time")]),e._v(" "),t("li",[e._v("Printer-friendly mode")]),e._v(" "),t("li",[e._v("Customizable design (css/theme)")]),e._v(" "),t("li",[e._v("Custom or fixed amount")])]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Print invoices with ease:")])])]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/Print-Preview-BItcoin-Invoice.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"roadmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" Roadmap")]),e._v(" "),t("p",[e._v("We plan to further develop and improve the payment requests based on your feedback.")]),e._v(" "),t("p",[e._v("Short term improvements we plan to implement are:")]),e._v(" "),t("ul",[t("li",[e._v("One-Time or Recurring requests (subscriptions)")]),e._v(" "),t("li",[e._v("Send a request automatically via an e-mail (SMTP integration)")])]),e._v(" "),t("h3",{attrs:{id:"try-it-out"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#try-it-out"}},[e._v("#")]),e._v(" Try it out")]),e._v(" "),t("p",[e._v("Excited? Here’s how you can create a payment request quickly:")]),e._v(" "),t("ol",[t("li",[e._v("Register "),t("a",{attrs:{href:"https://mainnet.demo.btcpayserver.org/register",target:"_blank",rel:"noopener noreferrer"}},[e._v("on our demo server"),t("OutboundLink")],1),e._v(" (you can "),t("a",{attrs:{href:"https://docs.btcpayserver.org/deployment/deployment",target:"_blank",rel:"noopener noreferrer"}},[e._v("self-host"),t("OutboundLink")],1),e._v(" BTCPay or use a "),t("a",{attrs:{href:"https://docs.btcpayserver.org/deployment/thirdpartyhosting",target:"_blank",rel:"noopener noreferrer"}},[e._v("third-party host"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.btcpayserver.org/btcpay-basics/gettingstarted#creating-btcpay-store",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a store"),t("OutboundLink")],1),e._v(" and connect your wallet (no private keys required).")]),e._v(" "),t("li",[e._v("Payment Requests > Create.")])]),e._v(" "),t("p",[e._v("We’re very proud of this feature. In order to improve it further, we need more people to use it. Give it a try, and share your invoices and experiences with us on "),t("a",{attrs:{href:"https://twitter.com/BtcpayServer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);