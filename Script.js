// Search functionality (basic example)
document.getElementById('searchBtn').addEventListener('click', function() {
  const query = document.getElementById('search').value;
  alert(`You searched for: ${query}`);
  // You can expand this to fetch lyrics from an API or filter a list
});