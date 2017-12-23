export const sendDataToApi = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(formData);

      // For validation page
      if (formData.email && 'asd@asd.pl' === formData.email) {
        reject({
          email: 'This is fake'
        })
      }

      // ... do stuff;

      resolve();
    }, 2000);
  })
};

export default sendDataToApi;
