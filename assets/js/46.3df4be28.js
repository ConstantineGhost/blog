(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{365:function(e,t,a){"use strict";a.r(t);var o=a(10),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Got my morning coffee. Started the morning workout.")]),e._v(" "),t("p",[e._v("Okay, I lied about the workout.")]),e._v(" "),t("p",[e._v("Checked Mattermost, then Telegram.")]),e._v(" "),t("p",[e._v("Quiet.")]),e._v(" "),t("p",[e._v("It appears we won't be making a new BTCPay release today. Strange. I got used to that routine. We make releases frequently.")]),e._v(" "),t("p",[e._v("We're one and a half year old open-source project with exactly "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("373 releases"),t("OutboundLink")],1),e._v(" at the time of writing. That's crazy!")]),e._v(" "),t("p",[e._v("Every day there's something to be done in BTCPay. Apparently, today is not that day.")]),e._v(" "),t("p",[e._v("That's why I decided to write a cringy titled article that will hopefully clear out some common misconceptions and confusion surrounding BTCPay. Hopefully, it will give you a better overview of who we are and why we do what we do.")]),e._v(" "),t("p",[e._v("Without further ado, here are 10 "),t("em",[e._v("shocking")]),e._v(" misconceptions.")]),e._v(" "),t("h2",{attrs:{id:"1-btcpay-only-runs-on-azure-and-lunanode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#1-btcpay-only-runs-on-azure-and-lunanode"}},[e._v("#")]),e._v(" 1. BTCPay only runs on Azure and LunaNode")]),e._v(" "),t("p",[e._v('Recently someone asked me: "When can I run BTCPay on something other than Azure or LunaNode".')]),e._v(" "),t("p",[e._v("I must admit the question caught me by surprise.  I wasn't aware of the perception people had, but I completely understand where that idea comes from.")]),e._v(" "),t("p",[e._v("First of all, BTCPay was "),t("strong",[e._v("never limited")]),e._v(" to only Azure or LunaNode. We just happened to create tutorials and 1-click deployments for those two providers.")]),e._v(" "),t("p",[e._v("In reality, it has "),t("strong",[e._v("always been")]),e._v(" possible to run BTCPay on a VPS of your choice. Due to a variety of providers, we can't document them all, but the community constantly tries to create a step by step "),t("a",{attrs:{href:"http://docs.btcpayserver.org/deployment/",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployment tutorials"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/You-can-deploy-BTCPay-on-a-raspberry-pi.jpg",alt:""}})]),e._v(" "),t("p",[e._v("You can deploy BTCPay on any VPS which meets the minimal requirements:")]),e._v(" "),t("ol",[t("li",[e._v("Docker")]),e._v(" "),t("li",[e._v("2GB RAM (It's possible with 1GB)")]),e._v(" "),t("li",[e._v("at least 15 GB of storage (depending on the "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker#generated-docker-compose-",target:"_blank",rel:"noopener noreferrer"}},[e._v("pruning option"),t("OutboundLink")],1),e._v(" you select)")])]),e._v(" "),t("p",[e._v("To  deploy BTCPay you just have to run these 4 lines on any VPS:")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/btcpayserver/btcpayserver-docker\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAY_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"btcpay.yourdomain.com"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" ./btcpay-setup.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("You can, of course, modify "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker#environment-variables",target:"_blank",rel:"noopener noreferrer"}},[e._v("the environment variables"),t("OutboundLink")],1),e._v(" to adjust the installation to your business' specific needs.")]),e._v(" "),t("p",[e._v("The fact that you can deploy "),t("a",{attrs:{href:"https://docs.btcpayserver.org/deployment/raspberrypideployment",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay on Raspberry Pi"),t("OutboundLink")],1),e._v(" speaks volumes about the countless optimizations we've done to make the entire stack less resource-intensive and easier to run. As a matter of fact, we encourage people to run BTCPay on their own hardware and use a variety of VPS providers to decentralize even more.")]),e._v(" "),t("p",[e._v("Soon with "),t("a",{attrs:{href:"https://medium.com/@BtcpayServer/about-tor-and-btcpay-server-2ec1e4bd5e51",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tor support coming,"),t("OutboundLink")],1),e._v(" the number of code lines needed to deploy will be 3, without the need to configure DNS or even have a domain name. Apart from that, we also have work being done on a web installation wizard that can guide you through the entire process in a sleek UI without needing to touch any code or SSH terminal. You can follow the progress on the web installer at this "),t("a",{attrs:{href:"https://github.com/Kukks/btcpayserver-installer",target:"_blank",rel:"noopener noreferrer"}},[e._v("github repository"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"2-btcpay-supports-shitcoins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#2-btcpay-supports-shitcoins"}},[e._v("#")]),e._v(" 2. BTCPay supports shitcoins")]),e._v(" "),t("p",[e._v("Call it altcoin or shitcoin, whatever you prefer, but one thing is for sure, it's a never-ending debate.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/advancing-bitcoin-2019-btcpayserver-architecture-8-638.jpg",alt:""}})]),e._v(" "),t("p",[e._v("Like many other projects and companies, we were recently accused of being a shitcoin payment processor. I won't lie, it left an entire community with a bitter taste in mouth and a feeling of disappointment and sadness. At least, that's how I felt.")]),e._v(" "),t("p",[e._v("As a hard-core Bitcoiner, the words of some people I used to look up to in this space really stung. Mostly because all of the contributors and developers are Bitcoiners to the bone.")]),e._v(" "),t("p",[e._v("The reality is, BTCPay does not support anything. We allow people to integrate their projects into ours, which users may opt-in to using or completely ignore.")]),e._v(" "),t("p",[e._v("Not a single altcoin is supported out of the box in BTCPay. When you deploy BTCPay with the default setup, you get a Bitcoin full node & Lightning network node. If you wish to include any of the supported alts, you must manually edit your environment variables to enable them. Modifying these requires technical know-how of logging into ssh and executing a few lines of code. For example, to add LTC to an existing environment (besides increasing the size and capabilities of your virtual machine) you'd have to do:")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_CRYPTO2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ltc"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" ./btcpay-setup.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("Then add the derivation scheme in your wallet.")]),e._v(" "),t("p",[e._v("Altcoins are supported and maintained by their communities, not ourselves. BTCPay developers do not add alternative coins on request. Adding a new coin explicitly depends on the community and developers of those coins or their resources to hire developers to integrate it for them. Furthermore, BTCPay developers do not spend excessive time testing nor maintaining altcoins that have been integrated.")]),e._v(" "),t("p",[e._v("Our principles are very clear and simple and we emphasize them in our documentation.")]),e._v(" "),t("ul",[t("li",[e._v("We do not debug altcoins")]),e._v(" "),t("li",[e._v("We do not test it for devs who integrated it")]),e._v(" "),t("li",[e._v("We do not advertise or support it (outside of update announcement)")]),e._v(" "),t("li",[e._v("We don't make invasive changes in the code to accommodate the altcoin.")]),e._v(" "),t("li",[e._v("We don't fix breaking changes which may break the coin integration.")])]),e._v(" "),t("p",[e._v("We are Bitcoiners first because we believe Bitcoin is the best to achieve self-sovereignty.")]),e._v(" "),t("p",[e._v("The way in which we'll handle altcoins in the future is yet to be determined. It's really not our focus, but if it becomes any sort of bottleneck that prohibits our efficiency, we will isolate the altcoin code from the main codebase even more.")]),e._v(" "),t("p",[e._v("For now, it does not require effort on our part and it makes some communities happy. More importantly, we must admit that alt developers have helped us out with finding bugs, resolving them and improving performance, especially in NBxplorer.")]),e._v(" "),t("p",[e._v("If you'd like to understand our architecture and stance better just watch Nicolas' "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=Up0dvorzSNM",target:"_blank",rel:"noopener noreferrer"}},[e._v("presentation"),t("OutboundLink")],1),e._v(" on Advancing Bitcoin 2019 conference in London.")]),e._v(" "),t("h2",{attrs:{id:"3-btcpay-is-expensive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-btcpay-is-expensive"}},[e._v("#")]),e._v(" 3. BTCPay is expensive")]),e._v(" "),t("p",[e._v("BTCPay in itself is "),t("strong",[e._v("free")]),e._v(" and open-source software anyone can use. You can use a third-party BTCPay host or self-host a server.")]),e._v(" "),t("p",[e._v("If you decide to go with a self-hosted solution, which is highly recommended, you need to have it hosted somewhere, a cloud or on your own hardware. Cloud hosting costs money. As I mentioned in #2, the cost to run BTCPay depends on the deployment method you've chosen and the variables you set up which we have found to be as little as $3-5 USD monthly.")]),e._v(" "),t("p",[e._v("When making a decision whether to go with a "),t("a",{attrs:{href:"https://docs.btcpayserver.org/btcpay-basics/btcpayvsothers",target:"_blank",rel:"noopener noreferrer"}},[e._v("centralized payment processor vs BTCPay"),t("OutboundLink")],1),e._v(", it is worth to consider that in BTCPay there are no fees. Zero, zip, zilch, nada.")]),e._v(" "),t("p",[e._v("If you're a very small business or just want to test BTCPay, there are people who allow others to use their servers for free or a small fee. We call them "),t("a",{attrs:{href:"https://docs.btcpayserver.org/deployment/thirdpartyhosting",target:"_blank",rel:"noopener noreferrer"}},[e._v("third-party hosts"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The majority of third-party hosts offer BTCPay for free. "),t("a",{attrs:{href:"https://btcpayjungle.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayJungle"),t("OutboundLink")],1),e._v(", for example, hosts a BTCPay instance for over 400 users, merchants and developers and they maintain their server from user donations. "),t("a",{attrs:{href:"https://lightbo.lt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lightbo.lt"),t("OutboundLink")],1),e._v(" is one more great host.")]),e._v(" "),t("h2",{attrs:{id:"4-btcpay-is-a-company"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#4-btcpay-is-a-company"}},[e._v("#")]),e._v(" 4. BTCPay is a company")]),e._v(" "),t("p",[e._v("BTCPayer Server is an "),t("strong",[e._v("open-source project")]),e._v(", not a company. We rely on a network of contributors and users to provide support. The project exists for and because of the community. People working on BTCPay are voluntarily spending their time to improve the software for themselves and others.")]),e._v(" "),t("p",[e._v("You may not know this, but one of the contributors, "),t("a",{attrs:{href:"https://github.com/Kukks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kukks"),t("OutboundLink")],1),e._v(", quit his day-job to work on BTCPay voluntarily full-time. It's just pure passion and ideology that pushes us. We want to eliminate the middleman and help individuals and businesses become self-sovereign.")]),e._v(" "),t("p",[e._v("We try to fund any expenses from community donations, and we're thankful for each and every satoshi we receive.")]),e._v(" "),t("p",[e._v("As the project grows, it requires more and more time to maintain not only the software and support but the community itself. We're still unsure what BTCPay is and what it may become in the future, but one thing is sure: it will always be free, open-source and made by the community for the community.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/BTCPay-Contributors.jpg",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"5-btcpay-does-not-have-a-conversion-to-fiat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#5-btcpay-does-not-have-a-conversion-to-fiat"}},[e._v("#")]),e._v(" 5. BTCPay does not have a conversion to fiat")]),e._v(" "),t("p",[e._v("This statement is partially true. BTCPay does not have "),t("strong",[e._v("an instant")]),e._v(" conversion to fiat out of the box. Yet.")]),e._v(" "),t("p",[e._v("With BTCPay, you're your own payment processor and you own your keys. By owning the keys, you have the freedom to do whatever you like with your coins, because they're yours. That obviously means, that you can easily sell your coins to an exchange, but for now that's a manual process.")]),e._v(" "),t("p",[e._v("Good news is, that very soon we'll release a fiat bridge(currently codenamed "),t("a",{attrs:{href:"https://github.com/kukks/btctransmuter-vnext",target:"_blank",rel:"noopener noreferrer"}},[e._v("BtcTransmuter"),t("OutboundLink")],1),e._v(") that will allow users to not only instantly sell coins on an exchange but also provide an infinitely flexible system for a number of other use-cases. One of the additional use cases could be to provide liquidity to other users using their instance. That means, that if you want, you will be able to become a payment processor for others.")]),e._v(" "),t("p",[e._v("Until BtcTransmuter is ready for primetime, Blockonomics has made a "),t("a",{attrs:{href:"https://blockonomics.freshdesk.com/support/solutions/articles/33000234755-payment-forwarding-using-xpub-with-merchant-service",target:"_blank",rel:"noopener noreferrer"}},[e._v("payment forwarding service"),t("OutboundLink")],1),e._v(" that is compatible with BTCPay which you can use as a workaround to convert to fiat. We're seeing an increased interest from exchanges and businesses that would like to provide instant-conversion services that BTCPay merchants can use.")]),e._v(" "),t("h2",{attrs:{id:"6-btcpay-and-shopify"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#6-btcpay-and-shopify"}},[e._v("#")]),e._v(" 6. BTCPay and Shopify")]),e._v(" "),t("p",[e._v("BTCPay is a decentralized software, not a company. Shopify is centralized, walled garden. How can you get a decentralized software into a garden which not only does not accept new payment processors at this time but also requires a cut from processors?")]),e._v(" "),t("p",[e._v("You can't. BTCPay does not have Shopify integration. We tried really hard, but we were unable to get in there as an open-source project. That said, in future if someone wants to create a payment processor by using our technology stack and provide centralized service to merchants, that can be one way of getting into Shopify, but it's still going to require a lots of work.")]),e._v(" "),t("p",[e._v("This one is not a misconception nor a myth but deserves to be here as one of the most commonly asked questions and the fact people believe it's our fault we're not on Shopify yet.")]),e._v(" "),t("h2",{attrs:{id:"7-only-merchants-can-use-btcpay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#7-only-merchants-can-use-btcpay"}},[e._v("#")]),e._v(" 7. Only merchants can use BTCPay")]),e._v(" "),t("p",[e._v("BTCPay can be used by anyone who wants to receive payments on-chain or via the Lightning Network, without depending on a third party.")]),e._v(" "),t("p",[e._v("BTCPay has a "),t("a",{attrs:{href:"https://docs.btcpayserver.org/btcpay-basics/usecase",target:"_blank",rel:"noopener noreferrer"}},[e._v("wide-variety of use-cases"),t("OutboundLink")],1),e._v(", and with the applications that we build on top of it, we keep extending the list constantly.")]),e._v(" "),t("h3",{attrs:{id:"who-can-use-btcpay-anyone-anywhere-anytime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#who-can-use-btcpay-anyone-anywhere-anytime"}},[e._v("#")]),e._v(" Who can use BTCPay? - Anyone. Anywhere. Anytime.")]),e._v(" "),t("p",[e._v("Here are some of the most common users, besides retail or online merchants:")]),e._v(" "),t("ul",[t("li",[e._v("Developers integrate into their projects (wallets, games, applications, platforms)")]),e._v(" "),t("li",[e._v("Lightning Network users (BTCPay is one of the easiest ways to deploy a Lightning Node) who use integration to make their shopping easier and non-custodial thanks to our out of the box integration with wallets and extensions like Joule, Spark, Zap, ZeusLN, and Pebble.")]),e._v(" "),t("li",[e._v("Charities use "),t("a",{attrs:{href:"https://docs.btcpayserver.org/features/apps#payment-button",target:"_blank",rel:"noopener noreferrer"}},[e._v("payment buttons"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://docs.btcpayserver.org/features/apps#crowdfunding-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("crowdfunding"),t("OutboundLink")],1),e._v(" app to raise money")]),e._v(" "),t("li",[e._v("Freelancers and small businesses use "),t("a",{attrs:{href:"https://blog.btcpayserver.org/payment-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("payment requests"),t("OutboundLink")],1),e._v(" to invoice their clients and get paid in Bitcoin by sharing a simple link")]),e._v(" "),t("li",[e._v("People who want to offer BTCPay to become payment processors for local or global market")]),e._v(" "),t("li",[e._v("Enterprises that want a secure, non-custodial technology stack for their Bitcoin operations")]),e._v(" "),t("li",[e._v("Exchanges and payment forwarders that offer instant fiat conversion to users")]),e._v(" "),t("li",[e._v("Hosting providers that offer BTCPay hosting")])]),e._v(" "),t("p",[e._v("As you can see, BTCPay, similar to Bitcoin, can be anything to anyone, but most importantly it's there when you need it. Customize it, fork it, adjust it.")]),e._v(" "),t("h2",{attrs:{id:"8-btcpay-is-a-clone-of-bitpay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#8-btcpay-is-a-clone-of-bitpay"}},[e._v("#")]),e._v(" 8. BTCPay is a clone of BitPay")]),e._v(" "),t("p",[e._v("BTCPay is not BitPay's clone. We only have a "),t("strong",[e._v("compatible API")]),e._v(", which means whoever uses BitPay can migrate to BTCPay with ease. Their API however, is far from perfect with a big list of inefficiencies from their model constantly reminding us to do better. That backwards compatibility is becoming a huge bottleneck, and we plan to roll out our own API, which will enable amazing extensibility options such as using BTCPay as a headless payment processor or managing your stores completely through an API. You can follow progress on the initial steps of this API work "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/pull/464",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"9-btcpay-is-a-competitor-to-centralized-payment-processors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#9-btcpay-is-a-competitor-to-centralized-payment-processors"}},[e._v("#")]),e._v(" 9. BTCPay is a competitor to centralized payment processors")]),e._v(" "),t("p",[e._v("BTCPay is a technology stack and, as we earlier determined, is way more powerful than any other centralized payment processor.")]),e._v(" "),t("p",[e._v("BTCPay is a payment processor "),t("strong",[e._v("factory")]),e._v(", so how can you compare a single car to an entire factory? One thing people very often forget is that when you launch BTCPay, you're becoming a payment processor. It's up to you and your business to decide how you want to use BTCPay. You can use it as an internal, self-hosted solution to enhance privacy, security and save money or offer it as a service to other people and become a centralized processor yourself.")]),e._v(" "),t("h2",{attrs:{id:"10-btcpay-nodes-are-slow-to-sync-nobodys-going-to-wait"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#10-btcpay-nodes-are-slow-to-sync-nobodys-going-to-wait"}},[e._v("#")]),e._v(" 10. BTCPay nodes are slow to sync, nobody's going to wait")]),e._v(" "),t("p",[e._v("We covered the importance of full nodes and syncing, validation of transactions in our "),t("a",{attrs:{href:"https://docs.btcpayserver.org/faq-and-common-issues/faq-synchronization",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sync Documentation"),t("OutboundLink")],1),e._v(". Syncing a Bitcoin node takes time. We developed a solution called fast-sync which allows you to quickly sync your server from a trusted node's snapshot. There are lots of pros and cons to this solution, so it's recommended to read our "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/tree/master/contrib/FastSync",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fast Sync"),t("OutboundLink")],1),e._v(" page to understand it fully.")]),e._v(" "),t("p",[e._v("But basically, if you really want to sync your full node quickly, you can use the fast sync and it will sync within a few hours(depending on snapshot date, network speed, and hardware specs).")]),e._v(" "),t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("p",[e._v("There you have it. Hopefully, I managed to clear out some FUD and helped you understand BTCPay better. If you know any other myth we can add, "),t("a",{attrs:{href:"https://twitter.com/BtcpayServer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ping us on Twitter"),t("OutboundLink")],1),e._v(" and we'll update the article accordingly.")]),e._v(" "),t("p",[e._v("At the beginning of the article I lied about the workout, but it appears I also lied about the boring day with no releases. Just as I was about to click publish, I saw this message.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/Screen-Shot-2019-03-13-at-15.21.12.png",alt:""}})]),e._v(" "),t("p",[e._v("It seems we did some improvements to our infrastructure after all.")]),e._v(" "),t("p",[e._v("There's definitely no boring day in BTCPay™.")]),e._v(" "),t("p",[e._v("Thanks for reading.")])])}),[],!1,null,null,null);t.default=n.exports}}]);