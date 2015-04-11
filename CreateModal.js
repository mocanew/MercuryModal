// hide modal manually: $('#mymodal').modal('hide');
function MercuryModal(options) {
    var defaults = {
        id: 'mercuryModal',
        leftButton: {
            click: function(){},
            text: null,
            class: 'btn-default',
            dismiss: true
        },
        rightButton: {
            click: function(){},
            text: null,
            class: 'btn-danger',
            dismiss: true
        },
        header: true,
        footer: true,
        title: null,
        text: null,
        textAlign: 'left',
        width: '600px',
        ready: function(){},
        hide: function(){}
    }
    
    var settings = $.extend(true, defaults, options);
    
    var length = $('.' + settings.id).length;
    
    var modalContent = '<div class="modal fade '+ settings.id +'" id="'+ settings.id +'-'+ length +'" role="dialog" aria-labelledby="modal" aria-hidden="false" style="z-index: '+ (1050 + 10 * length) +'">';
    
    modalContent += ' <div class="modal-dialog" style="width: '+ settings.width +';"> <div class="modal-content">';
    if(settings.header) {
        modalContent += '<div class="modal-header">';
        modalContent += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
        if (settings.title) {
            modalContent += '<h4 class="modal-title">';
            modalContent += settings.title;
            modalContent += '</h4>';
        }
        modalContent += '</div>';
    }
    if (settings.text) {
        modalContent += '<div class="modal-body" style="text-align: '+ settings.textAlign +';">';
        modalContent += settings.text;
        modalContent += '</div>';
        if(settings.footer) modalContent += '<div class="modal-footer" style="text-align:center;">';
    }
    else{
        if(settings.footer) modalContent += '<div class="modal-footer" style="border-top:0; text-align:center;">';
    }
    if (settings.leftButton.text && settings.rightButton.text) {
        modalContent += '<button type="button" id="leftbtnmodal" class="btn '+ settings.leftButton.class +'"';

        settings.leftButton.dismiss ? modalContent += ' data-dismiss="modal"' : modalContent += '';
        
        modalContent += '>';
        modalContent +=     settings.leftButton.text;
        modalContent += '</button>';
        modalContent += '<button type="button" id="rightbtnmodal" class="btn '+ settings.rightButton.class +'"';
        
        settings.rightButton.dismiss ? modalContent += ' data-dismiss="modal"' : modalContent += '';
        
        modalContent += '>';
        modalContent +=     settings.rightButton.text;
        modalContent += '</button>';
    }
    else if(settings.leftButton.text){
        modalContent += '<button type="button" id="leftbtnmodal" class="btn '+ settings.leftButton.class +'"';
        
        settings.leftButton.dismiss ? modalContent += ' data-dismiss="modal"' : modalContent += '';
        
        modalContent += '>';
        modalContent += settings.leftButton.text;
        modalContent += '</button>';
    }
    else if(settings.rightButton.text){
        modalContent += '<button type="button" id="rightbtnmodal" class="btn '+ settings.rightButton.class +'"';
        
        settings.rightButton.dismiss ? modalContent += ' data-dismiss="modal"' : modalContent += '';
        
        modalContent += '>';
        modalContent += settings.rightButton.text;
        modalContent += '</button>';
    }
    
    modalContent += '</div> </div> </div> </div>';
    
    $('body').append(modalContent);
    var modalDiv = $('#'+ settings.id +'-'+ length);
    modalDiv.modal();
    
    if (settings.rightButton.text) {
        modalDiv.on('click', '#rightbtnmodal', function(){
            settings.rightButton.click($(this));
        });
    }
    if (settings.leftButton.text) {
        modalDiv.on('click', '#leftbtnmodal', function(){
            settings.leftButton.click($(this));
        });
    }
    
    modalDiv.on('hidden.bs.modal', function(e){
        settings.hide(e);
        $(this).data('bs.modal', null);
        $(this).remove();
    });
    
    $($('.modal-backdrop:not(.backdrop-'+ settings.id +')')[0]).css('z-index', (1050 + 10 * (length - 1) + 1)).addClass('backdrop-'+ settings.id);
    
    settings.ready();
    return this;
}