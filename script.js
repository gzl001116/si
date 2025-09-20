document.addEventListener('DOMContentLoaded', function() {
    // 简单的导航功能
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main > section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // 隐藏所有部分
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // 显示目标部分
            if (targetId === 'home') {
                document.getElementById('home').style.display = 'block';
            } else {
                document.getElementById(targetId).style.display = 'block';
            }
        });
    });
    
    // 默认显示首页
    document.getElementById('home').style.display = 'block';
});