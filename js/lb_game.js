!function(t){function o(t,o){this.base={w:o[t].w,h:o[t].h},this.pos={x:0,y:0,z:0},this.name=t,this.S_LEAVING=!1,this.hp=1,this.dom={}}function i(t,o){this.opt=o,this.cont=0,this.timeout=1500,this.ableList=[],this.showList=[],this.ablePos=[],this.dom=t,this.gg=3,this.S_STARTING=!1,this.S_RESTART=!1,this.S_DEADMOD=0,this.init(),this.bindFn()}var s={roles:{rin:{w:102,h:172},yui:{w:70,h:90},komani:{w:78,h:147},haruka:{w:112,h:148},mio:{w:122,h:140},kudo:{w:122,h:139}},pos:{p1:{x:480,y:60,z:0},p2:{x:410,y:320,z:0},p3:{x:100,y:350,z:1},p4:{x:240,y:330,z:1},p5:{x:700,y:330,z:1},p6:{x:850,y:340,z:1}},lv:[1100,900,850]};Array.prototype.remove=function(t){var o=this.indexOf(t);return!(o<0)&&this.splice(o,1)},o.prototype={show:function(o){this.pos=o,this.dom=t("<div></div>"),this.dom.addClass("lb-ele role-enter "+this.name).css({left:o.x,top:o.y})},hide:function(t,o){var i=this,s=150;this.S_LEAVING=!0,this.dom.removeClass("role-enter").addClass("role-leave"),o&&(s=700),setTimeout(function(){i.dom.remove(),t&&t()},s)},checkClick:function(t,o){if(this.S_LEAVING)return!1;var i=this.base,s=this.pos,e=t-s.x,n=o-s.y;return Math.abs(e)-30<i.w/2&&n-30<i.h&&n>-30&&(this.dom.addClass("role-click"),!0)}},i.prototype={init:function(){var o=this;this.cont=0,this.gg=3,this.timeout=1500,t(".life span").text(this.gg),t(".score span").text(this.cont);var i=this.opt;this.posList;for(var s in i.roles)this.ableList.push(s);for(var s in i.pos)this.ablePos.push(i.pos[s]);window.onload=function(){o.dom.addClass("loaded")}},bindFn:function(){function o(o){var s=o.pageX-t(this).offset().left,e=o.pageY-t(this).offset().top;i.showList.forEach(function(o){if(o.checkClick(s,e))return o.flag&&(clearTimeout(o.flag),o.flag=!1,i.S_STARTING&&(i.cont++,i.cont%10===0&&i.lvChange()),t(".score span").text(i.cont),i.removeRole(o,!0)),!1})}var i=this;this.dom.bind("mousedown touchstart",o)},addRole:function(i,s){var e=this,n=new o(i,this.opt.roles);n.show(s),t(".z"+s.z).append(n.dom),n.dom.css("animation-duration",e.timeout/3e3+"s"),setTimeout(function(){n.dom.css("animation-duration","")},e.timeout/3+200),e.showList.push(n),e.ableList.remove(i),e.ablePos.remove(s),n.flag=setTimeout(function(){n.flag=!1,e.removeRole(n)},e.timeout)},removeRole:function(o,i){var s=this;i&&s.showList.remove(o),o.hide(function(){s.showList.remove(o)?(s.ablePos.push(o.pos),s.ableList.push(o.name),s.S_STARTING&&(s.gg--,t(".life span").text(s.gg),0===s.gg&&(s.S_STARTING=!1,s.over())),s.S_RESTART||s.run()):(s.ablePos.push(o.pos),s.ableList.push(o.name),s.S_RESTART||(s.run(),1===s.S_DEADMOD&&(s.S_DEADMOD++,setTimeout(function(){s.run()},s.timeout/2))))},i)},lvChange:function(){var o=this,i=o.opt.lv.length,s=Math.floor(o.cont/10);o.gg++,t(".life span").text(o.gg),s>=i?(o.timeout=o.opt.lv[i-1],o.S_DEADMOD++):o.timeout=o.opt.lv[s]},run:function(){var t=this,o=t.ableList,i=t.ablePos,s=o.length,e=i.length,n=o[Math.floor(Math.random()*s)%s],h=i[Math.floor(Math.random()*e)%e];this.addRole(n,h)},play:function(){var t=this;t.S_RESTART=!0,t.init(),t.dom.addClass("starting"),setTimeout(function(){t.S_RESTART=!1,t.S_STARTING=!0,t.run()},2e3)},over:function(){alert("GG,得分:"+this.cont),t(".play-btn").fadeIn(),~~window.maxscore<this.cont&&(window.maxscore=this.cont),t(".maxscore span").text(window.maxscore)}},t.fn.lb_game=function(){return new i(t(this),s)}}(jQuery);