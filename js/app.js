//DOM elements

const pagination = $('div.pagination');
const studentsList = $('.student-item');
// total number of items per page = 10
const pageSize = 10;
// The Math.ceil() function returns the smallest integer greater than or equal to a given number.
let pageCount = Math.ceil(studentsList.length / pageSize);

//show content base on page number
// slice method studentsList.slice((page - 1) * 10, (page * 10)).show();

 function showPage(pageNumber, studentsArray) {
  // first hide all students on the page
    studentsList.hide();
   // Then loop through all students in our student list
      for(let i=0; i < studentsArray.length; i+=1){
         // if student should be on this page number
         let pageNumber;
        if(studentsArray== studentsList){
          $(studentsList[i]).show();
        }else{

          $(studentsList[studentsarray[i]]).show();
        }
      }
  }
  showPage(pageNumber,studentsArray);

// add pagination div to the page

//$('.pageDvi').append('<div class="pagination"></div>');

function appendPageLinks(studentsList){
  // determine how many pages for this student list
  let pageCount = Math.ceil(studentsList.length / pageSize);
  // create a page Ul section
  let ul = $("<ul></ul>");
  // create a page link section
  let listLi = $('<li><a href="#">'+i+'</a></li>');
    // create a page Ul section
  let pageDiv = ('<div class="pagination"></div>');
  // “for” every page
    for (let i = 0; i <= pageCount; i++) {
      // add a page link to the page link section
      $('pageDvi').append('<div class="pagination"></div>');
      $(ul).append(pagination);
      $(pagination).append(ul);
    }
    $('.linkPage').click(function(){
        let pageNumber = event.target.textContent;
        showPage(pageNumber,studentsArray);

    })

  };  // remove the old page link section from the site
  // append our new page link section to the site


  // define what happens when you click a link
  // Use the showPage function to display the page for the link clicked
  // mark that link as “active”
