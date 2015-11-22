angular.module("learningServices").service("firstService", function(){
   
  this.add = function(a,b){
    return a + b;
  }
  this.subtract = function(a, b){
    return a - b;
  }
  this.multiply = function(a, b){
    return a * b;
  }
  this.divide = function(a, b){
    return a / b;
  }
  var todos = [];
  var lId = 1;

 this.save = function(list){
  if (list.id == null){

  todos.id = lId++;
  todos.push(list)
 } else{
 for(i in todos){
  if(todos[i].id == todo.id){
    todos[i] = todo;
  }
 }
}
}
 this.get = function(id){
  for(i in todos){
    if (todos[i].id == id){
      return todos[i];
    }
  }
 }
 this.delete = function(id){
  for(i in todos){
    if(todos[i].id == id){
      todos.splice(i, 1);
    }
  }
 }
 this.info = function(){
  return todos;
 }
})