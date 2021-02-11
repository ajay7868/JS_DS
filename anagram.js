function test(s,t){
if(!s || !t || s.length !==t.length){ return false}
var count=0;
for(var i=0;i<s.length;i++){
count =count+s.charCodeAt(i)
}
for(var i=0;i<t.length;i++){
count =count-t.charCodeAt(i)
}

return count==0

}
test('car','tar')
