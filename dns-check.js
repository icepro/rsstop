// dns-check.js

const dns = require('dns');

function checkDNS(domain) {
  dns.resolve(domain, (err, addresses) => {
    if (err) {
      console.error('Error occurred while resolving DNS:', err);
      return;
    }

    console.log(`IP addresses for ${domain}:`);
    addresses.forEach((address, index) => {
      console.log(`[${index + 1}] ${address}`);
    });
  });
}

module.exports = {
  checkDNS: checkDNS
};
