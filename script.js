<script>
    const teacherLogin = "teacher";
    const teacherPassword = "password";

    function login() {
        const enteredLogin = prompt("Введите логин");
        const enteredPassword = prompt("Введите пароль");

        if (enteredLogin === teacherLogin && enteredPassword === teacherPassword) {
            window.location.href = "teacher.html";
        } else {
            alert("Неправильный логин или пароль");
        }
    }
</script>
