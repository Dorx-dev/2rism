/**
* Получение количества комментариев и их вывод
*/
function updateCommentCount() {
    var disqusShortname = '2rism-2'; // Замените на свой Shortname Disqus
    var identifier = 'https://2rism-2.disqus.com/embed.js'; // Замените на идентификатор вашей страницы

    // Запрос к API Disqus для получения количества комментариев
    var apiUrl = 'https://disqus.com/api/3.0/forums/' + disqusShortname + '/threads/list.json?thread:ident=' + identifier;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Вывод количества комментариев
            var commentCount = data.response[0].posts;
            document.getElementById('comment-count').innerText = 'Количество комментариев: ' + commentCount;
        })
        .catch(error => console.error('Ошибка получения данных Disqus:', error));
}

// Вызов функции после загрузки комментариев Disqus
if (window.DISQUS) {
    window.DISQUS.reset({
        reload: true,
        config: function () {
            this.callbacks.onNewComment = [function () {
                // Обновление количества комментариев при добавлении нового комментария
                updateCommentCount();
            }];
        }
    });
}

// Обновление количества комментариев при загрузке страницы
window.onload = function () {
    updateCommentCount();
};