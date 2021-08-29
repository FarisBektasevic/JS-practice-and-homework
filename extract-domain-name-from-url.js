
// #Extract the domain name from a URL
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
//  For example:

 console.log(domainName("http://github.com/carbonfive/raygun")) // == "github"
 console.log(domainName("http://www.zombie-bites.com")) // == "zombie-bites"
 console.log(domainName("https://www.cnet.com")) // == cnet

function domainName(url){
    let localURL = url.split('/')
    let domain = ''
    for (i = 0; i < localURL.length; i++) {
        if (localURL[i].split('').includes('.')) {
            domain = localURL[i].split('.')
            break
        }
    }
  
    if (domain[0] === 'www') {
        domain.splice(0, 1)
    }
    return domain[0]
}
