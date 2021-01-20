$(document).ready(function()  {
  $("#groceries").submit(function(event)  {
    event.preventDefault();

    let grocery1 = $("#groceries1").val();

    let grocery2 = $("#groceries2").val();

    let grocery3 = $("#groceries3").val();

    let grocery4 = $("#groceries4").val();

    let grocery5 = $("#groceries5").val();

    let array = [grocery1, grocery2, grocery3, grocery4, grocery5].sort();
    //console.log(array);
    let arrayReturnList = [];
    array.forEach(function(element) {
      arrayReturnList.push(element.toUpperCase());
    });

    arrayReturnList.forEach(function(element){
      let count = 1;
      $(".groceries" + count.toString()).text(element);
      count += 1;
    });
    //console.log(arrayReturnList);
      
    $("#groceries").hide();
    $(".output").show();
    $(".output").text(arrayReturnList);

    
  });
});