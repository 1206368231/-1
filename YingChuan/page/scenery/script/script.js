
function showMap(wrapper, mapUrl) {
    const img = wrapper.querySelector('img');
    const iframe = wrapper.querySelector('iframe');

    // 隐藏图片并显示地图
    img.style.display = 'none';
    iframe.src = mapUrl;
    iframe.style.display = 'block';
}

function hideMap(wrapper) {
    const img = wrapper.querySelector('img');
    const iframe = wrapper.querySelector('iframe');

    // 恢复图片并隐藏地图
    img.style.display = 'block';
    iframe.style.display = 'none';
    iframe.src = ''; // 清空 iframe 的 src，节约性能
}
