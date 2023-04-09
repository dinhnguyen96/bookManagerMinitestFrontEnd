function getAllData()
{
    // goi ajax
    $.ajax({

        // Loại phương thức
        type: "GET",
        //tên API
        url: "http://localhost:8080/book/list",
        //xử lý khi thành công
        // Hiển thị danh sách customer
        success: function (data){
            let content ="";
            if (data !== undefined)
            {
                for (let i = 0; i < data.length; i++)
                {
                    content += "<tr>"+getBook(data[i])+"</tr>" ;
                }
            }
            document.getElementById('bookList').innerHTML = content;
        }
    });
}
function getBook(book)
{
    return `<td>${book.id}</td><td >${book.bookName}</td><td >${book.authorName}</td> <td >${book.bookPrice}</td>`+
        `<td><a href="" onclick="infoBook(${book.id})">View</a></td>`+
        `<td><a href="" onclick="deleteBook(${book.id})">Delete</a></td>`;
}

function addNewBook() {
    //lay du lieu
    let id = $('#id').val();
    let bookName = $('#bookName').val();
    let authorName = $('#authorName').val();
    let bookPrice = $('#bookPrice').val();
    let createBook = {
        "id" : id,
        "bookName": bookName,
        "authorName": authorName,
        "bookPrice": bookPrice
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(createBook),
        //tên API
        url: "http://localhost:8080/book/createBook",
        //xử lý khi thành công
        success: getAllData

    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}

function deleteBook(data)
{
    if (confirm('Are you sure you want to delete this?')) {
        // goi ajax
        $.ajax({
            type: "DELETE",
            //tên API
            url: `http://localhost:8080/book/${data}`,
            //xử lý khi thành công

            success:getAllData

        });
        //chặn sự kiện mặc định của thẻ
        event.preventDefault();
    }
}
function updateBook() {
    //lay du lieu
    let id = $('#id').val();
    let bookName = $('#bookName').val();
    let authorName = $('#authorName').val();
    let bookPrice = $('#bookPrice').val();
    let updateBook = {
        "id" : id,
        "bookName": bookName,
        "authorName": authorName,
        "bookPrice": bookPrice
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(updateBook),
        //tên API
        url: "http://localhost:8080/book/updateBook/"+id,
        //xử lý khi thành công
        success: getAllData

    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}
function infoBook(id) {
    // goi ajax
    $.ajax({

        // Loại phương thức
        type: "GET",
        //tên API

        url: "http://localhost:8080/book/information/" + id,


        //xử lý khi thành công
        // Hiển thị thông tin book
        success: function (data)
        {
            $('#id').val(id);
            $('#bookName').val(data.bookName);
            $('#authorName').val(data.authorName);
            $('#bookPrice').val(data.bookPrice);
        }
    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}
function infoTotalMoneyBook()
{
    // goi ajax
    $.ajax({

        // Loại phương thức
        type: "GET",
        //tên API

        url: "http://localhost:8080/book/watchTotalMoney",


        //xử lý khi thành công
        // Hiển thị thông tin book
        success: function (data)
        {
            $('#totalMoney').html(data);
        }
    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();

}

