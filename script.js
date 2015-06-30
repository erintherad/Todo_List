$(document).ready(function() {

	var $newItemForm = $("#new_todo_item");

	$newItemForm.on("submit", function(event){
		event.preventDefault();

		// add new item to view
		var $newLI = $('<li class="item">' + $("#item_name").val() + '</li>');
		$('#todo_list').append($newLI);
		$newLI.click(itemClicked);

		// add new item description to view
		var $newListDesc = $('<dd>' + $("#item_desc").val() + '</dd>');
		$newLI.append($newListDesc);

		// add new item and description to model
		todoList.push({
			item_name: $("#item_name").val(),
			item_desc: $("#item_desc").val()
		});

		$("#item_name").val("");
		$("#item_desc").val("");

	});

	var todoList = [];

	var itemClicked = function() {
		$(this).addClass("done");
	};

	$( ".item" ).click(itemClicked);
});
