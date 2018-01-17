export const sendDataToApi = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(formData);

      // For validation page
      if (formData.myName && 'Hank' === formData.myName) {
        reject({
          myName: 'You don\'t want to get into that'
        })
      }

      // ... do stuff;

      resolve();
    }, 1000);
  })
};

export default sendDataToApi;
