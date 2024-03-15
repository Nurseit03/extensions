document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", function () {
    const passwordInput = document.getElementById("loginInput");
    const password = document.getElementById("loginInput").value;

    const truePsw = 'nurseit';
    
    if(password !== truePsw){
        passwordInput.style.borderColor = 'red';
    } else {
        // Скрываем login.html
        const loginIframe = window.parent.document.getElementById('loginPage');
        loginIframe.style.display = 'none';

        // Показываем finger.html
        const fingerIframe = window.parent.document.getElementById('fingerPage');
        fingerIframe.style.display = 'block';
    }

    // Имитируем запрос, например, с помощью fetch
    // fetch("/имитация_запроса", {
    //   method: "POST", // Метод запроса
    //   body: JSON.stringify({ password: password }), // Передаем пароль в виде JSON
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // Если запрос выполнен успешно, обработайте ответ здесь
    //       console.log("Запрос выполнен успешно!");
    //     } else {
    //       // В случае ошибки, обработайте её здесь
    //       console.error("Ошибка выполнения запроса:", response.statusText);
    //     }
    //   })
    //   .catch((error) => {
    //     // Обрабатываем ошибки при выполнении запроса
    //     console.error("Ошибка выполнения запроса:", error);
    //   });
  });
});
