 /* string_score.js: Quicksilver-like string scoring
  * http://github.com/joshaven/string_score/tree/master
  *
  * Copyright (C) 2009 Joshaven Potter <yourtech@gmail.com>
  * Copyright (C) 2010 Gora Khargosh <gora.khargosh@gmail.com>
  * Licensed under the MIT license.
  * http://www.opensource.org/licenses/mit-license.php
  *
  * Date: 2011-01-26
  * Version 1.1b
  */
String.prototype.score=function(l){if(this==l){return 1}var r=0,p=l.length,g=this,o=g.length,n=false,k=0,s=0,q=0,e=0;for(var f=0,b=0,m=0,j="",a="",d="",h;f<p;++f){j=l.charAt(f);a=g.indexOf(j.toLowerCase());d=g.indexOf(j.toUpperCase());h=Math.min(a,d);m=(h>-1)?h:Math.max(a,d);if(m===-1){return 0}b=0.1;if(g.charAt(m)===j){b+=0.1}if(m===0){b+=0.8;if(f===0){n=true}}if(g.charAt(m-1)===" "){b+=0.8}g=g.substring(m+1,o);r+=b}k=r/p;s=p/this.length;q=k*s;e=(q+k)/2;if(n&&(e+0.1<1)){e+=0.1}return e};
