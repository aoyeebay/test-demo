window.onload = function(){
    let box = document.getElementsByClassName('box')[0];
    console.log(box)
    //let box = document.getElementById('box')

    box.addEventListener('click',()=>{
        alert('这是测试代码')
    })
}