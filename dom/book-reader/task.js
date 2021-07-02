const font_size = document.getElementsByClassName('font-size');
const book = document.getElementsByClassName('book').item(0);

const color = document.querySelectorAll('div.book__control_color a');
const background = document.querySelectorAll('div.book__control_background a');

for (let i = 0; i < font_size.length; i++) {
    font_size.item(i).onclick = function(){return false};
    color.item(i).onclick = function(){return false};
    background.item(i).onclick = function(){return false};

    font_size.item(i).addEventListener('click', function () {
        if (!(font_size.item(i).classList.contains('font-size_active'))) {
            for (let j = 0; j < font_size.length; j++) {
                if (font_size.item(j).classList.contains('font-size_active')) {
                    font_size.item(j).classList.remove('font-size_active');
                }
            }
            font_size.item(i).classList.add('font-size_active');
        }

        if (book.classList.contains('book_fs-big')) {
            book.classList.remove('book_fs-big');
        }

        if (book.classList.contains('book_fs-small')) {
            book.classList.remove('book_fs-small');
        }

        if (font_size.item(i).dataset.size) {
            book.classList.add('book_fs-' + font_size.item(i).dataset.size);
        }  
    });

    color.item(i).addEventListener('click', function () {
        if (!(color.item(i).classList.contains('color_active'))) {
            for (let j = 0; j < color.length; j++) {
                if (color.item(j).classList.contains('color_active')) {
                    color.item(j).classList.remove('color_active');
                }
            }
            color.item(i).classList.add('color_active');
        }

       if (book.classList.contains('book_color-gray')) {
        book.classList.remove('book_color-gray');
       }

       if (book.classList.contains('book_color-whitesmoke')) {
        book.classList.remove('book_color-whitesmoke');
       }

       if (book.classList.contains('book_color-black')) {
        book.classList.remove('book_color-black');
       }
        
        book.classList.add('book_color-' + color.item(i).dataset.textColor);  
    });

    background.item(i).addEventListener('click', function () {
        if (!(background.item(i).classList.contains('color_active'))) {
            for (let j = 0; j < background.length; j++) {
                if (background.item(j).classList.contains('color_active')) {
                    background.item(j).classList.remove('color_active');
                }
            }
            background.item(i).classList.add('color_active');
        }

        if (book.classList.contains('book_bg-gray')) {
            book.classList.remove('book_bg-gray');
        }
    
        if (book.classList.contains('book_bg-black')) {
        book.classList.remove('book_bg-black');
        }

        if (book.classList.contains('book_bg-white')) {
        book.classList.remove('book_bg-white');
        }

        book.classList.add('book_bg-' + background.item(i).dataset.bgColor);
    });
}