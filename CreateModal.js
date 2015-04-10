var modalElement = '';
modalElement += '<div class="modal fade" id="mymodal" role="dialog" aria-labelledby="modal" aria-hidden="false">';
modalElement += '   <div class="modal-dialog">';
modalElement += '       <div class="modal-content">';
modalElement += '           <div class="modal-header">';
modalElement += '               <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
modalElement += '               <h4 class="modal-title"></h4>';
modalElement += '           </div>';
modalElement += '           <div class="modal-body"></div>';
modalElement += '           <div class="modal-footer">';
modalElement += '               <button type="button" id="nobtnmodal" class="btn btn-default" data-dismiss="modal">Cancel</button>';
modalElement += '               <button type="button" id="yesbtnmodal" class="btn btn-danger" data-dismiss="modal">Ok</button>';
modalElement += '           </div>';
modalElement += '       </div>';
modalElement += '   </div>';
modalElement += '</div>';

// hide modal manually: $('#mymodal').modal('hide');
function CreateModal(options) {
    var defaults = {
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
        title: null,
        text: null,
        textAlign: 'left',
        width: '600px',
        ready: function(){},
        hide: function(){}
    }
     
    settings = $.extend(true, defaults, options);
    
    if ($('#mymodal').length == 0) {
        $('body').append(modalElement);
    }    
    var modalDiv = $('#mymodal');
    
    modalDiv.unbind();
    
    var modalContent = '';
    
    modalContent += ' <div class="modal-dialog" style="width: '+ settings.width +';"> <div class="modal-content"> <div class="modal-header">';
    modalContent += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
    if (settings.title) {
        modalContent += '<h4 class="modal-title">';
        modalContent += settings.title;
        modalContent += '</h4>';
    }
    modalContent += '</div>';
    if (settings.text) {
        modalContent += '<div class="modal-body" style="text-align: '+ settings.textAlign +';">';
        modalContent += settings.text;
        modalContent += '</div>';
        modalContent += '<div class="modal-footer" style="text-align:center;">';
    }
    else{
        modalContent += '<div class="modal-footer" style="border-top:0; text-align:center;">';
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
    
    modalContent += '</div> </div> </div>';
    
    modalDiv.html(modalContent);
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
    
    modalDiv.on('hidden.bs.modal', settings.hide);
    settings.ready();
}