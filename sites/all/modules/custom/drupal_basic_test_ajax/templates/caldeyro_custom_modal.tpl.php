<div class="caldeyro-popup">
  <h3>popup</h3>
<a id="show_color_box_content" class="colorbox-inline" href="?width=600&height=530&inline=true#caldeyro_custom_modal-content">CLICK</a>
<div style="display: none;">
  <div id="caldeyro_custom_modal-content">
    <?php
    $form = drupal_get_form('caldeyro_popup_screen_form');
    print render($form);
    ?>
  </div>
</div>
</div>
<a class="popup-close-button popup-generated-close-button" href="#"><span>close this window</span></a>
