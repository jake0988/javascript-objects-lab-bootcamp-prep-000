function updateObjectWithKeyAndValue(object, key, value) {
  var obj = object
  var newObj = {key: value}
  obj = newObj.key
console.log(obj)
  return obj

}
//updateObjectWithKeyAndValue(obj, 'prop2', 2)
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
