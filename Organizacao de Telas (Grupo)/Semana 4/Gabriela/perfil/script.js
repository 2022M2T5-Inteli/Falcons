        
   $(document).ready(function(){
    /* we get the YouTube video url and store it in a variable */
    var url = $("#glassAnimalsVideo").attr('src');

    /* when the modal gets closed, the delete the url for the video */
    $("#glassAnimals").on('hide.bs.modal', function(){
        $("#glassAnimalsVideo").attr('src', '');
    });

    /* then the modal gets open, we asign the url for the video */
    $("#glassAnimals").on('show.bs.modal', function(){
        $("#glassAnimalsVideo").attr('src', url);
    });
});