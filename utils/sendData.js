const { $csrfFetch } = useNuxtApp();

export default (name, phone, email) => {
  $csrfFetch("/api/contact", {
    method: "POST",
    body: {
      from:name,
      phone: phone,
      email: email ,
    },
  })
    .then(() => {
      emit("submit");
    })
    .catch((e) => {
      emit("error");
      console.log(e);
    });
};
