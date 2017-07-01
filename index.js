var getFirstSelector = function(selector) {
  return document.querySelector(selector)
}

var nestedTarget = function() {
  return document.querySelector('#nested .target') //finds a .target (class) inside a #nested (id) and returns it
}

var increaseRankBy = function(n) {
  var foo = document.querySelectorAll('.ranked-list li')
  console.log(foo)
  for(var i = 0; i < foo.length; i++) {
    foo[i].innerHTML = parseInt(foo[i].innerHTML) + n //goddamn it, innerhtml isn't innerHTML :)
  }
}

var deepestChild = function() {
  var bar = document.querySelector('#grand-node') //known initial point
//  for(var i = 0; i < bar.length; i ++) {
    while(bar.querySelector('div')) { //as long as bar has a div inside it, this evaluates true. Once it reaches the deepest node, it will evaluate false because theres nothing deeper; itll be undefined.
      bar = bar.querySelector('div') //updates bar to go one level down, in this case into the next div
    }
    return bar
//  }
}
