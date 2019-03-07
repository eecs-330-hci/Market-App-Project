    var availableTags = [
      "apple",
      "banana",
      "beans",
      "beef",
      "broccoli",
      "carrot",
      "cheese",
      "chicken",
      "egg",
      "grapes",
      "ice-cream",
      "lettuce",
      "milk",
      "onion",
      "orange",
      "potato",
      "strawberry",
      "turkey",
      "yogurt",
    ];
    $(".searchbar").autocomplete({
      source: availableTags
    });

    $('#beef').click(function() {
      if ($(this).prop("checked") == true) {
        addCheckoutLI("Beef", "$3.99/lb", "Arrives plastic wrapped.");
      } else if ($(this).prop("checked") == false) {
        removeCheckoutLI("Beef");
      }
    });
    $('#apple').click(function() {
      if ($(this).prop("checked") == true) {
        addCheckoutLI("Apple", "$3.99/lb", "Arrives boxed.");
      } else if ($(this).prop("checked") == false) {
        removeCheckoutLI("Apple");
      }
    });
    $('#grapes').click(function() {
      if ($(this).prop("checked") == true) {
        addCheckoutLI("Grapes", "$3.99/lb", "Arrives bagged and sealed.");
      } else if ($(this).prop("checked") == false) {
        removeCheckoutLI("Grapes");
      }
    });
    $('#cheese').click(function() {
      if ($(this).prop("checked") == true) {
        addCheckoutLI("Cheese", "$3.99/lb", "Arrives boxed.");
      } else if ($(this).prop("checked") == false) {
        removeCheckoutLI("Cheese");
      }
    });

function createCheckoutH(foodItem) {
  let h6 = $("<h6>", {
    "class": "my-0",
  }).html(foodItem);

  return h6;
}

function createSpan(price) {
  let span = $("<span>", {
    "class": "text-muted",
  }).html(price);
  return span;
}

function createSmall(description) {
  let small = $("<small>", {
    "class": "text-muted",
  }).html(description);
  return small;
}

function createCheckoutDiv(h6, small) {
  let div = $("<div>").html(h6).append(small);

  return div;
}

function createCheckoutLI(div, span, foodItem) {
  let li = $("<li>", {
    "class": "list-group-item d-flex justify-content-between lh-condensed " + foodItem,
  }).html(div).append(span);
  return li;
}

function addCheckoutLI(foodItem, price, description) {
  let h6 = createCheckoutH(foodItem);
  let span = createSpan(price);
  let small = createSmall(description);
  let div = createCheckoutDiv(h6, small);
  let li = createCheckoutLI(div, span, foodItem);

  $(".list-group li").last().before(li);
  let currentTotal = $(".total").text();
  let newTotal = parseInt(currentTotal) + 3.99;
  $(".total").text(newTotal);
}

function removeCheckoutLI(foodItem) {
  $("." + foodItem).remove();
  let currentTotal = $(".total").text();
  let newTotal = parseInt(currentTotal) - 3.99;
  $(".total").text(newTotal);
}

function showOrder() {
  alert("Your order has been processed!");
}
