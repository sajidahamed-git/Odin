const library = [];

function Book(name, author, pagenos) {
  //book object constructor
  this.name = name;
  this.author = author;
  this.pagenos = pagenos;
}
const popup = document.querySelector(".popup");

const button = document.querySelector(".button"); //add button
button.addEventListener("click", () => {
  //   console.log("hello");
  popup.showModal();
});

const close = document.querySelector(".close"); //close button
close.addEventListener("click", (event) => {
  event.preventDefault();
  popup.close();
});

const form = document.querySelector(".form"); //why is this here

const submitbutton = document.querySelector(".submitbutton");

submitbutton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("bookname").value;
  const author = document.getElementById("authorname").value;
  const pagenos = document.getElementById("pagenos").value;

  if (name === '') {
    alert('Enter Book name')
    return;
  }
  if (author === '') {
    alert('Enter Author Name')
    return;
  }
  if (pagenos === '') {
    alert('Enter the no. of pages')
  }





  addbooktolibrary(name, author, pagenos); //creates the object using the constructo and adds it
  //library array
  popup.close();
  form.reset();
});

function addbooktolibrary(name, author, pagenos) {
  const newbook = new Book(name, author, pagenos); //creating the object
  library.push(newbook); //adding to the array
  //render(library)
  console.log(library);
  createlement(library);
}

//creating an element for the last entry in the library array
  function createlement(library) {  
    const lastbook = library[library.length - 1];
    const newBookcard = document.createElement("div"); //outer div for all book cards
    newBookcard.classList.add("bookcard");

    const title = document.createElement("h3"); //book name
    title.textContent = lastbook.name;
    
    const author = document.createElement("p"); //author name
    author.textContent = `Author: ${lastbook.author}`;
    
    const pages = document.createElement("p"); //pagenos
    pages.textContent = `Pages: ${lastbook.pagenos}`;
    
    const togglecontainer = document.createElement("div"); //outer div for read toggle
    togglecontainer.classList.add("toggle-container");
    
    const label = document.createElement("label"); //create and add to div read toggle
    label.textContent = "Mark as Read";
    label.classList.add("toggle-read");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const deletebutton = document.createElement('button')
    deletebutton.textContent = 'Remove book'
    deletebutton.classList.add('delbtn')
    
    
    newBookcard.append(title); //append the title , author and pagano to new bookcard
    newBookcard.append(author);
    newBookcard.append(pages);
    
    togglecontainer.append(label); // appends the mark as read and check box to toggle container
    togglecontainer.append(checkbox);


    
    newBookcard.append(togglecontainer); //append toggle container to the main div for books
    
    newBookcard.append(deletebutton)
    
    //checks the mark as read checkbox and changes the background color of cards
    checkbox.addEventListener('change',()=>{
      if (checkbox.checked) {
        newBookcard.classList.add('bookreadcolor')
        console.log('test');
      }
      else{
        newBookcard.classList.remove('bookreadcolor')
        console.log('unread');
      }
    })
    
  //removes the card from dom but still exists in library array
    deletebutton.addEventListener('click',()=>{
      newBookcard.remove()
    })
    
    
    
    
    
    
    
    
    render(newBookcard);
  }

function render(element) {
  const cardarea = document.querySelector(".cardarea");
  cardarea.append(element);
}

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const name = document.getElementById("bookname").value;
//   const author = document.getElementById("authorname").value;
//   const pagenos = document.getElementById("pagenos").value;
//   //   console.log(bookname, authorname, pagenos);
//   const book = {
//     name,
//     author,
//     pagenos,
//   };
//   const newbookhtml = `<div class="bookcard">
//         <h3>${book.name}</h3>
//         <p>Author:${book.author}</p>
//         <p>Pages: ${book.pagenos}</p>
//             <div class="toggle-container">
//                 <label for="toggle-read" class="toggle-btn">Mark as Read:</label>
//                 <input type="checkbox" id="toggle-read" />
//             </div>
//     </div>`;

//   const cardarea = document.querySelector(".cardarea");
//   const html = cardarea.innerHTML;
//   cardarea.innerHTML = html + newbookhtml;
//   popup.close();
//   form.reset()
// });

// function render(book){
//   const lastbook = library[library.length -1]
//   console.log(lastbook);
//   console.log(book);
//     const newbookhtml =
//     `<div class="bookcard">
//         <h3>${lastbook.name}</h3>
//         <p>Author:${lastbook.author}</p>
//         <p>Pages: ${lastbook.pagenos}</p>
//             <div class="toggle-container">
//                 <label for="toggle-read" class="toggle-btn">Mark as Read:</label>
//                 <input type="checkbox" id="toggle-read" />
//             </div>
//     </div>`;
//  document.querySelector('.cardarea').innerHTML += newbookhtml;

//   popup.close()

//   // console.log(array);
// }
