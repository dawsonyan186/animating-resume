/*把code写到@code和style中*/
function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#code');
    var n = 0;
    var id = window.setInterval(function() {
        n++;
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
        domCode.scrollTop = '10000';
        styleTag.innerHTML = prefix + code.substring(0, n);
        if (n >= code.length) {
            window.clearInterval(id);
            if(fn){
                fn.call()
            }
        }
    }, 0);
}

function writeMarkdown(markdown,fn){
    let markdownDom = document.querySelector('#paper>.content');
    var n = 0;
    var id = window.setInterval(function() {
        n++;
        markdownDom.innerHTML = markdown.substring(0, n);
        markdownDom.scrollTop = '10000';
        if (n >= markdown.length) {
            window.clearInterval(id);
            if(fn){
                fn.call()
            }
        }
    }, 0);
}


var result = `/*
* 面试官你好，我是严东
* 只用文字作做我介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/
*{
transition: all 1s;
}
html{
background: #eee;
}
#code{
border: 1px solid #aaa;
padding: 16px;
}

/* 我需要一点代码高亮 */
.token.selector{ color: #690; }
.token.property{ color: #905; }

/* 加3D效果 */
#code{
    transform:rotate(360deg);
}
`;

var result2 = `
/*我需要一张白纸*/
#code{
    position:fixed;
    left:0;
    height:100%;
    width:50%;
}
#paper{
    position:fixed;
    right:0;
    height:100%;
    width:50%;
    background:#ddd;
    display:flex;
    justify-content: center;
    align-items:center;
}

#paper > .content{
    background:white;
    height:100%;
    width:100%;
    padding-left:16px;
}
`;

var md = `
# 自我介绍
我叫 严东
1986 年 7 月出生
江汉大学 毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. 无缝轮播
2. 会动的简历
3. cavas画板
# 联系方式
- QQ 326814950
- Email ydong_sh@163.com
- 手机 18616581044

`
writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md);
        })
    });
});

function createPaper(fn){
    var paper = document.createElement('div');
    paper.id = 'paper';
    var content = document.createElement('pre');
    content.className = 'content';
    paper.appendChild(content);
    document.body.appendChild(paper);
    fn.call();
}
