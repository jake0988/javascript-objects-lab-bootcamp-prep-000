function updateObjectWithKeyAndValue(obj, key, value) {
  var key = key
  var value = value
  var obj = obj
  var newObj = {key: value}
  obj = Object.assign({}, newObj)
console.log(obj)
  return obj

}
updateObjectWithKeyAndValue(obj, 'prop2', 2)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
var obj = object
obj.key = 'value'

return obj
}

function deleteFromObjectByKey(object, key) {

}

function estructivelyDeleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey(object, key) {

}
