function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0]; // 获取选中的文件

    if (file) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://47.243.239.246:443/wangzhan/templates/upload', true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log('File uploaded successfully');
            } else {
                console.error('File upload failed');
            }
        };

        var formData = new FormData();
        formData.append('file', fileInput.files[0]);

        xhr.send(formData);
    } else {
        console.log('No file selected');
        alert('Please select a file to upload.');
    }
}
