import { useState, useEffect } from "react";

const useForm = (callback, validate, setUser, setEmail) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const userApi = "http://127.0.0.1:8000/api/register/";

  const postApi = (userInp) => {
    var e = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInp),
    };
    fetch(userApi, e)
      .then((res) => {
        if(res.ok) {
          res.json()
          setUser(values.username)
          setEmail(values.email)
          callback()
        }else{
          alert("Tên đăng nhập đã tồn tại")
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      var [a, b, c] = [values.username, values.email, values.password];
      var userInp = {
        username: a,
        email: b,
        password: c,
      };
      console.log(userInp); // nhận được kết quả
      postApi(userInp);
      // setTimeout(() => {
      //     navigate('/home', { replace: true });
      //   }, 1000);
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
