const swiper2 = new Swiper("#fields_slider1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    watchSlidesVisibility: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.fields_btn_next2 ',
      prevEl: '.fields_btn_prev1'
      ,
    },


    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },


      381: {
        slidesPerView: 2,
      },
      382: {
        slidesPerView: 3,
      },

      800: {
        slidesPerView: 3,
      },

      801: {
        slidesPerView: 4,
       
      },
     

      1920: {
        slidesPerView: 4,
        
      }
    }
  
  });


  const swiper3 = new Swiper("#fields_slider2", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
  watchSlidesVisibility: true,
    // Navigation arrows
    navigation: {
      nextEl: '.fields_btn_next4',
      prevEl: '.fields_btn_prev3',
    },
    breakpoints: {
       320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },


      381: {
        slidesPerView: 2,
      },
      382: {
        slidesPerView: 3,
      },

      800: {
        slidesPerView: 3,
      },

      801: {
        slidesPerView: 4,
       
      },
     

      1920: {
        slidesPerView: 4,
        
      }
    }
  
  });

  const swiper4 = new Swiper("#fields_slider3", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    watchSlidesVisibility: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.fields_btn_next6',
      prevEl: '.fields_btn_prev5',
    },

    breakpoints: {
       320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },


      381: {
        slidesPerView: 2,
      },
      382: {
        slidesPerView: 3,
      },

      800: {
        slidesPerView: 3,
      },

      801: {
        slidesPerView: 4,
       
      },
     

      1920: {
        slidesPerView: 4,
        
      }
    }
  
  });




  const swiper5 = new Swiper("#types_of_construction_slider1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.constructions_btn_next2',
      prevEl: '.constructions_btn_prev1',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },


      600: {
        slidesPerView: 2,
         spaceBetween: 20,
      },
      601: {
        slidesPerView: 3,
      },

      800: {
        slidesPerView: 3,
      },

      801: {
        slidesPerView: 3,
       
      },
     

      1920: {
        slidesPerView: 3,
        
      }
    }
  });







  

  const swiper6 = new Swiper("#structural_elements_slider1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.structural_elements_btn_next2',
      prevEl: '.structural_elements_btn_prev1',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

     520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

     521: {
        slidesPerView: 3,
        spaceBetween: 30,
      }, 
      820: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      821: {
        slidesPerView: 4,
       
      },
     

      1920: {
        slidesPerView: 4,
        
      }
    }
  
  });


  const swiper7 = new Swiper("#soyuz_advantages_slider1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.soyuz_advantages_btn_next2',
      prevEl: '.soyuz_advantages_btn_prev1',
    },
  
  });


  const swiper8 = new Swiper("#projects_slider1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
     spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.projects_btn_next2',
      prevEl: '.projects_btn_prev1',
    },

     breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

       530: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      531: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

     900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      901: {
        slidesPerView: 4,
       
      },
     

      1920: {
        slidesPerView: 4,
        
      }
    }
  
  });
 




     $(document).on('change','#fileinput_form',function () {

      var value = $(this).val();
    
        var arr = value.split('\\');
    
        $(this).parent().find(".file_span").html(arr[arr.length - 1]);
    
        var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    
        var span = $(this).parent().find(".file_span");
    
    
    
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
    
            span.html("Невозможно загрузить формат");
    
            span.css({
                'color': '#F60000'
            });
    
            $('.hide-title').css({
                "display": "block"
            })
    
    
    
        } else {
    
            span.css({
    
                'color': "#9c9c9c"
    
            });
    
    
        
    
    
    
        }
    
    });
  



$(document).on("click", ".industry_order_a_calculation_btn", function(){
    $(".get_a_payment_popup").addClass("open");
    $("body").addClass("hidden_body");
});





$(document).on("click", ".order_a_free_calculation_btn", function(){
    $(".get_a_payment_popup").addClass("open");
    $("body").addClass("hidden_body");
});

$(document).on("click", ".get_a_payment_popup_close", function() {
    $(".get_a_payment_popup").removeClass("open");
    $("body").removeClass("hidden_body");
})



 $("body").click(function (event) {
        if($(event.target).hasClass("get_a_payment_popup")){
           $(".get_a_payment_popup").removeClass("open");
          $("body").removeClass("hidden_body"); 
        }
     
    });


