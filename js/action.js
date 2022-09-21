let imag=Array.from(document.getElementsByTagName('img'));
let layer =document.querySelector('.layer');
let lightboxmodel=document.querySelector('.lightboxmodel');
let close=document.getElementById('close');
let right=document.getElementById('right');
let left=document.getElementById('left');

var x;
let storePath;
for(let i=0;i<imag.length;i++)
{
    imag[i].addEventListener('click',function(e)
    {
        // x=imag.indexOf(e.target);  
        //  x= number of image if array 
        storePath= e.target.getAttribute('src');
        x=i;
        lightboxmodel.style.backgroundImage=`url(${storePath})`
        layer.classList.replace('d-none','d-flex')
    
    })
}
function Next()
{
    x++;
    if(x>=imag.length)
    {
        x=0;
    }
    lightboxmodel.style.backgroundImage=`url(${imag[x].getAttribute('src')})`

}
function prev()
{
    x--;
    if(x<0)
    {
        x=imag.length-1;
    }
    lightboxmodel.style.backgroundImage=`url(${imag[x].getAttribute('src')})`

}
function exite()
{
    layer.classList.replace('d-flex','d-none');
}
right.addEventListener('click',function()
{ Next()})
left.addEventListener('click',function()
{prev()})
close.addEventListener('click',function()
{exite()})
document.addEventListener('keydown',function(e)
{
if(layer.classList.contains('d-flex'))
{
    if(e.code=="Escape")
    {
        exite();
    }
    if(e.code=="ArrowRight")
    {
        Next();
    }
    if(e.code=="ArrowLeft")
    {
        prev();
    }

}
}
)
