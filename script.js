$(document).ready(function() {

  var $newItemForm = $("#new_todo_item");

  $newItemForm.on("submit", function(event){
    event.preventDefault();

    // add new item to view
    var input = {name: $("#item_name").val(), desc: $("#item_desc").val()}
    var $inputItem = $(listTemplate(input));
    $inputItem.click(itemClicked);
    $('#todo_list').append($inputItem);

    // add new item and description to model
    hardTodo.push(input);

    $("#item_name").val("");
    $("#item_desc").val("");

  });

  var itemClicked = function() {
    $(this).addClass("done");
  };

  var listTemplate = _.template($('#list-template').html());

  var hardTodo = [
  {name: "Laundry", desc: "Wash Sheets"},
  {name: "Buy groceries", desc: "Yogurt, bread, apples"},
  {name: "Buy cat food", desc: "Dry and wet"}
  ];

  var $todo_list = $("#todo_list");

  _.each(hardTodo, function (seed, index) {
    var $seed = $(listTemplate(seed));
    $seed.attr('data-index', index);
    $todo_list.append($seed);
  });


  $( ".seed" ).click(itemClicked);
});