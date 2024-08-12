import { appFirebase } from './fb';

const downloadFile = () => {
  const storage = appFirebase.storage();
  const storageRef = storage.ref();
  const fileRef = storageRef.child('Jose enrique mendo huapaya - Curriculum vitae.pdf');
  fileRef
    .getDownloadURL()
    .then((url) => {
      window.open(url, '_blank');
    })
    .catch((error) => {
      console.error('Error al obtener URL:', error);
    });
};

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Error al copiar el texto:', err);
  }
};

function openEmail(email) {
  const emailInstance = `mailto:${email}`;
  window.location.href = emailInstance;
}
export { downloadFile, copyText, openEmail };
