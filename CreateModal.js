;(function($) {
    $.MercuryModal = function (elem, options){
        var settings = $.extend(true, {}, $.MercuryModal.defaults, options);
        if(elem && typeof elem == 'object'){
            if(!settings.text) settings.text = '';
            settings.text += $(elem).html();
        }       
        var length = $('.modal').length;
        var buttonsLength = $('.'+ settings.id +'-button').length;
        
        var modalContent = '<div class="modal fade '+ settings.id +'" id="'+ settings.id +'-'+ length +'" role="dialog" aria-labelledby="modal" aria-hidden="false" style="z-index: '+ (1050 + 10 * length) +'">';
        modalContent += ' <div class="modal-dialog" style="max-width: '+ settings.width +';"> <div class="modal-content">';
        if(settings.show.header) {
            modalContent += '<div class="modal-header" style="text-align: '+ settings.textAlign.header +';';
            if(settings.show.footer == false && !settings.text) {
                modalContent += 'border-bottom: 0 solid transparent;';
            }
            modalContent += '">';

            if(settings.show.closeButton) {
                modalContent += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
            }

            if (settings.title) {
                modalContent += '<h4 class="modal-title">';
                modalContent += settings.title;
                modalContent += '</h4>';
            }

            modalContent += '</div>';
        }
        if (settings.text) {
            modalContent += '<div class="modal-body" style="text-align: '+ settings.textAlign.middle +';">';
            modalContent += settings.text;
            modalContent += '</div>';
            if(settings.show.footer) {
                modalContent += '<div class="modal-footer" style="text-align: '+ settings.textAlign.footer +';">';
            }
        }
        else if(settings.show.footer) {
            modalContent += '<div class="modal-footer" style="border-top:0; text-align: '+ settings.textAlign.footer +';">';
        }
        $.each(settings.buttons, function(index, value){
            if (value.text) {
                modalContent += '<button type="button" id="'+ settings.id +'-button-'+ (index + buttonsLength) +'" class="'+ settings.id +'-button btn '+ value.class +'"';
                if(value.dismiss){
                    modalContent += ' data-dismiss="modal"';
                }
                modalContent += '>';
                modalContent += value.text;
                modalContent += '</button>';
            }
        });
        modalContent += '</div> </div> </div> </div>';
        
        $('body').append(modalContent);
        var modalDiv = $('#'+ settings.id +'-'+ length);
        modalDiv.modal();

        $.each(settings.buttons, function(index, value){
            if(value.text){
                if (typeof value.click == 'function') {
                    modalDiv.on('click', '#'+ settings.id +'-button-'+ (index + buttonsLength), function(){
                        value.click($(this));
                    });
                }
            }
        });
        
        modalDiv.on('hidden.bs.modal', function(e){
            settings.hide(e);
            $(this).data('bs.modal', null);
            $(this).remove();
        });
        
        $($('.modal-backdrop:not(.backdrop-'+ settings.id +')')[0]).css('z-index', (1050 + 10 * (length - 1) + 1)).addClass('backdrop-'+ settings.id);
        
        settings.ready();
        return this;
    }
    $.MercuryModal.defaults = {
        id: 'mercuryModal',
        buttons:[
        {
            click: function(){},
            text: null,
            class: 'btn-default',
            dismiss: true
        },
        {
            click: function(){},
            text: null,
            class: 'btn-danger',
            dismiss: true
        }
        ],
        show: {
            header: true,
            footer: true,
            closeButton: true
        },
        title: null,
        text: null,
        textAlign: {
            header: 'left',
            middle: 'left',
            footer: 'left'
        },
        width: '600px',
        ready: function(){},
        hide: function(){}
    };
    $.MercuryModal.close = function(selector){
        if(!selector || !selector.length) selector = $.MercuryModal.defaults.id;
        $(selector).modal('hide');
    }
    $.MercuryModal.closeLast = function(selector){
        if(!selector || !selector.length) selector = $.MercuryModal.defaults.id;
        $('#'+ selector +'-' + ($('.'+ selector).length - 1)).modal('hide');
    }
    $.MercuryModal.closeAll = function(selector){
        if(!selector || !selector.length) selector = $.MercuryModal.defaults.id;
        $('.'+ selector).modal('hide');
    }

    // Helpers
    $.fn.MercuryModal = function(options) {
        return this.each(function() {
            $.MercuryModal(this, options);
        });

    }
    $.fn.closeModal = function(){
        return this.each(function() {
            $(this).modal('hide');
        });
    }
    window.MercuryModal = function MercuryModal(options) {
        return $.MercuryModal(null, options);
    }
    window.CloseLastModal = function CloseLastModal(selector) {
        return $.MercuryModal.closeLast(selector);
    }
})(jQuery);