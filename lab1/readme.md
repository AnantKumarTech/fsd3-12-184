# EventLoop
JS is synchronous and single threaded by default.
## There can be async behaviour
- with  browserAPI - setTimeout,setInterval,setImmediate,nextTick
- with prommises 
- with event handlers
# Promis 
- A function not executae not immideate it must  be execuate after a while it has some status during the executation
at final it may resolve ( ) ->sucess or reject( ) -> unsuccessful
# Call back
- That pass as argument or the parameter to another function
- moder java script is devided into 2 parts 
first one is common js(.cjs)-> support OOPS -> require (keyword) ->priority (nextTick,Promise ,setImmediate /setTimeout)
and second is module mjs(.mjs) -> follow modular approach only support funtion->import-> priority(Promise ,nextTick,setImmediate /setTimeout)