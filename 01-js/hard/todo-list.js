/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(indexOfTodo){
    if(!this.todos.at(indexOfTodo)){
      return null;
    }
    this.todos.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo){
    if(!this.todos.at(index)){
      return null;
    }
    this.todos[index] = updatedTodo;
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    let ans = this.todos[indexOfTodo];
    if(ans == undefined) return null;
    return ans;
  }
  clear(){
    this.todos = [];
  }

}

module.exports = Todo;
