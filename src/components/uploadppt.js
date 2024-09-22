// Import Firebase SDK for storage
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD5z6XHv_FCFqyE1qKpUapHVGyZzF9DwXs",
    authDomain: "ppt-upload-3d15f.firebaseapp.com",
    projectId: "ppt-upload-3d15f",
    storageBucket: "ppt-upload-3d15f.appspot.com",
    messagingSenderId: "36096535372",
    appId: "1:36096535372:web:f4af409e6bafab4a843de9",
    measurementId: "G-691YWEN4PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function UploadFile() {

    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please choose a file first!');
        return;
    }

    const storageRef = ref(storage, 'uploads/' + file.name);
    const uploadTask = uploadBytes(storageRef, file);

    uploadTask.then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
            document.getElementById('status').textContent = 'File uploaded successfully! Download URL: ' + downloadURL;
        });
    }).catch(error => {
        console.error('Upload failed:', error);
        document.getElementById('status').textContent = 'Upload failed: ' + error.message;
    });

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById('progress').style.width = progress + '%';
        },
        (error) => {
            console.error('Upload failed:', error);
            document.getElementById('status').textContent = 'Upload failed: ' + error.message;
        }
    );
}


export default UploadFile;
