// 切换侧边栏的显示状态
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("main-content");

    // 判断侧边栏是否已经展开
    if (sidebar.style.width === "250px") {
        // 隐藏侧边栏
        sidebar.style.width = "0";
        mainContent.style.marginLeft = "0";
    } else {
        // 展开侧边栏
        sidebar.style.width = "250px";
        mainContent.style.marginLeft = "250px";
    }
}
