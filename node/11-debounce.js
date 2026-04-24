const fetchData = async (query) => {
  const res = await fetch(`/api/search?q=${query}`);
  const data = await res.json();
  console.log(data);
};

const debouncedFetch = debounce(fetchData, 500);

// simulate input
input.addEventListener('input', (e) => {
  debouncedFetch(e.target.value);
});
