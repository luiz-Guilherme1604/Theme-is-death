load_level=b=>{d={};
d.t=b.codePointAt(0)-32;
d.w=b.codePointAt(1)-32;
d.h=b.codePointAt(2)-32;
d.z=+b[3];
d.m=[];
d.M=[];
for(i=4;i<b.length;i+=3)d.m.push([b.codePointAt(i)-32,b.codePointAt(i+1)-32,b.codePointAt(i+2)-32]);
return d
}