$(document).on("click", ".get_a_payment_popup_form_btn", function(){
    $(".not_a_robot_popup").addClass("open");
       $(".get_a_payment_popup").removeClass("open");
    $("body").addClass("hidden_body");
});

$(document).on("click", ".not_a_robot_popup_close", function() {
    $(".not_a_robot_popup").removeClass("open");
    $("body").removeClass("hidden_body");
})

 $("body").click(function (event) {
        if($(event.target).hasClass("not_a_robot_popup")){
           $(".not_a_robot_popup").removeClass("open");
          $("body").removeClass("hidden_body"); 
        }
     
    });







     const swiper9 = new Swiper("#management_slider", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
  spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.management_next_btn',
      prevEl: '.management_prev_btn',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      820: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      821: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10
      },

      1025: {
        slidesPerView: 2,
       
      },
     

      1920: {
        slidesPerView: 2,
        
      }
    }
  
  });



    const swiper10 = new Swiper("#key_persons_slider", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.key_persons_next_btn',
      prevEl: '.key_persons_prev_btn',
    },
      breakpoints: {
      320: {
        slidesPerView: 2,
         spaceBetween: 10,
      },
       470: {
        slidesPerView: 2,
         spaceBetween: 10,
      },
       471: {
        slidesPerView: 2,
         spaceBetween: 20,
      },

     520: {
        slidesPerView: 2,
         spaceBetween: 20,
      },
       521: {
        slidesPerView: 3,
         spaceBetween: 20,
      },
       768: {
        slidesPerView: 3,
         spaceBetween: 20,
      },
       769: {
        slidesPerView: 3,
         spaceBetween: 20,
      },

       900: {
        slidesPerView: 3,
         spaceBetween: 20,
      },
       901: {
        slidesPerView: 4,
         spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
         spaceBetween: 20,
      },

      1025: {
        slidesPerView: 4,
       
      },
     

      1920: {
        slidesPerView: 4,
        
      }
    }
  });




    $(document).on("focusin", ".work_with_us_input", function() {
        $(this).parent().addClass("active");
    });

  $(document).on("focusin", ".work_with_us_textarea", function() {
        $(this).parent().addClass("active");
    });


    //   $(document).on("change", ".work_with_us_input", function() {
    //     $(this).parent().removeClass("active");
        
    // })



$(document).on("focusout", ".work_with_us_input", function(){
    $(this).parent().removeClass("active");
  var val = $(this).val();
  if(val.length > 0){
      $(this).parent().find('.work_with_us_input_text').hide();
  } else{
      $(this).parent().find('.work_with_us_input_text').show();
  }

});


$(document).on("focusout", ".work_with_us_textarea", function(){
    $(this).parent().removeClass("active");
  var val = $(this).val();
  if(val.length > 0){
      $(this).parent().find('.work_with_us_input_text').hide();
  } else{
      $(this).parent().find('.work_with_us_input_text').show();
  }

})



// $('.file-upload').file_upload();


$(document).ready(function () {
    $("html").on("dragover", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });

    $("html").on("drop", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });

    $('#drag_and_drop').on('dragover', function () {
      $(this).addClass('drag_over');
      return false;
    });

    $('#drag_and_drop').on('dragleave', function () {
      $(this).removeClass('drag_over');
      return false;
    });

    $('#drag_and_drop').on('drop', function (e) {
      e.preventDefault();
      $(this).removeClass('drag_over');
      var formData = new FormData();
      var files = e.originalEvent.dataTransfer.files;
      for (var i = 0; i < files.length; i++) {
        formData.append('file[]', files[i]);
      }

      console.log(files[0].name)

      $('.drag_and_drop_icon_info_wrapper').html(files[0].name);
      // uploadFormData(formData);
    });


    $(".drag_and_drop_icon_info_wrapper").toggleClass("active");

    function uploadFormData(form_data) {
      $.ajax({
        url: "img_fl_store.php",
        method: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
          $('#uploaded_file').append(data);
        }
      });
    }
  });
