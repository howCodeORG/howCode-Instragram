$('#upload-but').click(function() {
        $('#upload-div').show()
        $('.photo-viewer').hide()
        $('.overlay').fadeToggle('fast')
        $('body').css('overflow', 'hidden')
    })

    $('.overlay').click(function() {
            $('#upload-div').hide()
            $('.photo-viewer').hide()
            $('.overlay').fadeToggle('fast')
            $('body').css('overflow', 'auto')
            SET_PROFILE_PIC = false;
        })
UPLOADCARE_PUBLIC_KEY = '3febd24288c449f2efe1';
UPLOADCARE_IMAGES_ONLY = true;
UPLOADCARE_SYSTEM_DIALOG = true;
PREVIEW_URL = "";
CURRENT_ROTATION = 0;
BASE_URL = "";
SET_PROFILE_PIC = false;
function installWidgetPreviewSingle(widget, img) {
widget.onChange(function(file) {
if (file) {
  file.done(function(fileInfo) {
    var size = '' + (img.width() * 2) + 'x' + (img.height() * 2);
    PREVIEW_URL = fileInfo.cdnUrl;
    BASE_URL = PREVIEW_URL;
    $('.empty-upload-container').html("<img id='previewimg' style='max-height: 500px' src=''>")
    $('#previewimg').attr('src', PREVIEW_URL)
    $('#previewimg').css('width', img.width())
    $('#previewimg').css('height', img.height())
    $('#previewimg').css('transition', 'all 0.5s ease-out')
    $('.empty-upload-container').css('height', img.height())
    $('.upload-options-disabled').css('display', 'none')
    $('.effect').each(function() {
            $('.effect img').attr('src', PREVIEW_URL)
            $(this).click(function() {
                $('#caption-div').slideUp(200, function() {
                })
                $('#filter-div').slideUp(200, function() {
                })
                if (fileInfo.mimeType != "image/jpeg") {
                        getEffect($('img',this).attr('class'), false)
                } else {
                        getEffect($('img',this).attr('class'), true)
                }
                $('#previewimg').attr('src', PREVIEW_URL)
            })
    })

  });
}
});
}
$('#profilepic').click(function() {
        SET_PROFILE_PIC = true;
        $('#upload-but').click()
});
$('.upload-button').click(function() {
        if (SET_PROFILE_PIC == false) {
                $.post("ajax-save-photo",
                {
                url: $("#previewimg").attr('src'),
                baseurl: BASE_URL,
                caption: $('#captionbox').val()
                },
                function(data, status){
                if (JSON.parse(data).Status == 'Success') {
                    window.location = '';
                }
                });
        } else {
                $.post("ajax-set-profile-pic",
                {
                url: $("#previewimg").attr('src'),
                baseurl: BASE_URL
                },
                function(data, status){
                if (JSON.parse(data).Status == 'Success') {
                    SET_PROFILE_PIC = false;
                    window.location = '';
                }
                });
        }
return false;
})
$(function() {
$('.image-preview').each(function() {
installWidgetPreviewSingle(
  uploadcare.SingleWidget($(this).children('input')),
  $(this).children('img')
);
});
});

function getEffect(effect, isJPEG) {
    switch(effect) {
        case "grayscale":
        PREVIEW_URL = PREVIEW_URL + "-/grayscale/"
        break
        case "invert":
        if (isJPEG) {
        PREVIEW_URL = PREVIEW_URL + "-/invert/"
        }
        break
        case "blur":
        PREVIEW_URL = PREVIEW_URL + "-/blur/50/"
        break
        case "flip":
        PREVIEW_URL = PREVIEW_URL + "-/flip/"
        break
        case "mirror":
        PREVIEW_URL = PREVIEW_URL + "-/mirror/"
        break
        case "sharp":
        PREVIEW_URL = PREVIEW_URL + "-/sharp/"
        break
        case "enhance":
        PREVIEW_URL = PREVIEW_URL + "-/enhance/-/preview/"
        break
    }
}
$('.caption-but').click(function() {
$('#caption-div').slideToggle(200, function() {
})
$('#filter-div').slideUp(200, function() {
})
})
$('.filter-but').click(function() {
$('#caption-div').slideUp(200, function() {
})
$('#filter-div').slideToggle(200, function() {
})
})
$('.rotate-but').click(function() {
$('#caption-div').slideUp(200, function() {
})
$('#filter-div').slideUp(200, function() {
})
CURRENT_ROTATION += 90
$('#previewimg').attr('src', PREVIEW_URL + "-/rotate/" + CURRENT_ROTATION + "/")
})
