function reverse(string){
  if(string.length < 1) return "";
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1))
}

console.log(reverse('hello'))