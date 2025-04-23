const bar = document.querySelector('#bar');
const dropzone = document.querySelector('#dropzone');
const fileInput = document.querySelector('#input');
const uploading = document.querySelector('#syncing');
const done = document.querySelector('#done');
const uploadBtn = document.querySelector('#upload-btn');
const uploadIcon = document.querySelector('#upload');
const fileName = document.querySelector('#filename');

dropzone.addEventListener('dragover', dragOver);
dropzone.addEventListener('dragleave', dragLeave);
dropzone.addEventListener('drop', setFile);
fileInput.addEventListener('change', setFile);
uploadBtn.addEventListener('click', uploadFile);

let file, isUploadPerformed = false;

function dragOver(e) {
    e.preventDefault();
    dropzone.classList.add('is-dragover');
}

function dragLeave(e) {
    e.preventDefault();
    dropzone.classList.remove('is-dragover');
}

function setFile(e) {
    e.preventDefault();

    if (e.type === 'drop') {
        if (e.dataTransfer.items && e.dataTransfer.items[0].kind === 'file') {
            file = e.dataTransfer.items[0].getAsFile();
        } else {
            file = e.dataTransfer.files[0];
        }
    } else {
        file = e.target.files[0];
    }

    if (file) {
        dropzone.classList.remove('is-dragover');
        uploadIcon.style.display = 'none';
        fileName.style.display = 'block';
        fileName.textContent = file.name;
    }
}

function uploadFile(e) {
    if (file && !isUploadPerformed) {
        isUploadPerformed = true;
        fileName.style.display = 'none';
        dropzone.style.border = 'none';
        uploadBtn.textContent = 'Uploading...';
        bar.classList.add('active');
        uploading.classList.add('active');

        setTimeout(() => {
            uploading.classList.remove('active');
            done.classList.add('active');
            uploadBtn.textContent = 'Done';
        }, 4000);
    }
}
