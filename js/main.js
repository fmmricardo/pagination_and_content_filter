//Variables

$pagination = $('.pagination');
$studentList = $('.student-list li');

//Show the page number
const showPage=(page)=> {
  // first hide all students on the page
  $studentList.hide();
  //slice() method to show only 10 pages
  $studentList.slice((page * 10) - 10, page * 10).show();
};

const appendPageLinks= ()=>{
  // determine how many pages for this student list
  const totalPages = Math.ceil($studentList.length / 10);
  // create a page link section
  $pagination.append('<ul><ul>');
  // “for” every page
  for (let i = 1; i <= totalPages; i++) {
    // add a page link to the page link section
    $pagination.children('ul').append('<li><a href="#">' + i + '</a></li>');
  }
  $pagination.find('ul li:first a').addClass('active');
};

// append our new page link section to the site
const loadLink = (link) => {
  // remove the old page link section from the site
  $('.pagination a[class="active"]').removeClass('active');
  // add a page link to the page link section
  link.addClass('active');
  //call the function showPage and pass the link.text
  showPage(link.text());
};

//initialize pagination
showPage(1);
appendPageLinks();
