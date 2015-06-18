jQuery(document).ready(function($) {

    function error(e, t) {
        var r = noty({
            layout: "top",
            text: e,
            type: "error",
            timeout: (t ? t :5000)
        })
    }

    function warning(e, t) {
        var r = noty({
            layout: "top",
            text: e,
            type: "warning",
            timeout: (t ? t :5000)
        })
    }

    function success(e, t) {
        var r = noty({
            layout: "top",
            text: e,
            type: "success",
            timeout: (t ? t :5000)
        })
    }

    $('body').scrollspy({ target: '#header', offset: 400});
    $('a.scrollto').on('click', function(e){
        var target = this.hash;
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});
    
    $('#introDemo').on('click', function(){
        MercuryModal({
            title: 'Intro demo',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec augue mollis, ultricies sem quis, lobortis ipsum. Maecenas et lectus vitae nunc semper molestie a sed arcu. In eu consectetur arcu. Nam venenatis tempor lectus nec molestie. Pellentesque ut aliquam ligula. Donec imperdiet tempus elit id laoreet. Ut non congue nisi. Fusce rhoncus sem ut condimentum tincidunt. Ut risus ex, faucibus tempor leo ut, semper cursus mi. Fusce tincidunt lacus in leo rutrum, sed consequat tortor efficitur. Vivamus nulla neque, sodales quis dui eu, laoreet fermentum lectus. In interdum massa ex, a congue urna sodales vitae. Nulla vehicula, ex et accumsan viverra, enim ipsum bibendum arcu, eget sodales metus arcu sit amet nunc. Phasellus scelerisque ut ante vel viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            show: {
                footer: false
            }
        });
    });
    
    $('#example-text').on('click', function(){
        MercuryModal({
            title: 'Example 1',
            text: 'Simplest modal',
            show: {
                footer: false
            }
        });
    });
    
    $('#example-alert').on('click', function(){
        MercuryModal({
            title: 'I am an alert!!',
            textAlign:{
                header: 'center',
                footer: 'center'
            },
            buttons:[
                {
                    text: 'Ok',
                    class: 'btn-info'
                }
            ]
        });
    });
    
    $('#example-confirm').on('click', function(){
        MercuryModal({
            title: 'I am an confirm window.',
            textAlign:{
                header: 'center',
                footer: 'center'
            },
            buttons:[
                {
                    text: 'Ok',
                    class: 'btn-success',
                    dismiss: false,
                    click: function(e){
                        success('You pressed ok. The modal will close in 2s', 2000);
                        setTimeout(function(){
                            e.closest('.modal').closeModal();
                        }, 2000);
                    }
                },
                {
                    text: 'Cancel',
                    class: 'btn-danger',
                    click: function(){
                        error('You pressed cancel');
                    }
                }
            ]
        });
    });
    
    $('#example-elements').on('click', function(){
        $('#for-example-element').MercuryModal({
            title: 'This modal was created starting from #for-example-element',
            textAlign:{
                header: 'center',
                middle: 'center'
            },
            width: 800,
            show: {
                footer: false
            }
        });
    });
    
    $('#example-many-modals').on('click', function(){
        for(var i = 0; i < 10; i++){
            MercuryModal({
                title: 'Modal #' + (numberOfModals() + 1),
                text: 'Hint: press ESC, it\'s faster',
                textAlign: {
                    middle: 'center'
                },
                show: {
                    footer: false
                }
            });
        }
    });
});