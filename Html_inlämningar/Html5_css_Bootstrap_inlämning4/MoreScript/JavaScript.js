﻿$(document).ready(function () {
    $(".grid-button").on("click", function ()
    {
        $(".grid").toggleClass("open close");
        $(".menu").toggleClass("open close");
    });
});
