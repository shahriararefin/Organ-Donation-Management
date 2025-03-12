document.getElementById("upload-btn").addEventListener("click", function() {
    const fileInput = document.getElementById("file-upload");
    if (fileInput.files.length > 0) {
        alert("File " + fileInput.files[0].name + " uploaded successfully!");
    } else {
        alert("Please select a file before uploading.");
    }
});
