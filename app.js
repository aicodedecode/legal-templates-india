(function(){
  var cat=null, filterText='', filterCat=null;
  function $(s){return document.querySelector(s)}
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function badges(c){
    var stamp = c.stamp_duty==='required' ? '<span class="badge b-stamp">Stamp duty: required</span>'
      : c.stamp_duty==='check' ? '<span class="badge b-stamp check">Stamp duty: check</span>'
      : '<span class="badge b-stamp na">No stamp duty</span>';
    var esig = c.e_signature==='permitted' ? '<span class="badge b-esign">eSign ready</span>' : '';
    var rev = c.review_status==='reviewed'
      ? '<span class="badge b-reviewed">Advocate reviewed</span>'
      : '<span class="badge b-review">Advocate review pending</span>';
    var ver = c.verification==='deep_statute_check'
      ? '<span class="badge b-verified">Statute-verified (deep)</span>'
      : '<span class="badge b-verified">Citations verified</span>';
    var fields = '<span class="badge b-fields">'+c.fill_fields+' fill fields</span>';
    return '<div class="badges"><span class="badge b-cat">'+esc(c.category)+'</span>'+stamp+esig+rev+ver+fields+'</div>';
  }
  function renderHome(){
    var cats={}; cat.templates.forEach(function(c){cats[c.category]=(cats[c.category]||0)+1});
    var chips='<button class="chip'+(filterCat?'':' on')+'" data-c="">All ('+cat.templates.length+')</button>';
    Object.keys(cats).sort().forEach(function(k){ chips+='<button class="chip'+(filterCat===k?' on':'')+'" data-c="'+k+'">'+esc(k)+' ('+cats[k]+')</button>'; });
    var deep=cat.templates.filter(function(c){return c.verification==='deep_statute_check'}).length;
    var rev=cat.templates.filter(function(c){return c.review_status==='reviewed'}).length;
    var list=cat.templates.filter(function(c){
      var okc=!filterCat||c.category===filterCat;
      var t=(c.title+' '+c.summary+' '+c.id).toLowerCase();
      return okc && (!filterText || t.indexOf(filterText)>-1);
    });
    $('#app').innerHTML =
      '<section class="hero"><h1>Indian-law legal templates, free and open</h1>'+
      '<p>Contracts, policies and corporate documents drafted to Indian law, in structured Markdown. Fill them in the browser and download a finished file. Nothing you type leaves this page.</p>'+ 
      '<div class="stats"><div class="stat"><b>'+cat.templates.length+'</b><span>templates</span></div>'+
      '<div class="stat"><b>'+deep+'</b><span>deep statute-checked</span></div>'+
      '<div class="stat"><b>'+rev+'</b><span>advocate-reviewed</span></div>'+
      '<div class="stat"><b>'+cat.updated+'</b><span>last verified</span></div></div></section>'+ 
      '<div class="controls"><input id="q" class="search" placeholder="Search templates..." value="'+esc(filterText)+'">'+chips+'</div>'+ 
      '<section class="grid">'+ (list.map(function(c){
        return '<article class="card" data-id="'+c.id+'"><h3>'+esc(c.title)+'</h3><p class="sum">'+esc(c.summary||'')+'</p>'+badges(c)+'</article>';
      }).join('') || '<p class="loading">No templates match.</p>') + '</section>';
    var q=$('#q');
    q.addEventListener('input',function(){filterText=q.value.toLowerCase().trim();renderHome();var n=$('#q');n.focus();});
    Array.prototype.forEach.call(document.querySelectorAll('.chip'),function(ch){ch.addEventListener('click',function(){filterCat=ch.getAttribute('data-c')||null;renderHome();});});
    Array.prototype.forEach.call(document.querySelectorAll('.card'),function(cd){cd.addEventListener('click',function(){location.hash='#/t/'+cd.getAttribute('data-id');});});
  }
  function route(){
    var m=/^#\/t\/([a-z0-9\-]+)$/.exec(location.hash||'');
    if(m && cat && cat.templates.some(function(c){return c.id===m[1]})) renderDetail(m[1]);
    else renderHome();
  }
  function renderDetail(id){
    var c=null; cat.templates.forEach(function(x){if(x.id===id)c=x;});
    $('#app').innerHTML='<p class="loading">Loading '+esc(c.title)+'...</p>';
    fetch('templates/'+id+'/template.md').then(function(r){return r.text()}).then(function(text){
      var p=FM.parseFM(text);
      var laws=p.meta.governing_laws||[];
      var inputs=p.meta.fields.map(function(f,idx){
        var tag=f.type==='textarea'?'textarea':'input';
        return '<div class="field"><label for="f'+idx+'">'+esc(f.label||f.key)+'</label>'+ 
          '<'+tag+' id="f'+idx+'" data-k="'+esc(f.key)+'" placeholder="'+esc(f.example||'')+'"></'+tag+'></div>';
      }).join('');
      $('#app').innerHTML=
        '<div class="detail"><div class="crumbs"><a href="#/">&larr; All templates</a></div>'+ 
        '<div class="detail-head"><h1>'+esc(c.title)+'</h1>'+badges(c)+ 
        '<ul class="laws">'+laws.map(function(l){return '<li>'+esc(l)+'</li>'}).join('')+'</ul></div>'+ 
        '<div class="fillwrap"><aside class="panel"><h4>Quick fill</h4>'+ 
        '<p class="hint">Answer what you know. Unfilled fields stay as {{field}} markers in the file. Nothing is uploaded; the download happens in your browser.</p>'+ 
        inputs+ 
        '<div class="actions"><button class="btn" id="dl">Download filled .md</button>'+ 
        '<a class="btn ghost" href="templates/'+id+'/template.md" download>Raw template</a></div></aside>'+ 
        '<section class="doc" id="doc"></section></div></div>';
      var doc=$('#doc');
      function vals(){ var v={}; p.meta.fields.forEach(function(f){var el=document.querySelector('[data-k="'+f.key+'"]'); v[f.key]=el?el.value:'';}); return v; }
      function refresh(){
        if(!window.marked){ doc.innerHTML='<p class="loading">The document renderer failed to load. Use the download buttons on the left.</p>'; return; }
        doc.innerHTML=marked.parse(FM.substitute(p.body,vals()));
      }
      p.meta.fields.forEach(function(f){var el=document.querySelector('[data-k="'+f.key+'"]'); if(el) el.addEventListener('input',refresh);});
      $('#dl').addEventListener('click',function(){
        var out=FM.substitute(p.body,vals());
        var blob=new Blob([out],{type:'text/markdown;charset=utf-8'});
        var a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=id+'-filled.md'; a.click();
      });
      refresh();
    });
  }
  window.addEventListener('DOMContentLoaded',function(){
    fetch('catalog.json').then(function(r){return r.json()}).then(function(c){ cat=c; route(); });
    window.addEventListener('hashchange',route);
  });
})();
