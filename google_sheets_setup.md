# Инструкция по интеграции с Google Таблицами / Google Sheets Integration Guide

Этот проект настроен для автоматической отправки лидов (подписок на рассылку и сообщений из контактной формы) в вашу Google Таблицу. Для этого используется бесплатный и надежный инструмент **Google Apps Script**.

Выполните следующие шаги, чтобы подключить вашу таблицу к сайту:

---

## Шаг 1. Откройте Google Таблицу и редактор скриптов
1. Откройте вашу таблицу в браузере:
   [https://docs.google.com/spreadsheets/d/1AT3qswzeW6gMiytaHUpTOueayCrMM0l_nbhBsCP2If0](https://docs.google.com/spreadsheets/d/1AT3qswzeW6gMiytaHUpTOueayCrMM0l_nbhBsCP2If0/edit?usp=sharing)
2. В верхнем меню нажмите **Расширения** (Extensions) → **Apps Script**.

---

## Шаг 2. Добавьте код обработчика
1. В левой панели редактора выберите файл **Код.gs** (Code.gs).
2. Полностью удалите весь код по умолчанию и вставьте вместо него следующий скрипт:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Автоматическая инициализация заголовков, если таблица пуста
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Дата и Время", "Тип лида", "Email", "Имя", "Сообщение", "Источник", "Язык"]);
      // Красивое форматирование заголовков (жирный шрифт, золотой фон, темный текст)
      sheet.getRange(1, 1, 1, 7)
           .setFontWeight("bold")
           .setBackground("#E5B236")
           .setFontColor("#120e08")
           .setHorizontalAlignment("center");
      sheet.setRowHeight(1, 24);
    }
    
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date();
    var type = data.type || "unknown"; // "subscription" или "contact"
    var email = data.email || "";
    var name = data.name || "";
    var message = data.message || "";
    var referrer = data.referrer || window.location.href;
    var language = data.language || "";
    
    sheet.appendRow([timestamp, type, email, name, message, referrer, language]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type"
      });
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type"
      });
  }
}

// Поддержка предварительных CORS-запросов (CORS preflight)
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
}
```

3. Нажмите иконку **Сохранить** (дискету) на панели инструментов редактора (или `Ctrl+S` / `Cmd+S`).

---

## Шаг 3. Опубликуйте скрипт как Веб-приложение (Web App)
1. В верхнем правом углу нажмите кнопку **Начать развертывание** (Deploy) → **Новое развертывание** (New deployment).
2. Нажмите на иконку шестерёнки слева от «Выберите тип» и выберите **Веб-приложение** (Web app).
3. Заполните настройки:
   - **Описание** (Description): `Van Lax Lead Webhook`
   - **Запуск от имени** (Execute as): **Я** (ваша почта `...@gmail.com`)
   - **Кто имеет доступ** (Who has access): **Все** (Anyone) — *это важно, чтобы посетители сайта могли отправлять формы без авторизации в Google.*
4. Нажмите кнопку **Развернуть** (Deploy) снизу.
5. Google попросит предоставить разрешения. Нажмите **Предоставить доступ** (Authorize access), выберите ваш Google-аккаунт, затем нажмите **Дополнительные настройки** (Advanced) → **Перейти к проекту (небезопасно)** (Go to Untitled project) → **Разрешить** (Allow).
6. После этого откроется окно с готовым адресом. Найдите поле **URL-адрес веб-приложения** (Web app URL) и скопируйте его (адрес должен заканчиваться на `/exec`).

---

## Шаг 4. Укажите полученный URL на сайте
1. Откройте файл проекта [script.js](file:///Users/johnsky/Documents/van-lax/script.js).
2. В самом верху файла в константу `googleAppsScriptUrl` вставьте ваш скопированный адрес:

```javascript
const VANLAX_CONFIG = {
  googleAppsScriptUrl: "ВСТАВЬТЕ_ВАШ_URL_СЮДА"
};
```

3. Сохраните файл и протестируйте отправку форм! Таблица заполнится автоматически.
