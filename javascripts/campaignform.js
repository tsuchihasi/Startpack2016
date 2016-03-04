(function() {

  // recieve URL parameters
  var arg = new Object;
  var pair=location.search.substring(1).split('&');
  for(var i=0;pair[i];i++) {
    var kv = pair[i].split('=');
    arg[kv[0]]=kv[1];
  }
  console.log(arg.co)
  console.log(arg.ub)
  console.log(arg.fr)
  console.log(arg.jb)
  console.log(arg.jc)
  console.log(arg.mc)
  $(document).ready(function(){
    // var services = ['co', 'ub', 'fr', 'jb', 'jc', 'mc'];
    // arg.foreach(kv) {
    //   if(services.indexOf(kv) > -1){
    //     $("#chbox_"+key).prop("checked", true);
    //   }
    // })
    if (arg.co == 'true') {
      $("#chbox_co").prop("checked", true);
    }
    if (arg.ub == 'true') {
      $("#chbox_ub").prop("checked", true);
    }
    if (arg.fr == 'true') {
      $("#chbox_fr").prop("checked", true);
    }
    if (arg.jb == 'true') {
      $("#chbox_jb").prop("checked", true);
    }
    if (arg.jc == 'true') {
      $("#chbox_jc").prop("checked", true);
    }
    if (arg.mc == 'true') {
      $("#chbox_mc").prop("checked", true);
    }
  });


  // add require label
  var required_tag, requires;
  required_tag = '<span class="label label-danger">\u5FC5\u9808</span>';
  requires = $('form [required]').each(function (i, elm) {
      return $(elm).before(required_tag);
  });

  // validetta
  $(document).ready(function() {
    $("#form").validetta();
  });


  // ajax
  $('form').submit(function(event) {
    // HTMLでの送信をキャンセル
    event.preventDefault();

    var hostUrl = 'https://script.google.com/a/macros/coiney.com/s/AKfycbxG5PGPegLyDVlOHkBs4i8V4I9bI55Gv9pi04F_bYbPU1-m7XFc/exec'
    var btn_submit = $('this');
    var data = {お名前: $('input[name="name"]').val(),
                メールアドレス: $('input[name="email"]').val(),
                パスワード: $('input[name="password"]').val(),
                電話番号: $('input[name="phone"]').val(),
                企業形態: $('input[name="corporation"]:checked').val(),
                利用規約: $('input[name="terms"]:checked').val(),
              　Coiney: $('input[name="Coiney"]:checked').val(),
              　ユビレジ: $('input[name="Ubiregi"]:checked').val(),
              　Freee: $('input[name="Freee"]:checked').val(),
              　ジャパンネット銀行: $('input[name="Japannetbank"]:checked').val(),
              　ジョブカン: $('input[name="Jobcan"]:checked').val(),
              　モンスターチャンネル: $('input[name="Monstarchannel"]:checked').val()
              };
      // validation

      // loading
      $("body").css({"opacity":"0.5"});
      $("#loading img").css({"display":"block"})

      // send jsonp
      $.ajax({
        url: hostUrl,
        type: 'get',
        dataType:'jsonp',
        data: data,
        beforeSend: function () {
            return btn_submit.attr('disabled', true);
        },
        complete: function () {
            return btn_submit.attr('disabled', false);
        },
        success: function (response) {
          if (response.success) {
            window.location.href = 'thankyou.html';
          } else {
            alert('送信に失敗しました。ご入力頂いた情報をご確認いただき、再度お試しください。');
          }
          console.log(response);
        },
        error: function (response) {
          alert('送信に失敗しました。ご入力頂いた情報をご確認いただき、再度お試しください。');
          console.log('omg you failed');
        }
      });
      //
      //
      // $.ajax({
      //   url: hostUrl,
      //   dataType:'jsonp',
      //   data: data,
      //   success: function (response) {
      //     window.location.href = 'https://coiney.slack.com/messages/mobileapp/';
      //     console.log('lplp');
      //   },
      //   error: function (response) {
      //     window.location.href = 'hhapp.jp';
      //     console.log('omg you failed');
      //   }
      // })
  });


}.call(this));



// (function () {
//     $(function () {
//         var required_tag, requires;
//         required_tag = '<span class="label label-danger">\u5FC5\u9808</span>';
//         requires = $('form [required]').each(function (i, elm) {
//             return $(elm).before(required_tag);
//         });
//         return $('form').validate({
//             debug: true,
//             submitHandler: function (e) {
//                 var btn_submit, form;
//                 form = $(e);
//                 btn_submit = form.find('button[type=submit]');
//                 return $.ajax({
//                     url: form.attr('action'),
//                     dataType: 'jsonp',
//                     data: form.serialize(),
//                     beforeSend: function () {
//                         return btn_submit.attr('disabled', true);
//                     },
//                     complete: function () {
//                         return btn_submit.attr('disabled', false);
//                     },
//                     success: function (response) {
//                         location.href = 'thankyou.html';
//                     },
//                     error: function (response) {
//                         return window.location.href = 'file:///Users/intern/Desktop/Startpack2016/thankyou.html';
//                         return console.log(response);
//                     }
//                 });
//             }
//         });
//     });
// }.call(this));
