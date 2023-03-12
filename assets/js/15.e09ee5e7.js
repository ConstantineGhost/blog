(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{334:function(e,t,o){"use strict";o.r(t);var r=o(10),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("New BTCPay version "),o("strong",[e._v("1.0.3.132 is")]),e._v(" out! This version brings in a few improvements and minor bug fixes.")]),e._v(" "),o("h1",{attrs:{id:"103132-release-notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#103132-release-notes"}},[e._v("#")]),e._v(" 1.0.3.132 Release notes")]),e._v(" "),o("ul",[o("li",[e._v("Fix BTC_GBP pair not resolved for kraken (@nicolasdorier)")]),e._v(" "),o("li",[e._v("Set buyer email in get invoice to refund email if not set (@MrKukks)")]),e._v(" "),o("li",[e._v("Can edit the authorized_keys file in docker deployments in Server Settings / SSH Service (@nicolasdorier)")]),e._v(" "),o("li",[e._v("Removed the ability to download the SSH private key used btcpayserver from Server Settings / SSH Service (@nicolasdorier)")]),e._v(" "),o("li",[e._v('The "Pay with BTCPay" donation button is now in .svg instead of .png, png is still supported for backward compatibility (@bolatovumar)')]),e._v(" "),o("li",[e._v("Faster feedback developer feedback loop by skipping the bundler minifier task if the input files did not changed (@r0ckstardev @nicolasdorier)")]),e._v(" "),o("li",[e._v("Re-enable lightning sats feature (@MrKukks)")]),e._v(" "),o("li",[e._v("Allow removing transaction labels by clicking on an icon (@bolatovumar)")]),e._v(" "),o("li",[e._v("Prevent jumpy transition on page load when transaction labels are present (@bolatovumar)")]),e._v(" "),o("li",[e._v("Fix typo on Pay Button page (@dennisreimann)")]),e._v(" "),o("li",[e._v("Add Ndax rate provider (@MrKukks)")]),e._v(" "),o("li",[e._v("Add Indonesian Rupiah in the currency list @mbambnag")]),e._v(" "),o("li",[e._v("Update Azure deployment to use BTCPAY_ENABLE_SSH (see details below)")]),e._v(" "),o("li",[e._v("Update Lunanode deployment to use BTCPAY_ENABLE_SSH (Waiting to be merged upstream)")])]),e._v(" "),o("h1",{attrs:{id:"docker-deployment-note-on-ssh-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-deployment-note-on-ssh-settings"}},[e._v("#")]),e._v(" Docker deployment: Note on SSH settings")]),e._v(" "),o("p",[e._v("BTCPay Server is relying on SSH to execute scripts to for updating itself (only for docker deployments, like lunanode). For doing this, the BTCPayServer container connects to the host via SSH and runs btcpay-update.sh.")]),e._v(" "),o("p",[e._v("For this to work, during the setup, we were previously requiring user to:")]),e._v(" "),o("ul",[o("li",[e._v("Create the ssh keypair via ssh-keygen,")]),e._v(" "),o("li",[e._v("Add the public key to authorized_keys")]),e._v(" "),o("li",[e._v("Set the "),o("code",[e._v("BTCPAY_HOST_SSHKEYFILE")]),e._v(" settings,")]),e._v(" "),o("li",[e._v("Run "),o("code",[e._v(". btcpay-setup.sh -i")]),e._v(".")])]),e._v(" "),o("p",[e._v("Then, the script would copy the keypair to the container and BTCPay Server would use this to connect to the host.")]),e._v(" "),o("p",[e._v("However, this had significant downsides:")]),e._v(" "),o("ol",[o("li",[e._v("If you deleted the keypair, you needed to run btcpay-setup.sh again.")]),e._v(" "),o("li",[e._v("Issues if ssh-keygen on the host had some breaking change. (It happened to us)")]),e._v(" "),o("li",[e._v("Required additional documentation to set up properly.")]),e._v(" "),o("li",[e._v("In 1.0.3.132, we released a new feature which allows the modification of the authorized_keys file within BTCPayServer, and we wanted to prevent people from lock themselves out their machine by accidentally deleting the key btcpayserver was using.")])]),e._v(" "),o("p",[e._v("For this reason, "),o("code",[e._v("BTCPAY_HOST_SSHKEYFILE")]),e._v(" is now deprecated and replaced by a new setting called "),o("code",[e._v("BTCPAY_ENABLE_SSH")]),e._v(". This new settings will mount the host's authorized_keys file inside the btcpayserver container, and the btcpayserver container is now responsible to create the SSH keypair and add itself to the authorized_keys.")]),e._v(" "),o("p",[o("code",[e._v("BTCPAY_HOST_SSHKEYFILE")]),e._v(" will keep working because keeping backward compatibility is of paramount importance, but we advise you to migrate to "),o("code",[e._v("BTCPAY_ENABLE_SSH=true")]),e._v(" instead:")]),e._v(" "),o("p",[e._v("BTCPAY_ENABLE_SSH=true\n. btcpay-setup.sh -i")]),e._v(" "),o("p",[e._v("If you still use the deprecated "),o("code",[e._v("BTCPAY_HOST_SSHKEYFILE")]),e._v(" and accidentally break the authorized_keys file by using the new feature in Server Settings/SSH Service of BTCPay Server, you might lock yourself out of your server. This will not happen if you use "),o("code",[e._v("BTCPAY_ENABLE_SSH=true")]),e._v(".")]),e._v(" "),o("p",[e._v("If you feel uncomfortable with the command line or are confident you will not lock yourself out of your own VPS, you can choose not to update to"),o("code",[e._v("BTCPAY_ENABLE_SSH")]),e._v(" and things will keep working and still be supported.")]),e._v(" "),o("h2",{attrs:{id:"thank-you-to-our-contributors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#thank-you-to-our-contributors"}},[e._v("#")]),e._v(" Thank you to our contributors")]),e._v(" "),o("p",[e._v("Huge thanks go to our contributors, who made their release possible.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/bolatovumar",target:"_blank",rel:"noopener noreferrer"}},[e._v("bolatovumar"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("dennisreimann")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/mbambnag/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mbambnag"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/Kukks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MrKukks"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/NicolasDorier",target:"_blank",rel:"noopener noreferrer"}},[e._v("nicolasdorier"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/rockstardev",target:"_blank",rel:"noopener noreferrer"}},[e._v("r0ckstardev"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("How to update to 1.0.3.132?")]),e._v(" "),o("p",[e._v("To "),o("a",{attrs:{href:"https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("update"),o("OutboundLink")],1),e._v(" to the latest version, go to your BTCPay > Server Settings > Maintenance > "),o("em",[o("strong",[e._v("Update")])]),e._v(".")]),e._v(" "),o("p",[e._v("If you encounter any issues with this version, or need assistance, please report it on our "),o("a",{attrs:{href:"https://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community chat"),o("OutboundLink")],1),e._v(" or on our "),o("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);