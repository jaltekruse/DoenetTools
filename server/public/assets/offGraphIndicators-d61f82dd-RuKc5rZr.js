import{a as h}from"./graph-462f764a-C0kM6xFY.js";function b(u,p){let{flippedX:t,flippedY:m,xmin:c,xmax:o,ymin:d,ymax:r}=h(p),n=o-c,s=r-d,y=c+n*.01,a=o-n*.01,f=d+s*.01,x=r-s*.01,e=[...u],l=[0,0],i=!1;return e.every(A=>typeof A=="number")&&(e[0]<y?(i=!0,l[0]=t?1:-1,e[0]=y):e[0]>a&&(i=!0,l[0]=t?-1:1,e[0]=a),e[1]<f?(i=!0,l[1]=m?1:-1,e[1]=f):e[1]>x&&(i=!0,l[1]=m?-1:1,e[1]=x)),{needIndicator:i,indicatorCoords:e,indicatorSides:l}}function v({center:u,radius:p,directionToCheck:t,board:m}){let{flippedX:c,flippedY:o,xmin:d,xmax:r,ymin:n,ymax:s}=h(m),y=c?-1:1,a=o?-1:1,f=r-d,x=s-n,e=d+f*.01,l=r-f*.01,i=n+x*.01,A=s-x*.01,j=t[0]*y===1?l:e,g=t[1]*a===1?A:i,I=u[1]-a*t[1]*Math.sqrt(p**2-(j-u[0])**2),S=t[1]*a;return I*S>g*S?{needIndicator:!0,indicatorSides:t,indicatorCoords:[j,g]}:{needIndicator:!1}}export{v as a,b as c};