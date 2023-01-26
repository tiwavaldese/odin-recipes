alert

const single ='Everyday is a good day when you paint.'
console.log(single);

const Double = "Be so very light. Be a gentle whisper."
console.log(Double);

const Single = '"We don\'t make mistakes. We just have happy accidents." Bob Ross' 

const Double1 = "\"We don\'t make mistakes. We just have happy accidents.\" Bob Ross"

console.log(Single)
console.log(Double1)


const Template = `Find freedom on this canvas`
const Template1 = `'"We don't make mistakes. We just have happy accidents." Bob Ross'` 

console.log(Template)
console.log(Template1)

const template = `Template literals use the \` character`
console.log(template)


 const address = 
 'Homer 3. Simpson'+
 '742 Evergreen Terrace'+
 'Springfield'

 console.log(address)


 const longstring1=                                                    
"This is a very long string which need \
to wrap across multiple lines because \
otherwise my code is unreadable.";

console.log(longstring1);


const address1 = 
'Homer 3. Simpson\n'+
'742 Evergreen Terrace\n'+
'Springfield'

console.log(address1)


const address2 = `
Homer 3. Simpson
742 Evergreen Terrace
Springfield`

console.log(address2)



const address3= `Homer 3. Simpson
                 742 Evergreen Terrace
                 Springfield`

console.log(address3);


const method = 'concatenation'
const dynamicString = 'This string is using'  + method + '.'
console.log(dynamicString)



const Method = 'interpolation'
const DynamicString = `This string is using  ${Method}`
console.log(DynamicString)


function createOAuthString(host, clientId, scope) {
    console.log(host + '/login/oauth/authorize?client_id-' + clientId + '&scope-' + scope)

}
createOAuthString('https://github.com', 'abc123', 'repo,user')


function creatOAuthString(host, clientId, scope) {
    console.log(`${host}/login/oauth/authorize?client_id=${clientId}&scope=${scope}`)

}
creatOAuthString('https://github.com', 'abc123', 'repo,user')


const menuItem = (url, link) =>

console.log(`
<il>
    <a href="${url}">${link}</a>
</il>
`
.trim())
menuItem('https://google.com', 'Google')


const SuM = (x,y) => x + y
const X1 = 5
const Y1 = 100
const strinG = `The sum of ${X1} and ${Y1} is ${SuM(X1,Y1)}.`

console.log(strinG)


const aGe = 19
const Message = `you can ${aGe <21? 'not': ''} view this page`
console.log(Message);


function tag(strings, ...expressions){
    console.log(strings)
    console.log(expressions)
}
const striNg = tag`This is a string with ${true} and ${false} and ${100} interpolated inside.`


function bold(strings, ...expressions){
    let finalString = ''
    expressions.forEach((value, i) => {
        finalString += `${strings[i]}<strong>${value}</strong>`
    })
    console.log(finalString)
}
const striNg1 = bold`This is a string with ${true} and ${false} and ${100} interpolated inside.`
console.log(striNg1)

const rawString = String.raw`I want to write /n without it being escaped.`
console.log(rawString)