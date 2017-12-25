export const sendDataToApi = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(formData);

      // For validation page
      if (formData.myName && 'Hank' === formData.myName) {
        reject({
          myName: 'You don\'t wan to get into that'
        })
      }

      // ... do stuff;

      resolve();
    }, 2000);
  })
};

export default sendDataToApi;
