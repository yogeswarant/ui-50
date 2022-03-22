function incrementCounters(node, start, end) {
  let counter = start;
  const interval = setInterval(()=> {
    counter += Math.ceil(Math.random() * 100);
    node.innerHTML = counter;
    if (counter >= end) {
      counter = end;
      node.innerHTML = counter;
      clearInterval(interval)
    }
  }, 10)
}

incrementCounters(document.querySelector('.twitter h1'), 0, 12000)
incrementCounters(document.querySelector('.youtube h1'), 0, 5000)
incrementCounters(document.querySelector('.facebook h1'), 0, 7500)
