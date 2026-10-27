function parseFM(text){
  var m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(text);
  if(!m) return {meta:{}, body:text};
  var lines = m[1].split('\n'), meta = {fields:[]};
  var cur=null, inFields=false, inSummary=false;
  for(var i=0;i<lines.length;i++){
    var L=lines[i];
    if(/^summary:/.test(L)){ cur='summary'; meta.summary=''; inSummary=true; continue; }
    if(inSummary && /^\s/.test(L)){ meta.summary+=(meta.summary?' ':'')+L.trim(); continue; }
    inSummary=false;
    var km=/^([a-z_]+):\s*(.*)$/.exec(L);
    if(km && L.charAt(0) !== ' '){
      if(km[1]==='fields'){ inFields=true; cur=null; continue; }
      if(km[2]===''){
        var j=i+1, items=[];
        while(j<lines.length && /^\s+-\s/.test(lines[j])){ items.push(lines[j].replace(/^\s+-\s*/,'').replace(/^["']|["']$/g,'').trim()); j++; }
        if(items.length){ meta[km[1]]=items; i=j-1; cur=null; continue; }
        cur=km[1]; continue;
      }
      meta[km[1]]=km[2].replace(/^["']|["']$/g,''); cur=km[1]; continue;
    }
    if(inFields){
      var fk=/^\s+- key:\s*(.+)$/.exec(L);
      if(fk){ cur={key:fk[1].trim()}; meta.fields.push(cur); continue; }
      var fa=/^\s+([a-z_]+):\s*(.*)$/.exec(L);
      if(fa && cur){ cur[fa[1]]=fa[2].replace(/^["']|["']$/g,''); continue; }
    } else if(cur && /^\s+-\s/.test(L)){
      if(!Array.isArray(meta[cur])) meta[cur]=[];
      meta[cur].push(L.replace(/^\s+-\s*/,'').replace(/^["']|["']$/g,'').trim());
      continue;
    }
  }
  if(meta.summary) meta.summary=meta.summary.trim();
  return {meta:meta, body:m[2]};
}
function substitute(body, values){
  return body.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, function(s,k){
    var v=values[k];
    return (v!==undefined && v!=='') ? v : '{{'+k+'}}';
  });
}
window.FM={parseFM:parseFM, substitute:substitute};
