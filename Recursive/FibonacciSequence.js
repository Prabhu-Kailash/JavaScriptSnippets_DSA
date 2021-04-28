function fib(pos){
  let result = [1, 1];
  
  function helper(pos){
    if(pos <= 0) return 0;
    result.push((result[result.length - 1]) + (result[result.length - 2]))
    return result.concat(helper(pos - 1))
  }

  helper((pos-2));
  
  return result[pos - 1]
}

console.log(fib(4))