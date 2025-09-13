
$(document).ready(function() {
    $('.publication-mousecell').mouseover(function() {
        $(this).find('video').css('display', 'inline-block');
        $(this).find('img').css('display', 'none');
    });
    $('.publication-mousecell').mouseout(function() {
        $(this).find('video').css('display', 'none');
        $(this).find('img').css('display', 'inline-block');
    });

    // Tab functionality for Projects and Hike Photos
    $('.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        
        // Remove active class from all tabs and tab panes
        $('.tabs li').removeClass('is-active');
        $('.tab-pane').removeClass('is-active');
        
        // Add active class to clicked tab and corresponding pane
        $(this).addClass('is-active');
        $('#' + tab_id + '-tab').addClass('is-active');
    });

    // Add click-to-enlarge functionality for hike photos
    $(document).on('click', '.hike-photo', function() {
        var imgSrc = $(this).attr('src');
        var hikeTitle = $(this).attr('data-hike') || 'Hike Photo';
        var altText = $(this).attr('alt') || '';
        
        var modal = $('<div class="modal is-active">' +
            '<div class="modal-background"></div>' +
            '<div class="modal-content">' +
            '<div class="box has-text-centered">' +
            '<h4 class="title is-5 mb-3">' + hikeTitle + '</h4>' +
            '<figure class="image">' +
            '<img src="' + imgSrc + '" alt="' + altText + '">' +
            '</figure>' +
            '</div>' +
            '</div>' +
            '<button class="modal-close is-large"></button>' +
            '</div>');
        
        $('body').append(modal);
        
        // Close modal functionality
        modal.find('.modal-background, .modal-close').click(function() {
            modal.remove();
        });
        
        // Close modal on ESC key
        $(document).on('keydown.modal', function(e) {
            if (e.keyCode === 27) { // ESC key
                modal.remove();
                $(document).off('keydown.modal');
            }
        });
    });
})
