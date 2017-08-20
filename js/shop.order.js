var order_stock_check = function() {
    var result = "";
    $.ajax({
        type: "POST",
        url: "ajax.orderstock.php",
        cache: false,
        async: false,
        success: function(data) {
            result = data;
        }
    });
    return result;
}