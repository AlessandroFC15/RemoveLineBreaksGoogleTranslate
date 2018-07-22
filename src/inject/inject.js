function removeLineBreaks() {
	var textArea = document.getElementById('source');

	textArea.value = textArea.value.replace(/\n/g, " ");
}

var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

		var divBotoes = document.getElementById('gt-lang-left');

		var botaoRemoveLineBreak = document.createElement('div');
        botaoRemoveLineBreak.id = 'gt-swap';
        botaoRemoveLineBreak.className = "jfk-button-standard jfk-button-narrow jfk-button trans-swap-button je";
        botaoRemoveLineBreak.style = "user-select: none;";
        botaoRemoveLineBreak.onclick = removeLineBreaks;

        var icon = document.createElement('img');
        icon.src = "https://cdn0.iconfinder.com/data/icons/tab-bar-ios-and-wp8-vector-icons/48/align_justify-512.png";
        icon.style = 'height: 30px;';

        botaoRemoveLineBreak.appendChild(icon);

		console.log('divBotoes');
		console.log(divBotoes);

		divBotoes.appendChild(botaoRemoveLineBreak)
    }
}, 10);