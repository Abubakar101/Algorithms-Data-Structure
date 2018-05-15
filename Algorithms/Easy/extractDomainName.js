/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

*/

function domainName(url) {
	if (url.includes('http')) {
		const domain = new URL(url).hostname.split('.');
		return (domain[0] === 'www' && domain[1]) || domain[0];
	}
   return domainName(`http://${url}`)
}


function domainName(url) {
  if (url.includes('www')){
    return url.split(".")[1];
  } else if(url.includes('://')){
    url = url.split("://")[1]; 
  }
  return url.split(".")[0];
}
console.log(
	domainName('http://google.com') === 'google',
	domainName('http://google.co.jp') === 'google',
	domainName('www.xakep.ru') === 'xakep',
	domainName('icann.org') === 'icann'
);
