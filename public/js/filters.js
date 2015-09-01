app.filter('yesNo', function() {
    return function(input) {
        return input ? 'yes' : 'no';
    }
})

app.filter('Empty', function() {
  return function(input) {
    if (input === 0) {
    return 'Empty'
  } else { return input }
  }
})
