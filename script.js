$(document).ready(function() {

  var $newItemForm = $("#new_todo_item");
  var $todo_list = $("#todo_list");

  var listTemplate = _.template($('#list-template').html());

  var itemClicked = function() {
    $(this).toggleClass("done");
  };

  var Todo = function(name, desc) {
    this.name = name;
    this.desc = desc;
  };

  Todo.all = [];

  Todo.prototype.save = function() {
      Todo.all.push(this);
  };

  Todo.prototype.render = function(index) {
    var htmlString = listTemplate(this);
    var $todo = $(htmlString);    
    $todo.attr('data-index', index);
    $todo_list.append($todo);
    $todo.click(itemClicked);
  }

  $newItemForm.on("submit", function(event){
    event.preventDefault();

    var toDoName = $("#item_name").val();
    var toDoDesc = $("#item_desc").val();

    if(toDoName == "" || toDoDesc == "") {
      alert("Please add a to-do!");
      return;
    }

    var input = new Todo(toDoName, toDoDesc);

    // // add new item and description to model
    Todo.all.push(input);

    var index = Todo.all.indexOf(input);
    input.render(index);

    $("#item_name").val("");
    $("#item_desc").val("");
  });

  var todo1 = new Todo("Laundry", "Wash sheets");
  todo1.save();
  var todo2 = new Todo("Buy groceries", "Yogurt, bread, apples");
  todo2.save();
  var todo3 = new Todo("buy cat food", "dry and wet");
  todo3.save();

  _.each(Todo.all, function(todo, index){
    todo.render(index);
  });
});