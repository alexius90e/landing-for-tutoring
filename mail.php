<?php
// Куда отправлять письмо
$to = "example@mail.com"; 

// Получаем данные из формы
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$agreement = isset($_POST['agreement']) ? "Согласен" : "Не согласен";

// Тема и текст письма
$subject = "Новая заявка с формы";
$message = "ФИО: $name\nТелефон: $phone\nСогласие: $agreement";

// Заголовки
$headers = "From: no-reply@yourdomain.com\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Отправка
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["status" => "success", "message" => "Письмо отправлено"]);
} else {
    echo json_encode(["status" => "error", "message" => "Ошибка отправки"]);
}
