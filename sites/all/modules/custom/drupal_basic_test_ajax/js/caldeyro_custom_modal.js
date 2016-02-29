(function($) {
    Drupal.behaviors.caldyero_custom_modal = {
        attach: function(context, settings) {
            $(document).ready(function() {
                var cookie_name = "caldeyro_modal_cookie";
                var cookie = getCookie(cookie_name);
                if (cookie == "") {
                    setCookie(cookie_name, "displayed", 0);
                    $('body').once(function() {
                      $("#show_color_box_content").click();
                      var element = document.getElementById('colorbox');
                      element.classList.add("caldeyro-modal-popup");
                  });
                }
            })
          $('body').on('click','.caldeyro-close',function(e){
            $.fn.colorbox.close();
          });
          var name = $('#edit-name');
          if (name){
            name.focus();
          }
          $('#edit-caldeyro-popup-button').once('myslider', function() {
            $('#edit-caldeyro-popup-button').click(function(e){
              var redirect = true;
              var name = $('#edit-name');
              if (name){
                if (name.val() == '') {
                  name.attr('placeholder','Nombre es requerido');
                  name.focus();
                  redirect = false;
                }
              }
              var email = $('#edit-email');
              if (email) {
                if (email.val() == '') {
                  email.attr('placeholder','E-mail es requerido');
                  email.focus();
                  redirect = false;
                } else {
                  var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
                  if (!emailFilter.test(email.val())) {
                    var error = $('.validate-email');
                    error.text('Colocar un e-mail válido');
                    email.focus();
                    redirect = false;
                  }
                }
              }

              if (redirect) {
		$(this).attr('disabled','disabled');
                window.location.href = Drupal.settings.caldeyro_custom_modal.basepath + '/popup-tasks/' + email.val() + '/' + name.val();
                $.fn.colorbox.close();
              }
            });
          });

          function setCookie(cname, cvalue, exdate) {
                var d = new Date(exdate);
                var expires = "expires="+d.toUTCString();
                document.cookie = cname + "=" + cvalue + "; path=/ ";
            }

            function getCookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for(var i=0; i<ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

        }
    };
})(jQuery);
