// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]

const getTheTitles = function(books) {
    return books.map((item)=>{
        return item['title'];
    })
};

// console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
