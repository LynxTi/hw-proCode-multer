const multer = document.forms.multerForm;

multerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const rezalt = await axios.post('./multer', formData);
    console.log('response', rezalt);
});