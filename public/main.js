const multer = document.forms.multerForm;

multerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log("eeevent");
    const formData = new FormData(event.target);
    const { data }  = await axios.post('./multer', formData);
    console.log('response'. data);
});