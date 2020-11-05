$(document).ready( function(){
    // ページ読み込み時に実行したい処理

    //管理画面のサイドバーの色
    const dir = location.href.split("/");
    const path =dir[dir.length -2] + '/' + dir[dir.length -1];
    switch (path) {
        case "admin/users":
            $("#sidebar_li_users").addClass("this_page");
            $("#sidebar_a_users").removeClass("whitelink");
            break;
        case "admin/menus":
            $("#sidebar_li_menus").addClass("this_page");
            $("#sidebar_a_menus").removeClass("whitelink");
            break;
        case "admin/news":
            $("#sidebar_li_news").addClass("this_page");
            $("#sidebar_a_news").removeClass("whitelink");
            break;
        case "admin/blogs":
            $("#sidebar_li_blogs").addClass("this_page");
            $("#sidebar_a_blogs").removeClass("whitelink");
            break;
        case "admin/pages":
            $("#sidebar_li_pages").addClass("this_page");
            $("#sidebar_a_pages").removeClass("whitelink");
            break;
        case "admin/contacts":
            $("#sidebar_li_contacts").addClass("this_page");
            $("#sidebar_a_contacts").removeClass("whitelink");
            break;
        default :
            $("#sidebar_li_home").addClass("this_page");
            $("#sidebar_a_home").removeClass("whitelink");
            break;
    }

    //contentタブ初期表示
    $("#tab1").addClass("active");
    $("#panel1").addClass("active");
  });
  
  $(function(){
    $(".tab_label").on("click",function(){
      var $this = $(this).index();
        $(".tab_label").removeClass("active");
        $(".tab_panel").removeClass("active");
        $(this).addClass("active");
        $(".tab_panel").eq($this).addClass("active");
    });
  });