var github = (function(){
  function escapeHtml(str) {
    return str;
    // return document.querySelector('<div/>').innerHTML;
  }
  function render(target, repos){
    var i = 0, fragment = '', t = document.querySelector(target);

    console.log('repos',repos);
    for(i = 0; i < repos.length; i++) {
      fragment += '<li><span class="githubrepo"><a href="'+repos[i].html_url+'">'+repos[i].name+'</a></span><p>'+escapeHtml(repos[i].description||'')+'</p></li>';
    }
    t.innerHTML = fragment;
  }
  return {
    showRepos: function(options){
      var x = new XMLHttpRequest();
      x.onload = function() {
        var r = JSON.parse(this.response);
        var repos = [];
        for (var i = 0; i < r.length; i++) {
          if (options.skip_forks && r[i].fork) { continue; }
          repos.push(r[i]);
        }
        if (options.count) { repos.splice(options.count); }
        render(options.target, repos);
      };
      x.open('GET', 'https://api.github.com/users/iamsebastian/repos?sort=pushed', true);
      x.send();
      // $.ajax({
      //     url: "https://api.github.com/users/"+options.user+"/repos?sort=pushed&callback=?"
      //   , dataType: 'jsonp'
      //   , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
      //   , success: function(data) {
      //     var repos = [];
      //     if (!data || !data.data) { return; }
      //     for (var i = 0; i < data.data.length; i++) {
      //       if (options.skip_forks && data.data[i].fork) { continue; }
      //       repos.push(data.data[i]);
      //     }
      //     if (options.count) { repos.splice(options.count); }
      //     render(options.target, repos);
      //   }
      // });
    }
  };
})();
