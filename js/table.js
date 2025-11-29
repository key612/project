// 新增数据函数
function addRow() {
    var table = document.getElementById("table");
    // console.log(table);

    // 获取插入位置
    var len = table.rows.length;
    //console.log(len);
    // 插入新行

    var newRow = table.insertRow(len);
    // console.log(newRow);

    // 插入新列
    var name = newRow.insertCell(0);
    var phone = newRow.insertCell(1);
    var option = newRow.insertCell(2);
    
    // 修改节点文本内容
    name.innerHTML = "未命名";
    phone.innerHTML = "无联系方式";
    option.innerHTML ="<button onclick='editRow(this)'>编辑</button><button onclick = 'deleteRow(this)' >删除</button>";
}

// 删除数据函数
function deleteRow(button) {
    // console.log(button);
    var row = button.parentNode.parentNode;
    // console.log(row);
    row.parentNode.removeChild(row);
}

// 编辑数据函数
function editRow(button) {
    // console.log(button);   
    var row = button.parentNode.parentNode;
    // console.log(row);
    var nameCell = row.cells[0];
    var phoneCell = row.cells[1];

    var newName = prompt("请输入新的姓名：", nameCell.innerHTML);
    var newPhone = prompt("请输入新的联系方式：", phoneCell.innerHTML);

    if (newName !== null) {
        nameCell.innerHTML = newName;
    }
    if (newPhone !== null) {
        phoneCell.innerHTML = newPhone;
    }
}