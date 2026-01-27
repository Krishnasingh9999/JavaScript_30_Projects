const inputs = document.querySelectorAll(".container input");

const handleUpdate = (e) =>{
  const el = e.target;
  const suffix = el.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${el.name}`, el.value +suffix);
}

inputs.forEach(input => {
  input.addEventListener('input', handleUpdate);
});
